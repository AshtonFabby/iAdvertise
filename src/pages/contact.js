import Head from "next/head";
import { Icon } from "@iconify/react";

const Contact = () => {
  return (
    <>
      <Head>
        <title>iAdvertise - Contact</title>
        <meta name="description" content="iAdvertise" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div
          className="hero min-h-[40vh] z-10"
          style={{ backgroundImage: `url(/images/contact.jpg)` }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-neutral-content container ">
            <div>
              <h1 className="text-5xl font-bold">Contact Us</h1>
            </div>
          </div>
        </div>
        <div className="container my-20 p-5 desktop:flex gap-10 justify-center items-center">
          <div className=" desktop:w-1/2">
            <h1 className="font-semibold text-2xl">Get in touch</h1>

            <p className="my-3">
              Feel tree to contact us any time. We will get back to you as soon
              as we can!
            </p>
            <form
              // method="POST"
              // onSubmit={handleSubmit}
              className=" card mx-auto flex flex-col gap-2"
            >
              <input
                type="text"
                placeholder="Name"
                className="input w-full input-bordered"
              />
              <input
                type="email"
                placeholder="Email"
                className="input w-full input-bordered"
              />
              <textarea
                className="textarea textarea-bordered textarea-lg"
                placeholder="Message"
              ></textarea>
              <button className=" btn btn-secondary">Submit</button>
            </form>
          </div>

          <div className=" container desktop:w-1/2 flex flex-col gap-5">
            <h2 className=" font-medium text-xl">Info</h2>
            <div className=" flex  items-center gap-2 text-xl">
              <Icon width="30" height="30" icon="ic:outline-email" />
              <p>info@iadvertise.store</p>
            </div>
            <div className=" flex  items-center gap-2 text-xl">
              <Icon
                width="30"
                height="30"
                icon="material-symbols:phone-enabled-outline"
              />
              <p>+263 00 000 0000</p>
            </div>
            <div className=" flex  items-center gap-2 text-xl">
              <Icon width="30" height="30" icon="bi:building-fill" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
                accusamus,
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Contact;
