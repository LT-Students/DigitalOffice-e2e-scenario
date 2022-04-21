//TC-99: Ввести верные логин/email и пароль
describe( 'TC-99', () => {
    it ('tc-99', () => {
        var login = 'Marina1';
        var password = '8CI3Uo3Ymp_';
        
        cy.visit('https://dev.ltdo.xyz/auth/login');
        cy.get('input[type="email"]').type(login);
        cy.get('input[type="password"]').type(password);
        cy.get('button[type="submit"]').click();
    });
});

//TC-284: Ввести верный логин/email и неверный пароль
describe('TC-284', () => {
    it ('tc-284', () => {
        cy.visit('https://dev.ltdo.xyz/auth/login');
        cy.get('input[type="email"]').type('Marina1');
        cy.get('input[type="password"]').type(password())
            function password() {
            var text = "";
            var possible = "Привет嗨你好你好嗎.;;$%^&*(:№";
                
            for (var i = 0; i < 10; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
                
            return text;
            }
        cy.get('button[type="submit"]').click();
    });
});

//TC-285: Ввести неверный логин/email и верный пароль
describe('TC-285', () => {
    it ('tc-285', () => {
        cy.visit('https://dev.ltdo.xyz/auth/login');
        cy.get('input[type="email"]').type(email())
            function email() {
            var text = "";
            var possible = "Привет嗨你好你好嗎.;;$%^&*(:№";
          
            for (var i = 0; i < 10; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
          
            return text;
            }
        cy.get('input[type="password"]').type("8CI3Uo3Ymp_");
        cy.get('button[type="submit"]').click();
    });
});

//TC-286: Ввести неверные логин/email и не верный пароль
describe('TC-286', () => {
    it ('tc-286', () => {
        cy.visit('https://dev.ltdo.xyz/auth/login');
        cy.get('input[type="email"]').type(email())
        function email() {
            var text = "";
            var possible = "Привет嗨你好你好嗎.;;$%^&*(:№";
                
            for (var i = 0; i < 10; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
                
            return text;
            }
        cy.get('input[type="password"]').type(password())
            function password() {
            var text = "";
            var possible = "Привет嗨你好你好嗎.;;$%^&*(:№";
                
            for (var i = 0; i < 10; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
                
            return text;
            }
        cy.get('button[type="submit"]').click();
    });
});

//TC-287: Оставить поле логин/email пустым
describe('TC-287', () => {
    it ('tc-287', () => {
        cy.visit('https://dev.ltdo.xyz/auth/login');
        cy.get('input[type="password"]').type("8CI3Uo3Ymp_");
    });
});

//TC-288: Оставить поле "пароль" пустым
describe('TC-288', () => {
    it ('tc-288', () => {
        cy.visit('https://dev.ltdo.xyz/auth/login');
        cy.get('input[type="email"]').type('Marina1');
    });
});

//TC-293: Ввести пробелы перед/между/после символов пароля
describe('TC-293', () => {
    it ('tc-293', () => {
        cy.visit('https://dev.ltdo.xyz/auth/login');
        cy.get('input[type="email"]').type('Marina1');
        cy.get('input[type="password"]').type(password())
            function password() {
            var str = "8CI3Uo3Ymp_";

            return str.replace(/[^a-zA-Z0-9 -]/, "   ");
                //.replace("   ",    ); //(/\s/g, "  "); //(/[^a-zA-Z0-9 -]/, "   ");
                //replace(/\s/g, "  ")
            };
        cy.get('button[type="submit"]').click();
    });
});

//TC-296: Изменить регистр в логине/email
describe('TC-296', () => {
    it ('tc-296', () => {
        cy.visit('https://dev.ltdo.xyz/auth/login');
        cy.get('input[type="email"]').type(email())
            function email() {
            var str = "Marina1";

            return str.toUpperCase();
            };
        cy.get('input[type="password"]').type("8CI3Uo3Ymp_");
        cy.get('button[type="submit"]').click();
    });
});

//TC-297: Изменить регистр в пароле
describe('TC-297', () => {
    it ('tc-297', () => {
        cy.visit('https://dev.ltdo.xyz/auth/login');
        cy.get('input[type="email"]').type('Marina1');
        cy.get('input[type="password"]').type(password())
            function password() {
            var str = "8CI3Uo3Ymp_";

            return str.toUpperCase();
            };
        cy.get('button[type="submit"]').click();
    });
});

//TC-306: В поле «Пароль» нажать на кнопку «показать/скрыть пароль» = глаз
describe('TC-306', () => {
    it ('tc-306', () => {
        cy.visit('https://dev.ltdo.xyz/auth/login');
        cy.get('input[type="password"]').type("8CI3Uo3Ymp_");
        cy.get('mat-icon[role="img"]').click();
    });
});

//TC-301: Ввести email без/с несколькими @
/*describe('TC-0', () => {
    it ('tc-0', () => {
        cy.visit('https://dev.ltdo.xyz/auth/login');
        cy.get('input[type="email"]').type(getRandomStr())

var endings = ["mail.ru", "list.ru", "rambler.ru", "yandex.ru", "gmail.com"];
var symbols = "qwertyuiopasdfghjklzxcvbnm1234567890";
 
function getRandomStr(len) {
    var ret = ""
    for (var i = 0; i < len; i++)
        console.log(ret += symbols[rand(0, symbols.length - 1)]);
    return ret;
}
 
/*function getEmail() {
    var a = getRandomStr(rand(3, 5)),
        b = getRandomStr(rand(3, 5));
    return a + "." + b + "@" + endings[rand(0, endings.length - 1)];
}*/
/*cy.get('input[type="password"]').type("8CI3Uo3Ymp_");
cy.get('mat-icon[role="img"]').click();*/
//});
//});