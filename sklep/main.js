const produktyInfo = {
  puste: {
    cena: 0.00,
    opis: ``,
    zdjecie: "logo.png",
  },
  przypon: {
    cena: 15.99,
    opis: `<strong>Przypon Karpiowy Under Carp Blow Back Rig - 4.</strong> <br> <br> 
    Przypon z kółkiem to przeznaczony do kulek tonących i bałwanków.  <br>
    Swoje zastosowanie znajdzie również podczas wywózki na dalsze odległości.  <br>
    Wykonany z miękkiej plecionki Ultra Soft 25lbs.  <br>
    Kod produktu: UC306.`,
    zdjecie: "przypon.png",
  },
  wedka: {
    cena: 299.99,
    opis: `<strong>DANE TECHNICZNE:</strong> <br>
    Ultra lekki blank z włókna węglowego 30T ze szczytówką z litego włókna węglowego <br>
    Szybka lub bardzo szybka akcja blanku zapewnia dużą czułość <br>
    Lekka konstrukcja uchwytu kołowrotka <br>
    Przelotki antysplątaniowe Seaguide, idealne do stosowania z plecionką <br>
    Uchwyty z pianki EVA o dużej gęstości <br>
    Uchwyt na hak dla łatwego i bezpiecznego mocowania przynęty <br>
    <br>
    VERITAS SENSI-S to seria wędek, która została zaprojektowana do łowienia na lekkie i ultra lekkie przynęty.`,
    zdjecie: "wedka.jpg",
  },
  zaneta: {
    cena: 24.99,
    opis: `Tench Marcepan z serii zanęt MAGNETIC to nowy produkt, który zapewne docenią wędkarze. <br>
    Stopień kleistości, w skali od 1 do 6, to 3, frakcja średnia, kolor zielonkawy.  <br>
    Zanęta odpowiednia na liny, karasie, dużą płoć. Najskuteczniejsza w miesiącach od marca do października.  <br>
    Ilość wody (na 2 kg zanęty) - 1000 ml.  <br>`,
    zdjecie: "zaneta.png",
  },
  zylka: {
    cena: 12.49,
    opis: `<strong>Robinson Supercup 0,115mm 150m - żyłka </strong> <br>
    
    WŁAŚCIWOŚCI <br>
    topowa wytrzymałość na zrywanie <br>
    całkowicie niewidoczna w wodzie <br>
    gwarantuje zawsze pewne zacięcie <br>
    brak pamięci <br>
    Kolor: bezbarwna <br>
    maksymalna waga holowanej ryby zależy od umiejętności wędkarza. <br>`,
    zdjecie: "zylka.png",
  },
  akumulator: {
    cena: 374.99,
    opis: `<strong>Informacje o produkcie</strong> <br>
    Model: Centra Plus CB741 <br>
    Pojemność: 74Ah <br>
    Prąd rozruchowy: 680A <br>
    Biegunowość: Lewy + <br>
    Wymiary (dł x szer x wys): 278 x 175 x 190 <br>
    Centra Plus dla nowoczesnych pojazdów <br>
    Akumulator Centra Plus to wszechstronne rozwiązanie do większości nowoczesnych pojazdów ze standardowym wyposażeniem, codziennie użytkowanych.
    Podobnie jak w innych akumulatorach z tej gamy, również w akumulatorze Centra Plus została zastosowana kratka 3DX, która zapewnia lepsze parametry elektryczne i dłuższą żywotność akumulatora.`,
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
    koszykVal.innerHTML = `${sumaKoszyka.toFixed(2)} zł`;
  } else {
    alert("Proszę wybrać produkt i ilość.");
  }
}

koszykBtn.addEventListener("click", AddKoszyk);
