//first do  npm i react-elastic-carousel
// then it is reposnive and 3 boxes are shown in one line and manually do left to right
// for info of this carousel go to following link https://sag1v.github.io/react-elastic-carousel/

import React from "react";
import Carousel from "react-elastic-carousel";
import box1 from "../images/box1.png";
import box2 from "../images/box2.png";
import box3 from "../images/box3.png";
import box4 from "../images/box4.png";
import "./moduleslider.css"; // Import CSS file for styling

const ModuleSlider = () => {
  const divStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "250px", // height of container changes from here
    width: "100%",
    backgroundColor: "#00008B",
    color: "#fff",
    margin: "0 15px",
    fontSize: "4em",
  };
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>
        Example to set up your carousel in React
      </h1>
      <div className="carousel-container">
        <Carousel breakPoints={breakPoints}>
             {/* for showing only 1 item in one line do this instead below
        <Carousel itemsToShow={1}> */}
              <div style={divStyle}>

            <div className="image-container" >
              <img className="carousel-image" src={box1} alt="Image 1" width={400} height={400} />
            </div>
          </div>
              <div style={divStyle}>

            <div className="image-container">
              <img className="carousel-image" src={box2} alt="Image 2" width={400} height={400} />
            </div>
          </div>
              <div style={divStyle}>

            <div className="image-container">
              <img className="carousel-image" src={box3} alt="Image 3" width={400} height={400} />
            </div>
          </div>
              <div style={divStyle}>

            <div className="image-container">
              <img className="carousel-image" src={box4} alt="Image 4" width={400} height={400} />
            </div>
          </div>
              <div style={divStyle}>

            <div className="image-container">
              <img className="carousel-image" src={box1} alt="Image 5" width={400} height={400} />
            </div>
          </div>
              <div style={divStyle}>

            <div className="image-container">
              <img className="carousel-image" src={box2} alt="Image 6" width={400} height={400} />
            </div>
          </div>
              <div style={divStyle}>

            <div className="image-container" >
              <img className="carousel-image" src={box3} alt="Image 7" width={400} height={400} />
            </div>
          </div>
              <div style={divStyle}>

            <div className="image-container">
              <img className="carousel-image" src={box4} alt="Image 8" width={400} height={400} />
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default ModuleSlider;
