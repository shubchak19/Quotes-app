import { AudioLinesIcon, LoaderIcon, Volume2Icon } from "lucide-react";
import { useEffect, useState } from "react";
function SpeakButton({ text }: { text: string }) {
  const [speak, setSpeak] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const speech = window.speechSynthesis;

    if (speak) {
      setIsLoading(true);
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.onstart = () => setIsLoading(false);
      utterance.onend = () => setSpeak(false);
      speech.speak(utterance);
    } else {
      setIsLoading(false);
      speech.cancel();
    }

    return () => speech.cancel();
  }, [text, speak]);

  if(!text){
    console.error("text prop is missing in SpeakButton component");
    return null;
  }

  return (
    <button
      title="Speak button"
      className="p-2"
      data-title={isLoading ? "Preparing" : speak ? "Reading" : "Read quote"}
      onClick={() => setSpeak(!speak)}
    >
      {isLoading ? (
        <LoaderIcon className="animate-spin" size={"1.2em"} />
      ) : speak ? (
        <AudioLinesIcon className="animate-pulse" size={"1.2em"} />
      ) : (
        <Volume2Icon size={"1.2em"} />
      )}
    </button>
  );
}

export default SpeakButton;
