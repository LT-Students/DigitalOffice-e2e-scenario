import {setToken} from "./utils/auth"

describe('edit', () => {
    
    beforeEach(setToken);

    it ('TC-231', () => {      
        cy.get("a[href='/projects']")
            .click()
        cy.get("mat-select[role='combobox']")
            .click()
        cy.get("mat-option[ng-reflect-value='50']")
            .click()
        cy.get("table[class='mat-sort table ng-star-inserted']")
            .contains("Cypress Autotest")
            .scrollIntoView({duration: 1000})
            .click()
        cy.get("button[class*='button-edit']")
            .click()
    });

    it ('TC-232-233', () => {    
        cy.get("input[ng-reflect-name='/Name']")
            .click()
            .type('{backspace}')
            .should('have.attr', 'aria-invalid')
            .and('equal','false')                                     
        cy.get("input[ng-reflect-name='/Name']")
            .type('{selectAll}')
            .type('{backspace}')
            .should('not.have.attr', 'aria-invalid')
    });

    it ('TC-234', () => {    
        cy.get("input[ng-reflect-name='/Name']")
            .type('cypress autorename')
            .should('have.attr', 'aria-invalid')
            .and('equal','false')
    });

    it ('TC-243', () => {       
        cy.get("button[class*='button-edit']").click()
        cy.get("mat-select[ng-reflect-name='/Status']")
            .click()
        cy.get("div[role='listbox']")
            .should('contain','Приостановлен')
            .should('contain','Завершен')
            .should('contain','Активный')  
        cy.get("mat-option[ng-reflect-value='Suspend']")
            .click()
        cy.get("button[class*='actions__save']")
            .click() 
    });
});