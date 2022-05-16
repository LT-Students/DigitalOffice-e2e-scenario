describe("News", () => {
  it("news", () => {
    cy.visit('https://dev.ltdo.xyz/auth/login');
    cy.get('input[type="email"]').type("Marina1");
    cy.get('input[type="password"]').type("8CI3Uo3Ymp_");
    cy.get('button[type="submit"]').click();
    cy.log('Клик по кнопке "Новости"')
   // cy.get('div[class="mat-menu-content ng-tns-c257-1"]button[class="mat-focus-indicator mat-menu-item ng-tns-c257-1"]:nth-child(2)').click();
    // cy.get('[class="mat-menu-content ng-tns-c257-1"][class="mat-focus-indicator mat-menu-item ng-tns-c257-1"]:nth-child(2)').click();
    cy.get('a[ng-reflect-message="Новости"]').click();
    //cy.contains('Новости').click();
    cy.log('Клик по кнопке "Добавить новость"')
    cy.get('button[class="mat-focus-indicator header__button mat-flat-button mat-button-base mat-primary"]').click();
    cy.log('Поделитесь новостью с коллегами')
    cy.get('textarea[rows="1"]').type("Новость дня!");
    cy.log('Ввести текст новости')
    cy.get('div[class="ce-paragraph cdx-block"]').type("Сегодня солнце и прекрасный день");
    cy.log('Клик по кнопке "Опубликовать новость"')
    cy.get('button[ng-reflect-loading="false"]').click();
    });
    }); 