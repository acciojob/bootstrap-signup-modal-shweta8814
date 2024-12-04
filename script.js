//your JS code here. If required.
https://www.svgrepo.com/show/345221/three-dots.svg
() => {
  // Trigger the modal to open
  cy.get('button').first().click().then(() => {
    // Assert the modal is visible
    cy.get('.modal').should('be.visible');
    
    // Click the close button
    cy.get('.btn-close').click().then(() => {
      // Wait for Bootstrap's fade-out animation
      cy.wait(500); // Adjust the wait time if necessary
      
      // Assert the modal is no longer visible
      cy.get('.modal').should('not.exist');
    });
  });
};
