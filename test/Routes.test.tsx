import { render, screen, waitFor } from "@testing-library/react";
import React from "react";
import TestApp from "./TestApp";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

describe("Route", () => {
  it("should render the relevant page based on the links", async () => {
    render(<TestApp />);
    expect(await screen.findByTestId("quote-page")).toBeInTheDocument();

    const quotesLink = await screen.findByTestId("quotes");
    const favoritesLink = await screen.findByTestId("favorites");

    const user = userEvent.setup();
    await user.click(favoritesLink);

    await waitFor(() => {
      expect(screen.queryByTestId("quote-page")).not.toBeInTheDocument();
      expect(screen.queryByTestId("favorites-page")).toBeInTheDocument();
    });

    await user.click(quotesLink);

    await waitFor(() => {
      expect(screen.queryByTestId("quote-page")).toBeInTheDocument();
      expect(screen.queryByTestId("favorites-page")).not.toBeInTheDocument();
    });
  });
});
