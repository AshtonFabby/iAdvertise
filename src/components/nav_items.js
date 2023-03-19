import Link from "next/link";
import { useState, useEffect } from "react";

const NavItems = () => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/categories`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No Categories</p>;
  return (
    <>
      {data.data.map((category) => (
        <li key={category.id}>
          <Link href={`/listings/${category.attributes.slug}`}>
            {category.attributes.name}
          </Link>
        </li>
      ))}
    </>
  );
};

export default NavItems;
