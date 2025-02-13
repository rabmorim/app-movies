import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Carousel({ children }) {

    const settings = {
        dots: true,
        infinite: true,
        speed: 200,
        centerMode: true,
        variableWidth: true,
        adaptiveHeight: true,
        //slidesToShow: 5,
        slidesToScroll: 1
    }


    return (
        <div>
            <Slider {...settings}>
                {children}
            </Slider>
        </div>
    )
}

export default Carousel;