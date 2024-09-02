// Login.jsx
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext"; // Ensure correct path
import route from "./../routes/route.json";

const Login = () => {
  const [currentState, setCurrentState] = useState("Login");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { addUserDataHandler } = useContext(UserContext);
  const navigate = useNavigate();

  const loginHandler = () => {
    const storedUser = JSON.parse(localStorage.getItem("user"));

    setLoading(true);
    setError("");
    setTimeout(() => {
      setLoading(false);
      if (
        storedUser &&
        storedUser.email === email &&
        storedUser.password === password
      ) {
        addUserDataHandler(storedUser);
        navigate(route.HOME);
      } else {
        setError("User doesn't exist");
        setTimeout(() => {
          setError("");
        }, 2000);
      }
    }, 1000);
  };

  const signUpHandler = () => {
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (storedUser && storedUser.email === email) {
      setError("User already exists, please login.");
    } else {
      const newUser = { userName, email, password };
      localStorage.setItem("user", JSON.stringify(newUser));
      addUserDataHandler(newUser);
      setError("");
      navigate(route.HOME);
    }
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (currentState === "Login") {
      loginHandler();
    } else {
      signUpHandler();
    }
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800"
    >
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="prata-regular text-3xl">{currentState}</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
      </div>
      {currentState === "Sign Up" && (
        <input
          type="text"
          className="w-full px-3 py-2 border border-gray-800"
          placeholder="Name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          required
        />
      )}
      <input
        type="email"
        className="w-full px-3 py-2 border border-gray-800"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        className="w-full px-3 py-2 border border-gray-800"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <div className="w-full flex justify-between text-sm mt-[-8px]">
        <p className="cursor-pointer">Forgot your password?</p>
        {currentState === "Login" ? (
          <p
            onClick={() => {
              setCurrentState("Sign Up");
              setError("");
            }}
            className="cursor-pointer"
          >
            Create account
          </p>
        ) : (
          <p
            onClick={() => {
              setCurrentState("Login");
              setError("");
            }}
            className="cursor-pointer"
          >
            Login Here
          </p>
        )}
      </div>
      {error && <p className="text-red-500 font-bold">{error}</p>}
      <button
        type="submit"
        className="bg-black text-white font-light px-8 py-2 mt-3 flex items-center justify-center"
        disabled={loading}
      >
        {loading ? (
          <svg
            className="animate-spin h-5 w-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
            ></path>
          </svg>
        ) : currentState === "Login" ? (
          "Sign In"
        ) : (
          "Sign Up"
        )}
      </button>
    </form>
  );
};

export default Login;
