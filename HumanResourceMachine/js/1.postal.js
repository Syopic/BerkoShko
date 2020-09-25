var conveyor = []; // конвеєр
var carpet = []; // килим
var hands = null; // руки

conveyor = [2, 8, 5]; // на конвеєрі лежать
hands = null;

console.log("1. Пошта");

hands = conveyor.shift(); // беремо в руки першу ж річ з INBOX
console.log("-> " + hands); //виводимо в OUTBOX

// i так ще 2 рази

hands = conveyor.shift();
console.log("-> " + hands);

hands = conveyor.shift();
console.log("-> " + hands);