//TC-333: Ввести верные старый пароль, новый пароль и подтверждение нового пароля
describe("TC-333", ()  => {
    it("tc-333", () => {
        cy.visit('https://dev.ltdo.xyz/auth/login');
        cy.get('input[type="email"]').type("Marina1");
        cy.get('input[type="password"]').type("8CI3Uo3Ymp_");
        cy.get('button[type="submit"]').click().wait(4000);

        cy.get('div[class^="mat-menu-trigger"]').click().wait(2000);
        cy.get('div[class^="mat-menu-content"] > button:nth-child(2)').click();

        cy.log('Старый пароль');
        cy.get('input[formcontrolname="old_password"]').type("8CI3Uo3Ymp_");
        cy.get('input[formcontrolname="new_password"]').type("8CI3Uo3Ymp_");
        cy.get('input[formcontrolname="confirm_password"]').type("8CI3Uo3Ymp_");
        cy.log('Сменить пароль');
        cy.get('button[type="submit"]').should('be.visible').click();

//TC-335: Ввести неверные старый пароль, новый пароль, подтверждение пароля
    cy.get('div[class^="mat-menu-trigger"]').click();
    cy.get('div[class^="mat-menu-content"] > button:nth-child(2)').click();
    cy.get('input[formcontrolname="old_password"]').type("привет");
    cy.get('input[formcontrolname="new_password"]').type("привет");
    cy.get('input[formcontrolname="confirm_password"]').type("привет");
    cy.get('button[type="submit"]').should('be.disabled').wait(2000);

//TC-336: Ввести новый пароль для КЭ 8-14 ( длиной 10, 8,14,9,13 символов)
    cy.get('input[formcontrolname="new_password"]').type(password());

    function password() {
        var text = "";
        var possible = "AaBbCc.!;@2367";
                
        for (var i = 8; i <=14; i++)
        //for (var i = 8; i <=14; arr[i] = i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
                
         return text;
        }

    cy.get('button[type="submit"]').should('be.disabled').wait(2000);    

//TC-339: Ввести новый пароль, содержащий буквы русского алфавита/буквы других языков
   cy.get('input[formcontrolname="new_password"]').type(password());
   
    function password() {
        var text = "";
        var possible = "Аленапривет阿萊娜你好";
            
        for (var i = 8; i <=14; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
            
        return text;
        }
    
        cy.get('button[type="submit"]').should('be.disabled').wait(2000);

//TC-340: Оставить поле нового пароля пустым
    cy.get('input[formcontrolname="new_password"]').clear();
    cy.get('button[type="submit"]').should('be.disabled').wait(2000);
        });
});