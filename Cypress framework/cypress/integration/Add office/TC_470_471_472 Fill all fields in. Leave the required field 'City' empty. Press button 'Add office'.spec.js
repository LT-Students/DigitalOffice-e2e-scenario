// Leave the required field 'City' empty. Press button 'Add office'
describe("TC_470", function(){
	it("button Add Office is unclickable", function(){
		cy.visit("https://dev.ltdo.xyz/auth/login")
		cy.get('input[type="email"]').type ('Alyona')
		cy.get('input[type="password"]').type ('5WZWqx#NPK')
		cy.get('button[type="submit"]').click ()
		cy.visit("https://dev.ltdo.xyz/auth/login")
		cy.get('input[type="email"]').type ('Alyona')
		cy.get('input[type="password"]').type ('5WZWqx#NPK')
		cy.get('button[type="submit"]').click ()
		cy.visit("https://dev.ltdo.xyz/admin/dashboard")
		cy.get('img[alt="add-project-icon"]').eq(4).click ()
		cy.get('input[type="text"]').eq(0).click ()
		cy.get('input[type="text"]').eq(1).type ('Счастливая улица, 777')
		cy.get('input[type="text"]').eq(2).type ('Котовий офис')
		cy.get('button[type="submit"]').click ()

	})
})

// Leave the required field 'Addres' empty. Press button 'Add office'
describe("TC_471", function(){
    it("button Add Office is unclickable", function(){
		cy.visit("https://dev.ltdo.xyz/auth/login")
		cy.get('input[type="email"]').type ('Alyona')
		cy.get('input[type="password"]').type ('5WZWqx#NPK')
		cy.get('button[type="submit"]').click ()
		cy.visit("https://dev.ltdo.xyz/auth/login")
		cy.get('input[type="email"]').type ('Alyona')
		cy.get('input[type="password"]').type ('5WZWqx#NPK')
		cy.get('button[type="submit"]').click ()
		cy.visit("https://dev.ltdo.xyz/admin/dashboard")
		cy.get('img[alt="add-project-icon"]').eq(4).click ()
		cy.get('input[type="text"]').eq(0).type ('Пермь')
		cy.get('input[type="text"]').eq(1)
		cy.get('input[type="text"]').eq(2).type ('Котовий офис')
		cy.get('button[type="submit"]').click ()

	})
})

// Leave the required field 'Office Name' empty. Press button 'Add office'
describe("TC_472", function(){
    it("button Add Office is clickable", function(){
		cy.visit("https://dev.ltdo.xyz/auth/login")
		cy.get('input[type="email"]').type ('Alyona')
		cy.get('input[type="password"]').type ('5WZWqx#NPK')
		cy.get('button[type="submit"]').click ()
		cy.visit("https://dev.ltdo.xyz/auth/login")
		cy.get('input[type="email"]').type ('Alyona')
		cy.get('input[type="password"]').type ('5WZWqx#NPK')
		cy.get('button[type="submit"]').click ()
		cy.visit("https://dev.ltdo.xyz/admin/dashboard")
		cy.get('img[alt="add-project-icon"]').eq(4).click ()
		cy.get('input[type="text"]').eq(0).type ('Пермь')
		cy.get('input[type="text"]').eq(1).type ('Счастливая улица, 777')
		cy.get('input[type="text"]').eq(2)
		
	})
})

	