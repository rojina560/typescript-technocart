{
    //**
    // access modifiers 
    // 1. readonly(white protection) Used for properties only (not methods)
    //Means the value cannot be changed after initialization (usually in the constructor).
    //Still accessible from anywhere it's visible, but not assignable.
    // 
    //  */
     // 2.private(access Control) Means the method or property is only accessible within the class where it is defined.
//Prevents outside access to internal logic or data.
// 3. protect (protected কী করে?
//protected দিয়ে declare করা method বা property:

//✅ নিজের class থেকে অ্যাক্সেস করা যায়

//✅ subclass (inherited class) থেকেও অ্যাক্সেস করা যায়

//❌ বাহির থেকে (class instance দিয়ে) অ্যাক্সেস করা যায় না


    class BankAccount{
         readonly id: number;
       public name: string;
        private _balance : number;
        constructor(name:string,id: number,balance:number){
            this.id = id;
            this.name = name;
            this._balance = balance;
        }
        addDeposite(amount:number){
            return this._balance = this._balance + amount
        }  
        getAmount(){
            return this._balance
        }

}
 const poorManAccount = new BankAccount('rojina',8735,20)
//  poorManAccount.id = 0
 console.log( poorManAccount.addDeposite(40)); 
 ///
}