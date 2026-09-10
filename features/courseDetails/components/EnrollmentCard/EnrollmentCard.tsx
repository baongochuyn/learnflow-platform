import type { Course } from "@/data/courses";
import {
  FaStar,
  FaUsers,
  FaClock,
} from "react-icons/fa";

export default function EnrollmentCard({ course }: { course: Course }) {
    
    return (
        <div className="rounded-lg border border-slate-800 bg-slate-900 p-6"> 
            {/* Price */} 
            <div className="mb-6">
                <p className="text-3xl font-bold text-white"> €{course.price} </p> 
            </div> 
            
            {/* Enrollment */} 
            <button className="mb-8 w-full rounded-md bg-blue-600 px-4 py-3 font-semibold text-white hover:bg-blue-700"> Enroll Now </button>
            
            {/* Course Information */} 
            <div> 
                <h2 className="mb-4 text-lg font-semibold text-white"> 
                    Course Information 
                </h2>
                <div className="space-y-4 text-sm"> 
                    <div className="flex items-center justify-between">
                        <span className="text-slate-400">Level</span>
                        <span className="font-medium text-white"> {course.level} </span> 
                    </div> 
                    <div className="flex items-center justify-between"> 
                        <span className="flex items-center gap-2 text-slate-400"> 
                            <FaClock /> Duration </span> 
                        <span className="font-medium text-white"> {course.duration.value}{" "} {course.duration.unit === "hours" ? "hours" : "days"} </span>
                    </div> 
                    <div className="flex items-center justify-between"> 
                        <span className="flex items-center gap-2 text-slate-400"> <FaUsers /> Students </span> 
                        <span className="font-medium text-white"> {course.studentCount} </span>
                    </div> 
                    <div className="flex items-center justify-between"> 
                        <span className="flex items-center gap-2 text-slate-400"> 
                            <FaStar className="text-yellow-400" /> Rating </span> 
                        <span className="font-medium text-white"> {course.rating} </span> 
                    </div> 
                </div> 
            </div> 
        </div>
    );
}