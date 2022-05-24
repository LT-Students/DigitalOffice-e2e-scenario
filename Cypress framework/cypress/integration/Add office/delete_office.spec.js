import { login } from "../QA/Params";

// TC-484-485 Нажать на пиктограмму “Корзина” справа от названия офиса. Нажать кнопку “Отменить”
describe("TC-484-485", function(){
	it("TC-484-485", function(){
		login();
		cy.visit("https://dev.ltdo.xyz/admin/dashboard");
		cy.get('.section:last-of-type .section__button:nth-child(4)').click();
		cy.get('img[alt="edit"]').eq(1).click();
		cy.get('button[ng-reflect-dialog-result="false"]').click;

	})
})

// TC-527 Нажать на пиктограмму “Корзина” справа от названия офиса. Нажать кнопку “Да, удалить”
describe("TC-527", function(){
	it("TC-527", function(){
		login();
		cy.visit("https://dev.ltdo.xyz/admin/dashboard");
		cy.get('.section:last-of-type .section__button:nth-child(4)').click();
		cy.get('img[alt="edit"]').eq(1).click();
		// cy.get('button[ng-reflect-dialog-result="true"]').click;

	})
})