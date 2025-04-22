let letterSearch = ["хлеб", "мед", "банан", "яблоко", "Азиза", "цветок", "машина"];

let withN = [];
let withoutN = [];

for (let i = 0; i < letterSearch.length; i++) {
  if (letterSearch[i].toLowerCase().includes("н")) {
    withN.push(letterSearch[i]);
  } else {
    withoutN.push(letterSearch[i]);
  }
}

console.log("So‘zlar 'н' bilan:", withN);
console.log("So‘zlar 'н'siz:", withoutN);
