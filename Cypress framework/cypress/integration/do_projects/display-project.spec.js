describe('login', () => {
    it ('start', () => {
        cy.visit('https://dev.ltdo.xyz/auth/login')
        cy.get("input[type='email']")
            .type('admin')
        cy.get("input[type='password']")
            .type('ltstudents')
            .type('{enter}')
            .wait(3000)   
        
    });
});

describe('TC-75', () => {
    it ('start', () => {
      
        cy.get("a[href='/projects'] > .mat-icon")
            .click().wait(1000)

        cy.get("tbody > tr:nth-child(3)")                                         // get the 3rd project from the table
            .click().wait(1000)
    
    });
});