{
    // type guards
    // typeOf --> type guard 
    const add = (param1: string|number ,param2:string|number) :string |number=>{
        if(typeof param1 === 'number'&& typeof param2 === 'number'){
            return param1 + param2
        } else{
            return param1.toString() + param2.toString()
        }

    }
    const result = add(2,2)
    console.log(result);

    // use of in gurd 
    type NormalUser = {
        name: string

    }
    type AdminUser = {
        name: string,
        role: string
    }
    const getUser = (user: NormalUser| AdminUser)=>{
        if('role' in user){
            console.log(`my name is ${user.name} and ny role is ${user.role}`);
        }else{
            console.log(`my name is ${user.name}`);
        }
    }

    const adminUser: AdminUser ={
        name: 'rojina akter',
        role:'admin'
    }
    const normalUser : NormalUser ={
        name: 'samiul'
    }
    ///
    getUser(adminUser)
    getUser(normalUser)
    
}