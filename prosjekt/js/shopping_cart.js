var database = [
   {
    name : 'football_1',
    id : 1,
    name : "Rød fotballsko",
    picture : "../img/fotballsko1.jpg",
    price : "100kr",
    description : "En fake tekst om produktet"
  },
  {
    name : 'football_2',
    id : 2,
    name : "Grå og oransje fotballsko",
    picture : "../img/fotballsko2.jpg",
    price : "100kr",
    description : "En fake tekst om produktet"
  },
  {
    name : 'football_3',
    id : 3,
    name : "Neon fotballsko",
    picture : "../img/fotballsko3.jpg",
    price : "100kr",
    description : "En fake tekst om produktet"
  },
  {
    name :   'run_1',
    id : 4,
    name : "Hvit løpesko",
    picture : "../img/run1.jpg",
    price : "100kr",
    description : "En fake tekst om produktet"
  },
  {
    name : 'run_2',
    id : 5,
    name : "Rød løpesko",
    picture : "../img/run2.jpg",
    price : "100kr",
    description : "En fake tekst om produktet"
  },
  {
    name : 'run_3',
    id : 6,
    name : "Blå løpesko",
    picture : "../img/run3.jpg",
    price : "100kr",
    description : "En fake tekst om produktet"
  },
  {
    name : 'tennis_1',
    id : 7,
    name : "Tennisrackets",
    picture : "../img/tennis1.jpg",
    price : "100kr",
    description : "En fake tekst om produktet"
  },
  {
    name : 'tennis_2',
    id : 8,
    name : "Tennisballer rør",
    picture : "../img/tennis2.jpg",
    price : "100kr",
    description : "En fake tekst om produktet"
  },
  {
    name : 'tennis_3',
    id : 9,
    name : "Tennisballer Boks",
    picture : "../img/tennis3.jpg",
    price : "100kr",
    description : "En fake tekst om produktet"
  }
]


function addToCart(id){
  var objekt_id =  parseInt(id);
  alert("Added item to shopping cart");
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
    let index = cart[i]
    let product = database[index-1]
    var li = document.createElement('LI');
    var img = document.createElement("IMG");
    img.setAttribute("src", product.picture);
    img.setAttribute("width", "50%");
    img.setAttribute("height", "50%");
    img.setAttribute("alt", product.name);
    let numb = cart[i];
    var button = document.createElement("button");
    button.innerText = "Delete this";
    button.onclick = deleteItem.bind(numb);
    li.appendChild(img);
    li.appendChild(button);
    ul.appendChild(li);
  }
}

function loadFootballShoes(){

  var idp = "fsko1";
  var idn = "fname1";
  var idd = "fdesc1";
  var count = 1;

  for(var i = 1; i <= 3; i++){
  document.getElementById(idp).src= database[i-1].picture;
  document.getElementById(idn).innerHTML= database[i-1].name;
  document.getElementById(idd).innerHTML=  database[i-1].description;
  idp = idp.substring(0, idp.length - 1);
  idn = idn.substring(0, idn.length - 1);
  idd = idd.substring(0, idd.length - 1);
  count++;
  idp += ""+count;
  idn += ""+count;
  idd += ""+count;

}

  }


  function loadTennis(){

  var idp = "tpic1";
  var idn = "tname1";
  var idd = "tdesc1";
  var count = 1;

  for(var i = 7; i <= 9; i++){
  document.getElementById(idp).src= database[i-1].picture;
  document.getElementById(idn).innerHTML= database[i-1].name;
  document.getElementById(idd).innerHTML=  database[i-1].description;
  idp = idp.substring(0, idp.length - 1);
  idn = idn.substring(0, idn.length - 1);
  idd = idd.substring(0, idd.length - 1);
  count++;
  idp += ""+count;
  idn += ""+count;
  idd += ""+count;

}

  }


  function loadRun(){

  var idp = "rpic1";
  var idn = "rname1";
  var idd = "rdesc1";
  var count = 1;

  for(var i = 4; i <= 6; i++){
  document.getElementById(idp).src= database[i-1].picture;
  document.getElementById(idn).innerHTML= database[i-1].name;
  document.getElementById(idd).innerHTML=  database[i-1].description;
  idp = idp.substring(0, idp.length - 1);
  idn = idn.substring(0, idn.length - 1);
  idd = idd.substring(0, idd.length - 1);
  count++;
  idp += ""+count;
  idn += ""+count;
  idd += ""+count;

}

  }

function deleteItem(){
  var ul = document.getElementById('shoppingcart_list');
  cart = JSON.parse(sessionStorage.getItem('cart_session'));
  let removed = 0;
  for (var i = 0; i < cart.length; i++) {
    if(cart[i]==this && removed==0){
      cart.splice(i,1);
      removed=1;
    }
  }
  sessionStorage.setItem('cart_session',JSON.stringify(cart));
  location.reload();
}
