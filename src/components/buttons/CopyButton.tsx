import { CheckIcon, CopyIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";

function CopyButton({ text }: { text: string }) {
  const [isCopied, setIsCopied] = useState(false);
  const timeoutIdRef = useRef<NodeJS.Timeout>();

  // Resets all states when current quote changes
  useEffect(() => {
    setIsCopied(false);
    return () => clearTimeout(timeoutIdRef.current);
  }, [text]);

  if(!text){
    console.error("text prop is missing in CopyButton component");
    return null;
  }
  // Copies the current quote and author to clipboard
  async function copyToClipboard() {
    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);
      timeoutIdRef.current = setTimeout(() => {
        setIsCopied(false);
      }, 3000);
    } catch (error) {
      setIsCopied(false);
      console.error(error);
    }
  }

  return (
    <button
      title="Copy button"
      data-title={isCopied ? "Quote copied" : "Copy quote"}
      onClick={() => copyToClipboard()}
      className="p-2"
    >
      {isCopied ? <CheckIcon size={"1.2em"}/> : <CopyIcon size={"1.2em"}/>}
    </button>
  );
}

export default CopyButton;