describe("Log in", function(){
	it("Sing in", function(){
		let cityName = 'Крун Тхеп Маханакхон Амон Раттанакосин Махинтараюттхая Махадилок Пхоп Ноппарат Ратчатхани Буриром Удомратчанивет Махасатан Амон Пиман Аватан Сатит Саккатхаттийя Витсанукам Пра178'
		cy.visit("https://dev.ltdo.xyz/auth/login")
		cy.get('input[type="email"]').type ('Alyona')
		cy.get('input[type="password"]').type ('5WZWqx#NPK')
		cy.get('button[type="submit"]').click ()
		cy.visit("https://dev.ltdo.xyz/admin/dashboard")
		cy.get('img[alt="add-project-icon"]').eq(8).click ()
		cy.get('img[alt="edit"]').eq(0).click ()
		cy.get('input[type="text"]').eq(0).clear ().type (cityName)
		cy.get('input[type="text"]').eq(1).clear ().type ('Счастливая улица, 777')
		cy.get('input[type="text"]').eq(2).type ('Котовий офис')
cityName = 'Крун Тхеп Маханакхон Амон Раттанакосин Махинтараюттхая Махадилок Пхоп Ноппарат Ратчатхани Буриром Удомратчанивет Махасатан Амон Пиман Аватан Сатит Саккатхаттийя Витсанукам Праситсколько можно писа199' 
		cy.get('input[type="text"]').eq(0).clear ().type (cityName)
cityName = 'Крун Тхеп Маханакхон Амон Раттанакосин Махинтараюттхая Махадилок Пхоп Ноппарат Ратчатхани Буриром Удомратчанивет Махасатан Амон Пиман Аватан Сатит Саккатхаттийя Витсанукам Праситсколько можно писат200' 
		cy.get('input[type="text"]').eq(0).clear ().type (cityName)
		cy.get('button[type="submit"]').click ()
		
	})
})