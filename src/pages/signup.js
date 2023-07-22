import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

const SignUp = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  const router = useRouter();
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const signUpUser = async () => {
    if (userName == "" || password == "" || email == "") {
      setMessage("Please fill in all fields");
    } else {
      try {
        const user = await axios.post(
          `${process.env.NEXT_PUBLIC_STRAPI_URL}/auth/local/register`,
          {
            username: userName,
            email: email,
            password: password,
          }
        );

        if (user.status === 200) {
          router.push("/login");
        } else {
          setMessage("something went wrong");
        }
      } catch (error) {
        console.log(error);

        setMessage("Something went wrong");
      }
    }
  };

  return (
    <>
      <Head>
        <title>iAdvertise - SignUp</title>
        <meta name="description" content="iAdvertise" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container">
        <form
          method="POST"
          onSubmit={handleSubmit}
          className=" card desktop:w-1/2 mx-auto h-min my-10"
        >
          <div className="card-body">
            <Image
              src="/images/logo-app.png"
              height="0"
              width="0"
              sizes="100vw"
              alt="iadvertise logo"
              className=" self-center w-[100px] h-[100px] mb-10"
            />
            <h1>Sign Up for a free Account</h1>
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
              placeholder="username"
              className="input w-full input-bordered"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <input
              type="email"
              placeholder="email"
              className="input w-full input-bordered"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder=" password"
              className="input w-full input-bordered "
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="password"
              placeholder="confirm password"
              className="input w-full input-bordered "
            />
            <button onClick={signUpUser} className=" btn btn-secondary">
              login
            </button>
            <p className="">
              I {"wan't"} a
              <span className=" font-semibold hover:text-secondary duration-200 ease-in-out">
                <Link href="#" className="text-accent">
                  {` Premium `}
                </Link>
              </span>
              Account
            </p>
          </div>
        </form>
      </main>
    </>
  );
};

export default SignUp;
