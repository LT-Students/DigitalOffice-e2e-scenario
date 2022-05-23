describe('login', () => {
    it ('start', () => {
        cy.visit('https://dev.ltdo.xyz/auth/login')
        cy.get("input[type='email']")
            .type('admin', {delay:50})
        cy.get("input[type='password']")
            .type('ltstudents', {delay:50})
            .type('{enter}')
            .wait(3000)   
    });
});
describe('TC-231', () => {
    it ('start', () => {        
        cy.get("a[href='/projects']")
            .click().wait(2000)
        cy.get("mat-select[role='combobox']")
            .click().wait(500)
        cy.get("mat-option[ng-reflect-value='50']")
            .click().wait(500)
        cy.get("table[class='mat-sort table ng-star-inserted']")
            .contains("Cypress Autotest")                                  // DONT FORGET TO CHECK THE NAME!
            .scrollIntoView({duration: 1000})
            .click()
            .wait(500)              
        cy.get("button[class*='button-edit']")
            .click().wait(500)
    });
});
describe('TC-232-233', () => {
    it ('start', () => {    
        cy.get("input[ng-reflect-name='/Name']")
            .click()
            .type('{backspace}')
            .should('have.attr', 'aria-invalid')
            .and('equal','false')
            .wait(500)                                       
        cy.get("input[ng-reflect-name='/Name']")
            .type('{selectAll}')
            .type('{backspace}').wait(500)
            .should('not.have.attr', 'aria-invalid')
    });
});
describe('TC-234', () => {
    it ('start', () => {    
        cy.get("input[ng-reflect-name='/Name']")
            .type('cypress autorename')
            .should('have.attr', 'aria-invalid')
            .and('equal','false')
            .wait(500)
    });
});
describe('TC-243', () => {
    it ('start', () => {       
        cy.get("button[class*='button-edit']").click().wait(500)
        cy.get("mat-select[ng-reflect-name='/Status']")
            .click().wait(500)
        cy.get("div[role='listbox']")
            .should('contain','Приостановлен')
            .should('contain','Завершен')
            .should('contain','Активный')  
        cy.get("mat-option[ng-reflect-value='Suspend']")
            .click().wait(500)
        cy.get("button[class*='actions__save']")
            .click().wait(500)  
    });
});