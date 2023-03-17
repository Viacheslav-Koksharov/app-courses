import { useState, createContext } from 'react';
import { ICoursesItem } from '../interfaces/CoursesItem.interfaces';
import {
  ICourseContext,
  ICourseContextProps,
} from '../interfaces/CourseContext.interfaces';

const CourseContext = createContext<ICourseContext>({
  oneCourse: [],
  setOneCourse: () => {},
});

const CourseProvider = ({ children }: ICourseContextProps) => {
  const [oneCourse, setOneCourse] = useState<ICoursesItem[]>();

  const sampleCourseContext: ICourseContext = {
    oneCourse,
    setOneCourse,
  };

  return (
    <CourseContext.Provider value={sampleCourseContext}>
      {children}
    </CourseContext.Provider>
  );
};

export { CourseContext, CourseProvider };
