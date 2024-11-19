import { Link } from "react-router-dom";

export const NotFoundPage = () => {
  return (
    <div className="h-screen max-w-6xl mx-auto  text-center mt-40">
      <h1 className="text-8xl font-bold">404!</h1>
      <p className="text-3xl font-semibold my-6">Oops! Page not found</p>
      <p className="text-xl mb-6">
        The page that you are looking for doesn't exist or has been removed!
      </p>
      <div>
        <Link
          to={"/"}
          className="text-white bg-secondary-color px-4 py-2 text-xl rounded-full font-bold"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};
