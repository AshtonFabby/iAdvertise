import Layout from "@/components/layout";
import LoadingPage from "@/components/loading";
import "@/styles/globals.css";

import { useRouter } from "next/router";
import { useState, useEffect } from "react";

// function PageLoading() {
//   const router = useRouter();

//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const handleStart = (url) => url !== router.asPath && setLoading(true);
//     const handleComplete = (url) =>
//       url === router.asPath &&
//       setTimeout(() => {
//         setLoading(false);
//       }, 1000);

//     router.events.on("routeChangeStart", handleStart);
//     router.events.on("routeChangeComplete", handleComplete);
//     router.events.on("routeChangeError", handleComplete);

//     return () => {
//       router.events.off("routeChangeStart", handleStart);
//       router.events.off("routeChangeComplete", handleComplete);
//       router.events.off("routeChangeError", handleComplete);
//     };
//   });

//   return loading && <Loading />;
// }

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* <PageLoading /> */}
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
