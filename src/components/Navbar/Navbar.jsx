import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { assets } from "./../../assets/assets";
import route from "./../../routes/route.json";
import { ShopContext } from "../../context/ShopContext";
import { UserContext } from "../../context/UserContext";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const { setShowSearch, getCardCount } = useContext(ShopContext);
  const { userData, clearUserDataHandler } = useContext(UserContext);

  const handleLogout = () => {
    localStorage.removeItem("user");
    clearUserDataHandler();
    window.location.href = route.LOGIN;
  };

  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <Link to={route.HOME}>
        <img src={assets.logo} className="wn-50" alt="" />
      </Link>
      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink
          to={route.HOME}
          className="text-base font-medium text-black px-3 py-2 rounded-md"
          style={({ isActive }) =>
            isActive
              ? { textDecoration: "underline", textUnderlineOffset: "4px" }
              : {}
          }
        >
          HOME
        </NavLink>
        <NavLink
          to={route.COLLECTION}
          className="text-base font-medium text-black px-3 py-2 rounded-md"
          style={({ isActive }) =>
            isActive
              ? { textDecoration: "underline", textUnderlineOffset: "4px" }
              : {}
          }
        >
          COLLECTION
        </NavLink>
        <NavLink
          to={route.ABOUT}
          className="text-base font-medium text-black px-3 py-2 rounded-md"
          style={({ isActive }) =>
            isActive
              ? { textDecoration: "underline", textUnderlineOffset: "4px" }
              : {}
          }
        >
          ABOUT
        </NavLink>
        <NavLink
          to={route.CONTACT}
          className="text-base font-medium text-black px-3 py-2 rounded-md"
          style={({ isActive }) =>
            isActive
              ? { textDecoration: "underline", textUnderlineOffset: "4px" }
              : {}
          }
        >
          CONTACT
        </NavLink>
      </ul>
      <div className="flex items-center justify-between gap-4 sm:gap-6">
        <Link to={route.COLLECTION}>
          <img
            onClick={() => setShowSearch(true)}
            src={assets.search_icon}
            className="w-5 cursor-pointer"
            alt="Search"
          />
        </Link>
        <div className="group relative">
          {userData.userName ? (
            <div className="flex items-center gap-2">
              <img
                className="w-5 cursor-pointer"
                src={assets.profile_icon}
                alt="Profile"
              />
              <p className="mt-1">{userData.userName}</p>
            </div>
          ) : (
            <Link to={route.LOGIN} className="flex items-center gap-2">
              <img
                className="w-5 cursor-pointer"
                src={assets.profile_icon}
                alt="Login"
              />
              <p>Login</p>
            </Link>
          )}
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
            {userData.userName && (
              <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
                <Link to={route.HOME}>
                  <p className="cursor-pointer hover:text-black">My Profile</p>
                </Link>
                <Link to={route.ORDERS}>
                  <p className="cursor-pointer hover:text-black">Orders</p>
                </Link>
                <p
                  onClick={handleLogout}
                  className="cursor-pointer hover:text-black"
                >
                  Logout
                </p>
              </div>
            )}
          </div>
        </div>

        <Link to={route.CART} className="relative">
          <img src={assets.cart_icon} className="w-5 min-w-5" alt="Cart" />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
            {getCardCount()}
          </p>
        </Link>
        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          className="w-5 cursor-pointer sm:hidden"
          alt="Menu"
        />
      </div>
      {/* Sidebar menu for small screens */}
      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col text-gray-600">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 p-3 cursor-pointer"
          >
            <img className="h-4 rotate-180" src={assets.dropdown_icon} alt="" />
            <p>Back</p>
          </div>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to={route.HOME}
          >
            HOME
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to={route.COLLECTION}
          >
            COLLECTION
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to={route.ABOUT}
          >
            ABOUT
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to={route.CONTACT}
          >
            CONTACT
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
