import Hls from 'hls.js';
import { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { getCourseByID } from '../../services/api';
import { colors } from '../../utils/colors';
import site_unavailable from '../../images/site_unavailable.jpg';
import video_unavailable from '../../images/video_unavailable.png';
import LessonsList from '../../components/LessonsList';
import Loader from '../../components/Loader';
import Error from '../../components/Error';

import {
  TitleS,
  ImageContainerS,
  TextS,
  SkillsListS,
  SkillItem,
} from './CoursePage.styled';

const CoursePage = () => {
  const [course, setCourse] = useState(null);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const ref = useRef(true);

  useEffect(() => {
    if (!ref.current) {
      async function getCurrentCourseByID() {
        const response = await getCourseByID(id);

        if (response.message) {
          setError(response.message);
        } else {
          setCourse(response);
        }
      }

      getCurrentCourseByID();
    }

    ref.current = false;
    scrollToTop();
  }, [id]);

  useEffect(() => {
    if (window.Hls.isSupported() && course?.lessons[0]?.link) {
      const video = document.getElementById('video');
      let hls = new Hls();
      hls.loadSource(course?.lessons[0]?.link);
      hls.attachMedia(video);
    }
  }, [course?.lessons]);

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
            <div ref={ref}>
              <TitleS>Course: {course?.title}</TitleS>
              <ImageContainerS>
                {course?.lessons[0]?.link && course?.lessons[0]?.duration ? (
                  <video id="video" width="100%" height="100%" controls></video>
                ) : (
                  <img src={video_unavailable} alt="banner" />
                )}
              </ImageContainerS>
              <TextS>Description: {course?.description}</TextS>
              <SkillsListS>
                {course?.meta?.skills?.map(skill => (
                  <SkillItem key={skill}>#{skill}</SkillItem>
                ))}
              </SkillsListS>
              <LessonsList oneCourse={course} />
            </div>
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
