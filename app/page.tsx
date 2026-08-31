import CourseCard from "@/features/courses/components/CourseCard/CourseCard";
import { courses } from "@/data/courses";
import CourseList from "@/features/courses/components/CourseList/CourseList";

export default function Home() {
  return (
    <main  className="min-h-screen bg-slate-950 px-6 py-10">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-3xl font-bold text-white">
          Explore courses
        </h1>

        <p className="mt-2 text-slate-400">
          Learn new skills with online and offline courses.
        </p>

        <div className="mt-8">
          <CourseList />
        </div>
      </div>

    </main>
  );
}
