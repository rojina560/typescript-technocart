{
    // promise 
    // simulate
    type Todo ={
        id:number,
        title: string,
        userId: number,
        completed: boolean
    } 
    const getTodo = async ():Promise<Todo>=>{
        const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        const data = await res.json()
       return data
        
    }
    const todo = async()=>{
        const data = await getTodo()
        console.log(data);
    }
    todo()
    
  

    interface Something{
        something: string
    }
    const createPromise = ():Promise<Something>=>{
        return new Promise<Something>((resolve,reject)=>{
            const data: Something = {something:'something'}
            if(data){
                resolve(data)
            }else{
                reject('failed to load data')
            }

        })
    }
    // calling create promise function
    const showData = async():Promise<Something>=>{
        const data:Something = await createPromise()
        return data
        console.log(data);
    }
    showData()
    //
}