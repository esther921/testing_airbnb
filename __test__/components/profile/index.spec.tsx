import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Profile from "@/components/profile";

describe("profile component", () => {
  it("Should render become a host", () => {
    render(<Profile />);
    const text = screen.getByText(/become a host/i);

    expect(text).toBeInTheDocument();
  });
});
