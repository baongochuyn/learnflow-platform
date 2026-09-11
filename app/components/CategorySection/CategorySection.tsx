"use client";

import { useState } from "react";
import Link from "next/link";
import { categories } from "@/data/categories";

export default function CategorySection() {
  const [activeCategory, setActiveCategory] = useState<number | null>(null);

  return (
    <div className="flex flex-col items-center">
      <p className="text-xs font-semibold uppercase tracking-widest text-amber-400 mb-4">
        Explore by Topic
      </p>

      {/* Container cuộn ngang mịn cho mobile & căn giữa cho desktop */}
      <div className="flex w-full items-center justify-start md:justify-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {/* Nút "All" */}
        <button
          onClick={() => setActiveCategory(null)}
          className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 shrink-0 ${
            activeCategory === null
              ? "bg-amber-500 text-slate-950 font-bold shadow-lg shadow-amber-500/20 scale-105"
              : "bg-slate-900/80 text-slate-400 border border-slate-800 hover:text-white hover:border-slate-700"
          }`}
        >
          All Topics
        </button>

        {/* Danh sách Categories từ DB/Data */}
        {categories.map((cat) => {
          const isActive = activeCategory === cat.id;

          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 shrink-0 ${
                isActive
                  ? "bg-amber-500 text-slate-950 font-bold shadow-lg shadow-amber-500/20 scale-105"
                  : "bg-slate-900/80 text-slate-400 border border-slate-800 hover:text-white hover:border-amber-400/50 hover:bg-slate-800"
              }`}
            >
              {cat.name}
            </button>
          );
        })}
      </div>
    </div>
  );
}