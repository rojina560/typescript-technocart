{
    // getter setter
    class BankAccount{
        id: number;
        name: string;
        balance : number;
        constructor(name:string,id: number,balance:number){
            this.id = id;
            this.name = name;
            this.balance = balance;
        }
        // getter
        set deposite(amount:number){
             this.balance = this.balance + amount
        }  
        get _balance (){
            return this.balance
        }
}
 const poorManAccount = new BankAccount('rojina',8735,20)
poorManAccount.deposite = 70
 const myBalance = poorManAccount._balance
; 
console.log(myBalance);


 ///
}