import React, { useEffect, useState } from "react";
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import baseUrl from "../../navigation/base";
import axios from "axios";
import loadings from "../../assets/img/loader.gif";

export default function Hero() {

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getItems();
  },[]);

  function getItems() {
    setLoading(true);
    axios.get(`${baseUrl}/banner?type=Slider`).then(function(response) {
      // console.log (response.data);
      setLoading(false);
      setItems(response.data);
    });
  }
  
  if (loading) {
    // Display a loading indicator
    return <div className="text-center"><img width="120" src={loadings} alt="Loading..." /></div>;
  }

  var settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    autoplay: true,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  
  return (
    <Slider {...settings}>
      {Array.isArray(items) && items.map((user, key) =>
      <section className="section-hero section-shaped" key={key}>
        <img src={(`uploads/${user.banner_img}`)} alt={user.title} width="100%" />
        <div className="carousel-caption" dangerouslySetInnerHTML={{ __html: user.content}}></div>
      </section>
      )}
    </Slider>
  );
}