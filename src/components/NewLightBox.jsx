import * as React from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

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

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={[
          {
            src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
          },
          { src: "https://picsum.photos/id/1018/1000/600/" },
          { src: "https://picsum.photos/id/1015/1000/600/" },
        ]}
      />
    </div>
  );
}
