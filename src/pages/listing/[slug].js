import { imageToUrl } from "@/lib/helpers";
import axios from "axios";
import Head from "next/head";
import Image from "next/image";

const Listing = ({ listings }) => {
  const data = listings.data[0].attributes;
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
              height="0"
              width="0"
              sizes="100vw"
              alt="product image"
              className=" rounded-2xl w-full h-[400px] object-fit "
            />
          </div>
          <div className="tablet:w-1/2">
            <div className=" flex justify-between items-center">
              <h1 className=" text-2xl font-semibold">{data.name}</h1>{" "}
              <div className="badge badge-primary badge-outline">
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

        {/* FIXME: not getting images from api */}
        <div className=" grid grid-cols-5">
          {/* {console.log(data.showcase)} */}
          {/* {data.showcase.data.map((show) => {
            <div className="h-32 card w-60 bg-red-400 mt-5">
              <Image src={imageToUrl(show)} />
            </div>;
          })} */}
        </div>
      </main>
    </>
  );
};

export default Listing;

export const getServerSideProps = async (pageContext) => {
  const slug = pageContext.query.slug;

  const response = await axios.get(
    `${process.env.STRAPI_PUBLIC_URL}/listings?filters[slug][$eq]=${slug}&populate=*`
  );

  const listings = await response.data;

  return {
    props: {
      listings: listings,
    },
  };
};
