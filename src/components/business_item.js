import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import { imageToUrl } from "@/lib/helpers";

const BusinessItem = (props) => {
  const images = props.bannerImages.data;
  return (
    <>
      <Carousel
        className=" mt-10 tablet:hidden"
        autoPlay={true}
        showStatus={false}
        showThumbs={false}
        infiniteLoop={true}
      >
        {images.map((bannerImage) => (
          <div className=" carousel-item w-full h-[225px]" key={bannerImage.id}>
            <Image
              src={imageToUrl(bannerImage.attributes.mobile_banner)}
              width="0"
              height="0"
              alt="business banner"
              // className=" w-[375px] h-[225px] object-fit"
            />
          </div>
        ))}
      </Carousel>
      <Carousel
        className=" mt-10 max-tablet:hidden"
        autoPlay={true}
        showStatus={false}
        showThumbs={false}
        infiniteLoop={true}
      >
        {images.map((bannerImage) => (
          <div className=" carousel-item w-full h-[438px]" key={bannerImage.id}>
            <Image
              src={imageToUrl(bannerImage.attributes.desktop_banner)}
              width="0"
              height="0"
              sizes="100vw"
              alt="business banner"
              // className=" w-[1366px] h-[438px] object-fit"
            />
          </div>
        ))}
      </Carousel>
    </>
  );
};

export default BusinessItem;
