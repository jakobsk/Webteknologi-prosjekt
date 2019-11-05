var cart = ['Hest','Fisk'];
function addToCart(id){
  console.log('Denne blir aktivert');
  var objekt_id =  id;
  cart.push(objekt_id);
  console.log(cart);
}
function getCart(){
  console.log(cart);
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
