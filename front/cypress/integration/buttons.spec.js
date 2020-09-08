
context("Check Buttons and loads", () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000');
      cy.get('h1').contains('Choose your phone');
  
    });
  
    it("Clicks on each phone buttons", () => {
        cy.get('button').click({ multiple: true })
    });
  });
  