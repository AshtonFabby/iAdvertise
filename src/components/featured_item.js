import { imageToUrl, shorten, twoDecimals } from "@/lib/helpers";
import Image from "next/image";
import Link from "next/link";

const FeaturedItem = (props) => {
  return (
    <Link href={`/${props.route}/${props.slug}`}>
      <div className="card w-96 h-[440px] bg-base-100 border border-base-300 hover:shadow-lg tablet:w-[345px] desktop:w-96">
        <figure>
          <Image
            src={imageToUrl(props.image)}
            height={543}
            width={928}
            alt={props.title}
            className=" w-[387px] h-[227px] object-fill"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {shorten(props.title, 20)}
            <div className="badge badge-ghost">
              {shorten(props.business, 10)}
            </div>
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
    </Link>
  );
};

export default FeaturedItem;
