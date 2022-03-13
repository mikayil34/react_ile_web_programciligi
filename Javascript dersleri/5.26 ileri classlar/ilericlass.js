class Personel {
  constructor(ad, soyad) {
    this.ad=ad;
    this.soyad=soyad;
  }
  kaydet() {
    console.log("kaydedildi.");
  }
}
const personel = new Personel("Engin", "Demiroğ");
personel.kaydet();
console.log( personel.ad);