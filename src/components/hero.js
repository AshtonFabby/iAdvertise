import Image from "next/image";
import Link from "next/link";

const Hero = (props) => {
  return (
    <div
      className="hero min-h-[70vh] z-10"
      style={{ backgroundImage: `url(${props.image})` }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content container ">
        <div>
          <h1 className="text-5xl font-bold">{props.topText}</h1>
          <p className="py-6">{props.bottomText}</p>
          <Link href="/signup">
            <button className="btn btn-primary">Get Started</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
