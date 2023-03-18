import Hls from 'hls.js';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCourseByID } from '../../services/api';
import {
  ImageContainer,
  TextStyled,
  SkillsList,
  SkillStyled,
  SkillItem,
} from './CoursePage.styled';
import LessonsList from '../../components/LessonsList';

const CoursePage = () => {
  const { id } = useParams();
  // const { lesson, setLesson } = useContext(LessonContext);
  const [course, setCourse] = useState(null);

  useEffect(() => {
    async function getCurrentCourseByID() {
      const course = await getCourseByID(id);
      setCourse(course);
    }
    getCurrentCourseByID();
  }, [id]);

  useEffect(() => {
    if (window.Hls.isSupported() && course?.lessons[0]?.link) {
      const video = document.getElementById('video');
      var hls = new Hls();
      hls.loadSource(course?.lessons[0]?.link);
      hls.attachMedia(video);
    }
  }, [course?.lessons]);
  return (
    <>
      <h2>{course?.title}</h2>
      <ImageContainer>
        <video id="video" width="100%" height="100%" controls></video>
      </ImageContainer>
      <TextStyled>Description: {course?.description}</TextStyled>
      <SkillStyled>Skills:</SkillStyled>
      <SkillsList>
        {course?.meta?.skills?.map(skill => (
          <SkillItem key={skill}>{skill} </SkillItem>
        ))}
      </SkillsList>
      {course && <LessonsList oneCourse={course} />}
    </>
  );
};

export default CoursePage;
