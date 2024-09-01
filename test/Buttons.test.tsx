import { cleanup, render, screen } from "@testing-library/react";
import React from "react";
import userEvent from "@testing-library/user-event";
import TestApp from "./TestApp";
import { vi } from "vitest";

describe("Buttons", () => {
  afterEach(() => cleanup());

  it("New-Quote button should change the quote", async () => {
    render(<TestApp />);
    const quote = await screen.findByRole("blockquote");
    const newQuoteButton = await screen.findByTestId("new-quote-button");

    const user = userEvent.setup();
    await user.click(newQuoteButton);

    const quote2 = await screen.findByRole("blockquote");
    expect(quote.textContent).not.toBe(quote2.textContent);
  });

  it("Copy button should copy the quote", async () => {
    render(<TestApp />);
    const quote = await screen.findByRole("blockquote");
    const quoteContent = new RegExp(quote.textContent ?? "", "gi");
    const copyButton = await screen.findByTestId("copy-button");
    const user = userEvent.setup();
    await user.click(copyButton);

    const copiedText = await navigator.clipboard.readText();

    expect(copiedText).toMatch(quoteContent);
  });

  it("Favorite button should add the quote to favorites", async () => {
    render(<TestApp />);

    const setItemSpy = vi.spyOn(Storage.prototype, "setItem");

    const favoriteButton = await screen.findByTestId("favorite-button");
    const user = userEvent.setup();
    await user.click(favoriteButton);

    expect(setItemSpy).toHaveBeenCalled();
    setItemSpy.mockRestore();
  });

  it("Speak button should read the quote", async () => {
    const mockSpeak = vi.fn();
    const mockCancel = vi.fn();
    let isSpeaking = false;

    vi.stubGlobal("speechSynthesis", {
      speak: (utterance: SpeechSynthesisUtterance) => {
        isSpeaking = true;
        mockSpeak(utterance);
      },
      cancel: (utterance: SpeechSynthesisUtterance) => {
        isSpeaking = false;
        mockCancel(utterance);
      },
      get speaking() {
        return isSpeaking;
      },
    });

    vi.stubGlobal("SpeechSynthesisUtterance", function (text: string) {
      this.text = text;
      this.onend = vi.fn();
    });

    render(<TestApp />);
    const speakButton = await screen.findByTestId("speak-button");
    const user = userEvent.setup();
    await user.click(speakButton);

    const quote = await screen.findByRole("blockquote");
    const quoteContent = new RegExp(quote.textContent ?? "", "gi");

    expect(mockSpeak).toHaveBeenCalled();
    expect(mockSpeak.mock.calls[0][0].text).toMatch(quoteContent);
    expect(speechSynthesis.speaking).toBeTruthy();

    await user.click(speakButton);

    expect(mockCancel).toHaveBeenCalled();
    expect(speechSynthesis.speaking).toBeFalsy();
  });
});
