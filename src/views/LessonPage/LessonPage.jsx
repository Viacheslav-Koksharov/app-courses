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
} from './LessonPage.styled';

const LessonPage = () => {
  return (
    <>
      <h2>Lesson Page</h2>
    </>
  );
};

export default LessonPage;
