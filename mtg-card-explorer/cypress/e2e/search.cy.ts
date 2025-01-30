/// <reference types="cypress" />

describe("MTG Card Explorer - Search Functionality", () => {
  it("allows a user to search for a card and see results", () => {
    // Go to homepage
    cy.visit("http://localhost:5173/home");

    // Write a search term in search bar and press enter
    cy.get("[data-testid='search-bar']").type("+2 Mace{enter}");

    // Check that card is shown as a result
    cy.contains("+2 Mace").should("be.visible");
  });
});
