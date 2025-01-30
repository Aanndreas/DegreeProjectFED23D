describe("Remove a Favorite Card", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/home");

    // Add a card to favorites
    cy.get("[data-testid^='favorite-button-']").first().click();

    // Navigate to favorites page
    cy.get("[data-testid='favorites-link']").click();
  });

  it("should remove a card from favorites", () => {
    // Check that the card is in favorites
    cy.get(".favorite-card").should("exist");

    // Click on remove button
    cy.get(".btn-remove-favorite").first().click();

    // Check that the card is removed
    cy.get(".favorite-card").should("not.exist");
  });
});
