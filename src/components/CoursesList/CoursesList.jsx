import { useState, useEffect, useRef } from 'react';
import videojs from 'video.js';
import {
  List,
  ListItem,
  ImageContainer,
  LinkItem,
  Title,
  TextStyled,
  SkillsList,
  SkillStyled,
  SkillItem,
} from './CoursesList.styled';
const CoursesList = ({ currentCourses }) => {
  const videoNode = useRef(null);
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    if (videoNode.current) {
      const _player = videojs(videoNode.current);
      setPlayer(_player);
      return () => {
        if (player !== null) {
          player.dispose();
        }
      };
    }
  }, [player]);

  return (
    <>
      <List>
        {currentCourses.courses.map(course => {
          return (
            <ListItem key={course.id}>
              <LinkItem to={`/courses/${course.id}`}>
                <ImageContainer>
                  <video
                    poster={course.previewImageLink + '/cover.webp'}
                    width="100%"
                    height="100%"
                    muted
                    controls
                  >
                    <source
                      src={course?.meta?.courseVideoPreview?.link}
                      type="application/x-mpegURL"
                    />
                  </video>
                </ImageContainer>
                <Title>{course.title}</Title>
                <TextStyled>Lessons: {course.lessonsCount}</TextStyled>
                <SkillStyled>Skills:</SkillStyled>
                <SkillsList>
                  {course.meta.skills?.map(skill => (
                    <SkillItem key={skill}>{skill} </SkillItem>
                  ))}
                </SkillsList>
                <TextStyled>Rating: {course.rating}</TextStyled>
              </LinkItem>
            </ListItem>
          );
        })}
      </List>
    </>
  );
};

export default CoursesList;
