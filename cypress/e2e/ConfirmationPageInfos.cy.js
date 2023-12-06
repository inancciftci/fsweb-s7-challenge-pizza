describe("confirmation page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/pizza");
  });

  it("form submit edildi / bilgiler doğrulandı", () => {
    cy.get(".label-3").click();
    cy.get("select").select("Klasik");
    cy.get(":nth-child(2) > #malzemeler-checkbox").check();
    cy.get(":nth-child(3) > #malzemeler-checkbox").check();
    cy.get(":nth-child(4) > #malzemeler-checkbox").check();
    cy.get(":nth-child(5) > #malzemeler-checkbox").check();
    cy.get("#note").type("Lütfen kapıyı çalmayın.");
    cy.get(".submit > button").click().url().should("include", "/siparis-onay");
    cy.get(".order-info-box > :nth-child(1)").contains("L");
    cy.get(".order-info-box > :nth-child(2)").contains("Klasik");
    cy.get(".info-title > :nth-child(4)").contains("Soğan");
    cy.get(":nth-child(2) > .sum-line-price").contains("20");
    cy.get(":nth-child(3) > .sum-line-price").contains("105");
  });
});
