import Head from "next/head";
import { Icon } from "@iconify/react";
import WhyUs from "@/components/why_us_card";

const About = () => {
  return (
    <>
      <Head>
        <title>iAdvertise - About</title>
        <meta name="description" content="iAdvertise" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div
          className="hero min-h-[70vh] z-10"
          style={{ backgroundImage: `url(/images/hero-image3.png)` }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-neutral-content container ">
            <div>
              <h1 className="text-5xl font-bold">Who Are We</h1>
            </div>
          </div>
        </div>
        <div className="container px-5 mt-20 ">
          <div className="heading relative flex items-center justify-center w-full h-14">
            <div className="absolute">
              <h1 className="text-5xl font-bold opacity-5 text-center z-0">
                ABOUT US
              </h1>
            </div>
            <div className="absolute">
              <p className="text-xl text-center font-medium z-10">
                Digital Experiences
              </p>
            </div>
          </div>
          <p className=" my-10">
            We excel all challenging concepts by offering the best solution, we
            are the face of advertising. We dominate the minimalist industry by
            targeting all universal competitors.
            <br /> iAdvertise.store is an upcoming IT company with a great
            experience in creating advertising solutions and implementing new
            technologies to give its customers a competitive edge. We are global
            providers of various range of first-class services that can uplift
            your business to the next level including Custom software
            development, Web application development, Web design, Mobile app
            development and Digital marketing.
          </p>
        </div>
        <div className="container px-5 tablet:flex items-center">
          <div className="left tablet:w-1/2">
            {/* <img src="/iadvertise.svg" alt="website logo" className=" w-40" /> */}
            <p className="text-3xl font-bold">iAdvertise.store</p>
            <hr className="border-base-100 w-28" />
            <p>We Make Your Passion Our Passion</p>
          </div>
          <div className="right tablet:w-3/4 flex flex-col gap-5">
            <div className="card tablet:card-side shadow-md px-5">
              <figure className="mt-10">
                <Icon
                  icon="ic:baseline-remove-red-eye"
                  width="100"
                  height="100"
                />
              </figure>
              <div className="card-body">
                <h1 className="card-heading font-medium text-2xl">Vision</h1>
                <p>
                  We provide creative, customized advertising solutions that
                  meet our clients' needs by being the preferred partner that
                  brings their passion to the IT world of advertisement and puts
                  them at the forefront of the global market.
                </p>
              </div>
            </div>
            <div className="card tablet:card-side shadow-md px-5">
              <figure className="mt-10 w-28">
                <Icon
                  icon="ic:baseline-rocket-launch"
                  width="100"
                  height="100"
                />
              </figure>
              <div className="card-body">
                <h1 className="card-heading font-medium text-2xl">Mission</h1>
                <p>
                  Our aim is to build long-term relationships with our customers
                  and maintain their confidence by showcasing their capabilities
                  for multinational exposure, hence advertising their face as
                  victors in competitive excellence. We preserve their trust by
                  focusing on quality; cost efficiency, technology and on-time
                  delivery.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container flex justify-center mt-10">
          <div className="card w-96 shadow-md px-5">
            <figure className="mt-10">
              <Icon icon="material-symbols:diamond" width="100" height="100" />
            </figure>
            <div className="card-body text-center">
              <h1 className="card-heading font-medium text-2xl">Values</h1>
              <ul>
                <li>Honesty and Integrity</li>
                <li>Trust</li>
                <li>Collaborative teamwork</li>
                <li>Solutions</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container my-20 p-5">
          <div className="heading relative flex items-center justify-center w-full h-14">
            <div className="absolute">
              <h1 className="text-5xl font-bold opacity-5 text-center z-0">
                ABOUT US
              </h1>
            </div>
            <div className="absolute">
              <p className="text-xl text-center font-medium z-10">
                Why Choose Us?
              </p>
            </div>
          </div>

          <div className="grid gap-6 tablet:grid-cols-2 mt-10">
            <WhyUs
              heading="Your Own Brand."
              body="We help you create your store on our platform, setting up your
            Profiles, goods and services, and creating your own brand."
            />
            <WhyUs
              heading="Personalize On-boarding Experience"
              body="Our experts will work with you to help you with store setup, product
              listing, and successful store launch."
            />
            <WhyUs
              heading="One Dashboard For Everything You Need"
              body="Add, update, and remove product categories and
            information, manage payments, and deliveries using our
            simple dashboard"
            />

            <WhyUs
              heading="Payment"
              body="Direct integration with international and local payment
            "
            />
            <WhyUs
              heading="Sell on Mobile Apps"
              body="We build apps for iOS as well as Android loaded with
            powerful features.
            "
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default About;
