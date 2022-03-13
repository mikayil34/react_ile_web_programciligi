const dizi = [1, 2, 3, 4, 5, 6, 7, 8];
const kareDizi = [];

dizi.forEach((sayi) => {
  console.log(sayi);
  kareDizi.push(sayi * sayi);
});

console.log(kareDizi);
//map

const mapDizi = kareDizi.map((sayi) => sayi * 3);
console.log(mapDizi);

//filter

const filter = dizi.filter((x) => x > 2 && x < 6);

console.log(filter);

//
const toplam = dizi.reduce((acc, sayi) => {
  return acc + sayi;
}, 10);
console.log(toplam);
