var selamfunction = function selam() {
  console.log("Merhaba ");
};
selamfunction();

var selamfunction2 = () => {
  console.log("Merhaba 2");
};

selamfunction2();

var selamfunction3 = (mesaje, mesaj2) => {
  console.log("Mesaj:" + mesaje);
};

selamfunction3("merhasa dünya");

var topla = (sayi1, sayi2) => {
  return sayi1 + sayi2;
};

let toplam=topla(3,4);
console.log(toplam)
