import axios from "axios";

const url = "https://randomuser.me/api/";

async function getUser() {
  try {
    const result = axios.get(url);
    return result;
  } catch (error) {
    throw error;
  }
}

export default {
  getUser
};
