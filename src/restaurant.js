function createRestaurant(name) {
 var restaurant = {
  name: name,
  menus: {
    breakfast: [],
    lunch: [],
    dinner: []
  }
 };
 return restaurant;
}

function addMenuItem(restaurant, menuItem) {
  if(menuItem.type === "breakfast" && !restaurant.menus.breakfast.includes(menuItem)) {
    return restaurant.menus.breakfast.push(menuItem)
  }
  else if(menuItem.type === "lunch" && !restaurant.menus.lunch.includes(menuItem)) {
    return restaurant.menus.lunch.push(menuItem)
  }
  else if(menuItem.type === "dinner" && !restaurant.menus.dinner.includes(menuItem)) {
    return restaurant.menus.dinner.push(menuItem)
  }
}

function removeMenuItem(restaurant, menuItemName, menu) {
  if(menu === "breakfast") {
    for(i = 0; i < restaurant.menus.breakfast.length; i++){
      if(restaurant.menus.breakfast[i].name === menuItemName) {
        restaurant.menus.breakfast.splice(i, 1);
        return `No one is eating our ${menuItemName} - it has been removed from the ${menu} menu!`
      }
    }
  }
  else if(menu === "lunch") {
    for(i = 0; i < restaurant.menus.lunch.length; i++){
      if(restaurant.menus.lunch[i].name === menuItemName) {
        restaurant.menus.lunch.splice(i, 1);
        return `No one is eating our ${menuItemName} - it has been removed from the ${menu} menu!`
      }
    }
  }
  else if(menu === "dinner") {
    for(i = 0; i < restaurant.menus.dinner.length; i++){
      if(restaurant.menus.dinner[i].name === menuItemName) {
        restaurant.menus.dinner.splice(i, 1);
        return `No one is eating our ${menuItemName} - it has been removed from the ${menu} menu!`
      }
    }
  }
  
  return `Sorry, we don't sell ${menuItemName}, try adding a new recipe!`;
}

module.exports = {
  createRestaurant, 
  addMenuItem,
  removeMenuItem
}