import { useState } from 'react';
import CoursesItem from '../CoursesItem';
import { List } from './CoursesList.styled';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import usePagination from '../../services/usePagination';

const CoursesList = ({ currentCourses }) => {
  const { courses } = currentCourses;
  const [page, setPage] = useState(1);
  const PER_PAGE = 10;
  const count = Math.ceil(courses.length / PER_PAGE);
  const _DATA = usePagination(courses, PER_PAGE);

  const handleChange = (e, p) => {
    setPage(p);
    _DATA.jump(p);
    scrollToTop();
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <>
      <List>
        {_DATA.currentData().map(course => (
          <CoursesItem key={course.id} course={course}></CoursesItem>
        ))}
      </List>
      <Stack spacing={2}>
        <Pagination
          count={count}
          size="large"
          page={page}
          variant="outlined"
          shape="rounded"
          onChange={handleChange}
        />
      </Stack>
    </>
  );
};

export default CoursesList;
