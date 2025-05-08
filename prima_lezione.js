// contiene il valore
// della lunghezza
// del lato della casa
const lunghezza = 200;


function latoDellaCasa() {
    forward(lunghezza);
    right(90);
}

function tornaSu() {
    right(45)
    forward(lunghezza * 1.414);
}

function tetto() {
    right(360 - 90);
    forward(lunghezza * 1.414 / 2);
    right(360 - 90);
    forward(lunghezza * 1.414 / 2);
}

latoDellaCasa();
latoDellaCasa();
latoDellaCasa();
latoDellaCasa();

tornaSu();
tetto();
