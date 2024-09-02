import { assets } from "../assets/assets";
import Title from "../components/Title/Title";
import NewsLetterBox from "./../components/NewsLetterBox/NewsLetterBox";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            At TrendMart, we’re driven by a passion for fashion and a commitment
            to transforming the online shopping experience. Our journey began
            with a vision to create a seamless platform where fashion
            enthusiasts can explore and shop for the latest trends effortlessly.
          </p>
          <p>
            Since our launch, we've curated a wide array of stylish and
            high-quality products to cater to diverse tastes and preferences.
            Whether you're searching for the perfect outfit, accessories, or
            unique fashion finds, TrendMart offers a carefully selected range
            from trusted brands.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Our mission at TrendMart is to provide an exceptional shopping
            experience by delivering the latest fashion trends with unmatched
            convenience. We strive to make every shopping journey enjoyable,
            from browsing our collection to receiving your order with ease.
          </p>
        </div>
      </div>

      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Curated Fashion:</b>
          <p className="text-gray-600">
            We meticulously select the latest trends and styles to ensure you
            have access to the best fashion pieces.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Seamless Shopping Experience:</b>
          <p className="text-gray-600">
            Our user-friendly interface and streamlined ordering process make
            shopping simple and enjoyable.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Support:</b>
          <p className="text-gray-600">
            Our dedicated customer service team is here to assist you every step
            of the way, ensuring your satisfaction.
          </p>
        </div>
      </div>
      <NewsLetterBox />
    </div>
  );
};

export default About;
