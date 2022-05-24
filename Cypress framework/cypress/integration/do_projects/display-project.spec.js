import {setToken} from "./utils/auth"

describe('display', () => {

    beforeEach(setToken);

    it ('start', () => {
      
        cy.get("a[href='/projects']")
            .click()

        cy.get("tbody > tr:nth-child(3)")                                         
            .click()
            //
    
    });
});