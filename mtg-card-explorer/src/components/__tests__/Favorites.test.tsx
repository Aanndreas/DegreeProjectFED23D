import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Card from "../Card";

const mockCard = {
  id: "1",
  name: "White Knight",
  image_uris: { normal: "http://example.com/card.jpg" },
  mana_cost: "{W}{W}",
  type_line: "Creature — Human Knight",
  cmc: 2,
};

describe("Favorites integration tests", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("should allow adding a card to favorites", () => {
    render(
      <MemoryRouter>
        <Card card={mockCard} />
      </MemoryRouter>
    );

    // Check that the favorite button is NOT in 'favorited' state
    const favoriteButton = screen.getByRole("button", {
      name: /add to favorites/i,
    });
    expect(favoriteButton).toBeInTheDocument();
    expect(favoriteButton).not.toHaveClass("favorited");

    fireEvent.click(favoriteButton);

    // Check that the button is now in 'favorited' state
    expect(favoriteButton).toHaveClass("favorited");

    // Check that the card is in localStorage
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    expect(favorites).toContainEqual(mockCard);
  });

  it("should retain favorite status on reload", () => {
    localStorage.setItem("favorites", JSON.stringify([mockCard]));

    render(
      <MemoryRouter>
        <Card card={mockCard} />
      </MemoryRouter>
    );

    // Check that the favorite button is in 'favorited' state
    const favoriteButton = screen.getByRole("button", { name: /favorited/i });
    expect(favoriteButton).toBeInTheDocument();
    expect(favoriteButton).toHaveClass("favorited");
  });
});
