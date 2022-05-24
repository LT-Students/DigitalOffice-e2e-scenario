import { login } from "../QA/Params";

// TC_460 Заполнить обязательные поля
describe("TC_460", function(){
	it("TC_460", function(){
		login();
		let cityName = 'Пермь';
		let addres = 'Счастливая улица, 777';
		cy.visit("https://dev.ltdo.xyz/admin/dashboard");
		cy.get('.section:nth-child(2) .section__button:nth-child(6)').click();
		cy.get('.mat-form-field:nth-child(1)').type(cityName);
		cy.get('.mat-form-field:nth-child(2)').type (addres);
		// cy.get('button[type="submit"]').click();
		// cy.log('Клик по кнопке "Добавить офис"');
	})
})

// TC-461 Заполнить все поля. В обязательные поля ввести по 1 символу
describe("TC_461", function(){
	it("TC_461", function(){
		let cityName = 'П';
		let addres = 'С';
		login();
		cy.visit("https://dev.ltdo.xyz/admin/dashboard");
		cy.get('.section:nth-child(2) .section__button:nth-child(6)').click();
		cy.get('.mat-form-field:nth-child(1)').type(cityName);
		cy.get('.mat-form-field:nth-child(2)').type(addres);
		// cy.get('button[type="submit"]').click();
		// cy.log('Клик по кнопке "Добавить офис"');		
	})
})

// TC-462 Ввести в поле "Город" поочередно 178/199/200 символов
describe("TC-462", function(){
	it("TC-462", function(){
		function symbolInsert(length) {
			var text = "";
			var possible = "Крун Тхеп Маханакхон Амон Раттанакосин Махинтараю";
				
			for (var i = 0; i < length; i++)
			text += possible.charAt(Math.floor(Math.random() * possible.length));
				
			return text;
			}
		let addres = 'Счастливая улица, 777';
		login();
		cy.visit("https://dev.ltdo.xyz/admin/dashboard");
		cy.get('.section:nth-child(2) .section__button:nth-child(6)').click();
		cy.get('.mat-form-field:nth-child(1)').type(symbolInsert(178));
		cy.get('.mat-form-field:nth-child(2)').type(addres);
		cy.get('.mat-form-field:nth-child(1)').type(symbolInsert(199));
		cy.get('.mat-form-field:nth-child(1)').type(symbolInsert(200));
			//cy.get('button[type="submit"]').click()
		})
})

// TC-463 Ввести в поле "Город" 201 символ - Должен вернуть ошибку
describe("TC-463", function(){
	it("TC-463", function(){
		function symbolInsert(length) {
			var text = "";
			var possible = "Крун Тхеп Маханакхон Амон Раттанакосин Махинтараю";
				
			for (var i = 0; i < length; i++)
			text += possible.charAt(Math.floor(Math.random() * possible.length));
				
			return text;
			}
		let addres = 'Счастливая улица, 777';
		login();
		cy.visit("https://dev.ltdo.xyz/admin/dashboard");
		cy.get('.section:nth-child(2) .section__button:nth-child(6)').click();
		cy.get('.mat-form-field:nth-child(1)').type(symbolInsert(201));
		cy.get('.mat-form-field:nth-child(2)').type(addres);
		//cy.on('uncaught:exception', (err, runnable) => {
		//	return false
		//  })
		//cy.get('button[type="submit"]').click()
		//	.log('Клик по кнопке "Добавить офис"');
		})
})

// TC-464 Ввести в обязательные поля только "Пробелы"
describe("TC-464", function(){
	it("TC-464", function(){
		login();
		let notext = "     "
		cy.visit("https://dev.ltdo.xyz/admin/dashboard");
		cy.get('.section:nth-child(2) .section__button:nth-child(6)').click();
		cy.get('.mat-form-field:nth-child(1)').type(notext);
		cy.get('.mat-form-field:nth-child(2)').type(notext);
		//cy.on('uncaught:exception', (err, runnable) => {
		//	return false
		//  })
		// cy.get('button[type="submit"]').click()
		//	.log('Клик по кнопке "Добавить офис"');
		})
})

// TC-466-469 Заполнить все поля только цифрами/латинскими/специальными символами/заглавными буквами
describe("TC-466-469", function(){
	it("TC-466-469", function(){
		function symbolInsert() {
			var text = "";
			var possible = "12345678lifeisperfect$&+,:;=?@#|<>.^()%!ЖИЗНЬПРЕКРАСНА";
				
			for (var i = 0; i < 10; i++)
			text += possible.charAt(Math.floor(Math.random() * possible.length));
				
			return text;
			}
		login();
		cy.visit("https://dev.ltdo.xyz/admin/dashboard");
		cy.get('.section:nth-child(2) .section__button:nth-child(6)').click();
		cy.get('.mat-form-field:nth-child(1)').type(symbolInsert());
		cy.get('.mat-form-field:nth-child(2)').type(symbolInsert());
		cy.get('.mat-form-field:nth-child(3)').type(symbolInsert());
			//cy.get('button[type="submit"]').click()
			//.log('Клик по кнопке "Добавить офис"');
		})
})

// TC-470 Обязательное поле "Город" оставить пустым
describe("TC_470", function(){
	it("TC_470", function(){
		let addres = 'Счастливая улица, 777';
		let name = 'Котовий офис';
		login();
		cy.visit("https://dev.ltdo.xyz/admin/dashboard");
		cy.get('.section:nth-child(2) .section__button:nth-child(6)').click();
		cy.get('.mat-form-field:nth-child(1)').click();
		cy.get('.mat-form-field:nth-child(2)').type(addres);
		cy.get('.mat-form-field:nth-child(3)').type(name);
		//cy.on('uncaught:exception', (err, runnable) => {
		//	return false
		//  });
		//cy.get('button[type="submit"]').click()
		//	.log('Клик по кнопке "Добавить офис"');		
		})
})

