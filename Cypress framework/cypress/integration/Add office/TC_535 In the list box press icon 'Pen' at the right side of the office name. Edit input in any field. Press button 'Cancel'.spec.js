describe("Log in", function(){
	it("Sing in", function(){
		cy.visit("https://dev.ltdo.xyz/auth/login")
		cy.get('input[type="email"]').type ('Alyona')
		cy.get('input[type="password"]').type ('5WZWqx#NPK')
		cy.get('button[type="submit"]').click ()
		cy.visit("https://dev.ltdo.xyz/admin/dashboard")
		cy.get('img[alt="add-project-icon"]').eq(4).click ()
		cy.get('input[type="text"]').eq(0).type ('Пермь')
		cy.get('input[type="text"]').eq(1).type ('Счастливая улица, 777')
		cy.get('input[type="text"]').eq(2).type ('Котовий офис')
		cy.get('button[type="submit"]').click ()
		cy.get('img[alt="add-project-icon"]').eq(8).click ()
		cy.get('img[alt="edit"]').eq(0).click ()
		cy.get('input[type="text"]').eq(0).type ('Пермь2')
		cy.get('button[type="submit"]').click ()

	})
})