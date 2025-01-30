describe("Navigation Between Pages", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/home");
  });

  it("should navigate from Home to Favorites and back", () => {
    // Click on the favorites link
    cy.get("[data-testid='favorites-link']").click();

    // Check that we are on the favorites page
    cy.url().should("include", "/favorites");
    cy.contains("No favorites saved yet.").should("be.visible");

    // Click on the landing link
    cy.get("[data-testid='landing-link']").click();

    // Check that we are on the Landing page
    cy.url().should("eq", "http://localhost:5173/");
    cy.contains("Welcome to MTG Card Explorer").should("be.visible");
  });

  Cypress.on("uncaught:exception", (error) => {
    cy.log(error?.toString() || "Unknown error");
    return false;
  });
});
