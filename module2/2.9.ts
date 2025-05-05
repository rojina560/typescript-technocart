{
    // conditional type
    // akta type onno akta type er condition er upor vitti kre type nirdharon kre

    type a1 = number 
    type b1 = undefined
    type x = a1 extends null ? true: false // conditional type
    type y = a1 extends string ? true: b1 extends undefined ? undefined : any

    type RichPerson = {
        car: string;
        bike: string;
        ship: string
    }
    // car ase kina / bike ase kina/ ship / tractor ase kina
    type checkProperty  <T>= T extends keyof RichPerson? true: false  
    type hasCar = checkProperty <'car'>
    






    //
}