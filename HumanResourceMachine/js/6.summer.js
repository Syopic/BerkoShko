var conveyor = []; // конвеєр
var carpet = []; // килим
var hands = null; // руки

conveyor = [2, 2, 7, 9, -1, 9, 2, -5]; // на конвеєрі
carpet = [null, null, null]; // на килимі
hands = null;

console.log("6. Дощове літо");

while (conveyor.length > 0) { // поки кількість речей на конвеєрі більша за 0 - повторюємо ці команди: 
    hands = conveyor.shift(); // беремо першу річ з INBOX
    carpet[0] = hands; // поки що кладемо її на килим

    hands = conveyor.shift(); // беремо другу річ з INBOX
    hands = hands + carpet[0]; // додаємо те що в руках до того, що на килимі
    console.log("-> " + hands); //виводимо
}