// firts import npm i react-alice-carousel  using --force  or --legacy-pers and also its css and the arrows in this are
// shown below the picxs but are not shown in left or right side bcz of no render props 
// and also they can be change using items below
import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import box1 from "../images/box1.png";
import box2 from "../images/box2.png";
import box3 from "../images/box3.png";
import box4 from "../images/box4.png";

const handleDragStart = (e) => e.preventDefault();

// const items = [
//   <img src={box1} onDragStart={handleDragStart} role="presentation" />,
//   <img src={box2} onDragStart={handleDragStart} role="presentation" />,
//   <img src={box3} onDragStart={handleDragStart} role="presentation" />,
//   <img src={box4} onDragStart={handleDragStart} role="presentation" />,
// ];

const items = [
  <div className="item">
    <img
      src={box1}
      width={300}
      height={200}
      style={{ border: "2px solid black", borderRadius: "15px" }}
    />
  </div>,
  <div className="item">
    <img
      src={box2}
      width={300}
      height={200}
      style={{ border: "2px solid black", borderRadius: "15px" }}
    />
  </div>,
  <div className="item">
    <img
      src={box3}
      width={300}
      height={200}
      style={{ border: "2px solid black", borderRadius: "15px" }}
    />
  </div>,
  <div className="item">
    <img
      src={box4}
      width={300}
      height={200}
      style={{ border: "2px solid black", borderRadius: "15px" }}
    />
  </div>,
  <div className="item">
    <img
      src={box1}
      width={300}
      height={200}
      style={{ border: "2px solid black", borderRadius: "15px" }}
    />
  </div>,
  <div className="item">
    <img
      src={box2}
      width={300}
      height={200}
      style={{ border: "2px solid black", borderRadius: "15px" }}
    />
  </div>,
];

const Gallery = () => {
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    768: { items: 3 },
    1150: { items: 4 },
  };

  return (
    <div style={{margin:'1rem'}}>
      <AliceCarousel
        responsive={responsive}
        items={items}
        autoPlay
        autoPlayInterval={2000}
        infinite
        controlsStrategy="alternate"
        disableButtonsControls
      />
    </div>
  );
};
export default Gallery;
