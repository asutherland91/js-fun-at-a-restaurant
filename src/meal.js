function nameMenuItem(name) {
  return `Delicious ${name}`;
}

function createMenuItem(name, price, type) {
  var menuItem = {
    name: name,
    price: price,
    type: type
  }
  return menuItem;
}

function addIngredients(itemToAdd, ingredients) {
  if(!ingredients.includes(itemToAdd)) {
    ingredients.push(itemToAdd);
  }
}
function formatPrice(price) {
  var formattedPrice = `$${price}`;
return formattedPrice;
}

function decreasePrice(price) {
  var decreasedPrice = (price -(price * 0.1));
return decreasedPrice;
}

function createRecipe(title, ingredients, menuItemType) {
  var recipe = {
title: title,
ingredients: ingredients,
type: menuItemType
  }
  return recipe
}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}


