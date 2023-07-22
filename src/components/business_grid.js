import { imageToUrl, shorten } from "@/lib/helpers";
import Image from "next/image";
import Link from "next/link";

const BusinessGrid = (props) => {
  return props.businessData.data.map((business) => (
    <Link
      key={business.id}
      href={"/businesses/business/" + business.attributes.slug}
    >
      <div className="card w-96 h-60 mb-5 bg-base-100 shadow-lg hover:shadow-xl tablet:w-[345px] desktop:w-96">
        <div className="card-body">
          <div className="avatar">
            <div className="h-14 rounded-full">
              <Image
                src={imageToUrl(business.attributes.logo)}
                // src={"/images/Mobile.png"}
                height="0"
                width="0"
                sizes="100vw"
                alt={business.attributes.name + "logo"}
                className=" w-14 h-14 object-fill"
              />
            </div>
          </div>
          <h2 className="card-title">
            {shorten(business.attributes.name, 20)}
          </h2>
          <p>{shorten(business.attributes.description, 100)}</p>
        </div>
      </div>
    </Link>
  ));
};

export default BusinessGrid;
