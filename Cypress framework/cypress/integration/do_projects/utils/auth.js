let token 

describe('login', () => {
    
    it ('start', () => {
        cy.visit('https://dev.ltdo.xyz/auth/login')
        cy.get("input[type='email']")
            .type('admin', {delay:50})
        cy.get("input[type='password']")
            .type('ltstudents', {delay:50})
            .type('{enter}')
        cy.wait(5000).then( () => {
            token = localStorage.getItem('access_token')
        })
        
    });
});

export function setToken() {
    localStorage.setItem('access_token', token)
}