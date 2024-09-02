import { Link, useNavigate } from "react-router-dom";
import route from "./../routes/route.json";
import { useEffect, useState } from "react";

const ErrorPage = () => {
  const [timer, setTimer] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    if (timer === 0) {
      navigate(route.HOME);
      return;
    }

    const timeoutId = setTimeout(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, [timer, navigate]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-4">
      <h1 className="text-4xl font-bold text-red-600 mb-4">
        Error: 404 Page Not Found!!!!
      </h1>
      <p className="text-lg font-medium mb-4">
        Please click the link to redirect to{" "}
        <Link
          to={route.HOME}
          className="underline text-blue-500 hover:text-blue-700"
        >
          Home
        </Link>{" "}
        page
      </p>
      <p className="text-lg font-medium">
        or, you will auto redirect to the Home page in {timer} sec
      </p>
    </div>
  );
};

export default ErrorPage;
