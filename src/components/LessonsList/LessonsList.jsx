import { Outlet } from 'react-router-dom';
import { List, ListItem, LinkItem } from './Lesson.styled';

const LessonsList = ({ oneCourse }) => {
  const { lessons } = oneCourse;

  return (
    <>
      <List>
        {lessons?.map(lesson => {
          return (
            <ListItem key={lesson.id}>
              <LinkItem to={`lesson/${lesson.id}`}>
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
