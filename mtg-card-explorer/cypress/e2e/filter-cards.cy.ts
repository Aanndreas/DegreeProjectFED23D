describe("Filter Cards by Color", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/home");
  });

  it("should filter cards by selected color", () => {
    // Choose a color in filter dropdown
    cy.get("select").first().select("W");

    // Check that only white cards are shown
    cy.get(".card").each(($card) => {
      cy.wrap($card).contains("{W}").should("be.visible");
    });

    // Choose black color and check again
    cy.get("select").first().select("B");
    cy.get(".card").each(($card) => {
      cy.wrap($card).contains("{B}").should("be.visible");
    });
  });
});
