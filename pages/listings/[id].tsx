import Head from "next/head";
import Logo from "@/components/logo";
import SearchLocation from "@/components/search";
import Profile from "@/components/profile";
import Header from "@/layout/header";
import Footer from "@/layout/footer";
import getAllListingsIds from "services/getAllListingsIds";
import getListingData from "services/getListingData";
import { BiMap } from "react-icons/bi";
import { BsHouseDoor, BsCheck2Circle, BsWifi } from "react-icons/bs";
import { MdKitchen, MdOutlineBathroom, MdPool } from "react-icons/md";
import { CgScreen } from "react-icons/cg";
import { propertyProp } from "types/listingInterface";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { apiURL } from "constants/apiURL";

export const getStaticPaths = async () => {
  const paths = await getAllListingsIds();

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({
  params,
}: {
  params: { id: string };
}) => {
  const listingData = await getListingData(params.id);

  return {
    props: {
      listingData,
    },
  };
};

type listingDataProp = {
  listingData: {
    id: string;
    listings: propertyProp[];
  };
};

export default function Property({ listingData }: listingDataProp) {
  const query = useQuery(
    ["listing"],
    () => {
      return axios(`${apiURL}/listings?id=${listingData.id}`) as any;
    },
    {
      initialData: {
        data: listingData.listings,
      },
    }
  );

  let listing;
  if (query) {
    [listing] = query.data.data;
  } else {
    [listing] = listingData.listings;
  }

  return (
    <>
      <Head>
        <title>Hotels&Co </title>
        <meta name="description" content="Hotels&Co website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header>
        <Logo />
        <SearchLocation />
        <Profile />
      </Header>
      <main className="md:px-0 px-14 pt-[80px]">
        <div className="pt-4 md:px-6">
          <h4 className="md: text-[19px] mb-4 font-bold leading-8 md:text-2xl md:mb-3 capitalize max-w-2xl">
            {listing.name}
          </h4>
          <div className="flex items-center">
            <BiMap size={17} className="text-gray-500 mr-2" />
            <p className="md:text-sm subtitle font-semibold text-[13px] truncate underline ">
              {listing.address}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-2 h-[400px] mt-6">
          <div
            style={{ backgroundImage: `url(${listing.photos[0]})` }}
            className="md:col-span-4 md:w-[100%] md:rounded-none col-span-2 row-span-2 bg-center bg-cover rounded-l-2xl rounded-r-none"
          ></div>
          <div
            style={{ backgroundImage: `url(${listing.photos[1]})` }}
            className="md:hidden bg-center bg-cover"
          ></div>
          <div
            style={{ backgroundImage: `url(${listing.photos[2]})` }}
            className="md:hidden  bg-center bg-cover rounded-tr-2xl"
          ></div>
          <div
            style={{ backgroundImage: `url(${listing.photos[3]})` }}
            className="md:hidden  bg-center bg-cover "
          ></div>
          <div
            style={{ backgroundImage: `url(${listing.photos[4]})` }}
            className="md:hidden  bg-center bg-cover rounded-br-2xl"
          ></div>
        </div>
        <div className="md:flex md:flex-col grid grid-cols-4 gap-4 mb-16">
          <div className="md:hidden flex flex-wrap  border border-gray-200 rounded-md py-5 px-6 w-full h-24 justify-between items-center mt-4 col-span-3 row-span-1">
            <div>
              <p className="capitalize text-sm font-semibold text-gray-500 mb-3">
                Bedrooms
              </p>
              <div className="flex items-center">
                <BsHouseDoor size={18} className="text-gray-600 mr-3" />
                <span className="capitalize text-sm font-semibold">
                  {listing.bedrooms}
                </span>
              </div>
            </div>
            <div>
              <p className="capitalize text-sm font-semibold text-gray-500 mb-3">
                Bathrooms
              </p>
              <div className="flex items-center">
                <MdOutlineBathroom size={18} className="text-gray-600 mr-3" />
                <span className="capitalize text-sm font-semibold">
                  {listing.bathrooms}
                </span>
              </div>
            </div>
            <div>
              <p className="capitalize text-sm font-semibold text-gray-500 mb-3">
                Guest
              </p>
              <div className="flex items-center">
                <span className="capitalize text-sm font-semibold">
                  {listing.guests}
                </span>
              </div>
            </div>
            <div>
              <p className="capitalize text-sm font-semibold text-gray-500 mb-3">
                Address
              </p>
              <div className="flex items-center">
                <BiMap size={18} className="text-gray-600 mr-3" />
                <span className="capitalize text-sm font-semibold">
                  {listing.address}
                </span>
              </div>
            </div>
            <div>
              <p className="capitalize text-sm font-semibold text-gray-500 mb-3">
                Status
              </p>
              <div className="flex items-center">
                <BsCheck2Circle size={18} className="text-gray-600 mr-3" />
                <span className="capitalize text-sm font-semibold">
                  available
                </span>
              </div>
            </div>
          </div>

          <div className="md:order-1 md:mb-4">
            <div className="card mt-0">
              <div className="px-4 py-3">
                <h4 className="text-[22px] font-bold mb-3 ">
                  ${listing.price}
                  <span className="font-medium ml-2">night</span>
                </h4>
                <p className="font-semibold mt-3 text-sm">Other info</p>
              </div>

              <div>
                <div className="px-4 my-4">
                  <p className="font-bold text-sm text-gray-600">Amenities</p>
                  <div className="mt-4">
                    <div className="flex items-center my-3">
                      <div className="p-3 rounded-full border border-gray-200">
                        <BsWifi size={15} />
                      </div>
                      <div className="ml-3">
                        <h4 className="text-[13.5px] font-bold mb-1 capitalize">
                          Wifi
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="flex items-center my-3">
                      <div className="p-3 rounded-full border border-gray-200">
                        <MdKitchen size={15} />
                      </div>
                      <div className="ml-3">
                        <h4 className="text-[13.5px] font-bold mb-1 capitalize">
                          Kitchen
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="flex items-center my-3">
                      <div className="p-3 rounded-full border border-gray-200">
                        <MdPool size={15} />
                      </div>
                      <div className="ml-3">
                        <h4 className="text-[13.5px] font-bold mb-1 capitalize">
                          Pool
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="flex items-center my-3">
                      <div className="p-3 rounded-full border border-gray-200">
                        <CgScreen size={15} />
                      </div>
                      <div className="ml-3">
                        <h4 className="text-[13.5px] font-bold mb-1 capitalize">
                          Tv
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="md:mt-6 px-4 col-span-3 mt-[-25%]">
            <h4 className="font-bold mb-3">About this listing</h4>
            <div>
              <div className="markdown font-medium text-[15px] text-gray-500 leading-7">
                {listing.description}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
