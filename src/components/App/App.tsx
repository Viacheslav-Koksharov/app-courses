import { useState, useEffect } from 'react';
import { getToken, getCourses } from '../../services/api';
import { IToken } from '../../interfaces/Token.interface';
import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { colors } from '../../utils/colors';
import Container from '../Container/Container';
import Loader from '../Loader/Loader';

const Homepage = lazy(
  () =>
    import('../../views/HomePage/HomePage' /* webpackChunkName: "HomePage" */),
);
const CoursePage = lazy(
  () =>
    import(
      '../../views/CoursePage/CoursePage' /* webpackChunkName: "CoursePage" */
    ),
);
const LessonPage = lazy(
  () =>
    import(
      '../../views/LessonPage/LessonPage' /* webpackChunkName: "LessonPage" */
    ),
);

const App: React.FC = () => {
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
    <Container>
      <Suspense
        fallback={
          <Loader
            ariaLabel={'ThreeDots'}
            height={100}
            width={100}
            radius={5}
            color={colors.main}
          />
        }
      >
        <Routes>
          <Route
            path="/"
            element={<Homepage currentCourses={currentCourses} />}
          />
          <Route path="/courses/:id" element={<CoursePage />}>
            <Route path="lesson" element={<LessonPage />} />
          </Route>
        </Routes>
      </Suspense>
    </Container>
  );
};

export default App;
