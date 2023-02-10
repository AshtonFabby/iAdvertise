import BusinessGrid from "@/components/business_grid";
import Hero from "@/components/hero";
import axios from "axios";
import Head from "next/head";

const Businesses = () => {
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
          topText="Advertise your Business"
          bottomText="Are you looking for an effective way to advertise your business,
            products, and services? By placing ads here website, businesses can
            reach a large audience quickly and cheaply."
        />
        <div className=" container">
          <h1 className="text-3xl font-bold mt-20">All businesses</h1>
          <div className=" grid tablet:grid-cols-2 desktop:grid-cols-3 mt-10">
            <BusinessGrid />
          </div>
        </div>
      </main>
    </>
  );
};

export default Businesses;

export const getStaticProps = async () => {
  const response = await axios.get(
    `${process.env.STRAPI_PUBLIC_URL}/businesses?populate=*`
  );
  const response2 = await axios.get(
    `${process.env.STRAPI_PUBLIC_URL}/featured-businesses?populate=*`
  );

  const featured = await response.data;
  const featured_business = await response2.data;

  return {
    props: {
      featured: featured,
      featured_business: featured_business,
    },
  };
};
