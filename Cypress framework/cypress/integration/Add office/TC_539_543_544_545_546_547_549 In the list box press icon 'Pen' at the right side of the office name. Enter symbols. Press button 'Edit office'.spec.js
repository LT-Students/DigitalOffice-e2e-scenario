// Enter in all fields 1 symbol
// In case you need to press button 'Edit office' add cy.get('button[type="submit"]').click () at the end
describe("TC_539", function(){
	it("Button Edit Office is clickable", function(){
		let cityName = 'П';
		let addres = 'С';
		let officeName = 'К'
		cy.visit("https://dev.ltdo.xyz/auth/login")
		cy.get('input[type="email"]').type ('Alyona')
		cy.get('input[type="password"]').type ('5WZWqx#NPK')
		cy.get('button[type="submit"]').click ()
		cy.visit("https://dev.ltdo.xyz/auth/login")
		cy.get('input[type="email"]').type ('Alyona')
		cy.get('input[type="password"]').type ('5WZWqx#NPK')
		cy.get('button[type="submit"]').click ()
		cy.visit("https://dev.ltdo.xyz/admin/dashboard")
		cy.get('img[alt="add-project-icon"]').eq(8).click ()
		cy.get('img[alt="edit"]').eq(0).click ()
		cy.get('input[type="text"]').eq(0).clear ().type (cityName)
		cy.get('input[type="text"]').eq(1).clear ().type (addres)
		cy.get('input[type="text"]').eq(2).type (officeName)
		
	})
})

// Enter in all fields latin symbols
// In case you need to press button 'Edit office' add cy.get('button[type="submit"]').click () at the end
describe("TC_543", function(){
	it("Button Edit Office is clickable", function(){
		let cityName = 'Perm';
		let addres = 'Happiness street';
		let officeName = 'Kitty office'
		cy.visit("https://dev.ltdo.xyz/auth/login")
		cy.get('input[type="email"]').type ('Alyona')
		cy.get('input[type="password"]').type ('5WZWqx#NPK')
		cy.get('button[type="submit"]').click ()
		cy.visit("https://dev.ltdo.xyz/auth/login")
		cy.get('input[type="email"]').type ('Alyona')
		cy.get('input[type="password"]').type ('5WZWqx#NPK')
		cy.get('button[type="submit"]').click ()
		cy.visit("https://dev.ltdo.xyz/admin/dashboard")
		cy.get('img[alt="add-project-icon"]').eq(8).click ()
		cy.get('img[alt="edit"]').eq(0).click ()
		cy.get('input[type="text"]').eq(0).clear ().type (cityName)
		cy.get('input[type="text"]').eq(1).clear ().type (addres)
		cy.get('input[type="text"]').eq(2).type (officeName)
		
	})
})

// Enter in all fields capital letters
// In case you need to press button 'Edit office' add cy.get('button[type="submit"]').click () at the end
describe("TC_544", function(){
	it("Button Edit Office is clickable", function(){
		let cityName = 'ПЕРМЬ';
		let addres = 'СЧАСТЛИВАЯ УЛИЦА';
		let officeName = 'КОТОВИЙ ОФИС'
		cy.visit("https://dev.ltdo.xyz/auth/login")
		cy.get('input[type="email"]').type ('Alyona')
		cy.get('input[type="password"]').type ('5WZWqx#NPK')
		cy.get('button[type="submit"]').click ()
		cy.visit("https://dev.ltdo.xyz/auth/login")
		cy.get('input[type="email"]').type ('Alyona')
		cy.get('input[type="password"]').type ('5WZWqx#NPK')
		cy.get('button[type="submit"]').click ()
		cy.visit("https://dev.ltdo.xyz/admin/dashboard")
		cy.get('img[alt="add-project-icon"]').eq(8).click ()
		cy.get('img[alt="edit"]').eq(0).click ()
		cy.get('input[type="text"]').eq(0).clear ().type (cityName)
		cy.get('input[type="text"]').eq(1).clear ().type (addres)
		cy.get('input[type="text"]').eq(2).type (officeName)
		
	})
})

