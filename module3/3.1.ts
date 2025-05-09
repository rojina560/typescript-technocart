{// instanceOf grurd

    class Animal{
    name: string;
    species: string;
    constructor(name:string,species:string){
        this.name = name;
        this.species = species
    }
    makeSound(){
        return ('make sound')
    }
}

class Dog extends Animal {
    constructor(name:string,species:string){
        super(name,species)
    }

    dogBerk(){
        return('dog is berking')
    }   
}
class Cat extends Animal{
    constructor(name:string,species:string){
        super(name, species)
    }
    catSound(){
        return ('cat is meaw ')
    }
}

const isDog = (animal: Animal): animal is Dog=>{
    return animal instanceof Dog

}
const isCat =(animal: Animal): animal is Cat=>{
    return animal instanceof Cat
}
const getAnimal=(animal:Animal)=>{
    if(isDog(animal)){
        return animal.dogBerk()
    }else if(isCat(animal)){
        return animal.catSound()

    }else{
        return animal.makeSound()
    }

}

const dog = new Dog('dog vai','dog');
const cat = new Cat('cat vai','cat')
console.log(cat.catSound());
console.log(getAnimal(dog));
///
}