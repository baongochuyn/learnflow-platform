import type { Course } from "@/data/courses";

type Props = {
    course: Course;
};

export default function CourseDetailHeader({ course }: Props) {
    return (
        <header
            className="relative overflow-hidden rounded-lg bg-cover bg-center"
            style={{ backgroundImage: `url(${course.imageUrl})` }}
        >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-slate-950/75" />

            <div className="relative px-8 py-16">
                {/* Category & Level */}
                <div className="mb-4 flex items-center gap-3">
                    <span className="text-sm font-medium text-blue-400">
                        {course.category}
                    </span>

                    <span className="rounded-full bg-slate-800/80 px-3 py-1 text-xs font-medium text-slate-300">
                        {course.level}
                    </span>
                </div>

                {/* Title */}
                <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-white">
                    {course.title}
                </h1>

                {/* Description */}
                <p className="mt-4 max-w-3xl text-base leading-7 text-slate-300">
                    {course.description}
                </p>
            </div>
        </header>
    );
}