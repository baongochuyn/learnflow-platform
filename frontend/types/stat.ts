export type StatItem = {
  id: string;
  value: string;       // Ex: "100+", "4.8 ★"
  label: string;       // Ex: "Interactive Lessons"
  description?: string;
  colorClass: string;  // Tailwind class
};