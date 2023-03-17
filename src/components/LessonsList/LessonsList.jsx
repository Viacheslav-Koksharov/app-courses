import { Outlet } from 'react-router-dom';
// import { ILesson } from '../../interfaces/Lesson.interfaces';
// import LessonItem from '../LessonItem';
// import { ILessonComponentProps } from '../../interfaces/Lesson.interfaces';
import { List, ListItem, LinkItem } from './Lesson.styled';

const LessonsList = ({ oneCourse }) => {
  const { lessons } = oneCourse;
  console.log(lessons);
  return (
    <>
      <List>
        {lessons?.map(lesson => {
          return (
            <ListItem key={lesson.id}>
              <LinkItem to={`lesson`} lesson={lesson}>
                Lesson{lesson.order}. {lesson.title}
              </LinkItem>
            </ListItem>
          );
        })}
      </List>
      <Outlet />
    </>
  );
};

export default LessonsList;
