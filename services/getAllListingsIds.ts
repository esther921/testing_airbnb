import axios from "axios";
import { apiURL } from "constants/apiURL";
import { listingProp } from "types/listingInterface";

const getAllListingsIds = async () => {
  try {
    const resp = await axios.get(
      `${apiURL}/listings?_limit=100
                `
    );

    return resp.data.map((listing: listingProp) => {
      return {
        params: {
          id: listing.id.toString(),
        },
      };
    });
  } catch (error) {
    return error;
  }
};

export default getAllListingsIds;
