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
    cy.get('input[type="text"]').type("52");
    cy.get('a[href*="/admin"]').click();
    cy.get('.dashboard .section:nth-child(2) .section__button:first-child').click();
    //cy.contains('Добавить сотрудника').click();
    cy.get('input[ng-reflect-placeholder="Введите имя"]').type("вика");
    cy.get('input[ng-reflect-placeholder="Введите фамилию"]').type("михайлова");
    cy.get('input[ng-reflect-placeholder="Введите отчество"]').type("Александровна")
    cy.get('input[data-placeholder="Введите E-mail"]').type(userID_Alpha_Numeric())
    function userID_Alpha_Numeric() {
      var possible = "AB@fuu.com";
      var text = "FF@fuu.com";
  
      for (var i = 0; i < 10; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
  }
    cy.get('mat-select[placeholder="Выберите должность"]').click();
    cy.get('mat-option:first-child').click();
    cy.get('mat-select[placeholder="Выберите офис"').click();
    cy.get('mat-option:first-child').click();
    cy.get('button[aria-label="Open calendar"]').click();
    cy.get('tbody tr:nth-child(1) td:nth-child(4)').click().wait(500);
    cy.get('button[type="submit"]').click();
  });
})