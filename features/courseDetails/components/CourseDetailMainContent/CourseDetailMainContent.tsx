import type { Course } from "@/types/courses";

export default function CourseDetailMainContent({ course }: { course: Course }) {
    return (
        <div className="bg-slate-950 px-6 py-10">
            <div className="mt-4">
                <h3 className="text-xl font-semibold text-white">What you'll learn?</h3>
                <ul className="mt-2 list-disc list-inside text-slate-400">
                    {course.learningOutcomes.map((outcome, index) => (
                        <li key={index}>{outcome}</li>
                    ))}
                </ul>
            </div>

            <div className="mt-4">
                <h3 className="text-xl font-semibold text-white">Learning Format</h3>
                <p className="mt-2 text-slate-400">{course.learningFormat}</p>
            </div>
            {
                course.learningFormat === "Video" && (
                    <div className="mt-4">
                        <h3 className="text-xl font-semibold text-white">Self-paced Learning</h3>
                    </div>
                )
            }
            {(course.learningFormat === "Offline" ||
                course.learningFormat === "Live") && (
                <div className="mt-4">
                    <h3 className="text-xl font-semibold text-white">Schedule</h3>
                    <ul className="mt-2 list-disc list-inside text-slate-400">
                        {course.schedule.map((item, index) => (
                            <li key={index}>{item.day}: {item.time}</li>
                        ))}
                    </ul>
                </div>
            )}
            {course.learningFormat === "Offline" && course.location && (
                <div className="mt-4">
                    <h3 className="text-xl font-semibold text-white">Location</h3>
                    <p className="mt-2 text-slate-400">{course.location}</p>
                </div>
            )}
            <div className="mt-4">
                <h3 className="text-xl font-semibold text-white">Learning Path</h3>
                <p className="mt-2 text-slate-400">{course.learningPath}</p>
            </div>
            <div className="mt-4">
                <h3 className="text-xl font-semibold text-white">Who this course is for?</h3>
                <ul className="mt-2 list-disc list-inside text-slate-400">
                    {course.targetAudience.map((audience, index) => (
                        <li key={index}>{audience}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}