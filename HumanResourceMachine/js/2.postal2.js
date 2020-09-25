var conveyor = []; // конвеєр
var carpet = []; // килим
var hands = null; // руки

conveyor = ["Б", "Е", "Р", "К", "О", "Ш", "К", "О"]; // на конвеєрі
hands = null;

console.log("2. Зайнята пошта");

while (conveyor.length > 0) { // поки кількість речей на конвеєрі більша за 0 - повторюємо ці команди: 
    hands = conveyor.shift(); // беремо першу річ з INBOX
    console.log("-> " + hands); //виводимо в OUTBOX
}