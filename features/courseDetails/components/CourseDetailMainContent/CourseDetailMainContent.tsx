import type { Course } from "@/data/courses";

export default function CourseDetailMainContent({ course }: { course: Course }) {
    return (
        <div className="bg-slate-950 px-6 py-10">
            <h2 className="text-2xl font-bold text-white">Course Details</h2>
            <p className="mt-2 text-slate-400">{course.description}</p>
            <div className="mt-4">
                <h3 className="text-xl font-semibold text-white">Learning Outcomes</h3>
                <ul className="mt-2 list-disc list-inside text-slate-400">
                    {course.learningOutcomes.map((outcome, index) => (
                        <li key={index}>{outcome}</li>
                    ))}
                </ul>
            </div>
            <div className="mt-4">
                <h3 className="text-xl font-semibold text-white">Schedule</h3>
                <ul className="mt-2 list-disc list-inside text-slate-400">
                    {course.schedule.map((item, index) => (
                        <li key={index}>{item.day}: {item.time}</li>
                    ))}
                </ul>
            </div>
            {course.location && (
                <div className="mt-4">
                    <h3 className="text-xl font-semibold text-white">Location</h3>
                    <p className="mt-2 text-slate-400">{course.location}</p>
                </div>
            )}
            <div className="mt-4">
                <h3 className="text-xl font-semibold text-white">Curriculum</h3>
                <p className="mt-2 text-slate-400">{course.curriculum}</p>
            </div>
            <div className="mt-4">
                <h3 className="text-xl font-semibold text-white">Target Audience</h3>
                <ul className="mt-2 list-disc list-inside text-slate-400">
                    {course.targetAudience.map((audience, index) => (
                        <li key={index}>{audience}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}