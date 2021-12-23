const frutas = ["maça", "banana", "pera", 3565, {
    nome: "joao",
    idade: 34
}];
const carros = ["gol", "vectraa", "civic", "uno"];

const showItens = (arr = []) => {
    arr.map((item) => {
        switch (typeof (item)) {
            case "object":
                return console.log(item.nome)
            case "number":
                return console.log("batata")
            default:
                console.log(item)
                break;
        }
    })
}

showItens([...frutas, ...carros]);


