import { imageToUrl, shorten, twoDecimals } from "@/lib/helpers";
import Image from "next/image";

const FeaturedItem = (props) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl tablet:w-[345px] desktop:w-96">
      <figure>
        <Image
          src={imageToUrl(props.image)}
          height={543}
          width={928}
          alt={props.title}
          className=" w-[387px] h-[227px] object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {shorten(props.title, 20)}
          <div className="badge badge-ghost">{shorten(props.business, 10)}</div>
        </h2>
        <p>{shorten(props.description, 100)}</p>
        <p className=" text-lg font-semibold text-secondary">
          ${twoDecimals(props.price)}
        </p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">{props.category}</div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedItem;
