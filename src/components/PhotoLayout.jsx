import React, { useState } from "react";
import { Gallery } from "react-grid-gallery";

const PhotoLayout = () => {
  const [images, setImages] = useState([
    {
      id: 1,
      src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
      width: 320,
      height: 212,
      isSelected: false,
      caption: "After Rain (Jeshu John - designerspics.com)",
    },
    {
      id: 2,
      src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
      width: 320,
      height: 212,
      isSelected: false,
      tags: [
        { value: "Ocean", title: "Ocean" },
        { value: "People", title: "People" },
      ],
      alt: "Boats (Jeshu John - designerspics.com)",
    },
    {
      id: 3,
      src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
      isSelected: false,
      width: 320,
      height: 212,
    },
  ]);

  const handleOnSelect = (index) => {
    const updatedImages = [...images];
    updatedImages[index] = {
      ...updatedImages[index],
      isSelected: !updatedImages[index].isSelected,
    };
    setImages(updatedImages);
  };

  return <Gallery images={images} onSelect={handleOnSelect} />;
};

export default PhotoLayout;
