// import Hls from 'hls.js';
import { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CourseContext } from '../../context/CourseContextProvider';
import {
  ICoursesItem,
  ICoursesItemComponentProps,
} from '../../interfaces/CoursesItem.interfaces';
import { ImageContainer } from './LessonPage.styled';

const LessonPage = () => {
  const { id } = useParams();
  const { oneCourse, setOneCourse } = useContext(CourseContext);
  // const { lessons } = oneCourse;
  console.log(oneCourse);
  // useEffect(() => {
  //   if (window.Hls.isSupported() && lesson.link) {
  //     const video = document.getElementById('id') as HTMLMediaElement;
  //     var hls = new Hls();
  //     hls.loadSource(lesson.link);
  //     hls.attachMedia(video);
  //     video.setAttribute('poster', lesson.previewImageLink + '/cover.webp');
  //   }
  // }, [lesson.link, lesson.previewImageLink]);

  return (
    <>
      <h2>Video player</h2>
      {/* {lessons?.map(lesson => {
        return (
          <ImageContainer>
            <video id={lesson.id} width="100%" height="100%" muted></video>
          </ImageContainer>
        );
      })} */}
    </>
  );
};

export default LessonPage;
