//not finished
function gen1() {
  var weight150 = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 10; i++)
  weight150 += possible.charAt(Math.floor(Math.random() * possible.length));

  return weight150;
}
export { gen1 }; 