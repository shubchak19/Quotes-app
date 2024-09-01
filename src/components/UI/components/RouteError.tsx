import { Link } from "react-router-dom";

export default function RouteError() {
  return (
    <div className="h-screen w-screen font-medium text-white text-xl lg:text-2xl flex flex-col justify-center items-center bg-red-900">
      <h1 className="">
        It look like the URL you entered is incorrect.<br></br> Please click
        below to go the main page
      </h1>
      <Link to="/" className="mt-2 underline underline-offset-8">
        Go to main page
      </Link>
    </div>
  );
}
