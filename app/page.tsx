import Link from "next/link";
import Image from "next/image";
import FeatureCard from "./components/FeatureCard/FeatureCard";

export default function Home() {
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
        <div className="mx-auto max-w-7xl text-center">

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
        </div>
      </div>
    </div>
  );
}
