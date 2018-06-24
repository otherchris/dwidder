/* eslint no-undef: 0 */
describe('Visit sign-up page', () => {
  it('loads the page', () => {
    cy.visit('localhost:3000/signup');
    cy.title().should('include', 'dwidder');
  });
  it('Shows a log in link', () => {
    cy.get('a').should('contain', 'Log in');
  });
  it('Has a sign-up form that creates a user', () => {
    cy.get('div.input-group:first').find('input').type('Jane Lae');
    cy.get('div.input-group:nth-of-type(2)').find('input').type('jane.lae@email.com');
    cy.get('div.input-group:nth-of-type(3)').find('input').type('password123');
    cy.get('div.input-group:nth-of-type(4)').find('input').type('bassword123');
    cy.get('button').click();
    cy.get('div.alert-danger').should('contain', 'Passwords do not match');

    cy.get('div.input-group:nth-of-type(4)').find('input').clear();
    cy.get('div.input-group:nth-of-type(4)').find('input').type('password123');

    cy.get('div.alert-danger').should('not.exist');
    cy.get('button').click();
  });

  // Now do it logged in

  // cy.login();
  // it('Redirects to dashboard', () => {
  //  cy.url().should('contain', 'dashboard');
  // });
});
