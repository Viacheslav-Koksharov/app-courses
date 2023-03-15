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

const LessonPage = () => {
  useEffect(() => {
    if (window.Hls.isSupported()) {
      const video = document.getElementById('video');
      // eslint-disable-next-line no-undef
      var hls = new Hls();
      hls.loadSource(
        'https://wisey.app/videos/how-to-learn/preview/AppleHLS1/preview.m3u8',
      );
      hls.attachMedia(video);
    }
  }, []);
  return (
    <>
      <h2>Lesson Page</h2>
    </>
  );
};

export default LessonPage;
