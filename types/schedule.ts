export interface Lecturer {
    id: string;
    name: string;
    title?: string;
  }
  
  export interface Course {
    id: string;
    code: string;
    name: string;
    credits: number;
  }
  
  export interface Schedule {
    id: string;
    course: Course;
    lecturer: Lecturer;
    day: string;
    startTime: string;
    endTime: string;
    room: string;
    class: string;
    type: string; // Tatap Muka, Online, dll
  }