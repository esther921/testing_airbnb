import axios from "axios";
import { apiURL } from "constants/apiURL";

const getListings = async () => {
  try {
    const resp = await axios.get(
      `${apiURL}/listings?_limit=20
          `
    );

    return resp.data;
  } catch (error) {
    return error;
  }
};

export default getListings;
