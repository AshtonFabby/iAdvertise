import BusinessItem from "./business_item";

const TopBusinesses = (props) => {
  return (
    <div className=" container p-4">
      <h1 className=" text-3xl font-bold">Top Businesses</h1>
      <BusinessItem bannerImages={props.featured_businessData} />
    </div>
  );
};

export default TopBusinesses;
