import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

const LogIn = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  const router = useRouter();
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const LoginUser = async () => {
    if (identifier == "" || password == "") {
      setMessage("username or password can't be empty");
    } else {
      try {
        const user = await axios.post(
          `${process.env.NEXT_PUBLIC_STRAPI_URL}/auth/local`,
          {
            identifier: identifier,
            password: password,
          }
        );

        if (user.status === 200) {
          Cookies.set("uid", user.data.user.id, { expires: 30 });
          Cookies.set("logIn", true, { expires: 30 });
          axios.post("/api/login", { jwt: user.data.jwt });
          router.push("/");
        } else {
          setMessage("something went wrong");
        }
      } catch (error) {
        console.log(error);

        setMessage("username or password is incorrect");
      }
    }
  };

  return (
    <>
      <Head>
        <title>iAdvertise</title>
        <meta name="description" content="iAdvertise" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container">
        <form
          method="POST"
          onSubmit={handleSubmit}
          className=" card desktop:w-1/2 mx-auto h-[63vh]"
        >
          <div className="card-body">
            <Image
              src="/images/logo-app.png"
              height={100}
              width={100}
              alt="iadvertise logo"
              className=" self-center w-[100px] h-[100px] mb-10"
            />
            {message !== "" ? (
              <div className="alert alert-warning shadow-lg">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="stroke-current flex-shrink-0 h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                  </svg>
                  <span>Warning: {message}</span>
                </div>
              </div>
            ) : null}
            <input
              type="text"
              placeholder=" username or email"
              className="input w-full input-bordered"
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
            />
            <input
              type="password"
              placeholder=" password"
              className="input w-full input-bordered "
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={LoginUser} className=" btn btn-secondary">
              login
            </button>
            <p className="">
              I {"don't"} have an account{" "}
              <span className=" font-semibold hover:text-secondary duration-200 ease-in-out">
                <Link href="/signup" className="">
                  Sign Up
                </Link>
              </span>
            </p>
          </div>
        </form>
      </main>
    </>
  );
};

export default LogIn;
