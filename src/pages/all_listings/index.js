import Featured from "@/components/featured";
import ListingsGrid from "@/components/listings_grid";
import Loading from "@/components/loading";
import PaginationItem from "@/components/pagination_item";
import TopBusinesses from "@/components/top_businesses";
import axios from "axios";
import Head from "next/head";

const AllListings = ({ listings, featured, featured_business }) => {
  console.log(listings);
  return (
    <>
      <Head>
        <title>iAdvertise</title>
        <meta name="description" content="iAdvertise" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" container mb-20">
        <TopBusinesses featured_businessData={featured_business} />
        <Featured featuredData={featured} />
        <h1 className=" text-3xl font-bold mt-5">All Listings</h1>
        <ListingsGrid listingsData={listings} />
        <div className=" my-5"></div>
        <PaginationItem
          pageNumber={1}
          maxPages={listings.meta.pagination.pageCount}
          pageRoute="all_listings"
        />
      </main>
    </>
  );
};

export default AllListings;

export const getServerSideProps = async () => {
  const response = await axios.get(
    `${process.env.STRAPI_PUBLIC_URL}/listings?pagination[page]=1&pagination[pageSize]=9&populate=*`
  );
  const response2 = await axios.get(
    `${process.env.STRAPI_PUBLIC_URL}/featured-businesses?populate=*`
  );
  const response3 = await axios.get(
    `${process.env.STRAPI_PUBLIC_URL}/featureds?populate=*`
  );

  const listings = await response.data;
  const featured_business = await response2.data;
  const featured = await response3.data;

  return {
    props: {
      listings: listings,
      featured: featured,
      featured_business: featured_business,
    },
  };
};
