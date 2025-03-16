import UtilityButtons from "@/components/ui/UtilityButtons";
import { useAppSelector } from "@/redux/hooks";
import Skeleton from "react-loading-skeleton";

function NavUtilityButtons() {
  const imageLoading = useAppSelector((state) => state.image.isLoading);
  const { quoteObject, isLoading } = useAppSelector((state) => state.quote);
  if (!quoteObject || isLoading || imageLoading) {
    return <Skeleton width={40} height={130} />;
  }

  return <UtilityButtons quoteObject={quoteObject} vertical />;
}

export default NavUtilityButtons;
