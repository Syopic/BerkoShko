var conveyor = []; // конвеєр
var carpet = []; // килим
var hands = null; // руки

conveyor = [-99, -99, -99]; // на конвеєрі
carpet = ["U", "J", "X", "G", "B", "E"]; // на килимі
hands = null;

console.log("3. Копір");

hands = carpet[4]; // беремо першу букву з килима
console.log("-> " + hands); //виводимо в консоль

hands = carpet[0]; // беремо наступну букву з килима
console.log("-> " + hands); //виводимо в консоль
// ще раз
hands = carpet[3];
console.log("-> " + hands);