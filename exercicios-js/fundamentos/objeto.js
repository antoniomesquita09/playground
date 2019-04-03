const produto = new Object
produto.nome = "Antonio"


carro = {
    nome: 'Fit',
    valor: 89000,
    dono: {
        nome: 'Antonio',
        idade: 60
    },
    condutores:[{
        nome: 'Lais',
        idade: 21
    },
    {
        nome: 'Estelita',
        idade: 54
    }],
}


console.log(produto.nome)
console.log(carro.dono.idade)
console.log(carro.condutores[1])

const a = 1
const b = 2
const c = 3
const obj1 = {a: a, b: b, c: c}
const obj2 = { a, b, c}

console.log(obj1, obj2)

const sequencia = {
    _valor: 1, // convecao => private
    get valor() { return this._valor++ },
    set valor(valor) {
        if(valor>this._valor){
            this._valor = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor,sequencia.valor)
sequencia.valor = 900
console.log(sequencia.valor,sequencia.valor)
