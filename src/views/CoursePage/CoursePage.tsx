import { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import Hls from 'hls.js';
import LessonsList from 'components/LessonsList';
import Loader from 'components/Loader';
import Error from 'components/Error';
import site_unavailable from 'images/site_unavailable.jpg';
import video_unavailable from 'images/video_unavailable.png';
import { getCourseByID } from 'services/api';
import { colors } from 'utils/colors';
import { ICoursesItem } from 'interfaces/CoursesItem.interfaces';
import {
  TitleStyles,
  ImageContainerStyles,
  TextStyles,
  SkillsListStyles,
  SkillItemStyles,
} from 'views/CoursePage/CoursePage.styled';

const CoursePage = () => {
  const [course, setCourse] = useState<ICoursesItem>();
  const [error, setError] = useState(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { id } = useParams();
  const firstLesson = course?.lessons![0];

  useEffect(() => {
    getCourseByID(id).then(response => {
      if (response.message) {
        setError(response.message);
      } else {
        setCourse(response);
      }
    });

    scrollToTop();
  }, [id]);

  useEffect(() => {
    if (window.Hls.isSupported() && firstLesson?.link) {
      const video = videoRef.current as HTMLMediaElement;

      if (video) {
        const hls = new Hls();
        hls.loadSource(firstLesson?.link);
        hls.attachMedia(video);
      }
    }
  }, [course?.lessons, firstLesson?.link]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {error ? (
        <Error error={error} image={site_unavailable} />
      ) : (
        <>
          {course ? (
            <>
              <TitleStyles>Course: {course?.title}</TitleStyles>
              <ImageContainerStyles>
                {firstLesson?.link && firstLesson?.duration ? (
                  <video ref={videoRef} width="100%" height="100%" controls />
                ) : (
                  <img src={video_unavailable} alt="banner" />
                )}
              </ImageContainerStyles>
              <TextStyles>Description: {course?.description}</TextStyles>
              <SkillsListStyles>
                {course?.meta?.skills?.map(skill => (
                  <SkillItemStyles key={skill}>#{skill}</SkillItemStyles>
                ))}
              </SkillsListStyles>
              <LessonsList oneCourse={course} />
            </>
          ) : (
            <Loader
              ariaLabel={'ThreeDots'}
              height={100}
              width={100}
              radius={5}
              color={colors.main}
            />
          )}
        </>
      )}
    </>
  );
};

export default CoursePage;
