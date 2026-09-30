

import type { PlannerItem } from "@/types/planner";
import { useState, useRef, useEffect } from "react";
import { Box, Typography } from "@mui/material";

type StudyCalendarProps = {
  plannerItems: PlannerItem[];
};
const HOUR_HEIGHT = 60;
const INITIAL_HOUR = 7;

export default function StudyCalendar({plannerItems}: StudyCalendarProps) {
    const [currentDate, setCurrentDate] = useState(new Date());
    const calendarRef = useRef<HTMLElement | null>(null);

    function getCurrentWeekDates(date: Date): Date[] {
        const week = [];
        const startOfWeek = new Date(date);

        /**
         * Get the dates for the current week.
         * The week starts on Monday and ends on Sunday.
         * date.getDate() returns the day of the month (1-31) for the specified date according to local time.
         * date.getDay() returns the day of the week (0-6) for the specified date according to local time.
         * 0 represents Sunday, 1 represents Monday, and so on.
         * To get the start of the week (Monday), we subtract the current day of the week from the current date and add 1.
         * This ensures that we always get the Monday of the current week.
         * 
         * For example, if today is Wednesday (date.getDay() === 3), we subtract 3 from today's date and add 1 to get Monday's date.
         * If today is Sunday (date.getDay() === 0), we subtract 0 from today's date and add 1 to get Monday's date.
         * This way, we can always get the correct start of the week regardless of what day it is today.
         * The loop then iterates 7 times to get all days of the week starting from Monday to Sunday.
         */

        startOfWeek.setDate(date.getDate() - date.getDay() + 1); // Adjust to get the start of the week (Monday)
        for (let i = 0; i < 7; i++) {
            const day = new Date(startOfWeek);
            day.setDate(startOfWeek.getDate() + i);
            week.push(day);
        }
        return week;
    }

    // Create an array of hours from 0 to 23 for the time slots in the calendar
    const hours = Array.from({ length: 24}, (_, index) => ({
        value: index,
        label: `${String(index).padStart(2, "0")}:00`,
    }))

    const week = getCurrentWeekDates(currentDate);

    useEffect(() => {
        if (calendarRef.current) {
            calendarRef.current.scrollTop = INITIAL_HOUR * HOUR_HEIGHT;
        }
    }, []);

    return (
        <Box>
            <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
                Study Calendar
            </Typography>
        
            {/* Scroll container */} 
            <Box ref={calendarRef} sx={{ height: 600, overflowY: "auto", overflowX: "auto", }} >
                <Box sx={{ 
                    display: "grid", 
                    gridTemplateColumns: "80px repeat(7, minmax(120px, 1fr))", 
                    minWidth: 1000, 
                    borderTop: "1px solid #ccc", 
                    borderLeft: "1px solid #ccc", }} > 
                    
                    {/* Empty corner */} 
                    <Box sx={{ height: 50, borderRight: "1px solid #ccc", borderBottom: "1px solid #ccc", }} />
                    {/* Day headers */} 
                    {week.map((day) => ( 
                        <Box key={day.toDateString()}
                        sx={{ 
                            height: 50, 
                            p: 1, 
                            borderRight: "1px solid #ccc", 
                            borderBottom: "1px solid #ccc", 
                            position: "sticky", 
                            top: 0, 
                            zIndex: 2, 
                            backgroundColor: "background.paper", }} 
                            > 
                            <Typography variant="subtitle2" sx={{ fontWeight: 700 }} > 
                                {day.toLocaleDateString( "en-US", { weekday: "short", month: "short", day: "numeric", } )} 
                            </Typography>
                        </Box> ))} 
                    
                        {/* Time rows */} 
                        {hours.map((hour) => ( 
                        <Box key={hour.value} sx={{ display: "contents", }} > 
                            {/* Time */} 
                            <Box sx={{ 
                                height: HOUR_HEIGHT, 
                                p: 1, 
                                textAlign: "right", 
                                borderRight: "1px solid #ccc", 
                                borderBottom: "1px solid #ccc", 
                                backgroundColor: "background.paper", 
                                }} > 
                                <Typography variant="caption"> {hour.label} </Typography> 
                            </Box> 
                            
                            {/* 7 day cells */}
                            {week.map((day) => ( 
                            <Box key={`${day.toDateString()}-${hour.value}`} 
                            sx={{ height: HOUR_HEIGHT, borderRight: "1px solid #ccc", borderBottom: "1px solid #ccc", }} />
                            ))} 
                            </Box> ))} 
                        </Box>
            </Box>
        </Box>
    )
}