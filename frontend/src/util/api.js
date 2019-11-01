import * as axios from "axios";

const BASE_URL = "https://ur84v76nqd.execute-api.us-east-1.amazonaws.com/dev";

export async function create(equipment) {
  // Naive implementation relying on the frontend component data model
  const response = await axios.post(`${BASE_URL}/equipment`, equipment);

}

export async function list(limit) {
  const response = await axios.get(`${BASE_URL}/equipment`);
  console.dir(response);

}

export async function get(equipmentID) {

}

export async function populate() {

}
