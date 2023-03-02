import BusinessGrid from "@/components/business_grid";
import Hero from "@/components/hero";
import PaginationItem from "@/components/pagination_item";
import axios from "axios";
import Head from "next/head";

const BusinessesPage = ({ businesses, pageNumber }) => {
  return (
    <>
      <Head>
        <title>iAdvertise</title>
        <meta name="description" content="iAdvertise" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Hero
          image="/images/hero-image-2.png"
          topText="List your Business"
          bottomText="Are you looking for an effective way to advertise your business,
            products, and services? By placing ads here website, businesses can
            reach a large audience quickly and cheaply."
        />
        <div className=" container">
          <h1 className="text-3xl font-bold mt-20">All businesses</h1>
          <div className=" grid tablet:grid-cols-2 desktop:grid-cols-3 mt-10">
            <BusinessGrid businessData={businesses} />
          </div>
          <PaginationItem
            pageNumber={pageNumber}
            pageRoute="businesses"
            maxPages={businesses.meta.pagination.pageCount}
          />
        </div>
      </main>
    </>
  );
};

export default BusinessesPage;

export const getServerSideProps = async (pageContext) => {
  const pageNumber = pageContext.query.page;

  const response = await axios.get(
    `${process.env.STRAPI_PUBLIC_URL}/businesses?pagination[page]=${pageNumber}&pagination[pageSize]=9&populate=*`
  );

  const businesses = await response.data;

  return {
    props: {
      businesses: businesses,
      pageNumber: pageNumber,
    },
  };
};
