const netto = document.querySelector("#netto");
const nettoBtn = netto.querySelector("input[type=submit]");
let nettoOutput1 = netto.querySelector("#mehrwertsteuerbetrag");
let nettoOutput2 = netto.querySelector("#bruttobetrag");
let betragOutput = netto.querySelector("#betragOutput");
let bruttoBetragOutput = netto.querySelector("#bruttoBetragOutput");

nettoBtn.addEventListener("click", (event) => {
  event.preventDefault();
  const nettoAb = netto.querySelector("#abziehen").checked;
  const nettoAuf = netto.querySelector("#aufschlag").checked;
  const nettoProzent1 = netto.querySelector("#prozentsatz1").checked;
  const nettoProzent2 = netto.querySelector("#prozentsatz2").checked;
  const nettoBetrag = netto.querySelector("#betrag").value;
  let betrag;
  let betrag1;

  if (
    (nettoAb == true || nettoAuf == true) &&
    (nettoProzent1 == true || nettoProzent2 == true) &&
    nettoBetrag > 0
  ) {
    if (nettoAb) {
      if (nettoProzent1) {
        betrag = nettoBetrag / 1.19;
        betrag1 = (nettoBetrag / 1.19) * 0.19;
      } else {
        betrag = nettoBetrag / 1.07;
        betrag1 = (nettoBetrag / 1.07) * 0.07;
      }
    } else if (nettoAuf) {
      if (nettoProzent1) {
        betrag = nettoBetrag * 1.19;
        betrag1 = nettoBetrag * 0.19;
      } else {
        betrag = nettoBetrag * 1.07;
        betrag1 = nettoBetrag * 0.07;
      }
    }
    nettoOutput1.innerText = `${betrag1.toFixed(2)} €`;
    nettoOutput2.innerText = `${betrag.toFixed(2)} €`;
  } else {
    nettoOutput1.innerText = "FEHLER";
    nettoOutput2.innerText = "FEHLER";
  }
});

function change() {
  if (netto.querySelector("#abziehen").checked == false) {
    betragOutput.innerHTML =
      "Nettobetrag (Preis ohne Mehrwertsteuer) in Euro <span>*</span>";
    bruttoBetragOutput.innerText = "Bruttobetrag (Endpreis)";
  } else {
    betragOutput.innerHTML =
      "Bruttobetrag (Preis inklusive Mehrwertsteuer) in Euro <span>*</span>";
    bruttoBetragOutput.innerText = "Nettobetrag";
  }
}
