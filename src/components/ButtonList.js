import React from 'react'
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

function ButtonList() {
    const categories=['All','JavaScript','Cricket','News','Tantra','Street food','Cricket','Podcasts','Data Structures','History',
'Live','Tamil Cinema','Chess','Watched','Liked','Liked']

var settings = {
  dots: true,
    infinite: true,
    speed: 1000,
    autoplay: false,
    slidesToShow: 3
};
  return (

    // <p>Helloo</p>

    <Slider {...settings}>
    <div>
      <h3>1</h3>
    </div>
    <div>
      <h3>2</h3>
    </div>
    <div>
      <h3>3</h3>
    </div>
    <div>
      <h3>4</h3>
    </div>
    <div>
      <h3>5</h3>
    </div>
    <div>
      <h3>6</h3>
    </div>
  </Slider>
   
  )
}

export default ButtonList
