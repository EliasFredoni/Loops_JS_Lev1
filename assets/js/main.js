/*----------LEV 1.1----------*/

let banana = " Hello World ";
for (let i = 0; i < 10; i++) {
    console.log(banana + i);
}

/*----------LEV 1.2----------*/

let numArray = [];
for (let i = 0; i < 11; i++) {
    numArray.push(i);
    console.log(numArray);
}

/*---------LEV 1.4----------*/

let names = ["Eric", "Steffen", "Finn", "Simon", "Franzi", "Kim", "Sergio"];

let text = "";
for (let i = 0; i < names.length; i++) {
    text += names[i];
    console.log(names[i]); // geht auch!
}

/*---------LEV 1.6----------*/

let retArray = [];
for (let i = 0; i <= 100; i++) {
    retArray.push("image" + i + ".jpg");
    console.log(retArray[i]);
}
console.log(retArray);

/*----------LEV 1.8----------*/

/*let index = [2, 4, 6, 8, 10, 12, 14, 16, 18];
do {
    console.log(index);
    index++
} while (index < 0);*/

let index2 = 0;
do {
    index2 += 2;
    console.log(index2);
} while (index2 <= 20);

/*----------LEV 1.9----------*/

let words = ['hallo', 'Auto', 'Waschmaschine', 'Schrank', 'Katze', 'Beispiel', 'Eltern', 'Fenster', 'Geburtstag', 'Himmel', 'schwimmen', 'Zeitung'];
let result = document.getElementById("result");
//result.innerHTML = "";
let click = () => {
    let inputText = document.getElementById("input").value;
    for (let i = 0; i < words.length; i++) {
        if (Number(inputText) == words[i].length) {
            result.innerHTML += words[i];
            console.log(words[i]);
        }
    }                       //Aufgabe nochmal genau anschauen! und nach Fehler suchen
}
console.log("words");

