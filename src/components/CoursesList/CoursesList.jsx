import CoursesItem from '../CoursesItem';
import { List } from './CoursesList.styled';

const CoursesList = ({ currentCourses }) => {
  const { courses } = currentCourses;

  return (
    <List>
      {courses.map(course => (
        <CoursesItem key={course.id} course={course}></CoursesItem>
      ))}
    </List>
  );
};

export default CoursesList;
