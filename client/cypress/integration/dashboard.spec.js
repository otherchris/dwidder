/* eslint no-undef: 0 */
describe('Visit dashboard', () => {
  // Login
  it('Login and go to dashboard', () => {
    cy.visit('localhost:3000/login');
    cy.get('div.input-group:nth-of-type(1)').find('input').type('jane.lae@email.com');
    cy.get('div.input-group:nth-of-type(2)').find('input').type('password123');

    cy.get('button').click();
  });

  it('displays the logged in user name', () => {
    cy.get('.me.name');
    cy.get('.me.name').should('contain', 'Jane Lae');
  });

  it('has a button to create a new post', () => {
    cy.get('button').should('contain', 'New Post');
    cy.get('button').click();
    cy.get('textarea').should('exist');
    cy.get('.modal-close').click();
    cy.get('textarea').should('not.exist');
    cy.get('button').click();
    cy.get('textarea').type('This is a poast');
    cy.get('button.post').click();
    cy.get('textarea').should('not.exist');
    cy.get('div.post-list').should('exist');
    // cy.get('div.post.user-name').should('contain', 'Jane');
    cy.get('div.post.post-body').should('contain', 'poast');
  });
});
