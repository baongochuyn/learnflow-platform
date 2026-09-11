"use client";
import Link from "next/link";
import Image from "next/image";
import FeatureCard from "./components/FeatureCard/FeatureCard";
import { courses } from "@/data/courses";
import { useCourses } from "@/hooks/useCourses";
import CourseList from "@/features/courses/components/CourseList/CourseList";

export default function Home() {
  const { featuredCourses } = useCourses();


  return (
    <div>
      <section className="relative min-h-[600px] overflow-hidden ">
        <Image
          src="/images/hero/background.jpeg"
          alt="Learning"
          fill
          object-cover="true"
          
        />
      </section>
      <div  className="bg-slate-950 px-6 py-10">
        <section className="mx-auto max-w-7xl text-center">

          <h1 className="text-3xl font-bold text-white">
            Learn better. Plan smarter. Stay on track.
          </h1>
          <p className="mt-2 text-slate-400">
            Discover courses, manage your schedule, organize your tasks, and make learning more effective.
          </p>
          <div>
              <Link href="/courses" className = "bg-blue-600 px-4 py-2 text-white rounded hover:bg-blue-700 mt-4 inline-block relative z-10">
                  Explore Courses
              </Link>
          </div>

          {/* Feature Sections */}
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <FeatureCard title="Courses" description="Discover and explore courses that match your learning goals." href="/courses" />
            <FeatureCard title="Schedule" description="Plan and manage your study schedule effectively." href="/schedule" />
            <FeatureCard title="Tasks" description="Organize your learning tasks and keep track of your progress." href="/tasks" />
          </div>
        </section>
        <section className="mx-auto max-w-7xl mt-16">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold">Featured Courses</h2>
              <p className="text-slate-400 mt-1">Start learning from industry experts</p>
            </div>
            <Link href="/courses" className="text-amber-400 hover:text-amber-300 font-medium text-sm">
              View all courses →
            </Link>
          </div>
          <div className="flex justify-between items-end mb-8">
            <CourseList courses={featuredCourses} />
          </div>
        </section>
      </div>


          {/* Featured Courses Section */}
        {/* <section>
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold">Featured Courses</h2>
              <p className="text-slate-400 mt-1">Start learning from industry experts</p>
            </div>
            <Link href="/courses" className="text-amber-400 hover:text-amber-300 font-medium text-sm">
              View all courses →
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {featuredCourses.map((course) => (
              <div key={course.id} className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden hover:border-slate-700 transition flex flex-col justify-between">
                <div>
                  <div className="p-5 space-y-3">
                    <div className="flex justify-between items-center text-xs">
                      <span className="px-2.5 py-1 rounded-full bg-indigo-500/10 text-indigo-400 font-semibold border border-indigo-500/20">
                        {course.learningFormat}
                      </span>
                      <span className="text-slate-400">{course.level}</span>
                    </div>
                    <h3 className="font-bold text-lg text-white line-clamp-1">{course.title}</h3>
                    <p className="text-slate-400 text-sm line-clamp-2">{course.description}</p>
                  </div>
                </div>

                <div className="p-5 pt-0 border-t border-slate-800/50 mt-4 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-slate-500 block">Instructor</span>
                    <span className="text-sm font-medium text-slate-300">{course.instructor.name}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-lg font-bold text-amber-400">${course.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section> */}
      </div>
  );
}
