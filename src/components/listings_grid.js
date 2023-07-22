import { imageToUrl, shorten, twoDecimals } from "@/lib/helpers";
import Image from "next/image";
import Link from "next/link";

const ListingsGrid = (props) => {
  const listings = props.listingsData.data;

  return (
    // <></>
    <div className="grid px-4 gap-5 tablet:grid-cols-2 desktop:grid-cols-3 mt-10">
      {listings.map((listing) => (
        <Link
          key={listing.id}
          href={`/${props.route}/${listing.attributes.slug}`}
        >
          <div className="card h-[440px] w-96 bg-base-100 border border-base-300 tablet:w-[345px] desktop:w-96">
            <figure>
              <Image
                src={imageToUrl(listing.attributes.thumbnail)}
                height="0"
                width="0"
                sizes="100vw"
                alt={listing.attributes.name}
                className=" w-[387px] h-[227px] object-fill"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {shorten(listing.attributes.name, 20)}
                <div className="badge badge-ghost">
                  {shorten(
                    listing.attributes.business.data?.attributes?.name,
                    10
                  )}
                </div>
              </h2>
              <p>{shorten(listing.attributes.description, 100)}</p>
              <p className=" text-lg font-semibold text-secondary">
                ${twoDecimals(listing.attributes.price)}
              </p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">
                  {listing.attributes.category.data?.attributes?.name}
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ListingsGrid;
