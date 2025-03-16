import { useAppDispatch } from "@/redux/hooks";
import { removeFromHistory } from "@/redux/slices/historySlice";
import { FullQuoteObject } from "@/types";
import { Trash2Icon } from "lucide-react";

function DeleteButton({ quoteObject }: { quoteObject: FullQuoteObject }) {
  const dispatch = useAppDispatch();
  if(!quoteObject){
    console.error("quoteObject prop is missing in DeleteButton component");
    return null;
  }
  return (
    <button title="Delete button" data-title="Delete" className="p-1" onClick={() => dispatch(removeFromHistory(quoteObject))}>
      <Trash2Icon size={26} />
    </button>
  );
}

export default DeleteButton;
