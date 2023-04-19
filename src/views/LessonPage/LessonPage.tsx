import Hls from 'hls.js';
import { useEffect, useContext, useState, useRef } from 'react';
import { LessonContext } from '../../context/LessonContextProvider';
import ScrollTopButton from '../../components/ScrollTopButton';
import video_unavailable from '../../images/video_unavailable.png';
import { TitleS, TextS, ImageContainerS } from './LessonPage.styled';

const LessonPage = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const { lesson } = useContext(LessonContext);
  const [video, setVideo] = useState<HTMLMediaElement>();
  const [currentTime, setCurrentTime] = useState(() => {
    return JSON.parse(window.localStorage.getItem('time')!) ?? [];
  });
  const [isPlay, setIsPlay] = useState(false);

  useEffect(() => {
    if (window.Hls.isSupported() && lesson?.link) {
      const video = videoRef.current as HTMLMediaElement;
      if (video) {
        setVideo(video);

        const hls = new Hls();
        hls.loadSource(lesson?.link);
        hls.attachMedia(video);
      }
    }

    scrollToVideo();
  }, [lesson, lesson?.link]);

  useEffect(() => {
    if (currentTime.length > 0 && !isPlay) {
      window.localStorage.setItem('time', JSON.stringify(currentTime));
    }
  }, [currentTime, isPlay]);

  const getIsPlay = () => {
    if (video) {
      if (!video.paused) {
        video.addEventListener('play', () => {
          const currentEl = currentTime.find(item => item.id === video.id);
          if (currentEl) {
            video.currentTime = currentEl.time;
          }
        });

        setIsPlay(true);
        return;
      }

      const currentEl = currentTime.find(item => item.id === video.id);

      if (!currentEl) {
        setCurrentTime([
          ...currentTime,
          { id: video.id, time: video.currentTime },
        ]);
      } else {
        currentTime.forEach(item => {
          if (item.id === video.id && video.currentTime > 0) {
            return (item.time = video.currentTime);
          }
        });
      }
      setIsPlay(false);
    }
  };

  const scrollToVideo = () => {
    const title = titleRef.current;
    title?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {lesson && (
        <>
          <TitleS ref={titleRef}>Lesson {lesson?.order}</TitleS>
          <TextS>{lesson?.title}</TextS>
          <ImageContainerS onTimeUpdate={getIsPlay}>
            {lesson?.link && lesson?.duration ? (
              <video ref={videoRef} width="100%" height="100%" controls />
            ) : (
              <img src={video_unavailable} alt="banner" />
            )}
          </ImageContainerS>
          <ScrollTopButton />
        </>
      )}
    </>
  );
};

export default LessonPage;
