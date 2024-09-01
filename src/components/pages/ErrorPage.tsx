import { TriangleAlertIcon } from "lucide-react";
import TryAgainButton from "../UI/buttons/TryAgainButton";

export default function ErrorPage() {
  return (
    <>
      <div className="w-screen h-screen flex flex-col justify-center items-center gap-3 text-white text-center relative bg-red-950 p-6 font-medium">
        <TriangleAlertIcon fill="gold" stroke="black" size={38} />
        <p
          data-testid="error"
          className="text-lg sm:text-xl lg:text-2xl w-10/12 max-w-[30rem] mb-4"
        >
          It looks like there was a problem connecting to the server. Please
          check your internet connection and try again later.
        </p>
        {/* Button to refetch quotes and toggle theme*/}
        <div className="absolute bottom-4 w-11/12 sm:static">
          <TryAgainButton />
        </div>
      </div>
    </>
  );
}
