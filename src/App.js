import "./App.css";
import Lightbox from "./components/tools/LightBox";
import MyGallery from "./components/tools/MyGallery";
import NewLightBox from "./components/tools/NewLightBox";
import PhotoLayout from "./components/tools/PhotoLayout";

function App() {
  return (
    <div className="App">
      <MyGallery />
      <br />
      <PhotoLayout />
      <br />
      <Lightbox />
      <br />
      <NewLightBox />
    </div>
  );
}

export default App;
