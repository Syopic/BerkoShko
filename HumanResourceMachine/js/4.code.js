var conveyor = []; // конвеєр
var carpet = []; // килим
var hands = null; // руки

conveyor = [3, 9, "Z", "B", 3, 6]; // на конвеєрі
carpet = [null, null, null]; // на килимі
hands = null;

console.log("4. Оброблювач шифрів");

while (conveyor.length > 0) { // поки кількість речей на конвеєрі більша за 0 - повторюємо ці команди: 
    hands = conveyor.shift(); // беремо першу річ з INBOX
    carpet[0] = hands; // поки що кладемо її на килим

    hands = conveyor.shift(); // беремо другу річ з INBOX
    console.log("-> " + hands); //виводимо її одразу
    hands = carpet[0]; // беремо першу річ з килима
    console.log("-> " + hands); //виводимо першу
}