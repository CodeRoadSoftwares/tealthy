import React from "react";

const ImageBanner = ({ image, alt }) => {
  return (
    <img
      src={image}
      alt={alt ?? "Banner Image"}
      className={`shrink-0 lg:h-[25rem] sm:h-[12rem] md:h-[20rem] object-cover w-full rounded-3xl my-10`}
    />
  );
};

export default ImageBanner;
