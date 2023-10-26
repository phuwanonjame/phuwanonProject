import React, { useState } from "react";


function SlideShow() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "https://images2.alphacoders.com/133/1331125.jpeg",
    "https://m.media-amazon.com/images/M/MV5BYzg2ZWIzYmEtZjVmZC00ZjhhLWFhYTYtY2ZmY2Q0ZTVjY2FhXkEyXkFqcGdeQXVyMTE0MzQwMjgz._V1_QL75_UY281_CR18",
    "https://wallpapers.com/images/hd/ellen-ripley-alien-movie-srtz5jjdu58tb9xo.jpg",
  ];

  const handleButton = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div>
      <div className="slideshow-image">
        <img src={images[currentIndex]} alt='wall' />
        <div className="next-button">
          <button
            className="button-wall"
            onClick={() => handleButton(0)}
          ></button>
          <button
            className="button-wall"
            onClick={() => handleButton(1)}
          ></button>
          <button
            className="button-wall"
            onClick={() => handleButton(2)}
          ></button>
        </div>
      </div>
    </div>
  );
}

function Home() {

  return (
    <div className="body-home">
      <div className="home-page" >
        <SlideShow />
        
        <div className="movienew">
          <h2 className="Htext-newmovie">New Movies 2023</h2>
          <p className="text-newmovie">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            blanditiis voluptatem non, dicta ducimus, ipsam doloremque, rerum
            labore necessitatibus natus commodi fugit id. Accusamus nesciunt
            pariatur enim aperiam fuga. Ducimus.
            
          </p>
          <div className="container-card">
            <div className="card">
              <div className="card-body">
                <div className="title-card">
                  <img
                    src="https://i.pinimg.com/originals/c0/99/9e/c0999e45d3a4a017a4097eb1eb893a72.jpg"
                    alt="Wallpaper"
                  />
                </div>
              </div>

              <div className="card-body">
                <div className="title-card">
                  <img
                    src="https://wallpapers.com/images/hd/ellen-ripley-alien-movie-srtz5jjdu58tb9xo.jpg"
                    alt="Wallpaper"
                  />
                </div>
              </div>
              <div className="card-body">
                <div className="title-card">
                  <img
                    src="https://images4.alphacoders.com/133/1336451.jpg"
                    alt="Wallpaper"
                  />
                </div>
              </div>
              <div className="card-body">
                <div className="title-card">
                  <img
                    src="https://4kwallpapers.com/images/wallpapers/fast-x-2023-movies-1125x2436-11236.jpg"
                    alt="Wallpaper"
                  />
                </div>
              </div>

              <div className="card-body">
                <div className="title-card">
                  <img
                    src="https://thesunflower.com/wp-content/uploads/2021/10/Dune.jpg"
                    alt="Wallpaper"
                  />
                </div>
              </div>
              <div className="card-body">
                <div className="title-card">
                  <img
                    src="https://w0.peakpx.com/wallpaper/324/121/HD-wallpaper-new-2023-movie-john-wick-4-poster-movie-thumbnail.jpg"
                    alt="Wallpaper"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Home;
