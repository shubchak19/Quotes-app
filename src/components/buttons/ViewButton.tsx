import { useAppDispatch } from "@/redux/hooks";
import { setImage } from "@/redux/slices/imageSlice";
import { setQuote } from "@/redux/slices/quoteSlice";
import { FullQuoteObject } from "@/types";
import { SquareArrowOutUpRightIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

function ViewButton({ quoteObject }: { quoteObject: FullQuoteObject }) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  if(!quoteObject) {
    console.error("quoteObject prop is missing in ViewButton component");
    return null;
  }

  function handleClick() {
    dispatch(setQuote(quoteObject));
    dispatch(setImage(quoteObject.image));
    navigate("/");
  }
  return (
    <button title="View quote button" data-title="View" className="p-1" onClick={handleClick}>
      <SquareArrowOutUpRightIcon size={28} />
    </button>
  );
}

export default ViewButton;
