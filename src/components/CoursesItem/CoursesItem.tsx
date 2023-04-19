import Hls from 'hls.js';
import { useEffect, useRef } from 'react';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { onHoverElement } from '../../helpers/hoverHelper';
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
  const videoRef = useRef<HTMLVideoElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const { id, previewImageLink, meta, title, lessonsCount, rating } = course;
  const { courseVideoPreview, skills } = meta;

  useEffect(() => {
    if (
      window.Hls.isSupported() &&
      courseVideoPreview?.link &&
      courseVideoPreview?.duration
    ) {
      const video = videoRef.current as HTMLMediaElement;
      if (video) {
        video.setAttribute('poster', previewImageLink + '/cover.webp');

        const hls = new Hls();
        hls.loadSource(courseVideoPreview.link);
        hls.attachMedia(video);

        onHoverElement(video);
      }
    }
  }, [course, courseVideoPreview, previewImageLink]);

  useEffect(() => {
    const image = imageRef.current;

    if (image) {
      onHoverElement(image, `${previewImageLink + '/cover.webp'}`);
    }
  }, [previewImageLink]);

  return (
    <ListItemS key={id}>
      <LinkItemS to={`/courses/${id}`}>
        <ImageContainerS>
          {courseVideoPreview?.link && courseVideoPreview?.duration ? (
            <video ref={videoRef} width="100%" height="100%" muted />
          ) : (
            <img
              ref={imageRef}
              src={previewImageLink + '/cover.webp'}
              alt="banner"
            />
          )}
        </ImageContainerS>
        <TitleS>{title}</TitleS>
        <TextS>Available lessons: {lessonsCount}</TextS>
        <SkillTitleS>Skills:</SkillTitleS>
        <SkillsListS>
          {skills?.map(skill => (
            <SkillsItemS key={skill}>{skill} </SkillsItemS>
          ))}
        </SkillsListS>
        <TextS accent>
          Rating: {rating}
          <Typography component="legend" />
          <Rating
            name="read-only"
            value={rating}
            precision={0.1}
            size="small"
            readOnly
          />
        </TextS>
      </LinkItemS>
    </ListItemS>
  );
};

export default CoursesItem;
