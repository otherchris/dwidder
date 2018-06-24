/* eslint no-undef: 0 */
describe('Visit front page', () => {
  it('loads the page', () => {
    cy.visit('localhost:3000/login');
    cy.title().should('include', 'dwidder');
  });
  it('Shows a sign-up link', () => {
    cy.get('a').should('contain', 'Sign up');
  });


  it('displays errors on login', () => {
    cy.get('div.input-group:nth-of-type(1)').find('input').type('jane.lae@email.com');
    cy.get('div.input-group:nth-of-type(2)').find('input').type('password123');

    cy.get('button').click();
    cy.url().should('contain', 'dashboard');

    // failure case
  });
});
