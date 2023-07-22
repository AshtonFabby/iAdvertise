import { formatMyDate, shorten } from "@/lib/helpers";
const BusinessListingGrid = (props) => {
  const data = props.listings.data;
  return (
    <div className=" grid mobile:grid-cols-1 desktop:grid-cols-3 gap-3 mt-5">
      {data.map((listing) => (
        <div
          key={listing.id}
          className=" card border border-base-200 hover:shadow-xl"
        >
          <div className="card-body">
            <h2 className=" card-title">{listing.attributes.name}</h2>
            <h5 className=" text-sm">
              {formatMyDate(listing.attributes.createdAt)}
            </h5>
            <p>{shorten(listing.attributes.description, 100)}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BusinessListingGrid;
