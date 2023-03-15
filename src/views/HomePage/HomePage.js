import { useState, useEffect } from 'react';
import { Title } from "./HomePage.styled";
import { getToken, getCourses } from '../../services/api';
import CoursesList from '../../components/CoursesList/CoursesList'
import Button from "../../components/Button/Button";
import ScrollButton from "../../components/ScrollTopButton/ScrollTopButton";

const HomePage = () => {
  const imagePerPage = 10;
  const [currentToken, setCurrentToken] = useState(null);
  const [currentCourses, setCurrentCourses] = useState(null);
  const [next, setNext] = useState(imagePerPage);

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

  useEffect(() => {
    if (currentCourses) {
      console.log(currentCourses);
    }
  }, [currentCourses]);

  const handleMoreImage = () => {
    setNext(next + imagePerPage);
    scrollTo();
  };

  const scrollTo = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  return (<>
    <Title>Home Page</Title>
    {currentCourses && (<CoursesList currentCourses={currentCourses} />)}
    {next < currentCourses?.length && (
      <Button
        aria-label="load more"
        onClick={handleMoreImage}
      >
        Load more
      </Button>
    )}
    <ScrollButton />
  </>)
};

export default HomePage;
