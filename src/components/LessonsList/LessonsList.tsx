import { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { List, ListItem, LinkItem } from './Lesson.styled';
import { LessonContext } from '../../context/LessonContextProvider';

const LessonsList = ({ oneCourse }) => {
  const { setLesson } = useContext(LessonContext);
  const { lessons } = oneCourse;

  const showVideo = (e, lesson) => {
    if (lesson?.status === 'locked') {
      setLesson(null);
      alert('This video is locked');
    } else {
      e.preventDefault();
      setLesson(lesson);
    }
  };

  return (
    <>
      <List>
        {lessons?.map(lesson => {
          return (
            <ListItem key={lesson.order} onClick={e => showVideo(e, lesson)}>
              <LinkItem to={`lesson`}>
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
