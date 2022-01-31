let information = {
    nome: "Igor",
    idade: 20,
    Altura: 1.75
}

information.time = "Flamengo";

console.log(information)

delete information.idade;

console.log(information)


const cadastro = [
        {
            nome: "Pedro",
            idade: 20,
            telefone: 2199999,
            amigos: ["Thiago","Isabela","Iris","Fabio"]
        },       
        {
            nome: "Joao",
            idade: 19,
            telefone: 21999999,
            amigos: ["Thiago","Isabela","Iris","Fabio"]
        },
        {
            nome:"Yago",
            idade: 32,
            telefone: 2199999999,
            amigos: ["Thiago","Isabela","Iris","Fabio"]
        },
        {
            nome:"Matheus",
            idade: 43,
            telefone: 2199999,
            amigos: ["Thiago","Isabela","Iris","Fabio"]
        },
        {
            nome:"Luciana",
            idade: 25,
            telefone: 21999999,
            amigos: ["Thiago","Isabela","Iris","Fabio"]
        }
    ]


console.log(cadastro)

console.log(cadastro[0].amigos[0])
console.log(cadastro[1].amigos[1])
console.log(cadastro[2].amigos[2])
console.log(cadastro[3].amigos[3])
console.log(cadastro[4].amigos[0])