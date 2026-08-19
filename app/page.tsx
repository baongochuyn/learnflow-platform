import CourseCard from "@/components/CourseCard";
import { courses } from "@/data/courses";

export default function Home() {
  return (
    <main>
      <h1>LearnFlow</h1>

      <CourseCard course={courses[0]} />

    </main>
  );
}
