{
    //generic type: generic mane holo generalizide kora mane dynamically kono type make kora o tar reuse kora
    type genericArray = Array<string>
    type genericArray2 <t>= Array<t> // avabe likhle dynamic vabe jekono value set kora jbe jemo number string boolear 

    const rollNumbers : number[]=[1,2,3]// normal method
    const rollNumber: Array<number> = [1,2,3] //generic method
    const user3:genericArray2<string> =['mini','rini']
    const user: string[] = ['mini','rini']

    const user1: genericArray = ['mini','rini'] // avabeo use kora jay
    const users:Array<string> = ['mini','rini']
    const boolean: Array<boolean> = [true,false]
    const boolArray : boolean[] = [true,false,]
   

    // array of object
    type User4 ={
        name:string;
        age:24
    }

    // const user4 :genericArray2<{name:string,age:number}> =[{
    //     name: 'rojina',
    //     age:24
    // }] ait akat method
    const user4 :genericArray2<User4> =[{
        name: 'rojina',
        age:24
    }]

    // generic tuple 
    type genericTuple <x,y>= [x,y]

    const human:genericTuple<string,string> = ['head','hand']
    type UserId = {
        name:string;
        email: string
    }
    const userId:genericTuple<number,UserId>  = [1234,{name:'rojina', email: 'lfg'}]
 


    //
}