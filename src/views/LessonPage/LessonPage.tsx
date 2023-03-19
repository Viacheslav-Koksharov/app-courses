import Hls from 'hls.js';
import { useState, useEffect, useContext } from 'react';
import { LessonContext } from '../../context/LessonContextProvider';
import { TextStyled, ImageContainer } from './LessonPage.styled';

const LessonPage = () => {
  const { lesson } = useContext(LessonContext);
  const [progressWatch, setProgressWatch] = useState(0);
  // const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (window.Hls.isSupported() && lesson?.link) {
      const video = document.getElementById(`id`) as HTMLMediaElement;
      var hls = new Hls();
      hls.loadSource(lesson?.link);
      hls.attachMedia(video);
      scrollToVideo();
    }
  }, [lesson?.link, progressWatch]);

  const scrollToVideo = () => {
    const title = document.getElementById('lesson-title') as HTMLElement;
    title?.scrollIntoView({ behavior: 'smooth' });
  };

  const myFunction = () => {
    const video = document.getElementById(`id`) as HTMLMediaElement;
    video.ontimeupdate = e => {
      setProgressWatch(video.currentTime);
    };
  };

  console.log(progressWatch);
  return (
    <>
      {lesson && (
        <>
          <TextStyled id="lesson-title">Lesson {lesson?.order}</TextStyled>
          <TextStyled>{lesson?.title}</TextStyled>
          <ImageContainer onTimeUpdate={myFunction}>
            <video id="id" width="100%" height="100%" controls autoPlay></video>
          </ImageContainer>
        </>
      )}
    </>
  );
};

export default LessonPage;
