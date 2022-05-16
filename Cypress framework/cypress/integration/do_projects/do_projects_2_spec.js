describe('Projects Test Suite', () => {

    it ('reStart', () => {

        cy.request('GET', 'https://dev.ltdo.xyz/auth/login').then((response) => {
        expect(response).to.have.property('Status', 200)
        expect(response.body).to.not.to.be.null
        });

        // response body.contains test

    });
});