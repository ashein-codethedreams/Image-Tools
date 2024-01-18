import React, { useState } from "react";
import { Gallery } from "react-grid-gallery";
import Lightbox from "react-18-image-lightbox";
import "react-18-image-lightbox/style.css";
import { Images } from "./images";

const PhotoLightbox = () => {
  const [index, setIndex] = useState(-1);

  const currentImage = Images[index];
  const nextIndex = (index + 1) % Images.length;
  const nextImage = Images[nextIndex] || currentImage;
  const prevIndex = (index + Images.length - 1) % Images.length;
  const prevImage = Images[prevIndex] || currentImage;

  const handleClick = (index) => {
    setIndex(index);
  };

  const handleClose = () => {
    setIndex(-1);
  };
  const handleMovePrev = () => {
    setIndex(prevIndex);
  };
  const handleMoveNext = () => {
    setIndex(nextIndex);
  };

  return (
    <div>
      <h1>Clickable Photos</h1>
      <Gallery
        images={Images}
        onClick={handleClick}
        enableImageSelection={false}
      />
      {currentImage && (
        <Lightbox
          imageLoadErrorMessage="failed to load"
          mainSrc={currentImage.original}
          mainSrcThumbnail={currentImage.src}
          imageTitle={currentImage.caption}
          nextSrc={nextImage.original}
          nextSrcThumbnail={nextImage.src}
          prevSrc={prevImage.original}
          prevSrcThumbnail={prevImage.src}
          onCloseRequest={handleClose}
          onMovePrevRequest={handleMovePrev}
          onMoveNextRequest={handleMoveNext}
        />
      )}
    </div>
  );
};

export default PhotoLightbox;
