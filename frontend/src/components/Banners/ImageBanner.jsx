import React from "react";

const ImageBanner = ({ image, alt }) => {
  return (
    <img
      src={image}
      alt={alt ?? "Banner Image"}
      className={`shrink-0 h-full object-cover w-full rounded-3xl my-10`}
    />
  );
};

export default ImageBanner;
