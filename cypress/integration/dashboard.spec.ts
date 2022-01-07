Cypress.on("uncaught:exception", (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false;
});

describe("Dashboard", () => {
  it("user is prompted to add business if none exist", () => {
    cy.visit("test/login");

    cy.intercept(
      {
        method: "GET",
        hostname: "sopluggd-staging.herokuapp.com",
        url: "/business", // that have a URL that matches '/users/*'
      },
      [] // and force the response to be: []
    ).as("getBusiness");

    cy.findByRole("textbox").type("tim@tam.com");
    cy.findByLabelText("Password", { selector: "input" }).type("Isight23!");

    cy.findByRole("button", { name: /Login/i }).click();

    cy.visit("/dashboard");

    cy.wait("@getBusiness");
    cy.findByRole("link", { name: /Add/i });
  });
});
