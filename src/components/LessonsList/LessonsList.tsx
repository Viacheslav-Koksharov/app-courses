import { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { toast } from 'react-toastify';
import {
  ListS,
  ListItemS,
  LinkItemS,
} from 'components/LessonsList/Lesson.styled';
import { LessonContext } from 'context/LessonContextProvider';

const LessonsList = ({ oneCourse }) => {
  const { setLesson } = useContext(LessonContext);
  const { lessons } = oneCourse;

  const showNotification = ({ order, title }) =>
    toast(`The video for the lesson ${order} "${title}" is locked!`);

  const showVideo = (e, lesson) => {
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
      <ListS>
        {lessons?.map(lesson => {
          const { id, order, title } = lesson;
          return (
            <ListItemS key={id} onClick={e => showVideo(e, lesson)}>
              <LinkItemS to={'lesson'}>
                <b>Lesson {order}.</b>
                <br />
                {title}
              </LinkItemS>
            </ListItemS>
          );
        })}
      </ListS>
      <Outlet />
    </>
  );
};

export default LessonsList;
