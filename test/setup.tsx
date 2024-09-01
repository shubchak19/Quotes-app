import { vi } from "vitest";
import React from "react";

vi.mock("framer-motion", async (importOriginal) => {
  const framerMotion: typeof import("framer-motion") = await importOriginal();
  return {
    ...framerMotion,
    AnimatePresence: ({ children }) => (
      <framerMotion.AnimatePresence mode={undefined}>
        {children}
      </framerMotion.AnimatePresence>
    ),
  };
});

import { server } from "../src/__mocks__/server";
import "@testing-library/jest-dom";

beforeAll(() => server.listen({ onUnhandledRequest: "error" }));
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
