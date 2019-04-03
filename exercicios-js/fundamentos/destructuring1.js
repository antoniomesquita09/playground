// novo recurso do ES2015

const pessoa = {
    nome: 'tonin',
    idade: 20,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const { nome, idade } = pessoa

console.log(nome)
console.log(idade)

const { endereco: {logradouro, numero, cep} } = pessoa
console.log(logradouro, numero, cep)