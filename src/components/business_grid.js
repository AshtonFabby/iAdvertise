import { shorten } from "@/lib/helpers";
import Image from "next/image";

const BusinessGrid = () => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl tablet:w-[345px] desktop:w-96">
      <figure>
        <Image
          // src={imageToUrl(props.image)}
          src={"/images/Mobile.png"}
          height={543}
          width={928}
          alt={"props.title"}
          className=" w-[387px] h-[227px] object-cover"
        />
      </figure>
      <div className="card-body">
        <div className="avatar">
          <div className="w-14 rounded-full">
            <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
        <h2 className="card-title">
          {shorten("sample title", 20)}
          <div className="badge badge-ghost">
            {shorten("business name", 10)}
          </div>
        </h2>
        <p>{shorten("sample description", 100)}</p>
      </div>
    </div>
  );
};

export default BusinessGrid;
