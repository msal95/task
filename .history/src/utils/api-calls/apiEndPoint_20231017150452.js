import axios from "axios";

const SERVER_URL = `http://localhost:3000/`;

const createAPI = (baseURL) => {
  return axios.create({
    baseURL,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
};

let API = createAPI(SERVER_URL);

// API.interceptors.request.use(
//   async config => {
//     if (!config.headers.authorization) {
//       try {
//         const response = await deviceStorage.getItem('userData');
//         const accessToken = response.userData.userDetail.token;
//         // console.log('🚀 ~ file: apiEndPoint.js:24 ~ accessToken:', accessToken);

//         // Set the authorization header with the access token
//         // config.headers.authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjkzODA5Nzc3LCJpYXQiOjE2OTEyMTc3NzcsImp0aSI6IjFlNDc2ODM0MGYzYjQzZmE4MjAxNWNiNzYxOTFiNGRlIiwiaWQiOjEsImlzX3N0YWZmIjpmYWxzZSwiaXNfc3VwZXJ1c2VyIjp0cnVlLCJpc19hY3RpdmUiOnRydWV9.TQimc5-N744X-MpIYO3CBPq22qrmK3vFaZAmafDi5-4`;
//         config.headers.authorization = `Bearer ${accessToken}`;
//       } catch (error) {
//         console.log('Error:', error);
//       }
//     }
//     return config;
//   },
//   error => {
//     return Promise.reject(error);
//   },
// );

export const resetAPI = (newBaseURL) => {
  API = createAPI(newBaseURL);
};

export default API;
