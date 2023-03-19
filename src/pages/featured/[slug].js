import { imageToUrl } from "@/lib/helpers";
import axios from "axios";
import Head from "next/head";
import Image from "next/image";

const FeaturedPage = ({ featureds }) => {
  const data = featureds.data[0].attributes;
  // console.log(data);
  return (
    <>
      <Head>
        <title>iAdvertise</title>
        <meta name="description" content="iAdvertise" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className=" container my-20 px-5 ">
        <div className="tablet:flex gap-10 ">
          <div className=" tablet:w-1/2 ">
            <Image
              src={imageToUrl(data.thumbnail)}
              height={data.thumbnail.data.attributes.height}
              width={data.thumbnail.data.attributes.width}
              alt="product image"
              className=" rounded-2xl w-full h-[400px] object-cover "
            />
          </div>
          <div className="tablet:w-1/2">
            <div className=" tablet:block desktop:flex flex justify-between items-center">
              <h1 className=" text-2xl font-semibold">{data.title}</h1>
              <div className="badge badge-primary badge-outline mt-20 tablet:mt-0">
                {data.business.data.attributes.name}
              </div>
            </div>
            <p className="mt-5 mb-10">{data.description}</p>
            <h5 className=" text-lg font-medium text-primary">
              {"$" + data.price}
            </h5>
            <h4 className="text-sm font-bold mt-5">Category</h4>
            <h5 className="text-lg">{data.category.data.attributes.name}</h5>
            <div className="">
              <h4 className="text-sm font-bold mt-5">Sub Categories</h4>
              {data.sub_categories.data.map((sub) => (
                <h5 className="badge badge-outline mr-2" key={sub.id}>
                  {sub.attributes.name}
                </h5>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default FeaturedPage;

export const getServerSideProps = async (pageContext) => {
  const slug = pageContext.query.slug;

  const response = await axios.get(
    `${process.env.STRAPI_PUBLIC_URL}/featureds?filters[slug][$eq]=${slug}&populate=*`
  );

  const featureds = await response.data;

  return {
    props: {
      featureds: featureds,
    },
  };
};
