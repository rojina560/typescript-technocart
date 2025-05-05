{
    // interface 
    type User1 = {
        name:string;
        age:number;
    }
    interface User2  {
        name:string;
        age:number;
    }
    type UserWithRoll1 = User1 & {role:string};// (type alias er khetre kono akta property barate hple  intersection(&) use korte hoi )
    interface UserWithRoll2 extends User2{
        role:string
    } // (interface e property barate hole (extends) kayword use korte hoi,type ke extends kre interface kora jay jemon rool2 2 er  khetre user1 o use kora jbe)
    const user :UserWithRoll1 ={
        name:'rojina',
        age: 24,
        role:'student'

    }
    const user1:UserWithRoll2 ={
        name:'rojina',
        age: 24,
        role: 'student'

    }
    const user2:User2 ={
        name:'rojina',
        age: 24

    }
    // array er khetre o interface use kora jay tobe better hoi type allias use kora

    type Roll1 = number[];
    interface Roll2{
        [index:number]:number
    }
    const roll2:Roll2=[1,2,]
    const roll1:Roll1=[1,2,3]
    // function er khetre interface er use toobe better hoi type use kora
    type Add = (num1:number,num2:number)=>number
    interface Add2 {
        (num1:number,num2:number):number
    } 
    const add1:Add2= (num1,num2)=>{
     return num1+num2
    }
    const add:Add= (num1,num2)=>{
     return num1+num2
    }
    // summery array and function er khetre type alisa use koorbo  and object khetre interface use korbo chaile type o use korte pari
}