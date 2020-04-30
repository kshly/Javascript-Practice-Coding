const account = {
    name: "Kishalay",
    expenses: [
        {
            description: 'Travel',
            amount: 2000
        },
        {
            description: 'Groceries',
            amount: 1000
        },
        {
            description: 'Gaming',
            amount: 1000
        },
    ],
    income: [

    ],
    addExpenses: function(description, amount){
        // whenever we write function keyword we can use the this keyword 
        // whenever we write ()=>{} arrow function we have to use the objectname instead of this
        this.expenses.push({
            description: description,
            amount: amount
        })
    },
    addIncome: function(description, amount){
        this.income.push({
            description: description,
            amount: amount
        })
    },
    getAccountSummary: function(){
       let totExpenses = 0
       let totIncome = 0
       this.expenses.forEach((expense) => {
            totExpenses += expense.amount
       })
       this.income.forEach((inc)=>{
            totIncome += inc.amount
       })
       const bankBalance = totIncome - totExpenses
       console.log(`${this.name} has a balance of $${bankBalance}, $${totIncome} in income, $${totExpenses} in expenses`)
    }

    
}


//Expenses -> description, amount
//addExpenses(description, amount)
//getAccountSummary() => total up all the expenses -> Kishalay Ghosh has $1250 in expenses
//Add income array to account 
// addincome method -> description , amount 
//tweak getAccountSummary
account.addExpenses('Rent', 1000)
account.addExpenses('Coffee', 4)
account.addIncome('Selling',50000)
account.addIncome('working',20000)
console.log(account.getAccountSummary())
