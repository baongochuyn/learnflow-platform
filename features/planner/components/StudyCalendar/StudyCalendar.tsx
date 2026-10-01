
import type { PlannerItem } from "@/types/planner";
import { useState, useRef, useEffect } from "react";
import { Box, Typography } from "@mui/material";

import  PlannerCard from "@/features/planner/components/PlannerCard/PlannerCard";

type StudyCalendarProps = {
  plannerItems: PlannerItem[];
};

const HOUR_HEIGHT = 100;
const INITIAL_HOUR = 7;
const HEADER_HEIGHT = 70;
const TIME_COLUMN_WIDTH = 72;
const MIN_DAY_WIDTH = 120;

export default function StudyCalendar({plannerItems}: StudyCalendarProps) {
    const [currentDate, setCurrentDate] = useState(new Date());
    const calendarRef = useRef<HTMLDivElement | null>(null);

    console.log("Planner Items in StudyCalendar:", plannerItems);
     /**
     * Get Monday -> Sunday of the current week.
     */
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

    /**
     * Convert Date -> YYYY-MM-DD.
     *
     * We use local time instead of toISOString()
     * to avoid timezone-related date shifting.
     */
    function formatDate(date: Date): string {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");

        return `${year}-${month}-${day}`;
    }

    /**
     * Convert "HH:mm" -> total minutes.
     *
     * Example:
     * "09:30" -> 570
     * "10:00" -> 600
     */
    function timeToMinutes(time: string): number {
        const [hours, minutes] = time.split(":").map(Number);

        return hours * 60 + minutes;
    }

    /**
     * Calculate PlannerItem top position.
     *
     * Example:
     * 10:00 -> 10 * 100 = 1000px
     * 09:30 -> 9.5 * 100 = 950px
     */
    function getItemTop(startTime: string): number {
        const startMinutes = timeToMinutes(startTime);

        return (startMinutes / 60) * HOUR_HEIGHT;
    }

    /**
     * Calculate PlannerItem height.
     *
     * Example:
     * 10:00 -> 12:00
     * duration = 120 minutes
     * height = 120 / 60 * 100 = 200px
     */
    function getItemHeight(
        startTime: string,
        endTime: string
    ): number {
        const startMinutes = timeToMinutes(startTime);
        const endMinutes = timeToMinutes(endTime);

        const durationMinutes = Math.max(
            endMinutes - startMinutes,
            0
        );

        return (durationMinutes / 60) * HOUR_HEIGHT;
    }

    /**
     * Format day for header.
     *
     * Example:
     * Mon
     * Oct 1
     */
    function getDayName(date: Date): string {
        return date.toLocaleDateString("en-US", {
            weekday: "short",
        });
    }

    function getDayDate(date: Date): string {
        return date.toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
        });
    }

    // Create an array of hours from 0 to 23 for the time slots in the calendar
    const hours = Array.from({ length: 24}, (_, index) => ({
        value: index,
        label: `${String(index).padStart(2, "0")}:00`,
    }))

    const week = getCurrentWeekDates(currentDate);
    const totalCalendarHeight = hours.length * HOUR_HEIGHT;

    useEffect(() => {
        if (calendarRef.current) {
            // show the calendar starting from 7 AM (INITIAL_HOUR) when the component mounts
            calendarRef.current.scrollTop = INITIAL_HOUR * HOUR_HEIGHT;
        }
    }, []);

    return (
        <Box>
            {/* Calendar title */}
            <Typography
                variant="h5"
                sx={{
                    fontWeight: 700,
                    mb: 1,
                }}
            >
                Study Calendar
            </Typography>

            {/* Scroll container */}
            <Box
                ref={calendarRef}
                sx={{
                    height: 600,
                    overflow: "auto",
                    border: "1px solid",
                    borderColor: "divider",
                }}
            >
                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: `${TIME_COLUMN_WIDTH}px repeat(7, minmax(${MIN_DAY_WIDTH}px, 1fr))`,
                        minWidth: 1000,
                    }}
                >
                    {/* =========================================
                        HEADER
                    ========================================== */}

                    {/* Top-left corner */}
                    <Box
                        sx={{
                            position: "sticky",
                            top: 0,
                            left: 0,
                            zIndex: 30,

                            height: HEADER_HEIGHT,

                            bgcolor: "background.paper",

                            borderRight: "1px solid",
                            borderBottom: "1px solid",
                            borderColor: "divider",
                        }}
                    />

                    {/* Day headers */}
                    {week.map((day) => (
                        <Box
                            key={day.toDateString()}
                            sx={{
                                position: "sticky",
                                top: 0,
                                zIndex: 20,

                                height: HEADER_HEIGHT,

                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",

                                px: 1.5,

                                bgcolor: "background.paper",

                                borderRight: "1px solid",
                                borderBottom: "1px solid",
                                borderColor: "divider",
                            }}
                        >
                            <Typography
                                variant="caption"
                                sx={{
                                    fontWeight: 700,
                                    color: "text.secondary",
                                    textTransform: "uppercase",
                                }}
                            >
                                {getDayName(day)}
                            </Typography>

                            <Typography
                                variant="body2"
                                sx={{
                                    fontWeight: 700,
                                }}
                            >
                                {getDayDate(day)}
                            </Typography>
                        </Box>
                    ))}

                    {/* =========================================
                        BODY - TIME COLUMN
                    ========================================== */}

                    <Box>
                        {hours.map((hour) => (
                            <Box
                                key={hour.value}
                                sx={{
                                    position: "relative",

                                    height: HOUR_HEIGHT,

                                    display: "flex",
                                    justifyContent: "flex-end",

                                    p: 1,

                                    bgcolor:
                                        "background.paper",

                                    borderRight: "1px solid",
                                    borderBottom: "1px solid",
                                    borderColor: "divider",
                                }}
                            >
                                <Typography
                                    variant="caption"
                                    sx={{
                                        color: "text.secondary",
                                    }}
                                >
                                    {hour.label}
                                </Typography>
                            </Box>
                        ))}
                    </Box>

                    {/* =========================================
                        BODY - DAY COLUMNS
                    ========================================== */}

                    {week.map((day) => {
                        const dateKey = formatDate(day);

                        const itemsForDay =
                            plannerItems.filter(
                                (item) =>
                                    item.date === dateKey
                            );

                        return (
                            <Box
                                key={dateKey}
                                sx={{
                                    position: "relative",
                                    height: totalCalendarHeight,
                                }}
                            >
                                {/* Hour grid */}
                                {hours.map((hour) => (
                                    <Box
                                        key={hour.value}
                                        sx={{
                                            height: HOUR_HEIGHT,

                                            borderRight:
                                                "1px solid",
                                            borderBottom:
                                                "1px solid",
                                            borderColor:
                                                "divider",
                                        }}
                                    />
                                ))}

                                {/* Planner items */}
                                {itemsForDay.map((item) => {
                                    const top =
                                        getItemTop(
                                            item.startTime
                                        );

                                    const height =
                                        getItemHeight(
                                            item.startTime,
                                            item.endTime
                                        );

                                    return (
                                        <PlannerCard
                                            key={item.id}
                                            item={item}
                                            sx={{
                                                top,
                                                height,
                                            }}
                                        />
                                    );
                                })}
                            </Box>
                        );
                    })}
                </Box>
            </Box>
        </Box>
    );
}