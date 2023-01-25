

function isFibonnaci(reqNumber) {

    let currentNumber = 0;
    let nextNumber = 1;

    while (true) {
        console.log("", currentNumber);

        auxNumber = nextNumber;
        nextNumber = currentNumber + auxNumber;
        currentNumber = auxNumber;

        if (currentNumber == reqNumber) {
            console.log(`O numero ${reqNumber} pertence a sequência fibonnaci`)
            return true;
        }
        if (currentNumber >= reqNumber) {
            console.log(`O numero ${reqNumber} não pertence a sequência fibonnaci`)
            return false;
        }
    }
}

isFibonnaci(6);

