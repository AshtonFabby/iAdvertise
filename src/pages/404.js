import Head from "next/head";

const NotFound = () => {
  return (
    <>
      <Head>
        <title>iAdvertise - Page not found</title>
        <meta name="description" content="iAdvertise" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-[60vh] flex justify-center items-center">
        <h1 className=" text-center text-4xl font-bold">Page not found</h1>
      </div>
    </>
  );
};

export default NotFound;
