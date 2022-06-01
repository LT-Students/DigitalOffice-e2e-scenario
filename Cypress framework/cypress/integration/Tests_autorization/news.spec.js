//TC-290: Нажать кнопку «+ Добавить новость»
describe("TC-290", () => {
  it("tc-290", () => {
    cy.visit('https://dev.ltdo.xyz/auth/login');
    cy.get('input[type="email"]').type("Marina");
    cy.get('input[type="password"]').type("f3Hv*rEj");
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

//TC-326: Ввести в заголовк новости только пробелы
  cy.get('textarea[rows="1"]').type("            ");
  cy.contains('Опубликовать новость').should('be.disabled').wait(2000);

//TC-344: Ввести только пробелы в основной текст
  cy.get('textarea[rows="1"]').clear();
  cy.get('div[class^="ce-paragraph"]').type("         ");
  cy.contains('Опубликовать новость').should('be.disabled').wait(2000);

//TC-392: Добавить в новость нумерованный список
cy.get('textarea[rows="1"]').clear().type("Новость дня!");
cy.log('Ввести текст новости')
cy.get('div[class^="ce-paragraph"]').click();
cy.get('div[class="ce-toolbar__plus"]').click();
cy.get('li[data-tool="list"]').click().wait(2000);
cy.get('div[class="cdx-nested-list__item-content"]').type("Сегодня солнце и прекрасный день").type('{enter}');
cy.get('div[class="cdx-nested-list__item-content"]').type("Сегодня солнце и прекрасный день").type('{enter}');
cy.get('div[class="cdx-nested-list__item-content"]').type("Сегодня солнце и прекрасный день").type('{enter}');
//УЗНАТЬ КАК МОЖНО ПРОВЕРИТЬ, ЧТО НУМЕРАЦИЯ ЕСТЬ? should?

  });
});

  /*//TC-345: Добавить в новость картинку
  cy.get('textarea[rows="1"]').type("Новость дня!");
  cy.log('Ввести текст новости')
  //cy.get('div[class^="ce-paragraph"]').type("Сегодня солнце и прекрасный день");
  cy.get('div[class^="ce-paragraph"]').click();
  cy.get('div[class="ce-toolbar__plus"]').click();
  cy.get('li[data-tool="image"]').click().wait(2000);
  cy.get('div[class="cdx-button"]').click();

  //cy.log('Клик по кнопке "Опубликовать новость"')
  //cy.get('.editor-header > button:nth-child(2)').click(); 
  //cy.url().should('eq', 'https://dev.ltdo.xyz/news');*/