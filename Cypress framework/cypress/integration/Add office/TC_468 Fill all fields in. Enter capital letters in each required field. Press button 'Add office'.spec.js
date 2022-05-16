describe("Log in", function(){
	it("Sing in", function(){
		cy.visit("https://dev.ltdo.xyz/auth/login")
		cy.get('input[type="email"]').type ('Alyona')
		cy.get('input[type="password"]').type ('5WZWqx#NPK')
		cy.get('button[type="submit"]').click ()
		cy.visit("https://dev.ltdo.xyz/admin/dashboard")
		cy.get('img[alt="add-project-icon"]').eq(4).click ()
		cy.get('input[type="text"]').eq(0).type ('ПЕРМЬ')
		cy.get('input[type="text"]').eq(1).type ('СЧАСТЛИВАЯ УЛИЦА')
		cy.get('input[type="text"]').eq(2).type ('КОТОВИЙ ХВОСТИК')
		cy.get('button[type="submit"]').click ()

	})
})