# Chaining task

## Oppgave 1

const pcs = [
{type: "Omen",
inStock: true,
brand: "HP",
id: 23},
{type: "Omen",
inStock: true,
brand: "HP",
id: 223},
{type: "Omen",
inStock: false,
brand: "HP",
id: 43},
{type: "Gaming",
inStock: false,
brand: "Razer",
id: 3},
];

> Tenk på kopiering og referanser til objekter

1. filtrer arrayet så det kun har med pcer som er in stock og som har typen "Omen".
2. endre inStock propertien til false og legg til en ny property "lastEdited", som enten blir hardkodet til datoen i dag, eller bruker javascript innebygde date.
3. logg ut arrayet
4. Sjekk om det er noen pcer i det gamle arrayet som er in stock (endre koden slik at dette også blir forrandret når det nye blir forrandret)
