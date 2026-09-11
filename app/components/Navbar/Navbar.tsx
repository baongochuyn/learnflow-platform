"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";


export default function Navbar() {
    const pathname = usePathname();

    const navItems = [
        { name: "Home", href: "/" },
        { name: "Courses", href: "/courses" },
        { name: "Schedule", href: "/schedule" },
        { name: "Tasks", href: "/tasks" },
    ];
  return (
    <nav className="bg-gray-800 text-white p-4 sticky top-0 z-50 w-full ">
      <div className="container mx-auto flex justify-between items-center">

        {/* Logo with Gradient & Glow effect */}
        <Link 
          href="/" 
          className="group relative text-2xl font-black tracking-wider bg-gradient-to-r from-amber-400 via-orange-400 to-amber-200 bg-clip-text text-transparent transition-all hover:scale-105"
        >
          Learn<span className="text-indigo-400">Flow</span>
          <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-gradient-to-r from-amber-400 to-indigo-500 transition-all duration-300 group-hover:w-full"></span>
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center space-x-1 sm:space-x-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-4 py-2 text-sm font-medium transition-colors group ${
                  isActive ? "text-amber-400 font-semibold" : "text-gray-300 hover:text-white"
                }`}
              >
                {item.name}

                {/*  Active Mode */}
                <span
                  className={`absolute inset-x-2 -bottom-1 h-[2px] rounded-full bg-amber-400 transition-transform duration-300 ${
                    isActive 
                      ? "scale-x-100" 
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}