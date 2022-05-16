describe("log in", ()  => {
  it("sing in", () => {
    cy.visit('https://dev.ltdo.xyz/auth/login');
    cy.log('Переход на страницу авторизации');
    cy.log('Корпоративный e-mail или логин');
    cy.get('input[type="email"]').type("admin");
    cy.log('Пароль');
    cy.get('input[type="password"]').type("ltstudents");
    cy.log('Клик по кнопке "Войти"');
    cy.get('button[type="submit"]').click(); 
    cy.get('a[href*="/admin"]').click();
    cy.get('.dashboard .section:nth-child(3) .section__button:first-child').click();
    //cy.contains('Aфанасий Фет').click();
    cy.get('tr[ng-reflect-router-link="8becd650-27bc-49c0-a687-0088fc"]').click();
    cy.get('img[src="../../../../../assets/svg/edit.svg"]').click();
    cy.get('input[ng-reflect-name="/LastName"]').clear();
    cy.get('input[ng-reflect-name="/FirstName"]').clear();
    cy.get('input[ng-reflect-name="/MiddleName"]').clear();
    cy.get('input[ng-reflect-name="/DateOfBirth"]').clear();
    cy.get('input[ng-reflect-name="/LastName"]').type("Афанасий");
    cy.get('input[ng-reflect-name="/FirstName"]').type("Фет");
    cy.get('input[ng-reflect-name="/MiddleName"]').type("Фетин");
    cy.get('input[ng-reflect-name="/DateOfBirth"]').type("12.05.1995");
    cy.get('textarea[ng-reflect-placeholder="Напишите немного о себе или ос"]').type("12.05.1995");
    cy.get('button[type="submit"]').click();
    });
  });
//})