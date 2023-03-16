import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCourseByID } from '../../services/api';
import {
  List,
  ListItem,
  ImageContainer,
  LinkItem,
  TextStyled,
  SkillsList,
  SkillStyled,
  SkillItem,
} from './CoursePage.styled';

const CoursePage = () => {
  const { id } = useParams();
  const [oneCourse, setOneCourse] = useState(null);

  useEffect(() => {
    async function getCurrentCourseByID() {
      const course = await getCourseByID(id);
      setOneCourse(course);
    }
    getCurrentCourseByID();
  }, [id]);

  // useEffect(() => {
  //   if (oneCourse) {
  //     console.log(oneCourse);
  //   }
  // }, [oneCourse]);

  return (
    <>
      <h2>{oneCourse?.title}</h2>
      <ImageContainer>
        <video
          poster={oneCourse?.previewImageLink + '/cover.webp'}
          width="100%"
          height="100%"
          controls
        >
          <source
            // src={oneCourse?.lessons[0]?.link}
            // type="application/x-mpegURL"
            src={
              'https://rawcdn.githack.com/Freshman-tech/custom-html5-video/911e6fbfc39d670cb26e94d6f3013b9426f4a679/video.mp4'
            }
            type="video/mp4"
          />
        </video>
      </ImageContainer>
      <TextStyled>Description: {oneCourse?.description}</TextStyled>
      <SkillStyled>Skills:</SkillStyled>
      <SkillsList>
        {oneCourse?.meta?.skills?.map(skill => (
          <SkillItem key={skill}>{skill} </SkillItem>
        ))}
      </SkillsList>
      <List>
        {oneCourse?.lessons?.map(lesson => {
          return (
            <ListItem key={lesson.id}>
              <LinkItem to={`lesson`}>
                Lesson{lesson.order}. {lesson.title}
              </LinkItem>
            </ListItem>
          );
        })}
      </List>
    </>
  );
};

export default CoursePage;
