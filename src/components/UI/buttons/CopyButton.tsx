import { CheckIcon, CopyIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Button from "./Button";

export default function CopyButton({ text }: { text: string }) {
  const [isCopied, setIsCopied] = useState(false);

  const timeoutIdRef = useRef<NodeJS.Timeout>();

  // Resets all states when current quote changes
  useEffect(() => {
    setIsCopied(false);

    return () => clearTimeout(timeoutIdRef.current);
  }, [text]);

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
    <Button
      data-testid="copy-button"
      data-title={isCopied ? "Quote copied" : "Copy quote"}
      variant="round"
      size={30}
      onClick={() => copyToClipboard()}
      title="Copy button"
    >
      {isCopied ? <CheckIcon /> : <CopyIcon />}
    </Button>
  );
}
