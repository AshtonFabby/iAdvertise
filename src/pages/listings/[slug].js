import axios from "axios";

const Category = ({ category }) => {
  console.log(category);
  return <p>hello</p>;
};

export default Category;

export const getServerSideProps = async (pageContext) => {
  const slug = pageContext.query.slug;

  const response = await axios.get(
    `${process.env.STRAPI_PUBLIC_URL}/categories?filters[slug][$eq]=${slug}&populate=*`
  );

  const category = await response.data;

  return {
    props: {
      category: category,
    },
  };
};
