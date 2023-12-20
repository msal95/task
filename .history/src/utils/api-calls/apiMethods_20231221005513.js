import API from "./apiEndPoint";

export const createPost = async (data) => {
  return await API.post(`/api/crud/create-post`, data);
};

export const getAllPosts = async () => {
  const res = await API.get(`/api/crud/get-all-posts`);
  return res.data;
};

export const updatePost = async (id, data) => {
  console.log("🚀 ~ file: apiMethods.js:13 ~ updatePost ~ id, data:", id, data);
  return await API.put(`/api/crud/update-post/${id}`, data);
};

export const getSinglePost = async (uID) => {
  return await API.get(`/api/crud/get-single-post/${uID}`);
};

export const deletePost = async (uID) => {
  return await API.delete(`/api/crud/delete-post/${uID}`);
};
