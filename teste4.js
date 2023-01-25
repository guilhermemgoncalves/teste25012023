faturamento = [
    {
        "estado": "SP",
        "valor": 67836.43
    },
    {
        "estado": "RJ",
        "valor": 36678.66
    },
    {
        "estado": "MG",
        "valor": 29229.88
    },
    {
        "estado": "ES",
        "valor": 27165.48
    },
    {
        "estado": "Outros",
        "valor": 19849.53
    }
]

let total = 0;

faturamento.forEach(element => {
    total += element.valor;
});

console.log("|-----------------------------|")
console.log("|Estado|   Percentual         |")
console.log("|-----------------------------|")

faturamento.forEach(element => {

    valor = (element.valor/total)*100
    valor = valor.toFixed(2);

    if(element.estado !=="Outros")
    {
        console.log(`|${element.estado}    |  ${valor}%              |`);
    }
    else{
        console.log(`|${element.estado}|  ${valor}%              |`);
    }

    
    
});
console.log("|-----------------------------|")

