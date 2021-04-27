
/* Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console. */

const squadreCalcio = [
    {
        nome: "Arsenal",
        punti: 0,
        falli_subiti: 0
    },
    {
        nome: "Chelsea",
        punti: 0,
        falli_subiti: 0
    },
    {
        nome: "WestHam",
        punti: 0,
        falli_subiti: 0
    },
    {
        nome: "Leicester",
        punti: 0,
        falli_subiti: 0
    },
    {
        nome: "Tottenham",
        punti: 0,
        falli_subiti: 0
    },
]

//per ogni oggetto attribuisco il valore alle chiavi "punti" e "falli"
for (let i = 0; i < squadreCalcio.length; i++) {
    const element = squadreCalcio[i];

    element.punti = numRandom(0, 50);
    element.falli_subiti = numRandom(0, 25);
};

nuovaLista = creaNuovaLista(squadreCalcio);
console.log(nuovaLista);

function creaNuovaLista(listaOggetti) {
    const nuovaListaSquadre = [];

    for (const squadra of listaOggetti) {
        //recupero le proprietà che devo stampare
        const { nome, falli_subiti} = squadra;

        //pusho nella nuova lista solo le proprietà che mi servono
        nuovaListaSquadre.push({
            nome,
            falli_subiti
        })
    }
    return nuovaListaSquadre;
}

function numRandom(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}