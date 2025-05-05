{
    // generic constraiint with keyof operator
    type vehicle = {
        bike : string;
        ship: string;
        car: string  
    }
    type Owner = 'bike'| 'car'|'ship' ; // manually union literal
    type Owner2 = keyof vehicle
    const person1 : Owner2 = "bike"
    console.log(person1);

    const  User = {
        name:'rojina',
        age:24


    }

    const getPropertyValue =<x,y extends keyof x>(obj:x , key:y)=>{
        return obj[key]

    }
    const res1 = getPropertyValue(User,'age')


}