class hero {
    constructor(name, type, attack, age) {
        this.name = name
        this.type = type
        this.attack = attack
        this.age = age
    }

    strike() {

        if (this.type === 'guerreiro') {
            this.attack = 'espada'
        } else if (this.type === 'mago') {
            this.attack = 'magia'
        } else if (this.type === 'monge') {
            this.attack = 'artes marciais'
        } else if (this.type === 'ninja') {
            this.attack = 'shuriken'
        }
        console.log(`O ${this.type}, ${this.name} atacou usando ${this.attack}!`)
    }
}

let guerreiro = new hero('Spartacus', 'guerreiro', 'espada', 28)
let mago = new hero('Merlin', 'mago', 'magia', 31)
let monge = new hero('Shaolin', 'monge', 'artes marciais', 24)
let ninja = new hero('Jiraya', 'ninja', 'shuriken', 33)

guerreiro.strike()
mago.strike()
monge.strike()
ninja.strike()
