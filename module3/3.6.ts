{
    class BankAccount{
        id: number;
        name: string;
        balance : number;
        constructor(name:string,id: number,balance:number){
            this.id = id;
            this.name = name;
            this.balance = balance;
        }
        getDeposite(amount:number){
            return this.balance = this.balance + amount
        }  
}
 const poorManAccount = new BankAccount('rojina',8735,20)
console.log( poorManAccount.getDeposite(40)); 


 ///
}