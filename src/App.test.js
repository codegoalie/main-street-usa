import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders sign in link", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/sign in/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders register link", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/register/i);
  expect(linkElement).toBeInTheDocument();
});