// TC-471 Обязательное поле "Адрес" оставить пустым
describe("TC_471", function(){
	it("TC_471", function(){
		let cityName = 'Пермь';
		let name = 'Котовий офис';
		login();
		cy.visit("https://dev.ltdo.xyz/admin/dashboard");
		cy.get('.section:nth-child(2) .section__button:nth-child(6)').click();
		cy.get('.mat-form-field:nth-child(1)').type(cityName);
		cy.get('.mat-form-field:nth-child(2)').click();
		cy.get('.mat-form-field:nth-child(3)').type(name);
		// cy.get('button[type="submit"]').click()
		// .log('Клик по кнопке "Добавить офис"');		
	})
})

// TC-472 Поле "Название" оставить пустым
describe("TC_472", function(){
	it("TC_472", function(){
		let cityName = 'Пермь';
		let addres = 'Счастливая улица, 777';
		login();
		cy.visit("https://dev.ltdo.xyz/admin/dashboard");
		cy.get('.section:nth-child(2) .section__button:nth-child(6)').click();
		cy.get('.mat-form-field:nth-child(1)').type(cityName);
		cy.get('.mat-form-field:nth-child(2)').type(addres);
		cy.get('.mat-form-field:nth-child(3)').click();
		// cy.get('button[type="submit"]').click()
		//.log('Клик по кнопке "Добавить офис"');		
	})
})

// TC-473 Создать дубликат уже имеющегося офиса
// TC-836 Ввести в поле "Название" название уже существующего офиса.
describe("TC_473", function(){
	it("create 2 the same offices", function(){
		login();
		let cityName = 'Пермь';
		let addres = 'Счастливая улица, 777';
		let name = 'Котовье гнездо';
			for (var i = 0; i < 2; i++){
		cy.visit("https://dev.ltdo.xyz/admin/dashboard");
		cy.get('.section:nth-child(2) .section__button:nth-child(6)').click();
		cy.get('.mat-form-field:nth-child(1)').type(cityName);
		cy.get('.mat-form-field:nth-child(2)').type(addres);
		cy.get('.mat-form-field:nth-child(3)').type(name);
		//cy.get('button[type="submit"]').click ()
		//		.log('Клик по кнопке "Добавить офис"');
			}
	})
})

// TC-474 Заполнить обязательные поля. Нажать на кнопку "Отмена"
describe("TC_474", function(){
	it("TC_474", function(){
		let cityName = 'Пермь';
		let addres = 'Счастливая улица, 777';
		login();
		cy.visit("https://dev.ltdo.xyz/admin/dashboard");
		cy.get('.section:nth-child(2) .section__button:nth-child(6)').click();
		cy.get('.mat-form-field:nth-child(1)').type(cityName);
		cy.get('.mat-form-field:nth-child(2)').type(addres);
		cy.get('button[type="button"]').click()
			.log('Клик по кнопке "Отмена"');
		})
	})

	// TC-475 Не заполнять обязательные поля. Нажать на кнопку "Отмена"
describe("TC_475", function(){
	it("TC_475", function(){
		login();
		cy.visit("https://dev.ltdo.xyz/admin/dashboard");
		cy.get('.section:nth-child(2) .section__button:nth-child(6)').click();
		cy.get('.mat-form-field:nth-child(1)').click();
		cy.get('.mat-form-field:nth-child(2)').click();
		cy.get('button[type="button"]').click()
			.log('Клик по кнопке "Отмена"');
		})
	})

	// TC-477 Все поля оставить незаполненными. Нажать на кнопку "Добавить офис"
describe("TC_477", function(){
	it("TC_477", function(){
		login();
		cy.visit("https://dev.ltdo.xyz/admin/dashboard");
		cy.get('.section:nth-child(2) .section__button:nth-child(6)').click();
		cy.get('.mat-form-field:nth-child(1)').click();
		cy.get('.mat-form-field:nth-child(2)').click();
		//cy.on('uncaught:exception', (err, runnable) => {
		//	return false
		 // })
		//cy.get('button[type="submit"]').click()
		//	.log('Клик по кнопке "Добавить офис"');
		})
	})

	// TC-482 Нажать кнопку "+Добавить офис" в окне со списком существующих офисов
	describe("TC-482", function(){
		it("TC-482", function(){
			login();
			cy.visit("https://dev.ltdo.xyz/admin/dashboard");
			cy.get('.section:last-of-type .section__button:nth-child(4)').click();
			cy.get('button[color="accent"]').click ();	
		})
	})

	//TC-833 Заполнить только поле "Название". Нажать на кнопку "Добавить офис"
	describe("TC-833", function(){
		it("TC-833", function(){
			let name = 'Котовий офис';
			login();
		cy.visit("https://dev.ltdo.xyz/admin/dashboard");
		cy.get('.section:nth-child(2) .section__button:nth-child(6)').click();
		cy.get('.mat-form-field:nth-child(1)').click();
		cy.get('.mat-form-field:nth-child(2)').click();
		cy.get('.mat-form-field:nth-child(3)').type(name);
		//cy.on('uncaught:exception', (err, runnable) => {
		//	return false
		//  })
		//cy.get('button[type="submit"]').click()
		//	.log('Клик по кнопке "Добавить офис"');		
	})
})