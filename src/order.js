function takeOrder(order, deliveryOrders) {
  if(deliveryOrders.length < 3) {
    deliveryOrders.push(order);
  }
  return deliveryOrders;
}

function refundOrder(orderNum, deliveryOrders) {
  for(i = 0; i < deliveryOrders.length; i++) {
    if(deliveryOrders[i].orderNumber === orderNum) {
      deliveryOrders.splice(i, 1);
    }
  }
  return deliveryOrders;
}


function listItems(deliveryOrders) {
  var list = "";
  for(i = 0; i < deliveryOrders.length; i++){
      list = list + deliveryOrders[i].item
      if(i !== deliveryOrders.length - 1) {
        list = list + ", ";
      }
  }
  return list
}

function searchOrder (deliveryOrders, item) {
  for(i = 0; i < deliveryOrders.length; i++){
  // var search = deliveryOrders.includes(deliveryOrders[i].item);
    if(item === deliveryOrders[i].item) {
      return true
    }
  }
  return false
}

module.exports = {
  takeOrder,
  refundOrder,
  listItems,          
  searchOrder
}