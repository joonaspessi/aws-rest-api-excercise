import * as axios from 'axios';

const BASE_URL =
  'https://k5ajkgsiu5.execute-api.us-east-1.amazonaws.com/development';

export async function create(equipment) {
  // Naive implementation relying on the frontend component data model
  try {
    const response = await axios.post(`${BASE_URL}/equipment`, equipment);
    if (response.status === 200) {
      return response.data;
    }
    return null;
  } catch (e) {
    return null;
  }
}

export async function list(limit) {
  try {
    const response = await axios.get(
      `${BASE_URL}/equipment${limit === undefined ? '' : '?limit=' + limit}`
    );
    if (response.status === 200) {
      return response.data;
    }
    return [];
  } catch (e) {
    return null;
  }
}

export async function get(equipmentID) {
  try {
    const response = await axios.get(`${BASE_URL}/equipment/${equipmentID}`);
    if (response.status === 200) {
      return response.data;
    }
    return null;
  } catch (e) {
    return null;
  }
}

export async function populate() {
  try {
    const response = await axios.post(`${BASE_URL}/equipment/populate`, {});
    if (response.status === 200) {
      return response.data;
    }
    return null;
  } catch (e) {
    return null;
  }
}
