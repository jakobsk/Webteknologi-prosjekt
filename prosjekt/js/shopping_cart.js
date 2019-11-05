
function addToCart(id){
  var objekt_id =  parseInt(id);

  var cart_session = sessionStorage.getItem('cart_session');
  if(!cart_session){
    cart_session = [];
  } else{
    cart_session = JSON.parse(cart_session);
  }
  cart_session.push(objekt_id);
  sessionStorage.setItem('cart_session',JSON.stringify(cart_session));
}



function getCart(){
  cart = JSON.parse(sessionStorage.getItem('cart_session'));
  var ul = document.getElementById('shoppingcart_list');
  for (var i = 0; i < cart.length; i++) {
    var li = document.createElement('LI');
    var text = document.createTextNode(cart[i]+'   ');
    var button = document.createElement("button");
    button.innerText = "Delete this";
    button.onclick = deleteItem(this.id);
    li.appendChild(text);
    li.appendChild(button);
    ul.appendChild(li);
  }
}

function deleteItem(id){
  var ul = document.getElementById('shoppingcart_list');
  console.log('slett');

}
