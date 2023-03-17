import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { colors } from '../../utils/colors';
import Container from '../Container/Container';
import Loader from '../Loader/Loader';

const Homepage = lazy(
  () =>
    import('../../views/HomePage/HomePage' /* webpackChunkName: "Homepage" */),
);
const CoursePage = lazy(
  () =>
    import(
      '../../views/CoursePage/CoursePage' /* webpackChunkName: "CoursePage" */
    ),
);
const LessonItem = lazy(
  () => import('../LessonItem/LessonItem' /* webpackChunkName: "LessonItem" */),
);

const App: React.FC = () => {
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
          <Route path="/" element={<Homepage />} />
          <Route path="/courses/:id" element={<CoursePage />}>
            <Route path="lesson" element={<LessonItem lesson={undefined} />} />
          </Route>
        </Routes>
      </Suspense>
    </Container>
  );
};

export default App;
