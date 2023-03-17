import { useState, useEffect } from 'react';
import { getToken, getCourses } from '../../services/api';
import { colors } from '../../utils/colors';
import { IToken } from '../../interfaces/Token.interface';
import CoursesList from '../../components/CoursesList/CoursesList';
import ScrollTopButton from '../../components/ScrollTopButton/ScrollTopButton';
import Loader from '../../components/Loader';
import { TitleS } from './HomePage.styled';

const HomePage = () => {
  const [currentToken, setCurrentToken] = useState<IToken>();
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
      {currentCourses ? (
        <>
          <TitleS>Current Courses</TitleS>
          <CoursesList currentCourses={currentCourses} />
        </>
      ) : (
        <Loader
          ariaLabel={'ThreeDots'}
          height={100}
          width={100}
          radius={5}
          color={colors.main}
        />
      )}
      <ScrollTopButton />
    </>
  );
};

export default HomePage;
