import ImageSlider from "./Components/ImageSlider.js";
import ImageSlider2 from "./Components/ImageSlider2.js";
import ModuleSlider from "./Components/ModuleSlider.js";
import ScratchSlider from "./Components/ScratchSlider.js";
import Gallery from "./Components/Gallery.js";
import bogliasco from "./images/bogliasco.jpg";
import countyClare from "./images/countyClare.jpg";
import craterRock from "./images/craterRock.jpg";
import giauPass from "./images/giauPass.jpg";
function App() {
  const slides = [
    { url: bogliasco, title: "beach" },
    { url: countyClare, title: "boat" },
    { url: craterRock, title: "forest" },
    { url: giauPass, title: "city" },
  ];

  const containerStyles = {
    width: "500px",
    height: "280px",
    margin: "0 auto",
  };
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "5rem" }}>
      <h1>Hello monsterlessons</h1>
      <div style={containerStyles}>
        <ImageSlider2 slides={slides} parentWidth={500} />
      </div>
      <div style={containerStyles}>
        <ImageSlider slides={slides} />
      </div>
      <div>
        <ScratchSlider />
      </div>
      <div>
        <ModuleSlider />
      </div>
      <div>
        <Gallery />
      </div>
    </div>
  );
}

export default App;
