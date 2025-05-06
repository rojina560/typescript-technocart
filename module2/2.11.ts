{
    // utility types
    // pick
    type Person = {
        name: string,
        age: number,
        email:string,
        contact ?: number
    }
    // pick
    type Name = Pick<Person,'contact'>
    type NameEmail = Pick<Person,'contact'| 'email'>
    // omit
    type age = Omit<Person,'age'>
    //required
    type RequrePerson = Required<Person>
    //partial 
    type PersonPartial = Partial<Person>
    // Readonly 
    type ReadonlyPerson = Readonly<Person>
    const person2: ReadonlyPerson={
        name: 'rojina',
        age:345,
        email:'nhvb'

    }
    console.log(person2);
    // record 
    // type myObj ={
    //     a: string,
    //     b: string,
    // }
     type myObj = Record<string,string> // aikhane string er jaygay  number dile error hbe
     const obj1: myObj = {
        a:'gh',
        b:'fh'
     }

     // real life e amra sob smy ai method ta use korbo 
     const EmptyObj : Record<string,unknown> = {}
     // emty object jaygay jekono value deya jbe

}