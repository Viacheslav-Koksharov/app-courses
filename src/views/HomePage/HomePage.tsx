import CoursesList from 'components/CoursesList';
import ScrollTopButton from 'components/ScrollTopButton';
import Loader from 'components/Loader';
import { colors } from 'utils/colors';
import { TitleStyles } from 'views/HomePage/HomePage.styled';

const HomePage = ({ allCourses }) => {
  return (
    <>
      {allCourses ? (
        <>
          <TitleStyles>Current Courses</TitleStyles>
          <CoursesList allCourses={allCourses} />
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
