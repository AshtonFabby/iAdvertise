import ListingsGrid from "@/components/listings_grid";
import axios from "axios";
import Head from "next/head";

const Category = ({ category }) => {
  const data = category.data[0].attributes;
  return (
    <>
      <Head>
        <title>iAdvertise</title>
        <meta name="description" content="iAdvertise" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container my-20">
        <h1 className="text-2xl text-center font-medium mb-10">{data.name}</h1>
        {/* {console.log(data.listings)} */}
        <ListingsGrid listingsData={data.listings} />
      </main>
    </>
  );
};

export default Category;

export const getServerSideProps = async (pageContext) => {
  const slug = pageContext.query.slug;

  const response = await axios.get(
    `${process.env.STRAPI_PUBLIC_URL}/categories?filters[slug][$eq]=${slug}&populate[1]=listings.thumbnail&populate[0]=sub_categories`
  );

  const category = await response.data;

  return {
    props: {
      category: category,
    },
  };
};
