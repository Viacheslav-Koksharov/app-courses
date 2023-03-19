import Hls from 'hls.js';
import { useEffect, useContext } from 'react';
import { LessonContext } from '../../context/LessonContextProvider';
import { TextStyled, ImageContainer } from './LessonPage.styled';

const LessonPage = () => {
  const { lesson } = useContext(LessonContext);

  useEffect(() => {
    if (window.Hls.isSupported() && lesson?.link) {
      const video = document.getElementById(`id`) as HTMLMediaElement;
      var hls = new Hls();
      hls.loadSource(lesson?.link);
      hls.attachMedia(video);
      scrollToVideo();
    }
  }, [lesson?.link]);

  const scrollToVideo = () => {
    const title = document.getElementById('lesson-title') as HTMLElement;
    title?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {lesson && (
        <>
          <TextStyled id="lesson-title">Lesson {lesson?.order}</TextStyled>
          <TextStyled>{lesson?.title}</TextStyled>
          <ImageContainer>
            <video id="id" width="100%" height="100%" controls></video>
          </ImageContainer>
        </>
      )}
    </>
  );
};

export default LessonPage;
