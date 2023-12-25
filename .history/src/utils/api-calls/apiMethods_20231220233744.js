import API from "./apiEndPoint";

export const createPost = async (data) => {
  return await API.post(`/api/crud/create-post`, data);
};

export const getAllCompanies = async () => {
  const res = await API.get(`/api/company/get-companies`);
  return res.data;
};

export const updateCompanyStatus = async (id, data) => {
  return await API.patch(`/api/company/update-suspended-status?id=${id}`, data);
};

export const addBillingDetails = async (data) => {
  return await API.post(`/api/company/add-billing-details`, data);
};

export const addPaymentDetails = async (data) => {
  return await API.post(`/api/user/add-payment-details`, data);
};

export const getAllUsers = async (uID) => {
  return await API.get(`/api/user/get-employees?uID=${uID}`);
};

export const getSingleEmployeeDetails = async (uID) => {
  return await API.get(`/api/user/get-employee/${uID}`);
};

export const UpdateUser = async (uID, data) => {
  return await API.patch(`/api/user/update-employee?uID=${uID}`, data);
};

export const addUser = async (data) => {
  return await API.post(`/api/user/add-employees`, data);
};

//
export const addAuthorization = async (data) => {
  return await API.post(`/api/user/add-authorization`, data);
};

export const getAuthorization = async (uID) => {
  return await API.get(`/api/user/get-authorization/${uID}`);
};

export const getUserProfileData = async (uID) => {
  return await API.get(`/api/user/get-user-profile/${uID}`);
};

export const updateUserProfileData = async (uID, data) => {
  return await API.patch(`/api/user/update-user-profile/${uID}`, data);
};

export const updateAuthorization = async (uID, data) => {
  return await API.patch(`/api/user/update-authorization/${uID}`, data);
};

export const getEmployeeRights = async (uID) => {
  return await API.get(`/api/user/get-employee-rights/${uID}`);
};

export const getApprovingAuthority = async (cID) => {
  return await API.get(`/api/risk-assessments/get-approving-authority/${cID}`);
};

export const addRiskAssessmentData = async (data) => {
  return await API.post(`/api/risk-assessments/add-risk-assessment/`, data);
};

export const updateRiskAssessmentData = async (riskId, data) => {
  return await API.patch(
    `/api/risk-assessments/update-risk-assessment/${riskId}`,
    data
  );
};

export const getEmployeeRiskAssessment = async (cID) => {
  return await API.get(
    `/api/risk-assessments/get-employee-risk-assessment/${cID}`
  );
};

export const getRiskAssessmentNumber = async () => {
  return await API.get(`/api/risk-assessments/get-risk-assessment-number/`);
};

export const getRiskAssessmentDetails = async (riskId) => {
  return await API.get(
    `/api/risk-assessments/review-risk-assessment-details/${riskId}`
  );
};

export const approvedRiskAssessment = async (riskId, data) => {
  return await API.patch(
    `/api/risk-assessments/approve-risk-assessment/${riskId}`,
    data
  );
};

export const rejectRiskAssessment = async (riskId, data) => {
  return await API.patch(
    `/api/risk-assessments/reject-risk-assessment/${riskId}`,
    data
  );
};

export const implementRiskAssessment = async (riskId) => {
  return await API.patch(
    `/api/risk-assessments/implement-risk-assessment/${riskId}`
  );
};

export const getallCompanyRiskAssessment = async (cID) => {
  return await API.get(
    `/api/risk-assessments/get-all-company-risk-assessment/${cID}`
  );
};

export const updateValidationDate = async (rId) => {
  return await API.post(
    `/api/risk-assessments/validate-risk-assessment/${rId}`
  );
};

export const sendRAForRevission = async (rId, data) => {
  return await API.post(
    `/api/risk-assessments/send-risk-assessment-for-revission/${rId}`,
    data
  );
};

export const getValidationDateOfRiskAssessment = async (rId) => {
  return await API.get(
    `/api/risk-assessments/get-risk-assessment-validation-date/${rId}`
  );
};

export const getRiskAssessmentHistory = async (rId) => {
  return await API.get(
    `/api/risk-assessments/get-risk-assessment-revision-history/${rId}`
  );
};
