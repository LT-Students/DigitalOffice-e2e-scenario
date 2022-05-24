//not finished
function gen1() {
  var weight150 = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 10; i++)
  weight150 += possible.charAt(Math.floor(Math.random() * possible.length));

  return weight150;
}
export { gen1 }; 

  // a try
  function login() { 
    let login = 'Alyona';
    let password = '5WZWqx#NPK';
    cy.visit("https://dev.ltdo.xyz/auth/login");
    cy.get('input[type="email"]').type(login);
    cy.get('input[type="password"]').type(password);

    cy.intercept('https://auth.dev.ltdo.xyz/auth/login').as('login');

    cy.get('button[type="submit"]').click();
    cy.wait('@login');
  }  

  export { login };