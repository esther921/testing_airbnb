import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Head from "next/head";
import Logo from "@/components/logo";
import SearchLocation from "@/components/search";
import Profile from "@/components/profile";
import Header from "@/layout/header";
import HomeMain from "@/layout/homeMain";
import Footer from "@/layout/footer";
import ListingCard from "@/components/listingCard";
import InfiniteScroll from "react-infinite-scroll-component";
import getListings from "services/getListings";
import { listingProp } from "types/listingInterface";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { apiURL } from "constants/apiURL";

export const getStaticProps: GetStaticProps = async () => {
  const listings = await getListings();

  return {
    props: {
      listings: listings,
    },
  };
};

export default function Home({
  listings,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const query = useQuery(
    ["listings"],
    () => {
      return axios(`${apiURL}/listings?_limit=20`) as any;
    },
    {
      initialData: {
        data: listings,
      },
    }
  );

  const [propertiesListings, setPropertiesListings] = useState(query.data.data);
  const [hasMore, setHasMore] = useState(true);

  const getMorelistings = async () => {
    const res = await axios.get(
      `${apiURL}/listings?_start=${propertiesListings.length}&_limit=20`
    );

    const newListings = res.data;
    setPropertiesListings((listings: listingProp[]) => [
      ...listings,
      ...newListings,
    ]);
  };

  /**
   *  Check to see that we have reached the end of our data
   */
  useEffect(() => {
    setHasMore(propertiesListings.length < 120 ? true : false);
    console.log(propertiesListings.length);
  }, [propertiesListings]);

  return (
    <>
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

        <main>
          <InfiniteScroll
            dataLength={propertiesListings.length}
            next={getMorelistings}
            hasMore={hasMore}
            loader={<h4>Loading ...</h4>}
            endMessage={
              <p style={{ textAlign: "center" }}>
                <b>Yay! you have seen it all</b>
              </p>
            }
          >
            <HomeMain>
              {propertiesListings?.map((listing: listingProp) => (
                <ListingCard
                  key={listing.id}
                  id={listing.id}
                  name={listing.name}
                  address={listing.address}
                  price={listing.price}
                  photos={listing.photos}
                />
              ))}
            </HomeMain>
          </InfiniteScroll>
        </main>

        <footer>
          <Footer />
        </footer>
      </>
    </>
  );
}
