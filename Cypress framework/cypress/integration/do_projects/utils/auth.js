let token 

describe('login', () => {
    
    it ('start', () => {
        cy.visit('https://dev.ltdo.xyz/auth/login')
        cy.get("input[type='email']")
            .type('olaf6642', {delay:50})
        cy.get("input[type='password']")
            .type('hs$L7Cx!', {delay:50})
            .type('{enter}')
        cy.wait(3000).then( () => {
            token = localStorage.getItem('access_token')
        })
        
    });
});

export function setToken() {
    localStorage.setItem('access_token', token)
}