export type Course = {
  id: number;
  title: string;
  description: string;

  instructor: {
    name: string;
    jobTitle: string;
  };

  level: "Beginner" | "Intermediate" | "Advanced";

  duration: {
    value: number;
    unit: "hours" | "days";
  };

  category: string;
  rating: number;
  studentCount: number;
  price: number;
  imageUrl: string;
};

export const courses: Course[] = [
  {
    id: 1,
    title: "React & TypeScript Professional",
    description:
      "Learn modern React and TypeScript by building real-world applications.",

    instructor: {
      name: "Marie Martin",
      jobTitle: "Senior Full-Stack Developer",
    },

    level: "Intermediate",

    duration: {
      value: 30,
      unit: "hours",
    },

    category: "Development",
    rating: 4.8,
    studentCount: 124,
    price: 149,
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5agxXUSsI3J6nJYssKdxaZEO5xpTCsh4P6U4qKGXH2w&s=10",
  },

  {
    id: 2,
    title: "C# & ASP.NET Core Advanced",
    description:
      "Build scalable backend applications with C# and ASP.NET Core.",

    instructor: {
      name: "Jean Dupont",
      jobTitle: "Senior .NET Developer",
    },

    level: "Advanced",

    duration: {
      value: 24,
      unit: "hours",
    },

    category: "Development",
    rating: 4.7,
    studentCount: 98,
    price: 129,
    imageUrl: "/courses/aspnet.jpg",
  },
];