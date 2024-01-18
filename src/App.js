import "./App.css";
import Lightbox from "./components/LightBox";
import MyGallery from "./components/MyGallery";
import PhotoLayout from "./components/PhotoLayout";

function App() {
  return (
    <div className="App">
      <MyGallery />
      <br />
      <PhotoLayout />
      <br />
      <Lightbox />
      <br />
    </div>
  );
}

export default App;
