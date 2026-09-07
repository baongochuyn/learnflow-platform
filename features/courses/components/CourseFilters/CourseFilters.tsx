import type { CourseLevel } from "@/data/courses";

type CourseFiltersProps = {
    search : string;
    level : CourseLevel | "";
    onSearchChange : (search: string) => void;
    onLevelChange : (level: CourseLevel | "") => void;
};

export default function CourseFilters({ search, level, onSearchChange, onLevelChange }: CourseFiltersProps) {
    
    return (
    <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <input
            className="flex-1 h-10 rounded-md border border-slate-700 bg-slate-900 px-4 py-2 text-white focus:border-blue-500 focus:ring focus:ring-blue-500/20"
            type="text"
            placeholder="Search courses..."
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
        />
        <select 
            className="flex-1 md:flex-row h-10 rounded-md border border-slate-700 bg-slate-900 px-4 py-2 text-white focus:border-blue-500 focus:ring focus:ring-blue-500/20"
            value={level}
            onChange={(e) => onLevelChange(e.target.value as CourseLevel | "")}
        >
            <option value="">All Levels</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
        </select>
    </div>)
}