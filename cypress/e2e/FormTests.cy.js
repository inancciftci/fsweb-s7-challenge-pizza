describe("form tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/pizza");
  });

  it("Default errors", () => {
    cy.get(".form-bottom");
    cy.contains("- Lütfen pizza boyutu seçiniz.");
    cy.contains("- Lütfen hamur tipini seçiniz.");
    cy.contains("Lütfen zorunlu alanlara dikkat ediniz.");
  });

  it("Writing notes", () => {
    cy.get("textarea").type("Lütfen kapıyı çalmayın.");
  });

  it("En fazla 10 malzeme", () => {
    cy.get(`input[type='checkbox']`).check();
    cy.get(".form-bottom").contains("en fazla 10");
  });

  it("Doğru sayıda malzeme", () => {
    cy.get(":nth-child(2) > #malzemeler-checkbox").check();
    cy.get(":nth-child(3) > #malzemeler-checkbox").check();
    cy.get(":nth-child(4) > #malzemeler-checkbox").check();
    cy.get(":nth-child(5) > #malzemeler-checkbox").check();
    cy.get(".form-bottom")
      .contains("en fazla 10")
      .should("have.class", "dp-none");
  });

  it("form submit edilebilir - hata yok", () => {
    cy.get(".label-3").click();
    cy.get("select").select("Klasik");
    cy.get(":nth-child(2) > #malzemeler-checkbox").check();
    cy.get(":nth-child(3) > #malzemeler-checkbox").check();
    cy.get(":nth-child(4) > #malzemeler-checkbox").check();
    cy.get(":nth-child(5) > #malzemeler-checkbox").check();
    cy.get("#note").type("Lütfen kapıyı çalmayın.");
    cy.get(".submit > button").its("disabled").should("not.exist");
  });

  it("form submit edildi", () => {
    cy.get(".label-3").click();
    cy.get("select").select("Klasik");
    cy.get(":nth-child(2) > #malzemeler-checkbox").check();
    cy.get(":nth-child(3) > #malzemeler-checkbox").check();
    cy.get(":nth-child(4) > #malzemeler-checkbox").check();
    cy.get(":nth-child(5) > #malzemeler-checkbox").check();
    cy.get("#note").type("Lütfen kapıyı çalmayın.");
    cy.get(".submit > button").click().url().should("include", "/siparis-onay");
  });
});
