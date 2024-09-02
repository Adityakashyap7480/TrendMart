import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img src={assets.logo} className="mb-4 border w-50" alt="" />
          <p className="w-full md:w-2/3 text-gray-600">
          TrendMart is your premier destination for the latest in fashion. We pride ourselves on offering a wide range of high-quality apparel and accessories that cater to every style and occasion. Explore our curated collections and stay ahead of the trends with exclusive offers and updates. Thank you for choosing TrendMart—where fashion meets excellence.
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+1-212-456-7890</li>
            <li>contact@trendmart.com</li>
          </ul>
        </div>
      </div>

      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright2024@trendmart.com - All Right Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
