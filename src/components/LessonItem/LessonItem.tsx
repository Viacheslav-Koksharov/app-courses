import Hls from 'hls.js';
import { useEffect } from 'react';
import { ILessonsItemComponentProps } from '../../interfaces/Lesson.interfaces';
import { ImageContainer } from './LessonsItem.styled';

const LessonItem = ({ lesson }: any) => {
  // const { lessons } = oneCourse;

  // useEffect(() => {
  //   if (window.Hls.isSupported() && lesson.link) {
  //     const video = document.getElementById('id') as HTMLMediaElement;
  //     var hls = new Hls();
  //     hls.loadSource(lesson.link);
  //     hls.attachMedia(video);
  //     video.setAttribute('poster', lesson.previewImageLink + '/cover.webp');
  //   }
  // }, [lesson.link, lesson.previewImageLink]);

  console.log(lesson);

  return (
    <>
      <h2>Video player</h2>
      {/* {lesson?.map(lesson => {
        return (
          <ImageContainer>
            <video id={lesson.id} width="100%" height="100%" muted></video>
          </ImageContainer>
        );
      })} */}
    </>
  );
};

export default LessonItem;
