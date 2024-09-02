import { useContext, useState, useRef } from "react";
import { assets } from "../assets/assets";
import CartTotal from "../components/CartTotal/CartTotal";
import Title from "../components/Title/Title";
import { ShopContext } from "../context/ShopContext";
import route from "./../routes/route.json";

const PlaceOrder = () => {
  const [method, setMethod] = useState("cod");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });
  const [errors, setErrors] = useState({});
  const { navigate } = useContext(ShopContext);

  const inputRefs = useRef({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateEmail = (email) => {
    // Regular expression to validate email ending with @gmail.com
    const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        newErrors[key] = "This field is required";
      }
    });

    // Specific validation for email
    if (formData.email && !validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid Gmail address";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handlePlaceOrder = () => {
    if (validateForm()) {
      navigate(route.ORDERS);
    } else {
      const firstErrorField = Object.keys(errors)[0];
      if (inputRefs.current[firstErrorField]) {
        inputRefs.current[firstErrorField].focus();
      }
    }
  };

  return (
    <div className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t">
      {/* -------------------Left Side --------------------------- */}
      <div className="flex flex-col w-full sm:max-w-[480px]">
        <div className="text-xl sm:text-2xl my-3">
          <Title text1={"DELIVERY"} text2={"INFORMATION"} />
        </div>
        <div className="flex gap-3 mb-4">
          <input
            className={`border border-gray-300 rounded py-1.5 px-3.5 w-full ${
              errors.firstName ? "border-red-500" : ""
            }`}
            type="text"
            name="firstName"
            placeholder="First name"
            value={formData.firstName}
            onChange={handleChange}
            ref={(el) => (inputRefs.current.firstName = el)}
          />
          <input
            className={`border border-gray-300 rounded py-1.5 px-3.5 w-full ${
              errors.lastName ? "border-red-500" : ""
            }`}
            type="text"
            name="lastName"
            placeholder="Last name"
            value={formData.lastName}
            onChange={handleChange}
            ref={(el) => (inputRefs.current.lastName = el)}
          />
        </div>
        <input
          className={`border border-gray-300 rounded py-1.5 px-3.5 w-full mb-4 ${
            errors.email ? "border-red-500" : ""
          }`}
          type="email"
          name="email"
          placeholder="Email address"
          value={formData.email}
          onChange={handleChange}
          ref={(el) => (inputRefs.current.email = el)}
        />
        <input
          className={`border border-gray-300 rounded py-1.5 px-3.5 w-full mb-4 ${
            errors.street ? "border-red-500" : ""
          }`}
          type="text"
          name="street"
          placeholder="Street"
          value={formData.street}
          onChange={handleChange}
          ref={(el) => (inputRefs.current.street = el)}
        />
        <div className="flex gap-3 mb-4">
          <input
            className={`border border-gray-300 rounded py-1.5 px-3.5 w-full ${
              errors.city ? "border-red-500" : ""
            }`}
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
            ref={(el) => (inputRefs.current.city = el)}
          />
          <input
            className={`border border-gray-300 rounded py-1.5 px-3.5 w-full ${
              errors.state ? "border-red-500" : ""
            }`}
            type="text"
            name="state"
            placeholder="State"
            value={formData.state}
            onChange={handleChange}
            ref={(el) => (inputRefs.current.state = el)}
          />
        </div>
        <div className="flex gap-3 mb-4">
          <input
            className={`border border-gray-300 rounded py-1.5 px-3.5 w-full ${
              errors.zipcode ? "border-red-500" : ""
            }`}
            type="number"
            name="zipcode"
            placeholder="Zipcode"
            value={formData.zipcode}
            onChange={handleChange}
            ref={(el) => (inputRefs.current.zipcode = el)}
          />
          <input
            className={`border border-gray-300 rounded py-1.5 px-3.5 w-full ${
              errors.country ? "border-red-500" : ""
            }`}
            type="text"
            name="country"
            placeholder="Country"
            value={formData.country}
            onChange={handleChange}
            ref={(el) => (inputRefs.current.country = el)}
          />
        </div>
        <input
          className={`border border-gray-300 rounded py-1.5 px-3.5 w-full mb-4 ${
            errors.phone ? "border-red-500" : ""
          }`}
          type="number"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
          ref={(el) => (inputRefs.current.phone = el)}
        />
      </div>

      {/* ---------------Right Side ----------------------- */}

      <div className="mt-8">
        <div className="mt-8 min-w-80">
          <CartTotal />
        </div>
        <div className="mt-12">
          <Title text1={"PAYMENT"} text2={"METHOD"} />
          {/* --------------------Payment Method Selection ---------------------------- */}
          <div className="flex gap-3 flex-col lg:flex-row">
            <div
              onClick={() => setMethod("stripe")}
              className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  method === "stripe" ? "bg-green-400" : ""
                }`}
              ></p>
              <img className="h-5 mx-4" src={assets.stripe_logo} alt="" />
            </div>
            <div
              onClick={() => setMethod("razorpay")}
              className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  method === "razorpay" ? "bg-green-400" : ""
                }`}
              ></p>
              <img className="h-5 mx-4" src={assets.razorpay_logo} alt="" />
            </div>
            <div
              onClick={() => setMethod("cod")}
              className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  method === "cod" ? "bg-green-400" : ""
                }`}
              ></p>
              <p className="text-gray-500 text-sm font-medium mx-4">
                CASH ON DELIVERY
              </p>
            </div>
          </div>
          <div className="w-full text-end mt-8">
            <button
              onClick={handlePlaceOrder}
              className="bg-black text-white px-16 py-3 text-sm"
            >
              PLACE ORDER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
