const lunghezza = 100;

function quadrato() {
    forward(lunghezza);
    right(90);
    forward(lunghezza);
    right(90);
    forward(lunghezza);
    right(90);
    forward(lunghezza);
    right(90);
}

function latoSinistro() {
    quadrato();
    forward(lunghezza);

    quadrato()
    forward(lunghezza);

    quadrato()
    forward(lunghezza);

    right(90);
    forward(lunghezza);
}

function punta() {
    left(90);
    quadrato();
    right(90);
}

function latoDestro() {
    quadrato()
    forward(lunghezza);
    quadrato();
    forward(lunghezza);
    quadrato();
}

//solo per far entrare il disegno dentro il riquadro
goto(-100, -100);

latoSinistro();

punta();

forward(lunghezza * 2);
right(90);

latoDestro();

right(90);
forward(lunghezza);
quadrato();
