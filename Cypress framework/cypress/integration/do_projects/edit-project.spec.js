import {setToken} from "./utils/auth"
import { makeText } from "./pr_variables.js";

describe('edit', () => {
    
    beforeEach(setToken);

    it ('TC-231', () => {      
        cy.get("a[href='/projects']")
            .click()
        cy.get("tbody > tr:nth-child(9)")                                         
            .click()
        cy.get("button[class*='button-edit']")
            .should('be.visible')
            .should('have.enabled')
            .click()
        cy.get('mat-dialog-container > do-edit-project')
            .should('be.visible')
    });

    it ('TC-232-233', () => {    
        cy.get("input[ng-reflect-name='/Name']")
            .click()
            .type('{backspace}')
            .should('have.class', 'ng-valid')                                    
        cy.get("input[ng-reflect-name='/Name']")
            .type('{selectAll}{backspace}')
            .should('have.class', 'ng-invalid')   
    });

    it ('TC-234', () => {
        let newname = makeText(13);    
        cy.get("input[ng-reflect-name='/Name']")
            .type( newname )
            .should('have.class', 'ng-valid')
        cy.get("button[class*='actions__save']")
            .click()
        cy.get("h1[class*='card__title']")
            .should('contain', newname)
    });

    it ('TC-238', () => {
        let newShort = makeText(45);
        cy.get("button[class*='button-edit']")
            .click()   
        cy.get("input[ng-reflect-name='/ShortDescription']")
            .click()
            .type('{selectAll}{backspace}')
            .type( newShort )
            .should('have.class', 'ng-valid')
        cy.get("button[class*='actions__save']")
            .click()
    });

    it ('TC-240', () => {
        let newDesc = makeText(80);
        cy.get("button[class*='button-edit']")
            .click()   
        cy.get("textarea[ng-reflect-name='/Description']")
            .click()
            .type('{selectAll}{backspace}')
            .type( newDesc )
            .should('have.class', 'ng-valid')
        cy.get("button[class*='actions__save']")
            .click()
        cy.get("div[class*='card__content']")
            .should('contain', newDesc)
    });

    it ('TC-243', () => {       
        cy.get("button[class*='button-edit']")
            .click()
        cy.get("mat-select[ng-reflect-name='/Status']")
            .click()
        cy.get("div[role='listbox']")
            .should('contain','Приостановлен')
            .should('contain','Завершен')
            .should('contain','Активный')  
        cy.get("mat-option[ng-reflect-value='Closed']")
            .click()
        cy.get("button[class*='actions__save']")
            .click()
        cy.get("div[class='description__column']")
            .should('contain', 'Завершен')
    });

    it ('TC-245', () => { 
        let newtitle = 'This title should not be displayed!'
        cy.get("button[class*='button-edit']")
            .click()        
        cy.get("input[ng-reflect-name='/Name']")
            .type(newtitle)
            .should('have.class', 'ng-valid')
        cy.get("button[class*='actions__cancel']")
            .click()
        cy.get("h1[class*='card__title']")
            .should('not.contain', newtitle)
    });

    it ('TC-247', () => {      
        cy.get("Button[color='accent']")
            .should('be.visible')
            .should('have.enabled')
            .click()
        cy.get("do-modal-add-employee")
            .should('be.visible')
        cy.get("div[class='mat-dialog-actions'] > button:last-child")
            .should('have.disabled')
        cy.get("input[formcontrolname='name']")
            .click()
            .type('an')
        cy.get("do-modal-add-employee")
            .contains('Granade')
            .click() 
        cy.get("div[class='mat-dialog-actions'] > button:last-child")
            .should('have.enabled')
            .click()
            .wait(300) 
        cy.get("table[role='table']")
            .should('contain', 'Granade')             
    });

    //it ('TC-248', () => {
    // td[class*='select']

    //it ('TC-252', () => {
});