import { useState, useEffect } from 'react';
import { getToken, getCourses } from '../../services/api';

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

  useEffect(() => {
    if (currentCourses) {
      console.log(currentCourses);
    }
  }, [currentCourses]);

  return <h1>Home Page</h1>;
};

export default HomePage;
