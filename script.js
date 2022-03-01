function pizzaOven(crust, sauce, cheese, topping) {
  var pizza = {};
  pizza.crustType = crust;
  pizza.sauceType = sauce;
  pizza.cheeses = cheese;
  pizza.toppings = topping;
  return pizza;
}
var pizza1 = pizzaOven(
  "hand tossed",
  "marinara",
  ["mozzerella", "feta"],
  ["peopperoni", "sausage"]
);

var pizza2 = pizzaOven(
  "deep dish",
  "traditional",
  ["mozzerella"],
  ["mushrooms", "olives", "onions"]
);

var pizza3 = pizzaOven(
  "deep dish",
  "traditional",
  ["mozzerella"],
  ["mushrooms", "chicken", "onions"]
);

var pizza4 = pizzaOven(
  "deep dish",
  "traditional",
  ["mozzerella"],
  ["mushrooms", "pineapple", "onions"]
);
