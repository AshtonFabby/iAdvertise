import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import Hero from "@/components/hero";
import BusinessesSlider from "@/components/businesses_slider";
import Featured from "@/components/featured";
import TopBusinesses from "@/components/top_businesses";
import axios from "axios";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ featured, featured_business }) {
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
          image="/images/hero-image.png"
          topText="Advertise your Products and Services"
          bottomText="Are you looking for an effective way to advertise your business,
            products, and services? By placing ads here website, businesses can
            reach a large audience quickly and cheaply."
        />
        <Featured featuredData={featured} />
        <div className="mt-10"></div>
        <TopBusinesses featured_businessData={featured_business} />
        {/* <BusinessesSlider /> */}
      </main>
    </>
  );
}

export const getServerSideProps = async () => {
  const response = await axios.get(
    `${process.env.STRAPI_PUBLIC_URL}/featureds?populate=*`
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
