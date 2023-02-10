export const imageToUrl = (image) => {
  const baseUrl = process.env.NEXT_PUBLIC_STRAPI_ASSETS_URL;

  const fields = image.data.attributes;

  const url = `${baseUrl}${fields.url}`;
  return url;
};

export const twoDecimals = (number) => parseFloat(number).toFixed(2);

export const shorten = (string, length) => {
  return string.length > length ? `${string.substring(0, length)}...` : string;
};

export const formatMyDate = (value, locale = "en-GB") => {
  return new Date(value).toLocaleDateString(locale);
};
