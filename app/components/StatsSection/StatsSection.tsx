import { stats } from "@/data/stats";

export default function StatsSection() {
  return (
    <section className="relative z-10 border-y border-slate-800/80 bg-slate-900/40 backdrop-blur-md py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((item) => (
          <div 
            key={item.id} 
            className="flex flex-col items-center justify-center text-center p-4 rounded-xl transition-all duration-300 hover:bg-slate-800/30"
          >

            <span className={`text-3xl md:text-4xl font-extrabold tracking-tight ${item.colorClass}`}>
              {item.value}
            </span>

            <span className="text-sm md:text-base font-semibold text-slate-200 mt-1">
              {item.label}
            </span>

            {item.description && (
              <span className="text-xs text-slate-500 mt-1">
                {item.description}
              </span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}