import AnimatedSection from "@/components/animation/AnimatedSection";
import { useAppSelector } from "@/redux/hooks";
import { TriangleAlertIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

function ErrorPage() {
  const navigate = useNavigate();
  const quoteError = useAppSelector(state => state.quote.error);
  const imageError = useAppSelector(state => state.image.error);

  const error = quoteError || imageError;

  function handleClick() {
    navigate("/");
    navigate(0);
  }

  return (
    <AnimatedSection className="h-[100dvh] w-[100dvw] overflow-hidden font-medium text-black text-center text-balance flex-center gap-3">
      <h2 className="flex-center font-bold text-red-900">
        <TriangleAlertIcon fill="gold" stroke="black" size={38} />
        {error}
      </h2>
      <p className="max-w-xl">
        {error
          ? `Looks like something is wrong with your network. Please try again with a stable internet connection`
          : "It look like the URL you entered is incorrect. Please enter the correct url or click below to go the main page"}
      </p>
      <button
        onClick={handleClick}
        className="mt-2 bg-blue-600 text-white px-4 py-2 rounded"
      >
        {error ? "Try again" : "Go to main page"}
      </button>
    </AnimatedSection>
  );
}

export default ErrorPage;
