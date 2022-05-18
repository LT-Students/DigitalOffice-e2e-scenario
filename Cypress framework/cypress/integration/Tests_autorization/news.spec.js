//TC-290: Нажать кнопку «+ Добавить новость»
describe("TC-290", () => {
  it("tc-290", () => {
    cy.visit('https://dev.ltdo.xyz/auth/login');
    cy.get('input[type="email"]').type("Marina1");
    cy.get('input[type="password"]').type("8CI3Uo3Ymp_");
    cy.get('button[type="submit"]').click();
    cy.log('Клик по кнопке "Новости"')
    cy.get("div[class='link ng-star-inserted'] > a[href='/news']").click();
    cy.log('Клик по кнопке "Добавить новость"')
    cy.get('button[class="mat-focus-indicator header__button mat-flat-button mat-button-base mat-primary"]').click();
    cy.log('Поделитесь новостью с коллегами')
    cy.get('textarea[rows="1"]').type("Новость дня!");
    cy.log('Ввести текст новости')
    cy.get('div[class="ce-paragraph cdx-block"]').type("Сегодня солнце и прекрасный день");
    cy.log('Клик по кнопке "Опубликовать новость"')
    cy.contains('Опубликовать новость').click();
    //cy.get('button[ng-reflect-loading="false"]').click();
    });
    }); 

    //TC-300: После создания новости, перейти в ленту новостей
    describe("TC-300", () => {
      it("tc-300", () => {
        cy.visit('https://dev.ltdo.xyz/auth/login');
        cy.get('input[type="email"]').type("Marina1");
        cy.get('input[type="password"]').type("8CI3Uo3Ymp_");
        cy.get('button[type="submit"]').click();
        cy.log('Клик по кнопке "Новости"')
        cy.get("div[class='link ng-star-inserted'] > a[href='/news']").click();
        cy.log('Клик по кнопке "Добавить новость"')
        cy.get('button[class="mat-focus-indicator header__button mat-flat-button mat-button-base mat-primary"]').click();
        cy.log('Поделитесь новостью с коллегами')
        cy.get('textarea[rows="1"]').type("Новость дня!");
        cy.log('Ввести текст новости')
        cy.get('div[class="ce-paragraph cdx-block"]').type("Сегодня солнце и прекрасный день");
        cy.log('Клик по кнопке "Опубликовать новость"')
        cy.contains('Опубликовать новость').click();

        //cy.get('button[ng-reflect-loading="false"]').click();
        });
        }); 