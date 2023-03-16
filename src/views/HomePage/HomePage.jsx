import { useState, useEffect } from 'react';
import { Title } from './HomePage.styled';
import { getToken, getCourses } from '../../services/api';
import CoursesList from '../../components/CoursesList/CoursesList';
import ScrollButton from '../../components/ScrollTopButton/ScrollTopButton';

const HomePage = () => {
  const [currentToken, setCurrentToken] = useState(null);
  const [currentCourses, setCurrentCourses] = useState(null);

  useEffect(() => {
    async function getCurrentToken() {
      const token = await getToken();
      setCurrentToken(token);
    }

    getCurrentToken();
  }, []);

  useEffect(() => {
    async function getCurrentCourses() {
      if (currentToken && currentToken.token) {
        const { token } = currentToken;
        const courses = await getCourses(token);
        setCurrentCourses(courses);
      }
    }

    getCurrentCourses();
  }, [currentToken]);

  return (
    <>
      <Title>Home Page</Title>
      {currentCourses && <CoursesList currentCourses={currentCourses} />}
      <ScrollButton />
    </>
  );
};

export default HomePage;
