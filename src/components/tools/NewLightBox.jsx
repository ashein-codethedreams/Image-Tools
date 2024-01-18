import * as React from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { Images } from "./images";

export default function NewLightBox() {
  const [open, setOpen] = React.useState(false);

  return (
    <div style={{ padding: "50px 0px" }}>
      <button
        style={{ height: "50px", width: "200px" }}
        type="button"
        onClick={() => setOpen(true)}
      >
        Open Lightbox
      </button>

      <Lightbox open={open} close={() => setOpen(false)} slides={Images} />
    </div>
  );
}
