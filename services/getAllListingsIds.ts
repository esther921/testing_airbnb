import axios from "axios";
import { listingProp } from "types/listingInterface";

const getAllListingsIds = async () => {
  try {
    const resp = await axios.get(
      `http://localhost:3200/listings
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
