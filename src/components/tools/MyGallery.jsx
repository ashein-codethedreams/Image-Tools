import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { Images } from "./images";

const MyGallery = () => {
  return (
    <div>
      <h1>Image Gallery</h1>
      <ImageGallery items={Images} />
    </div>
  );
};
export default MyGallery;
