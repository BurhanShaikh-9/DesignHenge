import React, { Children } from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


export const CarouselComponent = ({ children }) => {

    const settings = {
        dots: false,
        variableWidth: true,
        // infinite: true,
        speed: 500,
        // slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };
    return (
        <React.Fragment>
            <Slider {...settings}>
                {children}
            </Slider>
        </React.Fragment>
    )
}
