export type CourseLevel = "Beginner" | "Intermediate" | "Advanced";

export type Course = {
  id: number;
  title: string;
  description: string;

  instructor: {
    name: string;
    jobTitle: string;
  };

  level: CourseLevel;

  duration: {
    value: number;
    unit: "hours" | "days";
  };

  category: string;
  rating: number;
  studentCount: number;
  price: number;
  imageUrl: string;
  learningFormat: LearningFormat;
  learningOutcomes: string[];
  schedule : ScheduleItem[];
  location? : string;
  learningPath : string;
  targetAudience: string[];
};

export type LearningFormat = "Offline" | "Live" | "Video";
export type ScheduleItem = {
  day: string;
  time: string;
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
    learningFormat: "Offline",
    learningOutcomes: [
      "Build scalable web applications with React and TypeScript.",
      "Implement state management using Redux and Context API.",
      "Write unit tests for React components using Jest and React Testing Library.",
    ],
    schedule: [
      { day: "Monday", time: "10:00 AM - 12:00 PM" },
      { day: "Wednesday", time: "2:00 PM - 4:00 PM" },
    ],
    location: "Paris, France",
    learningPath: "React, TypeScript, Redux, Testing",
    targetAudience: ["Web Developers", "Frontend Engineers"],
  },
  {
    id: 3,
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
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5agxXUSsI3J6nJYssKdxaZEO5xpTCsh4P6U4qKGXH2w&s=10",
    learningFormat: "Offline",
    learningOutcomes: [
      "Develop RESTful APIs using ASP.NET Core.",
      "Implement authentication and authorization in ASP.NET Core applications.",
      "Optimize application performance and scalability.",
    ],
    schedule: [
      { day: "Tuesday", time: "1:00 PM - 3:00 PM" },
      { day: "Thursday", time: "3:00 PM - 5:00 PM" },
    ],
    location: "Online",
    learningPath: "C#, ASP.NET Core, RESTful APIs, Authentication",
    targetAudience: ["Backend Developers", ".NET Developers"],
  },
  {
    id: 4,
    title: "C# & ASP.NET Core Advanced",
    description:
      "Build scalable backend applications with C# and ASP.NET Core.",

    instructor: {
      name: "Jean Dupont",
      jobTitle: "Senior .NET Developer",
    },

    level: "Beginner",

    duration: {
      value: 24,
      unit: "hours",
    },

    category: "Development",
    rating: 4.7,
    studentCount: 98,
    price: 129,
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5agxXUSsI3J6nJYssKdxaZEO5xpTCsh4P6U4qKGXH2w&s=10",
    learningFormat: "Live",
    learningOutcomes: [
      "Develop RESTful APIs using ASP.NET Core.",
      "Implement authentication and authorization in ASP.NET Core applications.",
      "Optimize application performance and scalability.",
       "Develop RESTful APIs using ASP.NET Core.",
      "Implement authentication and authorization in ASP.NET Core applications.",
      "Optimize application performance and scalability.",
       "Develop RESTful APIs using ASP.NET Core.",
      "Implement authentication and authorization in ASP.NET Core applications.",
      "Optimize application performance and scalability.",
       "Develop RESTful APIs using ASP.NET Core.",
      "Implement authentication and authorization in ASP.NET Core applications.",
      "Optimize application performance and scalability.",
       "Develop RESTful APIs using ASP.NET Core.",
      "Implement authentication and authorization in ASP.NET Core applications.",
      "Optimize application performance and scalability.",
       "Develop RESTful APIs using ASP.NET Core.",
      "Implement authentication and authorization in ASP.NET Core applications.",
      "Optimize application performance and scalability.",
       "Develop RESTful APIs using ASP.NET Core.",
      "Implement authentication and authorization in ASP.NET Core applications.",
      "Optimize application performance and scalability.",
       "Develop RESTful APIs using ASP.NET Core.",
      "Implement authentication and authorization in ASP.NET Core applications.",
      "Optimize application performance and scalability.",
       "Develop RESTful APIs using ASP.NET Core.",
      "Implement authentication and authorization in ASP.NET Core applications.",
      "Optimize application performance and scalability.",
       "Develop RESTful APIs using ASP.NET Core.",
      "Implement authentication and authorization in ASP.NET Core applications.",
      "Optimize application performance and scalability.",
       "Develop RESTful APIs using ASP.NET Core.",
      "Implement authentication and authorization in ASP.NET Core applications.",
      "Optimize application performance and scalability.",
    ],
    schedule: [
      { day: "Tuesday", time: "1:00 PM - 3:00 PM" },
      { day: "Thursday", time: "3:00 PM - 5:00 PM" },
    ],
    location: "",
    learningPath: "C#, ASP.NET Core, RESTful APIs, Authentication",
    targetAudience: ["Backend Developers", ".NET Developers"],
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

    category: "Intermediate",
    rating: 4.7,
    studentCount: 98,
    price: 129,
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5agxXUSsI3J6nJYssKdxaZEO5xpTCsh4P6U4qKGXH2w&s=10",
    learningFormat: "Video",
    learningOutcomes: [
      "Develop RESTful APIs using ASP.NET Core.",
      "Implement authentication and authorization in ASP.NET Core applications.",
      "Optimize application performance and scalability.",
    ],
    schedule: [
      { day: "Tuesday", time: "1:00 PM - 3:00 PM" },
      { day: "Thursday", time: "3:00 PM - 5:00 PM" },
    ],
    location: "",
    learningPath: "C#, ASP.NET Core, RESTful APIs, Authentication",
    targetAudience: ["Backend Developers", ".NET Developers"],
  },
];