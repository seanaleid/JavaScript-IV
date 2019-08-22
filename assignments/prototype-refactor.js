/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

/*
Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.

Each constructor function has unique properties and methods that are defined in their block comments below:
*/


//GameObject -- original
// function GameObject(attributes){
// this.createdAt = attributes.createdAt,
// this.name = attributes.name,
// this.dimensions = attributes.dimensions
// }
// GameObject.prototype.destroy = function(){ return `${this.name} was removed from the game.`}

class GameObject {
    constructor(gameAttrs){
        this.createdAt = gameAttrs.createdAt;
        this.name = gameAttrs.name;
        this.dimensions = gameAttrs.dimensions;
    }
    //prototype stuff goes below
    destroy(){
        console.log(`${this.name} was removed from the game.`);
    }
}

//CharacterStats -- original
// function CharacterStats(attributes){
// GameObject.call(this, attributes);
// this.healthPoints = attributes.healthPoints;
// }
// CharacterStats.prototype = Object.create(GameObject.prototype);
// CharacterStats.prototype.takeDamage = function(){ return `${this.name} took damage.`} 

class CharacterStats extends GameObject {
    constructor(charAtters) {
        super(charAtters);
        this.healthPoints = charAtters.healthPoints;
    }
    //prototype stuff goes below
    takeDamage() {
        console.log(`${this.name} took damage.`);
    }
}

//Humanoid --> original
// function Humanoid(attributes){
// CharacterStats.call(this, attributes);
//     this.team = attributes.team,
//     this.weapons = attributes.weapons,
//     this.language = attributes.language
// }
// Humanoid.prototype = Object.create(CharacterStats.prototype);
// Humanoid.prototype.greet = function(){ return `Salutations, ${this.name} offers a greeting in ${this.language}.`}

class Humanoid extends CharacterStats {
    constructor(humAtters){
        super(humAtters);
        this.team = humAtters.team;
        this.weapons = humAtters.weapons;
        this.language = humAtters.language;
    }
    //prototype stuff goes below
    greet() {
        console.log(`${this.name} offers a greeting in ${this.language}.`);
    }
}

const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
    length: 2,
    width: 1,
    height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
    'Staff of Shamalama',
    ],
    language: 'Common Tongue',
});

const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
    length: 2,
    width: 2,
    height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
    'Giant Sword',
    'Shield',
    ],
    language: 'Common Tongue',
});

const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
    length: 1,
    width: 2,
    height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
    'Bow',
    'Dagger',
    ],
    language: 'Elvish',
});


console.log(mage.createdAt); // Today's date
console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
console.log(swordsman.healthPoints); // 15
console.log(mage.name); // Bruce
console.log(swordsman.team); // The Round Table
console.log(mage.weapons); // Staff of Shamalama
console.log(archer.language); // Elvish
console.log(archer.greet()); // Lilith offers a greeting in Elvish.
console.log(mage.takeDamage()); // Bruce took damage.
console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
console.log(swordsman.weapons);


