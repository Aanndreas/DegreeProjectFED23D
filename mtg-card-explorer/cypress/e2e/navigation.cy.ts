describe("Navigation Between Pages", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173");
  });

  it("should navigate from Home to Favorites and back", () => {
    // Click on the favorites link
    cy.get("[data-testid='favorites-link']").click();

    // Check that we are on the favorites page
    cy.url().should("include", "/favorites");
    cy.contains("No favorites saved yet.").should("be.visible");

    // Click on the home link
    cy.get("[data-testid='home-link']").click();

    // Check that we are on the home page
    cy.url().should("eq", "http://localhost:5173/");
    cy.contains("Gathering Magic in Magic: The Gathering").should("be.visible");
  });

  Cypress.on("uncaught:exception", (error) => {
    cy.log(error?.toString() || "Unknown error");
    return false;
  });
});
