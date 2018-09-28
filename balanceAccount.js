
let wrapper = document.createElement('div');
wrapper.id = "wrapperId";
document.body.appendChild(wrapper);

let container = document.querySelector("#container")
let selector = document.querySelector("#mySelect");
let addButton = document.querySelector("#getAdd");
let description = document.querySelector("#Description");
let  amount = document.querySelector("#Amount");
let element = document.createElement('hr');


function getAdd(){
    let description1 = description.value;
    let amount1 = Number(amount.value);
    let selector = document.querySelector("#mySelect");
    if (selector.value === "Income") {
       
        personalAccount.addIncome(description1,amount1);
    }else if(selector.value === "Expense"){
        

        personalAccount.addExpense(description1,amount1);
    }
       
   }

addButton.addEventListener('click', function(e) {
    getAdd();    
});



   


let personalAccount = {
    firstName : 'Ben',
    lastName : 'Kakengi',
    incomes : [{description : 'salary', amount :36000},
               {description: 'bonus', amount: 10000},
               {description: 'online courses', amount :5500}],
    expenses : [{description:'rent', amount:18000},
                {description:'shopping', amount: 6000},
                {description: 'travel', amount: 3000}],
    
    calculateTotal :(accumulator, currentValue) => accumulator + currentValue.amount,  
  
    totalIncome : function(){
      return this.incomes.reduce(this.calculateTotal, 0);
    },  
  
    totalExpense : function(total){        
      return this.expenses.reduce(this.calculateTotal, 0);
    },
    accountInfo: function () {
      console.log(`Full Name : ${this.firstName} ${this.lastName} \n Total income : ${this.totalIncome()} \n Toatal expense : ${this.totalExpense()} \n ${this.accountBalance()}`);
    },
    accountBalance: function () {
      let blance =  0;
      return `Balance : ${this.totalIncome() - this.totalExpense()}`;
    },
  
    addIncome : function(description1,amount1) {
    
      this.incomes.push({description:description1, amount: amount1});
    },
  
    addExpense : function(description1,amount1) {
     
      this.expenses.push({description: description1, amount: amount1});
    }
  }

let income = document.querySelector("#income");
let expense = document.querySelector("#expense");
let balance = document.querySelector("#balance");


             
            
let incomesBlock =  personalAccount.incomes.map(income => 
    `<div id="incomeInfo">${income.description} ${income.amount} </div>` 
    
);


income.innerHTML = incomesBlock.join("");
//wrapper.appendChild(income);

  
let expensesBlock =  personalAccount.expenses.map(expense => 
    `<div id="expenseInfo">${expense.description} ${expense.amount} </div>` 
);

expense.innerHTML = expensesBlock.join("");
//wrapper.appendChild(expense);

 
let balance1 = personalAccount.totalIncome() - personalAccount.totalExpense();

 //`<div id="expenseInfo">${balance1} </div>` 
 
 balance.innerHTML += `Net: ${balance1}`;
 //wrapper.appendChild(balance);

    
     
    