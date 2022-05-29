//TC-290: Нажать кнопку «+ Добавить новость»
describe("TC-290", () => {
  it("tc-290", () => {
    cy.visit('https://dev.ltdo.xyz/auth/login');
    cy.get('input[type="email"]').type("Marina1");
    cy.get('input[type="password"]').type("8CI3Uo3Ymp_");
    cy.get('button[type="submit"]').click().wait(3000);
    
    cy.log('Клик по кнопке "Новости"');
    cy.get('a[href="/news"]').click();
    cy.log('Клик по кнопке "Добавить новость"')
    cy.get('.header > button:nth-child(2)').click().wait(3000);

    cy.log('Поделитесь новостью с коллегами');
    cy.get('textarea[rows="1"]').type("Новость дня!");
    cy.log('Ввести текст новости')
    cy.get('div[class^="ce-paragraph"]').type("Сегодня солнце и прекрасный день");
    cy.log('Клик по кнопке "Опубликовать новость"')
    cy.get('.editor-header > button:nth-child(2)').click(); 
    cy.url().should('eq', 'https://dev.ltdo.xyz/news');

//TC-302: Создать новость только с заполненным заголовком
  cy.log('Поделитесь новостью с коллегами')
  cy.get('textarea[rows="1"]').type("Новость дня!");
  cy.contains('Опубликовать новость').should('be.disabled').wait(2000);
  });
}); 