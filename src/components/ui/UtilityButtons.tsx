import AddToFavoritesButton from "@/components/buttons/AddToFavoritesButton";
import CopyButton from "@/components/buttons/CopyButton";
import SpeakButton from "@/components/buttons/SpeakButton";
import { QuoteObject } from "@/types";
import { motion } from "motion/react";
import { fade } from "../animation/variants";

type UtilityButtonProps = {
  quoteObject: QuoteObject;
  vertical?: boolean;
};

function UtilityButtons({ quoteObject, vertical = false }: UtilityButtonProps) {
  if (!quoteObject) return null;
  const { quote, author } = quoteObject;
  const textToSpeak = `${quote} quote said by ${author}`;
  const textToCopy = `"${quote}" \n - ${author}`;

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={fade}
      className={`${
        vertical
          ? "bg-gray-600 w-fit flex-center gap-1 py-2 px-[0.2rem]"
          : "bg-[rgba(255,255,255,0.2)] horizontal px-2 h-fit"
      } rounded-md `}
    >
      {navigator.clipboard && <CopyButton text={textToCopy} />}
      {window.speechSynthesis && <SpeakButton text={textToSpeak} />}
      <AddToFavoritesButton quoteObject={quoteObject} />
    </motion.div>
  );
}

export default UtilityButtons;
