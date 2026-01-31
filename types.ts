
export enum SchoolLevel {
  COLLEGE = 'college',
  LYCEE = 'lycee'
}

export interface Subject {
  id: string;
  name: string;
  icon: string;
  description: string;
  skills: string[];
  tdTypes: string[];
}

export interface GradeLevel {
  id: string;
  name: string;
  description: string;
  subjects: string[]; // IDs of subjects
  objectives: string[];
  examPrep?: string;
  category: SchoolLevel;
}

export interface TDExample {
  id: string;
  title: string;
  subject: string;
  level: string;
  statement: string;
  method: string[];
  correction: string;
  proTip: string;
}
