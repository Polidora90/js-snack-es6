/* Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
Usiamo i nuovi metodi degli array foreach o filter. */


const objectList = ["cacio", "cavallo", "caciocavallo", "pesce", "cane", "pescecane", "caffè", "latte", "caffellatte"];

const newList = findElements(objectList, 1, 6);

console.log(newList);

/**
 * The function creates an array that contains the elements that have index between the two numbers a and b included;
 * @param {[]} array 
 * @param {number} a Lower index;
 * @param {number} b Higher index;
 * @returns {[]};
 */
function findElements (array, a, b) {

    const newArray = array.filter((element) => (array.indexOf(element) >= a && array.indexOf(element) <= b));

    return newArray;
};
//funzione sopra sicuramente da migliorare

//creo una funzione con forEach
function findElementsInDifferentWay (array, a, b) {
    newArray = [];

    array.forEach((element, index) => {
        if (index >= a && index <= b) {
            newArray.push(element);
        };
    });

    return newArray;
};