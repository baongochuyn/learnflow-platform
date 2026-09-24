import type { MyCourse } from "@/types/myCourses";

export const myCourses: MyCourse[] = [
  {
    id: 1,
    title: "React & TypeScript Professional",
    instructor: {
      name: "Marie Martin",
      jobTitle: "Senior Full-Stack Developer",
    },
    level: "Intermediate",
    learningFormat: "Offline",
    nextSession: {
      day: "Monday",
      startTime: "10:00",
      endTime: "12:00",
    },
    location: "Paris, France",
    status: "in_progress",
  },
  {
    id: 2,
    title: "C# & ASP.NET Core Advanced",
    instructor: {
      name: "Jean Dupont",
      jobTitle: "Senior .NET Developer",
    },
    level: "Advanced",
    learningFormat: "Offline",
    nextSession: {
      day: "Tuesday",
      startTime: "1:00 PM",
      endTime: "3:00 PM",
    },
    location: "Online",
    status: "completed",
  },
  {
    id: 3,
    title: "C# & ASP.NET Core Advanced",
    instructor: {
      name: "Jean Dupont",
      jobTitle: "Senior .NET Developer",
    },
    level: "Advanced",
    learningFormat: "Video",
    status: "completed",
  },
];