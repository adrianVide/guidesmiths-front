
context("Check Buttons and loads", () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000');
      cy.get('h1').contains('Choose your phone');
  
    });
  
    it("User can click on each buttons and see the phone", () => {
        cy.get('button').click({ multiple: true })
    });
  });
  