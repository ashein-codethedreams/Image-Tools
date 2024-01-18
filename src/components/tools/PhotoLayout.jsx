import React, { useState } from "react";
import { Gallery } from "react-grid-gallery";
import { Images } from "./images";

const PhotoLayout = () => {
  const [images, setImages] = useState(Images);

  const handleOnSelect = (index) => {
    const updatedImages = [...images];
    updatedImages[index] = {
      ...updatedImages[index],
      isSelected: !updatedImages[index].isSelected,
    };
    setImages(updatedImages);
  };

  return (
    <div>
      <h1>Selectable Photos</h1>
      <Gallery images={images} onSelect={handleOnSelect} />
    </div>
  );
};

export default PhotoLayout;
