import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "@/pages/index";

describe("Home page", () => {
  it("Should render the appropriate components", () => {
    render(<Home />);
    const headerComponent = screen.getByRole("main");
    expect(headerComponent).toBeInTheDocument();
  });
});
