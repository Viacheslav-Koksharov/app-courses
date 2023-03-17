import Hls from 'hls.js';
import { useEffect } from 'react';
import { onHoverVideo } from '../../helpers/hoverHelper';
import { ICoursesItemComponentProps } from '../../interfaces/CoursesItem.interfaces';
import {
  ListItemS,
  LinkItemS,
  ImageContainerS,
  TitleS,
  TextS,
  SkillsListS,
  SkillTitleS,
  SkillsItemS,
} from './CoursesItem.styled';

const CoursesItem = ({ course }: ICoursesItemComponentProps) => {
  const { id, previewImageLink, meta, title, lessonsCount, rating } = course;
  const { courseVideoPreview, skills } = meta;

  useEffect(() => {
    if (window.Hls.isSupported() && course?.meta?.courseVideoPreview?.link) {
      const video = document.getElementById(
        `id-${previewImageLink}-${courseVideoPreview}`,
      ) as HTMLMediaElement;
      var hls = new Hls();
      hls.loadSource(courseVideoPreview?.link);
      hls.attachMedia(video);
      video.setAttribute('poster', previewImageLink + '/cover.webp');

      onHoverVideo(video);
    }
  }, [course, courseVideoPreview, previewImageLink]);

  return (
    <ListItemS key={id}>
      <LinkItemS to={`/courses/${id}`}>
        <ImageContainerS>
          <video
            id={`id-${previewImageLink}-${courseVideoPreview}`}
            width="100%"
            height="100%"
            muted
          ></video>
        </ImageContainerS>
        <TitleS>{title}</TitleS>
        <TextS>Lessons: {lessonsCount}</TextS>
        <SkillTitleS>Skills:</SkillTitleS>
        <SkillsListS>
          {skills?.map(skill => (
            <SkillsItemS key={skill}>{skill} </SkillsItemS>
          ))}
        </SkillsListS>
        <TextS accent>Rating: {rating}</TextS>
      </LinkItemS>
    </ListItemS>
  );
};

export default CoursesItem;
