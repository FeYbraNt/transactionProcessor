const transactions = require("./src/examples/transactions");
const TransactionProcessor = require("./src/TransactionProcessor");

console.log("*** Payvision transaction processor ***");
const processor = new TransactionProcessor();

transactions.forEach(tx => {
  processor.print(tx);
  // Have fun!
  console.log("Valid transaction = " + TransactionProcessor.isValidTransaction(tx))
});

// Having more fun :)
const newProcessor = new TransactionProcessor(transactions)
console.log("Invalid transactions = " + JSON.stringify(newProcessor.filterInvalidTransactions().transactions))
const lowAmountFilter = tx => tx.amount < 10
const visaFilter = tx => tx.brand === "visa"
const euroFilter = tx => tx.currency === "EUR"
console.log("Transactions filtered = " 
  + JSON.stringify(newProcessor.filterTransaction([lowAmountFilter, visaFilter, euroFilter]).transactions))