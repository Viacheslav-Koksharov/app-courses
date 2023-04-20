import { useContext, useMemo } from 'react';
import { Outlet } from 'react-router-dom';
import { toast } from 'react-toastify';
import { LessonContext } from 'context/LessonContextProvider';
import {
  ListStyles,
  ListItemStyles,
  LinkItemStyles,
} from 'components/LessonsList/Lesson.styled';

const LessonsList = ({ oneCourse }) => {
  const { setLesson } = useContext(LessonContext);
  const { lessons } = oneCourse;
  const sortedLessons = useMemo(
    () => [...lessons].sort((a, b) => a.order - b.order),
    [lessons],
  );

  const showNotification = ({ order, title }) =>
    toast(`The video for the lesson ${order} "${title}" is locked!`);

  const handleShowVideo = (e, lesson) => {
    e.preventDefault();

    if (lesson?.status === 'locked') {
      setLesson(null);
      showNotification(lesson);
    } else {
      setLesson(lesson);
    }
  };

  return (
    <>
      <ListStyles>
        {sortedLessons?.map(lesson => {
          const { id, order, title } = lesson;

          return (
            <ListItemStyles key={id} onClick={e => handleShowVideo(e, lesson)}>
              <LinkItemStyles to={'lesson'}>
                <b>Lesson {order}.</b>
                <br />
                {title}
              </LinkItemStyles>
            </ListItemStyles>
          );
        })}
      </ListStyles>
      <Outlet />
    </>
  );
};

export default LessonsList;
