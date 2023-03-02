import CategoryCard from "@/components/category-card";
import axios from "axios";
import Head from "next/head";

const Listings = ({ categories }) => {
  return (
    <>
      <Head>
        <title>iAdvertise</title>
        <meta name="description" content="iAdvertise" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" container my-10">
        <h1 className="text-2xl text-center font-medium">Categories</h1>
        <div className=" grid gap-5 tablet:grid-cols-2 mt-5 desktop:grid-cols-3">
          {categories.data.map((category) => (
            <CategoryCard key={category.id} category={category.attributes} />
          ))}
        </div>
      </main>
    </>
  );
};

export default Listings;

export const getStaticProps = async () => {
  const response = await axios.get(
    `${process.env.STRAPI_PUBLIC_URL}/categories?populate=*`
  );

  const categories = await response.data;

  return {
    props: {
      categories: categories,
    },
  };
};
