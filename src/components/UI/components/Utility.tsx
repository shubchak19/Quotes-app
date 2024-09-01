import { QuoteType } from "../../../types";
import CopyButton from "../buttons/CopyButton";
import FavoriteButton from "../buttons/FavoriteButton";
import SpeakButton from "../buttons/SpeakButton";

export default function Utility({ quoteObj }: { quoteObj: QuoteType }) {
  const { quote, author } = quoteObj;
  const textToSpeak = `${quote} quote said by ${author}`;
  const textToCopy = `"${quote}" \n - ${author}`;
  return (
    <>
      {navigator.clipboard && <CopyButton text={textToCopy} />}
      {window.speechSynthesis && <SpeakButton text={textToSpeak} />}
      <FavoriteButton quoteObj={quoteObj} />
    </>
  );
}
