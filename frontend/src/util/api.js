import * as axios from "axios";

const BASE_URL = "https://ur84v76nqd.execute-api.us-east-1.amazonaws.com/dev";

export async function create(equipment) {
  // Naive implementation relying on the frontend component data model
  const response = await axios.post(`${BASE_URL}/equipment`, equipment);
  if (response.status === 200) {
    return response.data;
  }
  return null;
}

export async function list(limit) {
  const response = await axios.get(`${BASE_URL}/equipment${limit === undefined ? '': '?limit=' + limit}`);
  if (response.status === 200) {
    return response.data;
  }
  return [];
}

export async function get(equipmentID) {
  const response = await axios.get(`${BASE_URL}/equipment/${equipmentID}`);
  if (response.status === 200) {
    return response.data;
  }
  return null;
}

export async function populate() {
 const response = await axios.post(`${BASE_URL}/equipment/populate`, {});
  if (response.status === 200) {
    return response.data;
  }
  return null;
}
