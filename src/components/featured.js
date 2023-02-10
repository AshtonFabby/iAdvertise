import FeaturedItem from "./featured_item";

const Featured = (props) => {
  return (
    <div className=" container mt-20 p-4">
      <h1 className=" text-3xl font-bold">Featured</h1>
      <div className=" grid tablet:grid-cols-2 desktop:grid-cols-3 mt-10">
        {props.featuredData.data.map((feature) => (
          <FeaturedItem
            title={feature.attributes.title}
            image={feature.attributes.thumbnail}
            description={feature.attributes.description}
            price={feature.attributes.price}
            category={feature.attributes.category.data.attributes.name}
            business={feature.attributes.business.data.attributes.name}
          />
        ))}
      </div>
    </div>
  );
};

export default Featured;
