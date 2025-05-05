{
    // generic with interface
    interface Developer<T,R>{
        name: string;
        computer:{
            brand: string;
            model: string;
            releaseYear: number
        }
        smartWatch: T;
        bike?: R ;
    };
    interface SmartWatch2{
        model:string,brand:string , display:number

    }
    const poorDeveloper: Developer<SmartWatch2,null>={
        name: 'Rich Dev',
        computer:{
            brand: 'hp',
            model:'kfgh',
            releaseYear:98
        },
        smartWatch: {
            brand:'apple',
            model:'regh',
            display: 23

        }
    }
    // type DeveloperT ={
    //     name:
    // }
    interface SmartWatch{
        brand: string,
        model:string,
        sleeptrack : boolean
    }
    interface Bike{
        model:string , price:number

    }
    const richDeveloper: Developer<SmartWatch,Bike>={
        name: 'Rich Dev',
        computer:{
            brand: 'hp',
            model:'kfgh',
            releaseYear:98
        },
        smartWatch: {
            brand:'apple',
            model:'regh',
            sleeptrack: true

        },
        bike:{
            model: 'gjh',
            price:456
        }
    }
//
}