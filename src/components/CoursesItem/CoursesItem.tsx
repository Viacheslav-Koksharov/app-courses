import Hls from 'hls.js';
import { useEffect } from 'react';
import { onHoverVideo } from '../../services/helper';
import { ICoursesItemComponentProps } from '../../interfaces/CoursesItem.interfaces';
import {
  ListItem,
  ImageContainer,
  LinkItem,
  Title,
  TextStyled,
  SkillsList,
  SkillStyled,
  SkillItem,
} from './CoursesItem.styled';

const CoursesItem = ({ course }: ICoursesItemComponentProps) => {
  useEffect(() => {
    if (window.Hls.isSupported() && course?.meta?.courseVideoPreview?.link) {
      const video = document.getElementById(
        `id-${course.previewImageLink}-${course.meta.courseVideoPreview}`,
      ) as HTMLMediaElement;
      var hls = new Hls();
      hls.loadSource(course?.meta?.courseVideoPreview?.link);
      hls.attachMedia(video);
      video.setAttribute('poster', course.previewImageLink + '/cover.webp');

      onHoverVideo(video);
    }
  }, [course]);

  return (
    course && (
      <ListItem key={course.id}>
        <LinkItem to={`/courses/${course.id}`}>
          <ImageContainer>
            <video
              id={`id-${course.previewImageLink}-${course.meta.courseVideoPreview}`}
              width="100%"
              height="100%"
              muted
            ></video>
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
    )
  );
};

export default CoursesItem;
