import type { Course } from "@/data/courses";

export default function EnrollmentCard({ course }: { course: Course }) {
    
    return (
        <div className="bg-slate-950 px-6 py-10">
            <button className="w-full rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
                Enroll Now
            </button>
        </div>
    );
}