function Pessoa(nome){
    this.nome = nome
    this.falar = () => {
        console.log(`Meu nome e ${this.nome}`)
    }
}

const p1 = new Pessoa('Joao')
p1.falar()