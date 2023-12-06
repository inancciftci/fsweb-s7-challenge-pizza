describe("buttons test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("banner cta button test", () => {
    cy.get(".cta-btn").click();
    cy.url().should("include", "/pizza");
  });

  it("card banners test", () => {
    cy.get(".left-box > .card-text > .card-btn").click();
    cy.url().should("include", "/pizza");
  });

  it("card banners test", () => {
    cy.get(".right-top > .card-text > .card-btn").click();
    cy.url().should("include", "/pizza");
  });

  it("card banners test", () => {
    cy.get(".right-under > .card-text > .card-btn").click();
    cy.url().should("include", "/pizza");
  });

  it("header logo homepage redirect", () => {
    cy.get(".header > a").click();
    cy.url().should("eq", "http://localhost:3000/");
  });
});
