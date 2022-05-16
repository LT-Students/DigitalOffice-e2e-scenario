// Enter in all fields 1 symbol
// In case you need to press button 'Edit office' add cy.get('button[type="submit"]').click () at the end
describe("TC_461", function(){
	it("Button Edit Office is clickable", function(){
		let cityName = 'П';
		let addres = 'С';
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
		cy.get('input[type="text"]').eq(0).type (cityName)
		cy.get('input[type="text"]').eq(1).type (addres)
		
	})
})

// Fill the required fields in with spaces
describe("TC_464", function(){
	it("Button Edit Office is unclickable", function(){
		let cityName = '     ';
		let addres = '     ';
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
		cy.get('input[type="text"]').eq(0).type (cityName)
		cy.get('input[type="text"]').eq(1).type (addres)
		cy.get('button[type="submit"]').click () 
		
	})
})

// Enter 5 spaces after a text in each required field
// In case you need to press button 'Edit office' add cy.get('button[type="submit"]').click () at the end
describe("TC_465", function(){
	it("Button Edit Office is clickable", function(){
		let cityName = '     Пермь';
		let addres = '     Счастливая улица, 777';
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
		cy.get('input[type="text"]').eq(0).type (cityName)
		cy.get('input[type="text"]').eq(1).type (addres)
		
	})
})

// Fill all fields in with numbers
describe("TC_466", function(){
	it("Button Edit Office is unclickable", function(){
		let cityName = '1234';
		let addres = '1234';
		let officeName = '1234'
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
		cy.get('input[type="text"]').eq(0).type (cityName)
		cy.get('input[type="text"]').eq(1).type (addres)
		cy.get('input[type="text"]').eq(2).type (officeName)
		cy.get('button[type="submit"]').click ()
		
	})
})

// Enter latin symbols in each required field
// In case you need to press button 'Edit office' add cy.get('button[type="submit"]').click () at the end
describe("TC_467", function(){
	it("Button Edit Office is clickable", function(){
		let cityName = 'Perm';
		let addres = 'Happiness Street';
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
		cy.get('input[type="text"]').eq(0).type (cityName)
		cy.get('input[type="text"]').eq(1).type (addres)
		
	})
})

// Enter capital letters in each required field
// In case you need to press button 'Edit office' add cy.get('button[type="submit"]').click () at the end
describe("TC_468", function(){
	it("Button Edit Office is clickable", function(){
		let cityName = 'ПЕРМЬ';
		let addres = 'УЛИЦА СЧАСТЛИВАЯ';
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
		cy.get('input[type="text"]').eq(0).type (cityName)
		cy.get('input[type="text"]').eq(1).type (addres)
		
	})
})

// Enter special symbols in each required field
// In case you need to press button 'Edit office' add cy.get('button[type="submit"]').click () at the end
describe("TC_469", function(){
	it("Button Edit Office is clickable", function(){
		let cityName = '$&+,:;=?@#|<>.^*()%!';
		let addres = '$&+,:;=?@#|<>.^*()%!';
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
		cy.get('input[type="text"]').eq(0).type (cityName)
		cy.get('input[type="text"]').eq(1).type (addres)
		
	})
})