import Hls from 'hls.js';
import { useEffect } from 'react';
// import { ILessonComponentProps } from '../../interfaces/Lesson.interfaces';
import { ImageContainer } from './LessonsItem.styled';

const CoursesItem = ({ lesson }) => {
  // const { link, previewImageLink } = lesson;
  useEffect(() => {
    if (window.Hls.isSupported() && lesson?.link) {
      const video = document.getElementById('id');
      var hls = new Hls();
      hls.loadSource(lesson?.link);
      hls.attachMedia(video);
      video.setAttribute('poster', lesson?.previewImageLink + '/cover.webp');
    }
  }, [lesson]);
  // console.log(lesson);
  return (
    <>
      <ImageContainer>
        <video id={lesson?.id} width="100%" height="100%" muted></video>
      </ImageContainer>
    </>
    // lesson && (
    //   <LinkItem to={`lesson`}>
    //     Lesson{lesson.order}. {lesson.title}
    //   </LinkItem>
    // )
  );
};

export default CoursesItem;
