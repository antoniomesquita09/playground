// Par nome/valor
const saudacao = 'Opa' // contexto lexico 1

function exec() {
    const saudacao = ' Falaa' // contexto lexico 2
    return saudacao
}

//Objetos sao grupos alinhados de pares nome/valor

const client = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        numero: 123,
        logradouro: 'Rua Muito Leagal',
    }
}
console.log(saudacao)
console.log(exec())
console.log(client)