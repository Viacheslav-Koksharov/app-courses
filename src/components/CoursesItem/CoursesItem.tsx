import { useEffect, useRef } from 'react';
import Hls from 'hls.js';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { onHoverElement } from 'helpers/hoverHelper';
import { ICoursesItemComponentProps } from 'interfaces/CoursesItem.interfaces';
import {
  ListItemStyles,
  LinkItemStyles,
  ImageContainerStyles,
  TitleStyles,
  TextStyles,
  SkillsTitleStyles,
  SkillsListStyles,
  SkillsItemStyles,
} from 'components/CoursesItem/CoursesItem.styled';

const CoursesItem = ({ course }: ICoursesItemComponentProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const { id, previewImageLink, meta, title, lessonsCount, rating } = course;
  const { courseVideoPreview, skills } = meta;
  const hlsIsSupported = window.Hls.isSupported();
  const videoLink = courseVideoPreview?.link;
  const videoDuration = courseVideoPreview?.duration;

  useEffect(() => {
    if (hlsIsSupported && videoLink && videoDuration) {
      const video = videoRef.current as HTMLMediaElement;

      if (video) {
        video.setAttribute('poster', previewImageLink + '/cover.webp');

        const hls = new Hls();
        hls.loadSource(videoLink);
        hls.attachMedia(video);

        onHoverElement(video);
      }
    }
  }, [course, hlsIsSupported, videoLink, videoDuration, previewImageLink]);

  useEffect(() => {
    const image = imageRef.current;

    if (image) {
      onHoverElement(image, `${previewImageLink + '/cover.webp'}`);
    }
  }, [previewImageLink]);

  return (
    <ListItemStyles key={id}>
      <LinkItemStyles to={`/courses/${id}`}>
        <ImageContainerStyles>
          {videoLink && videoDuration ? (
            <video ref={videoRef} width='100%' height='100%' muted />
          ) : (
            <img
              ref={imageRef}
              src={previewImageLink + '/cover.webp'}
              alt='banner'
            />
          )}
        </ImageContainerStyles>
        <TitleStyles>{title}</TitleStyles>
        <TextStyles>Available lessons: {lessonsCount}</TextStyles>
        <SkillsTitleStyles>Skills:</SkillsTitleStyles>
        <SkillsListStyles>
          {skills?.map(skill => (
            <SkillsItemStyles key={skill}>{skill}</SkillsItemStyles>
          ))}
        </SkillsListStyles>
        <TextStyles accent>
          Rating: {rating}
          <Typography component='legend' />
          <Rating
            name='read-only'
            value={rating}
            precision={0.1}
            size='small'
            readOnly
          />
        </TextStyles>
      </LinkItemStyles>
    </ListItemStyles>
  );
};

export default CoursesItem;
