import { useState, useEffect } from 'react';
import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import Container from 'components/Container';
import Loader from 'components/Loader';
import Error from 'components/Error';
import site_unavailable from 'images/site_unavailable.jpg';
import route_unavailable from 'images/route_unavailable.jpg';
import { getToken, getCourses } from 'services/api';
import { colors } from 'utils/colors';

const Homepage = lazy(
  () => import('views/HomePage/index' /* webpackChunkName: 'HomePage' */),
);
const CoursePage = lazy(
  () => import('views/CoursePage/index' /* webpackChunkName: 'CoursePage' */),
);
const LessonPage = lazy(
  () => import('views/LessonPage/index' /* webpackChunkName: 'LessonPage' */),
);

const App: React.FC = () => {
  const [courses, setCourses] = useState(null);
  const [error, setError] = useState(null);
  const { main } = colors;

  useEffect(() => {
    getToken()
      .then(({ token }) => getCourses(token))
      .then(response => {
        if (response.message) {
          setError(response.message);
        } else {
          setCourses(response);
        }
      })
      .catch(({ message }) => setError(message));
  }, []);

  return (
    <Container>
      <Suspense
        fallback={
          <Loader
            ariaLabel={'ThreeDots'}
            height={100}
            width={100}
            radius={5}
            color={main}
          />
        }
      >
        {error ? (
          <Error error={error} image={site_unavailable} />
        ) : (
          <Routes>
            <Route path='/' element={<Homepage allCourses={courses} />} />
            <Route path='/courses/:id' element={<CoursePage />}>
              <Route path='lesson' element={<LessonPage />} />
            </Route>
            <Route
              path='*'
              element={<Error image={route_unavailable} route />}
            />
          </Routes>
        )}
      </Suspense>
      <ToastContainer />
    </Container>
  );
};

export default App;
