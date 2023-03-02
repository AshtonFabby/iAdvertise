import { imageToUrl } from "@/lib/helpers";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";

const BusinessCard = (props) => {
  const data = props.data;
  return (
    <div className="card desktop:w-3/12 bg-base-100 border border-base-200 h-min">
      <figure className="px-10 pt-10">
        <Image
          width={130}
          height={130}
          src={imageToUrl(data.logo)}
          alt="logo"
          className=" rounded-full w-[130px] h-[130px] object-fill"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{data.name}</h2>
        <span className=" text-sm">{data.tagline}</span>
        <div className="card-actions">
          <div className="grid grid-flow-col gap-4 mt-5">
            {data.email ? (
              <Link href={`mailto:${data.email}`} target="_blank">
                <Icon icon="ic:round-email" width="24" />
              </Link>
            ) : null}
            {data.facebook ? (
              <Link href={data.facebook} target="_blank">
                <Icon icon="ic:baseline-facebook" width="24" />
              </Link>
            ) : null}
            {data.instagram ? (
              <Link href={data.instagram} target="_blank">
                <Icon icon="mdi:instagram" width="24" />
              </Link>
            ) : null}
            {data.twitter ? (
              <Link href={data.twitter} target="_blank">
                <Icon icon="mdi:twitter" width="24" />
              </Link>
            ) : null}
            {data.linkedin ? (
              <Link href={data.linkedin} target="_blank">
                <Icon icon="mdi:linkedin" width="24" />
              </Link>
            ) : null}
          </div>
        </div>
        <p>{data.description}</p>
        <div className="mt-5">
          <h2 className=" text-lg font-semibold">Website</h2>
          <Link
            href={data.website}
            target="_blank"
            className=" text-primary underline"
          >
            {data.website}
          </Link>
        </div>
        <div className="mt-5">
          <h2 className=" text-lg font-semibold">Address</h2>
          <address className="">{data.address}</address>
        </div>
      </div>
    </div>
  );
};

export default BusinessCard;
