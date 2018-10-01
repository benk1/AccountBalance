
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
    let transaction 
    
    if (selector.value === "Income") {
       
       personalAccount.addIncome(description1,amount1);

    }else if(selector.value === "Expense"){
        

      personalAccount.addExpense(description1,amount1);
    }
   }

addButton.addEventListener('click', function(e) {
   getAdd();  
    let incomesBlock =  personalAccount.incomes.map(income => 
    `<div id="incomeInfo">${income.description} ${income.amount} ${income.time} </div>` 
    
);


incomeDiv.innerHTML = incomesBlock.join(""); 


  
let expensesBlock =  personalAccount.expenses.map(expense => 
    `<div id="expenseInfo">${expense.description} ${expense.amount} $     </div>` 
);

expenseDiv.innerHTML = expensesBlock.join("");


 
let balance = personalAccount.totalIncome() - personalAccount.totalExpense();

  balanceDiv.innerHTML +=`<p id="NetId">Net: ${balance} </p>` ;
});


let personalAccount = {
    firstName : 'Ben',
    lastName : 'Kakengi',
    incomes : [{description : 'salary', amount :3000,time:displayDateTime()},
               {description: 'bonus', amount: 1000,time:displayDateTime()},
               {description: 'online courses', amount :5000,time:displayDateTime()}],
    expenses : [{description:'rent', amount:1000,time:displayDateTime()},
                {description:'shopping', amount: 100,time:displayDateTime()},
                {description: 'travel', amount: 100,time:displayDateTime()}],
    
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

    addIncome(description1,amount1) {
      this.incomes.push({description:description1, amount: amount1, time: displayDateTime()}) ;
     // return `description: ${description1}  amount:${amount1}  ;
  },


  
    //addIncome : function(description1,amount1) {
    
      //this.incomes.push({description:description1, amount: amount1}) ;
   //},


   addExpense(description1,amount1) {
    this.expenses.push({description:description1, amount: amount1}) ;
    return `description: ${description1}  amount:${amount1}  ${displayDateTime()}`;
},
    //addExpense : function(description1,amount1) {
     
      //this.expenses.push({description: description1, amount: amount1}) ;
    //}
  }


             
     
let incomesBlock =  personalAccount.incomes.map(income => 
    `<div id="incomeInfo">${income.description} ${income.amount} $  ${displayDateTime()}  </div>` 
    
);


incomeDiv.innerHTML = incomesBlock.join(""); 


  
let expensesBlock =  personalAccount.expenses.map(expense => 
    `<div id="expenseInfo">${expense.description} ${expense.amount} $ ${displayDateTime()}   </div>` 
);

expenseDiv.innerHTML = expensesBlock.join("");


 
let balance = personalAccount.totalIncome() - personalAccount.totalExpense();

  balanceDiv.innerHTML +=`<p id="NetId">Net: ${balance} </p>` ;
 

     
    