var database = {
  item_1 : {
    id = 1,
    name = "Random navn",
    picture = "../img/fotballsko1.jpg",
    price = "100kr",
    description = "En fake tekst om produktet"
  }
  item_2 : {
    id = 2,
    name = "Random navn",
    picture = "../img/fotballsko2.jpg",
    price = "100kr",
    description = "En fake tekst om produktet"
  }
  item_3 : {
    id = 3,
    name = "Random navn",
    picture = "../img/fotballsko3.jpg",
    price = "100kr",
    description = "En fake tekst om produktet"
  }
  item_4 : {
    id = 4,
    name = "Random navn",
    picture = "../img/fotballsko1.jpg",
    price = "100kr",
    description = "En fake tekst om produktet"
  }
  item_5 : {
    id = 5,
    name = "Random navn",
    picture = "../img/fotballsko1.jpg",
    price = "100kr",
    description = "En fake tekst om produktet"
  }
  item_6 : {
    id = 6,
    name = "Random navn",
    picture = "../img/fotballsko1.jpg",
    price = "100kr",
    description = "En fake tekst om produktet"
  }
  item_7 : {
    id = 7,
    name = "Random navn",
    picture = "../img/fotballsko1.jpg",
    price = "100kr",
    description = "En fake tekst om produktet"
  }
  item_8 : {
    id = 8,
    name = "Random navn",
    picture = "../img/fotballsko1.jpg",
    price = "100kr",
    description = "En fake tekst om produktet"
  }
  item_9 : {
    id = 9,
    name = "Random navn",
    picture = "../img/fotballsko1.jpg",
    price = "100kr",
    description = "En fake tekst om produktet"
  }
}


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
  console.log('slett element');

}