{
    // function with generic 

    const createArray =(param:string) : string[]=>
        {
            return[param]

    }
   const createArrWithGeneric= <T> (param:T):T[]=>{
    return [param]

   }
   interface User{id:number,name:string}
   const res2 = createArrWithGeneric<User>({id:35,name:'rojina'})
   const res3 = createArrWithGeneric<string>('bangladesh')
    const res1 = createArray('bangladesh')
    // create generic with tuple
    const createGenericWithTuple =<x,y> (param1:x , param2:y):[x,y]=>{
        return [param1,param2]
    }
    const res5 = createGenericWithTuple<string, number> ('bangladesh' , 235)
    
    const res6 = createGenericWithTuple<string, string> ('bangladesh' , 'reiyh')
    const res7 = createGenericWithTuple<string, {name:string}> ('bangladesh' , {name:'rojina'}) 

    const addCourseToStudent =<T>(student:T)=>{
        const course = 'next level web developer'
        return {
            ...student,
            course
        }
    }
    const student1 = addCourseToStudent({name: 'fjk',email:'jdfbh', id:8})
    const student2 = addCourseToStudent({name: 'fjk',email:'jdfbh', id:8,watch:'kfjdgh'})

   








//

}