// Enter in all fields numbers
describe("TC_545", function(){
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
		cy.get('img[alt="add-project-icon"]').eq(8).click ()
		cy.get('img[alt="edit"]').eq(0).click ()
		cy.get('input[type="text"]').eq(0).clear ().type (cityName)
		cy.get('input[type="text"]').eq(1).clear ().type (addres)
		cy.get('input[type="text"]').eq(2).type (officeName)
		cy.get('button[type="submit"]').click ()
		
	})
})

// Enter in all fields special symbols
// In case you need to press button 'Edit office' add cy.get('button[type="submit"]').click () at the end
describe("TC_546", function(){
	it("Button Edit Office is clickable", function(){
		let cityName = '$&+,:;=?@#|<>.^*()%!';
		let addres = '$&+,:;=?@#|<>.^*()%!';
		let officeName = '$&+,:;=?@#|<>.^*()%!'
		cy.visit("https://dev.ltdo.xyz/auth/login")
		cy.get('input[type="email"]').type ('Alyona')
		cy.get('input[type="password"]').type ('5WZWqx#NPK')
		cy.get('button[type="submit"]').click ()
		cy.visit("https://dev.ltdo.xyz/auth/login")
		cy.get('input[type="email"]').type ('Alyona')
		cy.get('input[type="password"]').type ('5WZWqx#NPK')
		cy.get('button[type="submit"]').click ()
		cy.visit("https://dev.ltdo.xyz/admin/dashboard")
		cy.get('img[alt="add-project-icon"]').eq(8).click ()
		cy.get('img[alt="edit"]').eq(0).click ()
		cy.get('input[type="text"]').eq(0).clear ().type (cityName)
		cy.get('input[type="text"]').eq(1).clear ().type (addres)
		cy.get('input[type="text"]').eq(2).type (officeName)
		
	})
})

// Enter in all fields 5 space symbols before a text
// In case you need to press button 'Edit office' add cy.get('button[type="submit"]').click () at the end
describe("TC_547", function(){
	it("Button Edit Office is clickable", function(){
		let cityName = '     Пермь';
		let addres = '     Счастливая улица, 777';
		let officeName = '     Котовий офис'
		cy.visit("https://dev.ltdo.xyz/auth/login")
		cy.get('input[type="email"]').type ('Alyona')
		cy.get('input[type="password"]').type ('5WZWqx#NPK')
		cy.get('button[type="submit"]').click ()
		cy.visit("https://dev.ltdo.xyz/auth/login")
		cy.get('input[type="email"]').type ('Alyona')
		cy.get('input[type="password"]').type ('5WZWqx#NPK')
		cy.get('button[type="submit"]').click ()
		cy.visit("https://dev.ltdo.xyz/admin/dashboard")
		cy.get('img[alt="add-project-icon"]').eq(8).click ()
		cy.get('img[alt="edit"]').eq(0).click ()
		cy.get('input[type="text"]').eq(0).clear ().type (cityName)
		cy.get('input[type="text"]').eq(1).clear ().type (addres)
		cy.get('input[type="text"]').eq(2).type (officeName)
		
		
	})
})

// Enter in all fields only space symbols
describe("TC_547", function(){
	it("Button Edit Office is unclickable", function(){
		let cityName = '     ';
		let addres = '     ';
		let officeName = '     '
		cy.visit("https://dev.ltdo.xyz/auth/login")
		cy.get('input[type="email"]').type ('Alyona')
		cy.get('input[type="password"]').type ('5WZWqx#NPK')
		cy.get('button[type="submit"]').click ()
		cy.visit("https://dev.ltdo.xyz/auth/login")
		cy.get('input[type="email"]').type ('Alyona')
		cy.get('input[type="password"]').type ('5WZWqx#NPK')
		cy.get('button[type="submit"]').click ()
		cy.visit("https://dev.ltdo.xyz/admin/dashboard")
		cy.get('img[alt="add-project-icon"]').eq(8).click ()
		cy.get('img[alt="edit"]').eq(0).click ()
		cy.get('input[type="text"]').eq(0).clear ().type (cityName)
		cy.get('input[type="text"]').eq(1).clear ().type (addres)
		cy.get('input[type="text"]').eq(2).type (officeName)
		cy.get('button[type="submit"]').click ()
		
	})
})