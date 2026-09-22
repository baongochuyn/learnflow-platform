import type { Course } from "@/types/courses";


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
      { day: "Monday", startTime: "10:00", endTime: "12:00" },
      { day: "Wednesday", startTime: "2:00 PM", endTime: "4:00 PM" },
    ],
    location: "Paris, France",
    learningPath: "React, TypeScript, Redux, Testing",
    targetAudience: ["Web Developers", "Frontend Engineers"],
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
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5agxXUSsI3J6nJYssKdxaZEO5xpTCsh4P6U4qKGXH2w&s=10",
    learningFormat: "Offline",
    learningOutcomes: [
      "Develop RESTful APIs using ASP.NET Core.",
      "Implement authentication and authorization in ASP.NET Core applications.",
      "Optimize application performance and scalability.",
    ],
    schedule: [
      { day: "Tuesday", startTime: "1:00 PM", endTime: "3:00 PM" },
      { day: "Thursday", startTime: "3:00 PM", endTime: "5:00 PM" },
    ],
    location: "Online",
    learningPath: "C#, ASP.NET Core, RESTful APIs, Authentication",
    targetAudience: ["Backend Developers", ".NET Developers"],
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
      { day: "Tuesday", startTime: "1:00 PM", endTime: "3:00 PM" },
      { day: "Thursday", startTime: "3:00 PM", endTime: "5:00 PM" },
    ],
    location: "",
    learningPath: "C#, ASP.NET Core, RESTful APIs, Authentication",
    targetAudience: ["Backend Developers", ".NET Developers"],
  },
  {
    id: 4,
    title: "Français général – Niveau B1",
    description:
      "Improve your French communication skills through practical, everyday situations.",

    instructor: {
      name: "Claire Martin",
      jobTitle: "Professeure de français langue étrangère",
    },

    level: "Intermediate",

    duration: {
      value: 30,
      unit: "hours",
    },

    category: "Languages",
    rating: 4.8,
    studentCount: 124,
    price: 280,
    imageUrl:
      "https://images.unsplash.com/photo-1499856871958-5b9627545d1a",
    learningFormat: "Offline",

    learningOutcomes: [
      "Communicate confidently in everyday French situations.",
      "Improve grammar, vocabulary, and pronunciation.",
      "Participate in conversations about work, travel, and daily life.",
      "Understand common spoken French expressions.",
    ],

    schedule: [
      { day: "Monday", startTime: "6:00 PM", endTime: "8:00 PM" },
      { day: "Wednesday", startTime: "6:00 PM", endTime: "8:00 PM" },
    ],

    location: "Nantes, France",
    learningPath:
      "French Grammar, Conversation, Pronunciation, Vocabulary",

    targetAudience: [
      "French Language Learners",
      "International Students",
      "Job Seekers",
    ],
  },

  {
    id: 5,
    title: "Français professionnel – Communication au travail",
    description:
      "Develop practical French communication skills for professional and workplace situations.",

    instructor: {
      name: "Sophie Bernard",
      jobTitle: "Formatrice en français professionnel",
    },

    level: "Intermediate",

    duration: {
      value: 24,
      unit: "hours",
    },

    category: "Languages",
    rating: 4.9,
    studentCount: 87,
    price: 320,
    imageUrl:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2",
    learningFormat: "Offline",

    learningOutcomes: [
      "Communicate effectively with colleagues and managers.",
      "Participate in professional meetings.",
      "Write professional emails in French.",
      "Prepare for job interviews in French.",
      "Improve professional vocabulary and pronunciation.",
    ],

    schedule: [
      { day: "Tuesday", startTime: "6:30 PM", endTime: "8:30 PM" },
      { day: "Thursday", startTime: "6:30 PM", endTime: "8:30 PM" },
    ],

    location: "Nantes, France",
    learningPath:
      "Professional French, Business Vocabulary, Emails, Meetings, Interviews",

    targetAudience: [
      "Job Seekers",
      "Foreign Professionals",
      "International Students",
    ],
  },

  {
    id: 6,
    title: "Piano débutant – Apprendre les bases",
    description:
      "Learn the fundamentals of piano through practical exercises, simple songs, and music theory.",

    instructor: {
      name: "Thomas Leroy",
      jobTitle: "Pianiste et professeur de musique",
    },

    level: "Beginner",

    duration: {
      value: 20,
      unit: "hours",
    },

    category: "Music",
    rating: 4.9,
    studentCount: 76,
    price: 240,
    imageUrl:
      "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0",
    learningFormat: "Offline",

    learningOutcomes: [
      "Learn correct piano posture and hand position.",
      "Read basic musical notation.",
      "Play simple melodies and chords.",
      "Understand basic rhythm and music theory.",
      "Practice simple songs independently.",
    ],

    schedule: [
      { day: "Saturday", startTime: "10:00 AM", endTime: "12:00 PM" },
      { day: "Saturday", startTime: "2:00 PM", endTime: "4:00 PM" },
    ],

    location: "Nantes, France",
    learningPath:
      "Piano Basics, Music Theory, Reading Notes, Chords, Rhythm",

    targetAudience: [
      "Beginner Pianists",
      "Adults",
      "Music Enthusiasts",
    ],
  },

  {
    id: 7,
    title: "Piano intermédiaire – Technique et répertoire",
    description:
      "Develop piano technique and musical interpretation through classical and contemporary repertoire.",

    instructor: {
      name: "Élodie Moreau",
      jobTitle: "Professeure de piano",
    },

    level: "Intermediate",

    duration: {
      value: 30,
      unit: "hours",
    },

    category: "Music",
    rating: 4.8,
    studentCount: 54,
    price: 390,
    imageUrl:
      "https://images.unsplash.com/photo-1552422535-c45813c61732",
    learningFormat: "Offline",

    learningOutcomes: [
      "Improve finger technique and coordination.",
      "Develop sight-reading skills.",
      "Interpret classical and contemporary pieces.",
      "Improve dynamics, rhythm, and musical expression.",
      "Build an individual piano practice routine.",
    ],

    schedule: [
      { day: "Wednesday", startTime: "5:00 PM", endTime: "7:00 PM" },
      { day: "Saturday", startTime: "11:00 AM", endTime: "1:00 PM" },
    ],

    location: "Nantes, France",
    learningPath:
      "Piano Technique, Sight Reading, Repertoire, Interpretation",

    targetAudience: [
      "Intermediate Pianists",
      "Adult Learners",
      "Music Students",
    ],
  },

  {
    id: 8,
    title: "Communication professionnelle",
    description:
      "Develop effective communication skills for meetings, presentations, teamwork, and professional situations.",

    instructor: {
      name: "Marc Lefèvre",
      jobTitle: "Formateur en communication professionnelle",
    },

    level: "Intermediate",

    duration: {
      value: 18,
      unit: "hours",
    },

    category: "Professional Skills",
    rating: 4.6,
    studentCount: 63,
    price: 210,
    imageUrl:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72",
    learningFormat: "Offline",

    learningOutcomes: [
      "Communicate clearly and confidently in professional situations.",
      "Prepare and deliver effective presentations.",
      "Participate actively in meetings.",
      "Handle difficult conversations professionally.",
      "Improve verbal and non-verbal communication.",
    ],

    schedule: [
      { day: "Monday", startTime: "6:00 PM", endTime: "9:00 PM" },
      { day: "Thursday", startTime: "6:00 PM", endTime: "9:00 PM" },
    ],

    location: "Nantes, France",
    learningPath:
      "Public Speaking, Meetings, Presentations, Team Communication",

    targetAudience: [
      "Professionals",
      "Job Seekers",
      "Managers",
      "Students",
    ],
  },

  {
    id: 9,
    title: "Excel avancé pour les professionnels",
    description:
      "Master advanced Excel techniques for data analysis, reporting, and business decision-making.",

    instructor: {
      name: "Julien Robert",
      jobTitle: "Consultant Data & Business Intelligence",
    },

    level: "Advanced",

    duration: {
      value: 21,
      unit: "hours",
    },

    category: "Business & Data",
    rating: 4.7,
    studentCount: 112,
    price: 260,
    imageUrl:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    learningFormat: "Offline",

    learningOutcomes: [
      "Build advanced Excel formulas and functions.",
      "Create dynamic dashboards and reports.",
      "Analyze and visualize business data.",
      "Use PivotTables and advanced filtering.",
      "Automate repetitive tasks with Excel tools.",
    ],

    schedule: [
      { day: "Tuesday", startTime: "6:00 PM", endTime: "9:00 PM" },
      { day: "Thursday", startTime: "6:00 PM", endTime: "9:00 PM" },
    ],

    location: "Nantes, France",
    learningPath:
      "Advanced Excel, PivotTables, Data Analysis, Dashboards",

    targetAudience: [
      "Business Professionals",
      "Data Analysts",
      "Accountants",
      "Job Seekers",
    ],
  },

  {
    id: 10,
    title: "Cuisine française – Les bases",
    description:
      "Learn the fundamentals of French cuisine through hands-on cooking classes and traditional recipes.",

    instructor: {
      name: "Pierre Dubois",
      jobTitle: "Chef cuisinier",
    },

    level: "Beginner",

    duration: {
      value: 15,
      unit: "hours",
    },

    category: "Cooking",
    rating: 4.9,
    studentCount: 91,
    price: 195,
    imageUrl:
      "https://images.unsplash.com/photo-1556910103-1c02745aae4d",
    learningFormat: "Offline",

    learningOutcomes: [
      "Learn fundamental French cooking techniques.",
      "Prepare traditional French dishes.",
      "Understand basic ingredient selection and preparation.",
      "Improve knife and cooking techniques.",
      "Learn professional kitchen hygiene basics.",
    ],

    schedule: [
      { day: "Saturday", startTime: "9:00 AM", endTime: "12:00 PM" },
      { day: "Saturday", startTime: "2:00 PM", endTime: "5:00 PM" },
    ],

    location: "Nantes, France",
    learningPath:
      "French Cuisine, Cooking Techniques, Traditional Recipes, Food Safety",

    targetAudience: [
      "Beginner Cooks",
      "Food Enthusiasts",
      "Adults",
      "Cooking Students",
    ],
  },
];