const miejsca = document.querySelectorAll(".miejsca");
const rodzajBiletu = document.getElementById("rodzaj");
const display = document.getElementById("display");
const dispKoszt = document.getElementById("dispKoszt");

function obliczKoszt() {
  const cenaBiletu = parseFloat(rodzajBiletu.value);
  let liczbaWybranychMiejsc = 0;

  for (let miejsce of miejsca) {
    if (miejsce.checked) {
      liczbaWybranychMiejsc++;
    }
  }

  const koszt = cenaBiletu * liczbaWybranychMiejsc;
  dispKoszt.textContent = `Całkowity koszt: ${koszt} zł`;
}

function iloscWybMiejsc() {
  let wybraneMiejsca = [];

  for (let miejsce of miejsca) {
    if (miejsce.checked) {
      wybraneMiejsca.push(miejsce.id);
    }
  }

  if (wybraneMiejsca.length > 0) {
    display.innerHTML = `Wybrane miejsca: ${wybraneMiejsca.join(", ")}`;
  } else {
    display.innerHTML = "Nie wybrano żadnych miejsc.";
  }

  obliczKoszt();
}

for (let miejsce of miejsca) {
  miejsce.addEventListener("change", iloscWybMiejsc);
}
rodzajBiletu.addEventListener("change", obliczKoszt);
