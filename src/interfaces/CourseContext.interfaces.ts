import { ICoursesItem } from './CoursesItem.interfaces';

interface ICourseContext {
  oneCourse: ICoursesItem[] | undefined;
  setOneCourse: (oneCourse: ICoursesItem[]) => void;
}

interface ICourseContextProps {
  children?: React.ReactNode;
}

export type { ICourseContext, ICourseContextProps };
