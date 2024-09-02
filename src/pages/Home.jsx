import BestSeller from "../components/BestSeller/BestSeller";
import Hero from "../components/Hero/Hero";
import LatestCollection from "../components/LatestCollection/LatestCollection";
import NewsLetterBox from "../components/NewsLetterBox/NewsLetterBox";
import OurPolicy from "../components/OurPolicy/OurPolicy";

const Home = () => {
  return (
    <div>
      <Hero />
      <LatestCollection />
      <BestSeller />
      <OurPolicy />
      <NewsLetterBox />
    </div>
  );
};

export default Home;
