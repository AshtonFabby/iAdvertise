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
  // console.log(data);
  return (
    <>
      {data.data.map((category) => (
        <li key={category.id}>
          <a>{category.attributes.name}</a>
        </li>
      ))}
    </>
  );
};

export default NavItems;
