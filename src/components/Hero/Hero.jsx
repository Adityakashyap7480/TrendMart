import { assets } from "../../assets/assets";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./Hero.module.css";
const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="flex flex-col sm:flex-row border border-gray-400">
      {/* Hero Left Side */}
      <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
        <div className="text-[#414141]">
          <div className="flex items-center gap-2">
            <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
            <p className="font-medium text-sm md:text-base">OUR BESTSELLERS</p>
          </div>
          <h1 className="prata-regular text-3xl sm:py:-3 lg:text-5xl leading-relaxed my-3">
            Latest Arrivals
          </h1>
          <div className="flex items-center gap-2">
            <p className="font-semibold text-sm md:text-base">SHOP NOW</p>
            <p className="w-8 md:w-11 h-[1px] bg-[#414141]"></p>
          </div>
        </div>
      </div>
      {/* Hero Right Side */}
      <div className={styles["hero-right"]}>
        {" "}
        <Slider {...settings} className="h-full">
          <div className="w-full h-full flex items-center justify-center">
            <img
              className={styles.herosliderimg}
              src={assets.banner_icon1}
              alt="Image 1"
            />
          </div>
          <div className="w-full h-full flex items-center justify-center">
            <img
              className={styles.herosliderimg}
              src={assets.banner_icon2}
              alt="Image 2"
            />
          </div>
          <div className="w-full h-full flex items-center justify-center">
            <img
              className={styles.herosliderimg}
              src={assets.banner_icon3}
              alt="Image 3"
            />
          </div>
          <div className="w-full h-full flex items-center justify-center">
            <img
              className={styles.herosliderimg}
              src={assets.banner_icon4}
              alt="Image 4"
            />
          </div>
          <div className="w-full h-full flex items-center justify-center">
            <img
              className={styles.herosliderimg}
              src={assets.banner_icon5}
              alt="Image 5"
            />
          </div>
          <div className="w-full h-full flex items-center justify-center">
            <img
              className={styles.herosliderimg}
              src={assets.banner_icon6}
              alt="Image 6"
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
