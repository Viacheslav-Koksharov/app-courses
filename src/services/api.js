import axios from 'axios';

const BASE_URL = 'https://api.wisey.app/api/v1';

const getToken = async () => {
  const response = await axios.get(
    `${BASE_URL}/auth/anonymous?platform=subscriptions`,
  );
  const token = await response.data;

  try {
    localStorage.setItem('token', JSON.stringify(token));
    return token;
  } catch (error) {
    console.log(error);
  }
};

const getCourses = async (token) => {
  try {
    const res = await axios.get(`${BASE_URL}/core/preview-courses`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

const getCourseByID = async (courseId) => {
  const currentToken = JSON.parse(localStorage.getItem('token'));
  const res = await axios.get(`${BASE_URL}/core/preview-courses/:${courseId}`, {
    headers: {
      Authorization: `Bearer ${currentToken.token}`,
    },
  });
  console.log(res.data);
  return res.data;
};

export { getToken, getCourses, getCourseByID };
