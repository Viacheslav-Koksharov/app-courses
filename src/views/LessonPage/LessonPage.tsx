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
    }
  }, [lesson?.link]);

  return (
    <>
      {lesson && (
        <>
          <TextStyled>Lesson {lesson?.order}</TextStyled>
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
