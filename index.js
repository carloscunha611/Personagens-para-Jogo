const Mage = require('./js/Mage')
const Thief = require('./js/Thief')
const Warrior = require('./js/Warrior')

const bruxa71 = new Mage('Bruxa do 71', 100, 5, 1, 15)
const ezio = new Thief('Ezio', 150, 30, 10)
const aragorn = new Warrior('Aragorn', 700, 30, 15, 10)
console.table({ bruxa71, ezio, aragorn })

const arthur = new Mage('Arthur', 90, 4, 2, 14)
const beatrice = new Thief('Beatrice', 140, 22, 8)
const cain = new Warrior('Cain', 200, 14, 12, 4)
console.table({ arthur, beatrice, cain })

bruxa71.attack(arthur)
console.table({ bruxa71, arthur })

ezio.attack(cain)
console.table({ ezio, cain })

cain.switchStance()
console.table({ cain })

aragorn.attack(beatrice)
console.table({ aragorn, beatrice })

console.table({ bruxa71, ezio, aragorn, arthur, beatrice, cain })
