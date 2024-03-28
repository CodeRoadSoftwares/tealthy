import React from "react";

const ImageBanner = ({ image, alt, }) => {
  return (
    <img
      src={image}
      alt={alt ?? "Banner Image"}
      className={`lg:h-[20rem] sm:h-[10rem] md:h-[15rem] object-cover w-full rounded-3xl my-10`}
    />
  );
};

export default ImageBanner;
