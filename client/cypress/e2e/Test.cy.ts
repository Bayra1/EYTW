describe("template spec", () => {
  beforeEach(() => cy.visit("http://localhost:3000"));
  
  it("1-> should verify if there are some texts exist before user interact with forms", () => {
    cy.get('[data-testid="big-title"]')
      .should("exist")
      .should("have.text", "To register");

    cy.get('[data-testid="sub-word-id"]')
      .eq(0)
      .should("exist")
      .should("have.text", "Your email or phoneNumber");

    cy.get('[data-testid="sub-word-id"]')
      .eq(1)
      .should("exist")
      .should("have.text", "password");

    cy.get('[data-testid="sub-word-id"]')
      .eq(2)
      .should("exist")
      .should("contain", "repeat your password");
  });

  it("2. error messages when user give no inputs", () => {
    cy.get('[data-testid="submit-button"]').should("exist");
    cy.get('[data-testid="submit-button"]').click();

    cy.get('[data-testid="submit-button"]')
      .eq(0)
      .should("exist")
      .should("contain", "has to be email or phoneNumber");

    cy.get('[data-testid="submit-button"]')
      .eq(1)
      .should("exist")
      .should("contain", "must be password");

    cy.get('[data-testid="submit-button"]')
      .eq(2)
      .should("exist")
      .should("contain", "repeat your password");
  });

  it("3 warning messages if user gives an invalid email or phoneNumber", () => {
    cy.get('[data-testid="submit-button"]').should("exist");
    cy.get('[data-testid="submit-button"]').click();

    cy.get('[datatest-id="email-phoneNumber"]').type("galgalbro 🔥");
    cy.get('[data-testid="submit-button"]')
      .eq(0)
      .should("exist")
      .should("contain", "must be valid email or phoneNumber");
  });

  it("4 two error messages if user gives a valid email or phoneNumber", () => {
    cy.get('[data-testid="submit-button"]').should("exist");
    cy.get('[data-testid="submit-button"]').click();

    cy.get('[datatest-id="email-phoneNumber"]').type("Google@gmail.com");

    cy.get('[data-testid="submit-button"]')
      .eq(0)
      .should("exist")
      .should("have.text", "must be password");

    cy.get('[data-testid="submit-button"]')
      .eq(1)
      .should("exist")
      .should("contain", "repeat your password");
  });

  it("5 should display an error message if user provides not eligible password", () => {
    cy.get('[data-testid="submit-button"]').should("exist");
    cy.get('[data-testid="submit-button"]').click();

    cy.get('[datatest-id="email-phoneNumber"]').type("Google@gmail.com");
    cy.get('[datatest-id="password"]').type("wrong bro wrong 😂 123");

    cy.get('[data-testid="submit-button"]')
      .eq(0)
      .should("exist")
      .should(
        "contain",
        "Password must contain at least 8 characters, one uppercase, one lowercase, one digit and one special character"
      );
  });

  it("6 should display an error message when user offers an eligible password", () => {
    cy.get('[data-testid="submit-button"]').should("exist");
    cy.get('[data-testid="submit-button"]').click();

    cy.get('[datatest-id="email-phoneNumber"]').type("Google@gmail.com");
    cy.get('[datatest-id="password"]').type("94849622Ab@");

    cy.get('[data-testid="submit-button"]')
      .eq(0)
      .should("exist")
      .should("have.text", "repeat your password");
  });

  it("7 should display an error message when there is mismatch beween password and confirmPassword", () => {
    cy.get('[data-testid="submit-button"]').should("exist");
    cy.get('[data-testid="submit-button"]').click();

    cy.get('[datatest-id="email-phoneNumber"]').type("Google@gmail.com");
    cy.get('[datatest-id="password"]').type("94849622Ab@");
    cy.get('[datatest-id="confirmPassword"]').type("wrong bro wrong 😂 123");

    cy.get('[data-testid="submit-button"]')
      .eq(0)
      .should("exist")
      .should("have.text", "Password doesn't match");
  });

  it("8-> In case of user gives us successful inputs", () => {
    cy.get('[data-testid="submit-button"]').should("exist");
    cy.get('[data-testid="submit-button"]').click();

    cy.get('[datatest-id="email-phoneNumber"]').type("Google@gmail.com");
    cy.get('[datatest-id="password"]').type("94849622Ab@");
    cy.get('[datatest-id="confirmPassword"]').type("94849622Ab@");

    cy.get('[data-testid="submit-button"]').click();

    cy.contains("you're getting nailed bro 😉").should("exist");
  });
});
