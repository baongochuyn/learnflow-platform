export type CourseLevel = "Beginner" | "Intermediate" | "Advanced";
export type LearningFormat = "Offline" | "Live" | "Video";
export type ScheduleItem = {
  day: string;
  startTime: string;
  endTime: string;
};
export type CourseDuration = {
  value: number;
  unit: "hours" | "days";
};

export type Instructor = {
  name: string;
  jobTitle: string;
};

export type Course = {
  id: number;

  title: string;
  description: string;

  instructor: Instructor;

  level: CourseLevel;
  duration: CourseDuration;
  category: string;
  
  rating: number;
  studentCount: number;
  price: number;
  
  imageUrl: string;
  
  learningFormat: LearningFormat;
  
  learningOutcomes: string[];
  learningPath : string;
  targetAudience: string[];

  schedule : ScheduleItem[];
  location? : string;
};


