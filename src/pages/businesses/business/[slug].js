import { imageToUrl } from "@/lib/helpers";
import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import { Icon } from "@iconify/react";
import Link from "next/link";
import BusinessCard from "@/components/business_card";
import BusinessListingGrid from "@/components/business_listing_grid";

const Business = ({ business }) => {
  const data = business.data[0].attributes;
  // console.log(data);
  return (
    <>
      <Head>
        <title>iAdvertise</title>
        <meta name="description" content="iAdvertise" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" container">
        <div className="content desktop:flex gap-5">
          <BusinessCard data={data} />
          <div className="desktop:w-9/12 ">
            <Image
              src={imageToUrl(data.large_banner)}
              width={1366}
              height={400}
              alt={data.name + "banner"}
              className=" hidden tablet:block "
            />
            <Image
              src={imageToUrl(data.small_banner)}
              width={1366}
              height={400}
              alt={data.name + "banner"}
              className=" tablet:hidden"
            />
            <h2 className=" font-medium text-4xl mt-10">Listings</h2>
            <BusinessListingGrid listings={data.listings} />
          </div>
        </div>
      </main>
    </>
  );
  i;
};

export default Business;

export const getServerSideProps = async (pageContext) => {
  const slug = pageContext.query.slug;

  const response = await axios.get(
    `${process.env.STRAPI_PUBLIC_URL}/businesses?filters[slug][$eq]=${slug}&populate=*`
  );

  const business = await response.data;

  return {
    props: {
      business: business,
    },
  };
};
