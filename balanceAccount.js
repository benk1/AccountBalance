
let wrapper = document.createElement('div');
wrapper.id = "wrapperId";
document.body.appendChild(wrapper);

let description = document.querySelector("#Description");
let amount = document.querySelector("#Amount");
let selector = document.querySelector("#mySelect");
let addButton = document.querySelector("#getAdd");
let container = document.querySelector("#container")


let incomeDiv = document.querySelector("#income");
let expenseDiv = document.querySelector("#expense");
let balanceDiv = document.querySelector("#balanceDiv");


function displayDateTime() {
  var date = new Date();
  var ndate = date.getDate();
  //var nday = date.getDay();
  var nmonth = date.getMonth() + 1;
  var nHrs = date.getHours();
  var nMin = date.getMinutes();
  var nYear = date.getFullYear();
  return (ndate + "/" + nmonth + "/" + nYear + "  " + nHrs + ":" + nMin);
}



function getAdd(){
   
    let description1 = description.value;
    description.value = "";
    let amount1 = Number(amount.value);
    amount.value = "";
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
    incomes : [{description : 'salary', amount :3000},
               {description: 'bonus', amount: 1000},
               {description: 'online courses', amount :5000}],
    expenses : [{description:'rent', amount:1000},
                {description:'shopping', amount: 100},
                {description: 'travel', amount: 100}],
    
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
    
      this.incomes.push({description:description1, amount: amount1}) ;
    },
  
    addExpense : function(description1,amount1) {
     
      this.expenses.push({description: description1, amount: amount1}) ;
    }
  }


             
            
let incomesBlock =  personalAccount.incomes.map(income => 
    `<div id="incomeInfo">${income.description} ${income.amount} $   ${displayDateTime()} </div>` 
    
);


incomeDiv.innerHTML = incomesBlock.join(""); 


  
let expensesBlock =  personalAccount.expenses.map(expense => 
    `<div id="expenseInfo">${expense.description} ${expense.amount} $   ${displayDateTime()}  </div>` 
);
//expense.innerHTML = `<hr>`;
expenseDiv.innerHTML = expensesBlock.join("");


 
let balance = personalAccount.totalIncome() - personalAccount.totalExpense();

 //`<div id="expenseInfo">${balance1} </div>` 
 //text.innerHTML += `<p>Balance</p>`;
 //balance.innerHTML = `<hr>`;
 
 
 
 //balanceDiv.appendChild(net);
 
 balanceDiv.innerHTML +=`<p id="NetId">Net: ${balance} </p>` ;
 //balanceDiv.innerHTML +=`Net: ${balance}`;
    
     
    