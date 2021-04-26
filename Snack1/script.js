/* Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore utilizzando destructuring e template literal */

const bikes = [
    {
        name: "Fast Graziella",
        weight: 7.4
    },
    {
        name: "Nuvolari",
        weight: 6.5
    },
    {
        name: "Simonetta",
        weight: 6.9
    },
    {
        name: "Shockblaze",
        weight: 6.4
    }
];


function findLightest(bikesArray) {
    //Devo confrontare il peso di una bici con la bici successiva e salvare il peso minore in una variabile
    //quindi la prima bici fino a prova contraria è la più leggera    
    let lightestBike = bikesArray[0];

    //se il peso della bici che sto analizzando è minore del peso della bici più leggera mai esaminata allora
    //sovrascrivo la variabile lightestBike
    for (let i = 1; i < bikesArray.length; i++) {
        const element = bikesArray[i];
        
        if (element.weight < lightestBike.weight) {
            lightestBike = element;
        }
    }

    //la funzione torna l'oggetto con la key "weight" minore
    return lightestBike;
}

const lightestBike = findLightest(bikes);
console.log(lightestBike);