//document.getElementById("bio").innerHTML="derin demiroğle:2014"
//var intro1 = document.getElementById("intro1");
//var mesaje = document.getElementById("mesaje");
//mesaje.innerHTML = intro1.innerHTML;

//var tümlisteler=document.getElementsByTagName("ul");

//var sehirler= tümlisteler[0];
//var tumelemenlar=sehirler.getElementsByTagName("li");
//debugger;
//for (let i = 0; i < tumelemenlar.length; i++) {
// var dd= tumelemenlar[i].innerHTML;
//alert(dd);

//}

//var claselementler= document.getElementsByClassName("intro1");

//alert(claselementler[1].innerHTML);

// var queryElementmentler=document.querySelectorAll("p.intro1");
// debugger;
// alert(queryElementmentler[0].innerHTML);

// var isimElementmentler= document.getElementsByName("müsteriadi");

// alert(isimElementmentler[0].value)

// document.getElementById("salih").addEventListener("click", rengidegistir);
// function rengidegistir() {
//   document.getElementById("div1").style.color = "red";
//   document.getElementById("div1").style.backgroundColor = "blue";
//   var isimElementmentler = document.getElementsByName("müsteriadi");

//   isimElementmentler[0].value="Derin";
// }

// var node = document.getElementById("agac");
// alert(node.childNodes[0].nodeValue);

var baslik= document.createElement("h2");
var node= document.createTextNode("Mehaba Javascript");

baslik.appendChild(node);
 