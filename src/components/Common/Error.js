import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  return (
    <div className="flex flex-col mt-[16%] items-center w-full h-screen">
      <h1 className="text-gray-600 text-3xl">Oops!!</h1>
      <p className="text-gray-600 text-xl">Something Went Wrong!!</p>
      <p className="text-gray-600 text-xl">
        {err.status + " : " + err.statusText}
      </p>
      <Link to="/">
        <button className="px-4 py-2 m-2 text-gray-800 rounded-lg bg-gray-400 hover:bg-gray-300 duration-200">
          Go To Home Page
        </button>
      </Link>
    </div>
  );
};

export default Error;
