const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    centerPadding: "0px",
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    
    responsive: [
        {
          breakpoint: 600,
          settings: {
            arrows: false,
            swipeToSlide: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            initialSlide: 2
          }
        }
      ]
};

export default settings;