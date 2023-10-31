const oletusautot = [
  { id: 1, merkki: 'Toyota', malli: 'Corolla', rekisterinumero: 'XYZ-123'},
  { id: 2, merkki: 'Ford', malli: 'Focus', rekisterinumero: 'ABC-789'},
  { id: 3, merkki: 'BMW', malli: 'E36', rekisterinumero: 'JWR-345'},
];

const oletusVaratutAutot = [];

// Tallenna saatavilla olevat autot localStorageen
export function tallennaAutot(autot) {
localStorage.setItem('autot', JSON.stringify(autot));
}

// Hae saatavilla olevat autot localStoragesta
export function haeAutot() {
const tallennetutAutot = localStorage.getItem('autot');      

if (!tallennetutAutot) {
  tallennaAutot(oletusautot);
  return oletusautot;
}
return JSON.parse(tallennetutAutot);
}

// Tallenna varatut autot localStorageen
export function tallennaVaratutAutot(varatutAutot) {
localStorage.setItem('varatutAutot', JSON.stringify(varatutAutot));
}

// Hae varatut autot localStoragesta
export function haeVaratutAutot() {
const tallennetutVaratutAutot = localStorage.getItem('varatutAutot');

// Jos localStorage ei sisällä varattuja autoja, palauta tyhjä lista
if (!tallennetutVaratutAutot) {
  return oletusVaratutAutot;
}
return JSON.parse(tallennetutVaratutAutot);
}
