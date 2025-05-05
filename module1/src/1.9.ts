{
    // type alias
    type Student = {
        name:string;
        age: number;
        contactNo?: number
    }
    const student1:Student ={
        name: 'rojina',
        age: 24,
        contactNo: 4938756,

    }
    type UserName = String;
    type IsAdmin = Boolean;
    const userName: UserName = 'rojina';
    const isadmin: IsAdmin = true; 
    type Add = (num1:number,num2:number) => number
const add:Add = (num1,num2)=>{
    return num1 + num2
}
console.log(add(3, 4));
}