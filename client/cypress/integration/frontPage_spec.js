describe('Visit front page', () => {
  it('loads the page', () => {
    cy.visit('localhost:3000');
    cy.title().should('include', 'dwidder');
    cy.get('.hello-world').should('contain', 'hello world');
  })
});
