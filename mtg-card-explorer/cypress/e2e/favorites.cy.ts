describe("MTG Card Explorer - Favorites Functionality", () => {
  it("allows a user to favorite a card and see it in the favorites page", () => {
    // Go to homepage
    cy.visit("http://localhost:5173/home");

    // Enter "Aarakocra Sneak" in search bar and press enter
    cy.get("[data-testid='search-bar']").type("Aarakocra Sneak{enter}");

    // Click on favorite-button
    cy.get("[data-testid='favorite-button-Aarakocra Sneak']").click();

    cy.get("[data-testid='favorites-link']").should("exist").click();

    // Navigate to favorite page
    cy.get("[data-testid='favorites-link']").click();

    // Check that card is in favorites
    cy.contains("Aarakocra Sneak").should("be.visible");
  });
});
