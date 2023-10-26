import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Shop() {
  const [popularMovies, setPopularMovies] = useState([]);
  const [movieId, setMovieId] = useState(""); 
  const [onshow,setOnshow] = useState();
  const [title,setTitle] =useState('');
  const [overview,setOverview] =useState('');
  const [poster,setPoster] =useState('');
  const [vote,setVote]=useState("");


  useEffect(() => {
    const apiKey = "4c4966e82b6f773623d4a4842d88ae9e";
    const baseUrl = "https://api.themoviedb.org/3";

    const popularMoviesUrl = `${baseUrl}/movie/popular?api_key=${apiKey}`;

    axios
      .get(popularMoviesUrl)
      .then((response) => {
        setPopularMovies(response.data.results);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  function handleCardClick(movieId,title,overview,poster,vote) {
    setVote(vote)
    setMovieId(movieId); 
    setTitle(title)
    setOverview(overview)
    setPoster(poster)
    console.log("title: " + title);
    console.log("คลิกที่การ์ดที่มี movie ID: " + movieId);
  }

  return (
    <div className="containershop">
      <div className="positionshop">
        <div className="page">
          <p className="page-black">
            <Link to="/Home" style={{ textDecoration: "none", color: "#FFFFFF" }}>
              HOME
            </Link>
          </p>
          <div></div>
          <p>/</p>
          <p>รวมหนังทั้งหมด</p>
        </div>
        <div className="body-shop">
          <div className="headershop">
            <div className="headerL">
              <h2>หนังทั้งหมด</h2>
              <p>รวมหนังทั้งหมด 3395 รายการ</p>
            </div>
            <div className="headerR">
              <p>เรียงตาม:</p>
              <select className="select">
                <option></option>
                <option>สินค้าใหม่</option>
                <option>ส่วนลดมากที่สุด</option>
                <option>ราคาต่ำสุด</option>
                <option>ราคาสูงสุด</option>
                <option>ซื้อสินค้า</option>
              </select>
            </div>
          </div>
          <div className="body-cardshop">
            {popularMovies.map((movie, index) => (
              <div className="cardshop" onClick={() => {
                handleCardClick(movie.id,movie.original_title,movie.overview,movie.poster_path,movie.vote_average);
                
                setOnshow(!onshow);
              }}>
                <div className="header">
                  <p>{movie.title}</p>
                  <p style={{ color: "#FFA500" }}>{movie.vote_average}</p>
                  <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Detail movieId={movieId} title={title} overview={overview} poster={poster} vote={vote} onshow={onshow} setOnshow={setOnshow} />

    </div>
  );
}

export default Shop;

function Detail({ movieId, title, overview, poster, vote, onshow, setOnshow }) {
  const closeDetail = () => {
    setOnshow(false);
    console.log(onshow)
  }

  if (onshow) {
    return (
      <div className="container-Detail" >
        <div className="closeshop"onClick={closeDetail}></div>
        <div className="card_detail">
          <div className="card_detail1">
          <h2> {title}</h2>
          <p>รายละเอียดหนัง</p>
          <p>{overview}</p>
          <img src={`https://image.tmdb.org/t/p/w500/${poster}`} alt={title} />
          <p>คะแนน: {vote}</p>
          </div>
        </div>
      </div>
    );
  } else {
    return null; 
  }
}


