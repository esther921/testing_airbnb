import axios from "axios";
import { apiURL } from "constants/apiURL";

const getListingData = async (id: any) => {
  try {
    const resp = await axios.get(`${apiURL}/listings?id=${id}`);
    const listings = resp.data;
    return {
      id,
      listings,
    };
  } catch (error) {
    return error;
  }
};

export default getListingData;
