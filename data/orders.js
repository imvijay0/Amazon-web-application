// if nothing is in storage use empty array 
export const orders = JSON.parse(localStorage.getItem('orders')) || [];

export function addOrder(order){
  // to add order to the front of the array, cause it's a recent one
  orders.unshift(order);
  saveToStorage();
}

export function getOrder(orderId){
  let matchingOrder;

  orders.forEach((order) => {
    if(order.id === orderId){
      matchingOrder = order;
    }
  })
  return matchingOrder;
}

function saveToStorage(){
  localStorage.setItem('orders',JSON.stringify(orders));
}