// Reference Type --> Object

const user:{
   
    // readonly compani : string // readonly dileo value change kora jbena
    company: 'abc'; // type--literal types aita diye fixed value 
    firstName : string;
    middleName?: string // optional type aita thakteo pare abr nau pare
    lastName: string;
    ismarried: boolean;
} = {
    company: 'abc',
    firstName: 'rojina',
    lastName: 'akter',
    ismarried: false
}
console.log(user.company );
