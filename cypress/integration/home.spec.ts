describe("Navigation", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("should navigate to the search page", () => {
    cy.get("h1").contains("You have needs");

    // Find a link with an href attribute containing "search" and click it
    cy.get('nav > ul > li > a[href*="search"]').click();

    // The new url should include "/search"
    cy.url().should("include", "/search");

    // The new page should contain an h1 with "directory"
    cy.get("h1").contains("directory");
  });
});
