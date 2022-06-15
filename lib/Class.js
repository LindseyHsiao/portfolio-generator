class Character {
    constructor(name, eyes, hair, height) {
        this.name = name;
        this.eyes = eyes;
        this.hair = hair;
        this.height = height
    }
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

switch (Character) {
    case tara:
        return `${this.name} has ${this.eyes} eyes, ${this.hair} hair and is ${this.height} tall. She's from Tibet.`
        break;
    case (emilio):
        return `${this.name} has ${this.eyes} eyes, ${this.hair} hair and is ${this.height} tall. He's from Mexico.`
        break;
    case blanca:
        return `${this.name} has ${this.eyes} eyes, ${this.hair} hair and is ${this.height} tall. She's from Colombia.`
        break;
    case anna:
        return `${this.name} has ${this.eyes} eyes, ${this.hair} hair and is ${this.height} tall. She's from Holland.`
    break;
    default:
        return `What makes you, you?`
}

}

const tara =  new Character('Tara', 'brown', 'brown', "5'5")
const emilio = new Character('Emilio', 'hazel', 'brown', "6'0")
const blanca = new Character('Blanca', 'brown', 'black', "5'4")
const anna = new Character('Anna', 'blue', 'blonde', "5'6")

console.log(tara.switch.Character())




// getName() {
//     if (this.name === 'Lindsey') {
//         return `${this.name} is made up of the following traits: shes ${this.height}, she has big ${this.eyes}, she has all her ${this.teeth}, and short ${this.hair}. She nice!`
//     }
//     else {
//         return `${this.name} is super dumb. With his ${this.eyes} and dumb ${this.teeth}`
//     }
// }
// }
//console.log(lindsey.getName())
// console.log(vinnie.getName())

//const lindsey = new Character('Lindsey', 'Blue eyes', 'blonde hair', "5'9")
//const vinnie = new Character('Vinnie', 'Brown eyes', 'brown hair', "5'9")
