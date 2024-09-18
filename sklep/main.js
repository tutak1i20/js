const produktyInfo = {
  przypon: {
    cena: 15.99,
    opis: "Przypon Karpiowy Blow Back Rig 4",
    zdjecie: "przypon.png",
  },
  wedka: {
    cena: 299.99,
    opis: "Wędka ABU GARCIA VERITAS 902M 274cm 10-32g",
    zdjecie: "wedka.jpg",
  },
  zaneta: {
    cena: 24.99,
    opis: "Zanęta LORPIO Magnetic Tench Marcepan 2kg",
    zdjecie: "zaneta.png",
  },
  zylka: {
    cena: 12.49,
    opis: "Żyłka ROBINSON Supercup 150m - 0.218mm",
    zdjecie: "zylka.png",
  },
  akumulator: {
    cena: 374.99,
    opis: "Akumulator Centra Plus 74Ah 680A CB740 PLUS",
    zdjecie: "akumulator.png",
  },
};

const produktySelect = document.querySelector("#produkty");
const iloscInput = document.querySelector("#ilosc");
const displayCena = document.querySelector(".display");
const koszykBtn = document.querySelector("#koszykBtn");
const koszykVal = document.querySelector(".koszykVal");
const produktImg = document.querySelector("#produktImg");
const produktOpis = document.querySelector("#opis");

let sumaKoszyka = 0;

function CenaInfo() {
  const produkt = produktySelect.value;
  const ilosc = parseInt(iloscInput.value);
  if (produkt) {
    const info = produktyInfo[produkt];
    const cena = info.cena;
    const wartosc = cena * ilosc;

    if (ilosc > 0) {
      displayCena.innerHTML = `${wartosc} zł`;
    } else {
      displayCena.innerHTML = `00.00 zł`;
    }
    produktImg.src = info.zdjecie;
    produktOpis.innerHTML = info.opis;
  } else {
    displayCena.innerHTML = `00.00 zł`;
    produktOpis.innerHTML = "";
  }
}
produktySelect.addEventListener("change", CenaInfo);
iloscInput.addEventListener("input", CenaInfo);

function AddKoszyk(event) {
  event.preventDefault();

  const produkt = produktySelect.value;
  const ilosc = parseInt(iloscInput.value);

  if (produkt && ilosc > 0) {
    const info = produktyInfo[produkt];
    const cena = info.cena;
    const wartosc = cena * ilosc;

    sumaKoszyka += wartosc;
    koszykVal.innerHTML = `${sumaKoszyka} zł`;
  } else {
    alert("Proszę wybrać produkt i ilość.");
  }
}

koszykBtn.addEventListener("click", AddKoszyk);
