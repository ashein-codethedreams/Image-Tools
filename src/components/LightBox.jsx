import React, { useState } from "react";
import Lightbox from "react-18-image-lightbox";
import "react-18-image-lightbox/style.css"; // This only needs to be imported once in your app

const images = [
  "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
  "https://picsum.photos/id/1018/1000/600/",
  "https://picsum.photos/id/1015/1000/600/",
  "https://picsum.photos/id/1019/1000/600/",
];

const PhotoLightbox = () => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenLightbox = () => {
    setIsOpen(true);
  };

  const handleCloseLightbox = () => {
    setIsOpen(false);
  };

  const handleMovePrev = () => {
    setPhotoIndex((photoIndex + images.length - 1) % images.length);
  };

  const handleMoveNext = () => {
    setPhotoIndex((photoIndex + 1) % images.length);
  };

  return (
    <div>
      <button
        type="button"
        onClick={handleOpenLightbox}
        style={{ width: "200px", height: "50px" }}
      >
        Open Lightbox
      </button>

      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={handleCloseLightbox}
          onMovePrevRequest={handleMovePrev}
          onMoveNextRequest={handleMoveNext}
        />
      )}
    </div>
  );
};

export default PhotoLightbox;
