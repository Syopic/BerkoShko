var conveyor = []; // конвеєр
var carpet = []; // килим
var hands = null; // руки

//******************* УРОК 1 ********************/

// 1. Пошта
function postal() {
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
}

// 2. Зайнята пошта
function postal2() {
    conveyor = ["Б", "Е", "Р", "К", "О", "Ш", "К", "О"]; // на конвеєрі
    hands = null;

    console.log("2. Зайнята пошта");

    while (conveyor.length > 0) { // поки кількість речей на конвеєрі більша за 0 - повторюємо ці команди: 
        hands = conveyor.shift(); // беремо першу річ з INBOX
        console.log("-> " + hands); //виводимо в OUTBOX
    }
}

// 3. Копір
function copy() {
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
}

// 4. Оброблювач шифрів
function code() {
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
}

// 6. Дощове літо
function summer() {
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
}

//******************* УРОК 2 ********************/


// 7. Знищувач нулів
function zeroKiller() {
    conveyor = [5, 0, 8, "A", 0, 0, 4]; // на конвеєрі
    carpet = [null, null, null, null, null, null, null, null, null]; // на килимі
    hands = null;

    console.log("7. Знищувач нулів");

    // TODO
}

// 8. Потроювач
function trippler() {
    conveyor = [2, -4, 6, 0]; // на конвеєрі
    carpet = [null, null, null]; // на килимі
    hands = null;

    console.log("8. Потроювач");

    // TODO
}

// 9. Ініціатива по збереженню нулів
function zeroSaver() {
    conveyor = [5, 0, 2, "A", 0, 0, 2]; // на конвеєрі
    carpet = [null, null, null, null, null, null, null, null, null]; // на килимі
    hands = null;

    console.log("9. Ініціатива по збереженню нулів");

    // TODO
}

// 10. Восьминіг
function octopus() {
    conveyor = [2, -5, 1, 0]; // на конвеєрі
    carpet = [null, null, null, null, null]; // на килимі
    hands = null;

    console.log("10. Восьминіг");

    // TODO
}

// 11. Різниця
function difference() {
    conveyor = [4, 5, 7, 4, -8, -8, -8, 1]; // на конвеєрі
    carpet = [null, null, null]; // на килимі
    hands = null;

    console.log("11. Різниця");

    // TODO
}

// 12. Сороконіжка
function centipede() {
    conveyor = [6, -5, 6, 0]; // на конвеєрі
    carpet = [null, null, null, null, null]; // на килимі
    hands = null;

    console.log("12. Сороконіжка");

    // TODO
}

// 13. Кімната рівності
function equalityRoom() {
    conveyor = [8, 4, 5, 5, -4, 1, 2, 2]; // на конвеєрі
    carpet = [null, null, null]; // на килимі
    hands = null;

    console.log("13. Кімната рівності");

    // TODO
}