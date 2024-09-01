import { AudioLinesIcon, LoaderIcon, Volume2Icon } from "lucide-react";
import { useEffect, useState } from "react";
import Button from "./Button";

export default function SpeakButton({ text }: { text: string }) {
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

  return (
    <Button
      data-title={isLoading ? "Preparing" : speak ? "Reading" : "Read quote"}
      data-testid="speak-button"
      size={30}
      variant="round"
      onClick={() => setSpeak(!speak)}
      title="Speak button"
    >
      {isLoading ? (
        <LoaderIcon className="animate-spin" />
      ) : speak ? (
        <AudioLinesIcon className="animate-pulse" />
      ) : (
        <Volume2Icon />
      )}
    </Button>
  );
}
