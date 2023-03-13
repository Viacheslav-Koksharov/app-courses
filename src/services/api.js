import axios from 'axios';

const BASE_URL = 'https://api.wisey.app/api/v1';

const getToken = async () => {
  const response = await axios.get(
    `${BASE_URL}/auth/anonymous?platform=subscriptions`,
  );
  return await response.data;
};

const getCourses = async () => {
  const currentToken = await getToken();
  const { token } = currentToken;
  const res = await axios.get(`${BASE_URL}/core/preview-courses`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  console.log(res.data);
  return res.data;
};

export { getCourses };
