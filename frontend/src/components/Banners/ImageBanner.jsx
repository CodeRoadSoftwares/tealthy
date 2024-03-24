import React from "react";

const ImageBanner = ({ image, alt, opacity, }) => {
  return (
    <img
      src={image}
      alt={alt ?? "Banner Image"}
      className={`h-[20rem] object-cover w-full rounded-3xl my-10 ${opacity}`}
    />
  );
};

export default ImageBanner;
