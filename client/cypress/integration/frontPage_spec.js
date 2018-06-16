describe('Visit front page', () => {
  it('loads the page', () => {
    cy.visit('localhost:3000');
    cy.title().should('include', 'dwidder');
  });
  it('Shows a sign-up link', () => {
    cy.get('a').should('contain', 'Sign up')
  });
  it('displays errors on login', function(){
    cy.get('input[name=username]').type('jane.lae')
    cy.get('input[name=password]').type('password123{enter}')

    // we should have visible errors now
    cy.get('p.error')
      .should('be.visible')
      .and('contain', 'Username and/or password is incorrect')

    // and still be on the same URL
    cy.url().should('include', '/login')
  })
});
