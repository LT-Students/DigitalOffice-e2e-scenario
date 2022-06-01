import { setToken } from "./utils/auth"
import { makeText } from "./pr_variables.js";

describe('create', () => {

    beforeEach(setToken);

    it ('TC-158', () => {    
        cy.get("a[href='/projects']")
            .click()
        cy.get("button[ng-reflect-router-link='new']")
            .click()
        cy.get("input[formcontrolname='name']")
            .should('have.class', 'ng-untouched')
            .click()
        cy.get("do-new-project > h1")
            .click()
        cy.get("input[formcontrolname='name']")
            .should('have.class', 'ng-invalid')
        cy.get("button[type='submit']")
            .should('have.disabled')                                              
    });

    it ('TC-159', () => {
        cy.get("input[formcontrolname='name']")
            .type( makeText(10) )
            .should('have.class', 'ng-valid')                                                                                
        cy.get("button[type='submit']")
            .should('have.enabled')                                              
    });

    it ('TC-160', () => {
        cy.get("input[formcontrolname='name']")
            .should('have.attr', 'maxlength')
            .and('equal', '150')
        cy.get("input[formcontrolname='name']")    
            .type('{selectAll}{backspace}') 
            .type( makeText(151) )
            .should('have.class', 'ng-valid')                                                                                
        cy.get("button[type='submit']")
            .should('have.enabled')                                              
    });

    it ('TC-165', () => {    
        cy.get("mat-select[formcontrolname='departmentId']")
            .should('have.class', 'ng-untouched')
            .should('have.class', 'ng-valid')
        cy.get("button[type='submit']")
            .should('have.enabled')                                              
    });

    /*
    it ('TC-166-167', () => {    
        cy.get("mat-select[formcontrolname='departmentId']")
            .click()
        cy.get("div[role='listbox']")
            .should('be.visible')
        cy.contains('Frontend')                     
            .scrollIntoView({duration: 500})
            .click()
        cy.get("mat-select[formcontrolname='departmentId']")
            .should('have.class', 'ng-valid')
            .should('contain', 'Frontend')          
        cy.get("button[type='submit']")
            .should('have.enabled')                                              
    });
    */ 

    it ('TC-186-188-192', () => {
        cy.get("mat-select[formcontrolname='status']")
            .should('have.class', 'ng-valid')
            .should('contain', 'Активный')
            .click()
        cy.get("div[role='listbox']")
            .should('contain','Приостановлен')
            .should('contain','Завершен')
            .should('contain','Активный')
        cy.get("mat-option[ng-reflect-value='Suspend']")
            .click()
        cy.get("mat-select[formcontrolname='status']")
            .should('have.class', 'ng-valid')
            .should('contain', 'Приостановлен')
    });

    it ('TC-193-194', () => {
        cy.get("input[formcontrolname='shortDescription']")
            .should('have.class', 'ng-untouched')
            .should('have.class', 'ng-valid')
            .type( makeText(100) )
    });

    it ('TC-195', () => {
        cy.get("input[formcontrolname='shortDescription']")
            .should('have.attr', 'maxlength')
            .and('equal', '100')                                          // spec value = 300
        cy.get("input[formcontrolname='shortDescription']")
            .type('{selectAll}{backspace}')
            .type( makeText(301) )
    });

    it ('TC-200-205', () => {    
        cy.get("textarea[formcontrolname='description']")
            .should('have.class', 'ng-untouched')
            .should('have.class', 'ng-valid')
            .type( makeText(1) )
    });

    it ('TC-209', () => {     
        cy.get("textarea[formcontrolname='description']")
            .type('{selectAll}{backspace}')
            .type( makeText(1001) )
        cy.get("do-header")
            .click()
        cy.get("textarea[formcontrolname='description']")
            .should('have.class', 'ng-touched')    
            .should('have.class', 'ng-dirty')
            .should('have.class', 'ng-valid')
    });

// team -------------------------------------------------

    it ('TC-222-223', () => {
        cy.get("Button[color='accent']")
            .click()
        cy.get("do-modal-add-employee")
            .should('be.visible')
        cy.get("div[class='mat-dialog-actions'] > button:last-child")
            .should('have.disabled')   
        cy.get("tbody[role='rowgroup'] > tr:nth-child(2)")
            .click()
        cy.get("div[class='mat-dialog-actions'] > button:last-child")
            .should('have.enabled')
            .click()                                                    
    });

    it ('TC-225', () => {
        cy.get("Button[color='accent']")
            .click()
        cy.get("do-modal-add-employee")
            .should('be.visible')
        cy.get("div[class='mat-dialog-actions'] > button:last-child")
            .should('have.disabled') 
        /*cy.get('.mat-dialog-content')
            .scrollTo(0, 500, {duration: 200})
            .scrollTo(0, 500, {duration: 200})*/
        cy.get("tbody[role='rowgroup'] > tr:nth-child(1)")
            .scrollIntoView({duration: 300})
            .click()
        cy.get("tbody[role='rowgroup'] > tr:nth-child(3)")
            .scrollIntoView({duration: 300})
            .click()
        cy.get("div[class='mat-dialog-actions'] > button:last-child")
            .should('have.enabled')
            .click()    
    });

    it ('TC-xxx', () => {    
        cy.get("Button[color='accent']")
            .click()
        cy.get("input[type='search']")
            .click()
            .type('gra')
            .type('{enter}')
        cy.get("div[class='mat-dialog-actions'] > button:last-child")
            .should('have.disabled')
        cy.get('.mat-dialog-content')
            .should('contain.text','Granade')                               
            .click()
        cy.get("div[class='mat-dialog-actions'] > button:last-child")
            .should('have.enabled')
            .click()
     
         cy.get("button[type='submit']")                                    
            .should('have.enabled')        
            //.click()           
    });
});