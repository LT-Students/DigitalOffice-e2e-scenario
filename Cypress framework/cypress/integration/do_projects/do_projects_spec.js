import { c100, c300 } from "./pr_variables";

describe('Projects Test Suite', () => {

    it ('start', () => {

        // login -----------------------------------------------------------------------------------------------------------------------
        
        cy.visit('https://dev.ltdo.xyz/auth/login')
        cy.get("input[type='email']")
            .type('admin', {delay:100})
        cy.get("input[type='password']")
            .type('ltstudents')
            .type('{enter}')
            .wait(3000);

        // display ---------------------------------------------------------------------------------------------------------------------
        cy.get("div[class='mat-tab-links'] > a[href='/projects']")
            .click().wait(2000)
        cy.get("tbody > tr:nth-child(3)")                                   // get the 3rd project from the table
            .click().wait(2000)
            //ПРОВЕРКА ПЕРЕХОДА
        cy.get("[ng-reflect-router-link='admin']")
            .click().wait(1000)

        // creation --------------------------------------------------------------------------------------------------------------------
        cy.get("img[src*='project-icon']")
            .click().wait(1000)
            //ПРОВЕРКА ПЕРЕХОДА
        cy.get("div[class='mat-tab-links'] > a[href='/projects']")
            .click().wait(1000)
        cy.get("button[ng-reflect-router-link='new']")
            .should('be.visible') 
            .click().wait(1000)
            //ПРОВЕРКА ПЕРЕХОДА
            
        cy.get("input[formcontrolname='name']")
            .click().wait(500)
        cy.get("input[formcontrolname='shortDescription']")
            .click().wait(500)
        //ПРОВЕРКА ВАЛИДАЦИИ ИНПУТА
        cy.get("button[type='submit']")
            .should('have.disabled')                                      // 'create button' disabled

        cy.get("input[formcontrolname='name']")
            .type('Cypress Autotest')                                     // DONT FORGET TO CHANGE THE NAME!
            //переПРОВЕРКА ВАЛИДАЦИИ ИНПУТА                                     
        cy.get("button[type='submit']")
            .should('have.disabled')                                      // 'create button' still disabled
        cy.get("mat-select[formcontrolname='departmentId']")
            .click().wait(1000)
        cy.get('.cdk-overlay-backdrop')
            .click().wait(500)
            //ПРОВЕРКА ВАЛИДАЦИИ СПИСКА
        cy.get("button[type='submit']")
            .should('have.disabled')                                      // 'create button' still disabled
        cy.get("mat-select[formcontrolname='departmentId']")
            .click().wait(1000)
        cy.contains('Frontend')
            .scrollIntoView({duration: 1000})
            .click()
            //переПРОВЕРКА ВАЛИДАЦИИ СПИСКА
        cy.get("button[type='submit']")
            .should('have.enabled')                                       // 'create button' must be active now
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

        cy.get("input[formcontrolname='shortDescription']")
            .should('have.attr', 'maxlength')
            .and('equal', '100')  // изменить на значение из ТЗ и\или скипнуть  
        cy.get("input[formcontrolname='shortDescription']")
            .type(c100)
            .wait(500)
            //ПРОВЕРКА ТЕКСТА В ИНПУТЕ
            .wait(500)
        cy.get("textarea[formcontrolname='description']")
            .should('have.attr', 'maxlength')
            .and('equal', '300') 
        cy.get("textarea[formcontrolname='description']")
            .type(c300)
            .wait(500)
            //ПРОВЕРКА ТЕКСТА В ИНПУТЕ
            .wait(500)

        // team ------------------------------------------------------------------------------------------------------------------------
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
            //ПРОВЕРКА УЧАСТИЯ СОТРУДНИКА
        
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

        // editing ---------------------------------------------------------------------------------------------------------------------
        cy.get("div[class='mat-tab-links'] > a[href='/projects']")
            .click().wait(2000)
        cy.get("mat-select[role='combobox']")
            .click().wait(500)
        cy.get("mat-option[ng-reflect-value='50']")
            .click().wait(500)

        //Вставить функцию поиска и переключения страницы
        cy.get("table[class='mat-sort table ng-star-inserted']")
            .contains("Cypress Autotest")                                  // DONT FORGET TO CHECK THE NAME!
            .scrollIntoView({duration: 1000})
            .click()
            .wait(500)
               
        cy.get("button[class*='button-edit']")
            .click().wait(500)
        cy.get("input[ng-reflect-name='/Name']")
            .click()
            .type('{backspace}')
            .wait(500)                                       
        cy.get("input[ng-reflect-name='/Name']")
            .type('{selectAll}')
            .type('{backspace}').wait(500)
        cy.get('.project-info')
            .click()
            .wait(500)
        cy.get('.actions__cancel')
            .click().wait(200)
       
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
        // status change check
            
          
        
    });
});