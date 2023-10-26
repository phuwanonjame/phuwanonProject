import React, { useState } from "react";
import { Link } from "react-router-dom";

function Footwear() {
  const [indexWall, setIndexWall] = useState(0);
  const wall = [
    "https://w0.peakpx.com/wallpaper/656/117/HD-wallpaper-movie-john-wick-chapter-4.jpg",
    "https://e0.pxfuel.com/wallpapers/424/207/desktop-wallpaper-john-wick-chapter-2-movies-background-and-john-wick-2.jpg",
    "https://sm.ign.com/ign_pk/news/j/john-wick-/john-wick-chapter-4-was-originally-almost-four-hours-long_e624.jpg",
  ];

  const handleImageClick = (imageIndex) => {
    setIndexWall(imageIndex);
  };

  return (
    <div className="footwear-container">
      <div className="positionshop">
        <div className="page">
          <p className="page-black">
            <Link
              to="/Home"
              style={{ textDecoration: "none", color: "#FFFFFF" }}
            >
              HOME
            </Link>
          </p>
          <div></div>
          <p>/</p>
          <p>Footwear</p>
        </div>
        <div className="body-footwear">
          <div className="container-product">
            <div className="productl">
              <img className="img2" src={wall[indexWall]} alt="w" />
              <div className="imgpro">
                <img
                  className="img1"
                  src={wall[0]}
                  alt=""
                  onClick={() => handleImageClick(0)}
                />
                <img
                  className="img1"
                  src={wall[1]}
                  alt=""
                  onClick={() => handleImageClick(1)}
                />
                <img
                  className="img1"
                  src={wall[2]}
                  alt=""
                  onClick={() => handleImageClick(2)}
                />
              </div>
            </div>
            <div className="productr">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo, dolor non sit quae voluptates dolore dolorem incidunt
                iusto, neque animi a consequuntur minima laborum magnam. Aliquid
                autem molestiae atque tempora?
              </p>
              <div className="btn-footwear">
                <button className="btn-foot">ADD</button>
              </div>
            </div>
          </div>
          <div className="container-product">
            <div className="container-listproduct">
              <p>
                The JW3 Sight Block has all the features that we love about the
                traditional JW3 Combat Master but now features a Sight Block. A
                Sight Block is like a Island Barrel or Sight Tracker but has a
                bit more weight at the end of the barrel. The front sight stays
                static while the slide reciprocates and the added material
                (Sight Block) at the end of the barrel helps minimize the
                recoil. The end result is a pistol that has less recoil and
                easier sight acquisition making for one accurate and fast
                shooting firearm.
              </p>
            </div>
            <div className="container-listproduct">
              <img
                src="https://actionsportgames.com/admin/public/getimage.ashx?image=/files/images/ecom/products//19576-003.png&altFmImage_path=/Files/Images/ecom/no-image.png&width=545&height=440&crop=5"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footwear;
