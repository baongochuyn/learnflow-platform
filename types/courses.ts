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
