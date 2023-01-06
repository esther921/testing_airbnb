import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SearchLocation from "@/components/search";

describe("search component", () => {
  it("Should render anywhere", () => {
    render(<SearchLocation />);
    const text = screen.getByText(/anywhere/i);

    expect(text).toBeInTheDocument();
  });

  it("Should render any week", () => {
    render(<SearchLocation />);
    const text = screen.getByText(/any week/i);

    expect(text).toBeInTheDocument();
  });

  it("Should render add guests", () => {
    render(<SearchLocation />);
    const text = screen.getByText(/add guests/i);

    expect(text).toBeInTheDocument();
  });
});
