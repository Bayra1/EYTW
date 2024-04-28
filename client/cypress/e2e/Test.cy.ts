describe("template spec", () => {
  it("passes", () => {
    cy.visit("http://localhost:3000");

    cy.get('[data-testid="big-title"]')
      .should("exist")
      .should("have.text", "To register");

    cy.get('[data-testid="check-email-number"]')
      .should("exist")
      .should("have.text", "Your email or phoneNumber");

    cy.get('[data-testid="password"]')
      .should("exist")
      .should("have.text", "password");

    cy.get('[data-testid="confirmPassword"]')
      .should("exist")
      .should("contain", "repeat password");
  });
});
