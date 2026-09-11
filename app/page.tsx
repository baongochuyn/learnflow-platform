"use client";
import Link from "next/link";
import FeatureCard from "./components/FeatureCard/FeatureCard";
import { useCourses } from "@/hooks/useCourses";
import CourseList from "@/features/courses/components/CourseList/CourseList";
import StatsSection from "./components/StatsSection/StatsSection";
import CategorySection from "./components/CategorySection/CategorySection";

export default function Home() {
  const { featuredCourses } = useCourses();


  return (
    <div>
        {/* Hero Section */}
      <section className="relative min-h-[520px] flex items-center justify-center overflow-hidden bg-slate-950">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-tr from-amber-500/20 via-indigo-500/20 to-purple-500/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

        {/* Content of Hero Section */}
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6 space-y-6">
          <span className="px-3.5 py-1.5 text-xs font-bold tracking-wider text-amber-400 bg-amber-400/10 border border-amber-400/20 rounded-full inline-block">
            LEARN & PLAN SMARTER
          </span>

          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-tight">
            Learn better. Plan smarter. <br />
            <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-amber-200 bg-clip-text text-transparent">
              Stay on track.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto">
            Discover courses, manage your schedule, organize your tasks, and make learning more effective.
          </p>

          <div className="pt-2">
            <Link 
              href="/courses" 
              className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-8 py-3.5 rounded-xl transition-all duration-200 shadow-lg shadow-amber-500/25 hover:scale-105 inline-block"
            >
              Explore Courses
            </Link>
          </div>
        </div>
      </section>

      <div className="bg-slate-950 px-6 py-12">
        <div className="mx-auto max-w-7xl space-y-20">
          
          {/* 1. Feature Cards Section */}
          <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <FeatureCard title="Courses" description="Discover and explore courses that match your learning goals." href="/courses" />
            <FeatureCard title="Schedule" description="Plan and manage your study schedule effectively." href="/schedule" />
            <FeatureCard title="Tasks" description="Organize your learning tasks and keep track of your progress." href="/tasks" />
          </section>

          {/* 2. Stats Section */}
          <section>
            <StatsSection />
          </section>

          {/* 3. Featured Courses + Categories */}
          <section className="space-y-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-800/80 pb-6">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white">Featured Courses</h2>
                <p className="text-slate-400 mt-1">Start learning from industry experts</p>
              </div>
              <Link href="/courses" className="text-amber-400 hover:text-amber-300 font-medium text-sm flex items-center gap-1">
                View all courses →
              </Link>
            </div>

            {/* Category Pills */}
            <CategorySection />

            {/* Course List */}
            <div>
              <CourseList courses={featuredCourses} />
            </div>
          </section>

          {/* 4. Call to Action Section */}
          <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-amber-500/10 via-indigo-500/10 to-slate-900 border border-slate-800 p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-4xl font-extrabold text-white">
              Ready to level up your learning workflow?
            </h2>
            <p className="text-slate-400 mt-3 max-w-xl mx-auto text-sm md:text-base">
              Join thousands of learners who organize their study habits and achieve their career goals faster.
            </p>
            <div className="mt-6 flex justify-center gap-4">
              <Link
                href="/courses"
                className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-6 py-3 rounded-xl transition shadow-lg shadow-amber-500/20"
              >
                Get Started for Free
              </Link>
            </div>
          </section>
        </div>
      </div>


    </div>
  );
}
