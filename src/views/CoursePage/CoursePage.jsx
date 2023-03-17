import Hls from 'hls.js';
import { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CourseContext } from '../../context/CourseContextProvider';
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
  const { oneCourse, setOneCourse } = useContext(CourseContext);

  useEffect(() => {
    async function getCurrentCourseByID() {
      const course = await getCourseByID(id);
      setOneCourse(course);
    }
    getCurrentCourseByID();
  }, [id, setOneCourse]);
  console.log(oneCourse);
  useEffect(() => {
    if (window.Hls.isSupported() && oneCourse?.lessons[0]?.link) {
      const video = document.getElementById('video');
      var hls = new Hls();
      hls.loadSource(oneCourse?.lessons[0]?.link);
      hls.attachMedia(video);
    }
  }, [oneCourse?.lessons, oneCourse?.previewImageLink]);

  return (
    <>
      <h2>{oneCourse?.title}</h2>
      <ImageContainer>
        <video id="video" width="100%" height="100%" controls></video>
      </ImageContainer>
      <TextStyled>Description: {oneCourse?.description}</TextStyled>
      <SkillStyled>Skills:</SkillStyled>
      <SkillsList>
        {oneCourse?.meta?.skills?.map(skill => (
          <SkillItem key={skill}>{skill} </SkillItem>
        ))}
      </SkillsList>
      {oneCourse && <LessonsList oneCourse={oneCourse} />}
    </>
  );
};

export default CoursePage;
