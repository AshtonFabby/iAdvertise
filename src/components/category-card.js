import Link from "next/link";

const CategoryCard = (props) => {
  return (
    <Link href={`/listings/${props.category.slug}`}>
      <div className="card border border-base-200">
        <div className="card-body">
          <h1 className="card-title capitalize">{props.category.name}</h1>
          <p>{props.category.description}</p>
          <div className=" card-actions">
            {/* FIXME: this is not displaying */}
            {props.category.sub_categories.data.map((sub_category) => {
              <h4
                key={sub_category.id}
                className=" badge badge-outline lowercase"
              >
                {sub_category.attributes.name}
              </h4>;
            })}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
