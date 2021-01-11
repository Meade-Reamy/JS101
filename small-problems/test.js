function sum (x, y) {

    return x + y;

}
sum(
    33,
    11
);

function logQuote () {

    console.log("Always bet on JavaScript.");

}
logQuote();

function cite (autor, quote) {

    console.log(`${autor}: ${quote}`);

}
cite(
    "test",
    "test2"
);

function squaredNumber (x) {

    return x * x;

}
console.log(squaredNumber(12));

function compareByLength (string1, string2) {

    if (string1.length === string2.length) {

        return 0;

    } else if (string1.length < string2.length) {

        return -1;

    } else if (string1.length > string2.length) {

        return 1;

    }

}
console.log(compareByLength(
    "test1",
    "test22"
));

let captin = "Captain Ruby";

captin = captin.replace(
    "Ruby",
    "JavaScript"
);
console.log(captin);

function greet (languageCode) {

    switch (languageCode) {

    case "en": return "Hi!";
    case "fr": return "Salut!";
    case "pt": return "Olá!";
    case "de": return "Hallo!";
    case "sv": return "Hej!";
    case "af": return "Haai!";
    default: return "Not Found";

    }

}
console.log(greet("fr"));

function extractLanguage (locale) {

    return locale.slice(
        0,
        2
    );

}
console.log(extractLanguage("en_erfijewfjowejf"));

function extractRegion (locale) {

    return locale.slice(
        3,
        5
    );

}
console.log(extractRegion("ko_KR.UTF-16"));

function localGreet (iso) {

    const languageCode = extractLanguage(iso),
        locale = extractRegion(iso);

    switch (languageCode) {

    case "en": {

        if (locale === "US") {

            return "Hello";

        } else if (locale === "GB") {

            return "Greetings";

        } else if (locale === "AU") {

            return "Ay Mate!";

        }

        return "Hey!";

    }
    case "fr": return "Salut!";
    case "pt": return "Olá!";
    case "de": return "Hallo!";
    case "sv": return "Hej!";
    case "af": return "Haai!";
    default: return "Not Found";

    }

}

console.log(localGreet("en_GB.UTF-8"));

const iceCreamTaste = "chocolate";
let iceCreamDensity = 10;

while (iceCreamDensity > 0) {

    console.log("Drip...");
    iceCreamDensity -= 1;

}

console.log(`The ${iceCreamTaste} ice cream melted.`);

console.log(Number.MAX_VALUE);

const currentSpeed = 80,
    speedLimit = 60;


function myFunction () {

    let a = 1;

    if (true) {

        console.log(a);
        a = 2;
        console.log(a);

    }

}
myFunction();
const j = "These aren't the droids you're looking for.";

console.log(j.length);
let k = "confetti floating everywhere";

k = k.toUpperCase();
console.log(k);
function repeat (n, str) {

    let repetitions = "";

    while (n > 0) {

        repetitions += str;
        n--;

    }

    return repetitions;

}
console.log(repeat(
    3,
    "ha"
));
const pirate = "A pirate I was meant to be!\nTrim the sails and roam the sea!";

console.log(pirate);
const string1 = "Polar Bear",
    string2 = "Polar bear",
    string3 = "Penguin";

console.log(string1.toUpperCase() === string2.toUpperCase());
console.log(string1.toUpperCase() === string3.toUpperCase());
const byteSequence = "TXkgaG92ZXJjcmFmdCBpcyBmdWxsIG9mIGVlbHMu";

console.log(byteSequence.search("x"));
function isBlank (string) {

    return string.trim().length === 0;

}
const alphabet = "abcdefghijklmnopqrstuvwxyz";

function splitIntoParts (array) {

    let y = 0,
        output = [];

    while (y < array.length) {

        output.push(array[y]);
        y++;

    }
    console.log(output);

    return output;

}
splitIntoParts(alphabet);
const vocabulary = [
    [
        "happy",
        "cheerful",
        "merry",
        "glad"
    ],
    [
        "tired",
        "sleepy",
        "fatigued",
        "drained"
    ],
    [
        "excited",
        "eager",
        "enthused",
        "animated"
    ]
];

console.log(vocabulary[1][1]);
function logSubarrays (array) {

    for (dimension = array.length - 1; dimension > -1; dimension--) {

        for (dimensionLength = array[dimension].length - 1; dimensionLength > -1; dimensionLength--) {

            console.log(array[dimension][dimensionLength]);

        }

    }

}
logSubarrays(vocabulary);
function checkArray (array, str) {

    for (dimension = array.length - 1; dimension > -1; dimension--) {

        if (array[dimension] === str) {

            console.log(true);

            return true;

        }

    }

    return false;

}
const destinations = [
    "Prague",
    "London",
    "Sydney",
    "Belfast",
    "Rome",
    "Aruba",
    "Paris",
    "Bora Bora",
    "Barcelona",
    "Rio de Janeiro",
    "Marrakesh",
    "New York City"
];

checkArray(
    destinations,
    "Bora Bora"
);
const passcode = [
    "11",
    "jZ5",
    "hQ3f*",
    "8!7g3",
    "p3Fs"
];

console.log(passcode.join("-"));
function bmi (heightInCentimeters, weightInKilograms) {

    const heightInMeters = heightInCentimeters / 100,
        bmx = weightInKilograms / heightInMeters ** 2;


    return bmx.toFixed(2);

}
function catAge (age) {

    switch (age) {

    case 1: return 15;
    case 2: return 15 + 9;
    case 0: return 0;
    default: return age * 4 + 16;

    }

}
const student = {
    "name": "Carmen",
    "age": 14,
    "grade": 10,
    "courses": [
        "biology",
        "algebra",
        "composition",
        "ceramics"
    ],
    "gpa": 3.75
};

console.log(student.courses);
const jane = {
    "firstName": "Jane",
    "lastName": "Harrelson",
    "age": 32,
    "location": {
        "country": "Denmark",
        "city": "Aarhus"
    },
    "occupation": "engineer"
};

console.log(jane.location.country);
const fido = {
    "name": "Fido",
    "species": "Labrador Retriever",
    "color": "brown",
    "weight": 16
};

fido.age = "";
fido.favoriteFood = "";
console.log(fido);
const obj = {
    "num": 42,
    "property name": "string value",
    "true": false,
    "fun" () {

        console.log("Harr Harr!");

    }
};

for (prop in obj) {

    if (prop === true) {

        console.log("It's true!");

    }

}
const vehicle = {
        "manufacturer": "Tesla",
        "model": "Model X",
        "year": 2015,
        "range": 295,
        "seats": 7
    },
    keys = Object.keys(vehicle);

console.log(keys);
const nestedArray = [
        [
            "title",
        'Duke'
        ],
    [
            "name",
        'Nukem'
        ],
    [
            "age",
        33
        ]
    ],
    person = {
        "title": "Duke",
        "name": "Nukem",
        "age": 33
    };

function clone (objToCopy) {

    return {...objToCopy};

}
const clonedPerson = clone(person);

console.log(clonedPerson);
person.age = 34;
console.log(person.age);
console.log(clonedPerson.age);