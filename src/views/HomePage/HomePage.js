import { useEffect } from 'react';
import { getCourses } from '../../services/api';

const HomePage = () => {
  useEffect(() => {
    getCourses();
  });

  return <h1>Home Page</h1>;
};

export default HomePage;
