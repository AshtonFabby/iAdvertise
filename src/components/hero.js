import Image from "next/image";

const Hero = (props) => {
  return (
    <div
      className="hero min-h-[70vh]"
      style={{ backgroundImage: `url(${props.image})` }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content container ">
        <div>
          <h1 className="text-5xl font-bold">{props.topText}</h1>
          <p className="py-6">{props.bottomText}</p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
