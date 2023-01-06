import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Logo from "@/components/logo";

describe("Logo component", () => {
  it("Should render Hotels&Co", () => {
    render(<Logo />);
    const logo = screen.getByText("Hotels&Co");
    const logoText = "Hotels&Co";
    expect(logo).toHaveTextContent(logoText);
  });
});
