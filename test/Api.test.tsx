import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import TestApp from "./TestApp";
import { http, HttpResponse } from "msw";
import config from "../src/config";
import { server } from "../src/__mocks__/server";

describe("Data Fetching", () => {
  it("Failed: should show error to screen", async () => {
    server.use(
      http.get(config.QUOTES_URL, () => {
        return new HttpResponse(null, { status: 401 });
      })
    );
    render(<TestApp />);

    // Loading contents
    expect(screen.getByTestId("loading-element")).toBeInTheDocument();

    // quote content
    const error = await screen.findByTestId("error");
    expect(error).toHaveTextContent(/problem connecting to the server/gi);

    const refetchButton = await screen.findByRole("button");
    expect(refetchButton).toBeInTheDocument();
  });

  it("Successful: should render contents to screen", async () => {
    render(<TestApp />);

    // Loading contents
    expect(screen.getByTestId("loading-element")).toBeInTheDocument();

    // quote content
    const quote = await screen.findByRole("blockquote");
    expect(quote).toHaveTextContent(/This is quote/gi);

    const author = await screen.findByRole("figcaption");
    expect(author).toHaveTextContent(/author/gi);
  });
});
