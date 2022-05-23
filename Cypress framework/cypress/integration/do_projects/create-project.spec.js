import { c100, c300 } from "./pr_variables.js";

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
describe('TC-92-94', () => {
    it ('start', () => {
        cy.get("a[href*='/admin/dashboard']")
            .click().wait(1000)        
        cy.get("img[src*='project-icon']")
            .click().wait(1000)
        /*cy.get("div[class='mat-tab-links'] > a[href='/projects']")
            .click().wait(1000)
        cy.get("button[ng-reflect-router-link='new']")
            .should('be.visible') 
            .click().wait(1000)*/
    });
});   
describe('TC-158', () => {
    it ('start', () => {    
        cy.get("input[formcontrolname='name']")
            .click().wait(500)
        cy.get("input[formcontrolname='shortDescription']")
            .click().wait(500)
        cy.get("button[type='submit']")
            .should('have.disabled')                                              // 'create button' disabled
    });
});    
describe('TC-159', () => {
    it ('start', () => {
        cy.get("input[formcontrolname='name']")
            .type('Cypress Autotest')                                             // DONT FORGET TO CHANGE THE NAME!                                    
        cy.get("button[type='submit']")
            .should('have.disabled')                                              // 'create button' still disabled
    });
});  
describe('TC-165', () => {
    it ('start', () => {    
        cy.get("mat-select[formcontrolname='departmentId']")
            .click().wait(1000)
        cy.get('.cdk-overlay-backdrop')
            .click().wait(500)
        cy.get("button[type='submit']")
            .should('have.disabled')                                              // 'create button' still disabled
    });
}); 
describe('TC-166-167', () => {
    it ('start', () => {    
        cy.get("mat-select[formcontrolname='departmentId']")
            .click().wait(1000)
        cy.contains('Frontend')
            .scrollIntoView({duration: 1000})
            .click()
        cy.get("button[type='submit']")
            .should('have.enabled')                                               // 'create button' must be active now
    });
});
describe('TC-188-192', () => {
    it ('start', () => {
        cy.get("mat-select[formcontrolname='status']")
            .click()
            .wait(500)
        cy.get("div[id='cdk-overlay-1']")
            .should('contain','Приостановлен')
            .should('contain','Завершен')
            .should('contain','Активный')
        cy.get("mat-option[ng-reflect-value='Active']")
            .click()
            .wait(500)
    });
});   
describe('TC-194', () => {
    it ('start', () => {
        cy.get("input[formcontrolname='shortDescription']")
            .should('have.attr', 'maxlength')
            .and('equal', '100')                                           // изменить на значение из ТЗ и\или скипнуть  
        cy.get("input[formcontrolname='shortDescription']")
            .type(c100)
            .wait(500)
    });
});
describe('TC-200-205-209', () => {
    it ('start', () => {    
        cy.get("textarea[formcontrolname='description']")
            .should('have.attr', 'maxlength')
            .and('equal', '300')                                           // изменить на значение из ТЗ и\или скипнуть
        cy.get("textarea[formcontrolname='description']")
            .type(c300)
            .wait(500)
    });
});
// team ------------------------------------------------------------------------------------------------------------------------
describe('TC-222', () => {
    it ('start', () => {
        cy.get("Button[color='accent']")
            .click().wait(500)
        cy.get("div[class='mat-dialog-actions'] > button:last-child")
            .should('have.disabled')                                        // 'add button' disabled
        cy.get('.mat-dialog-content')
            .scrollTo(0, 500, {duration: 500})
            .wait(200)
        cy.get('.mat-dialog-content')
            .scrollTo(0, 1000, {duration: 500})
            .wait(200)
        cy.get('.mat-dialog-content')
            .scrollTo(0, 1000, {duration: 500})
            .wait(200)
        cy.contains('Admin New Admin')
            .scrollIntoView({duration: 500})
            .click().wait(500)
        cy.get("div[class='mat-dialog-actions'] > button:last-child")
            .should('have.enabled')
            .click()
            .wait(500)                                                      // 'add button' enabled
    });
});    
describe('TC-xxx', () => {
    it ('start', () => {    
        cy.get("Button[color='accent']")
            .click().wait(500)
        cy.get("input[ng-reflect-type='search']")
            .type('Поликарп')
            .type('{enter}')
            .wait(500)
     /* cy.get('.mat-dialog-content')
            .should('contain.text','Поликарп')*/                             // "search" function is NOT working YET
        cy.get("div[class='mat-dialog-actions'] > button:first-child")       // later: change to last-child
            .click().wait(500)
        
     /* cy.get("button[type='submit']")                                    // create project (CHANGE NAME OR COMMENT IT!)
            .should('have.enabled')        
            .click().wait(500)        */   
    });
});