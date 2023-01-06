import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ListingCard from "@/components/listingCard";

describe("listingCard component", () => {
  it("Should render the same text passed in as props", () => {
    render(
      <ListingCard
        name="Cozy Beachfront Bungalow"
        address="123 Main Street, Beachville, CA 12345"
        price="125"
        id="1"
        photos={[
          "https://source.unsplash.com/2d4lAQAlbDA",
          "https://source.unsplash.com/pzMghCq2kS0",
        ]}
      />
    );
    const nameElement = screen.getByText(/Cozy Beachfront Bungalow/i);
    const addressElement = screen.getByText(
      /123 Main Street, Beachville, CA 12345/i
    );
    const priceElement = screen.getByText(/125/i);

    expect(nameElement).toBeInTheDocument();
    expect(addressElement).toBeInTheDocument();
    expect(priceElement).toBeInTheDocument();
  });
});
