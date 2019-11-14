class TransactionProcessor {
  // QUESTION: COMPLETE ALL CLASS FUNCTIONS TO PASS THE TESTS

  constructor(transactions) {
    this.transactions = transactions;
  }

  print(tx) {
    console.log(
      `ID: ${tx.id} - Brand: ${tx.brand} - Currency: ${tx.currency} - Amount: ${tx.amount}`
    );
  }

  // Check valid transactions rules
  static isValidTransaction(transaction) {
    const isAmountNonNegative = (isFinite(parseFloat(transaction.amount)) && transaction.amount >= 0)
    const isBrandLowerCase =  (transaction.brand == transaction.brand.toLowerCase())
    const isCurrencyUpperCase = (transaction.currency == transaction.currency.toUpperCase())
    const isIDGreaterZero = (transaction.id > 0)
    return isAmountNonNegative && isBrandLowerCase && isCurrencyUpperCase && isIDGreaterZero;
  }

  // Remove invalid transactions
  filterInvalidTransactions() {
    this.transactions = this.transactions.filter((transaction) => !TransactionProcessor.isValidTransaction(transaction))
    return this
  }

  // Return transactions of given currency
  getTransactionsByCurrency(currency) {
    this.transactions = this.transactions.filter((transaction) => (transaction.currency == currency));
    return this
  }

  // Return transactions of given brand
  getTransactionsByBrand(brand) {
    this.transactions = this.transactions.filter((transaction) => (transaction.brand == brand));
    return this
  }

  // BONUS:
  // Apply multiple filters. Filters parameter should be an array of functions (predicates)
  filterTransaction(filters) {
    this.transactions = this.transactions.filter( (transaction) => 
      (filters.filter(fil => fil(transaction)).length == filters.length) 
    )
    return this
  }

  // Return the total amount of current transactions array
  sum() {
    const validTransactions = this.transactions.filter((transaction) => TransactionProcessor.isValidTransaction(transaction))
    const result = validTransactions.reduce((acc, transaction) => {
      return parseFloat((acc + transaction.amount).toFixed(2)) // Fast way to fix float pointing issues
    }, 0)
    return result
  }
}

module.exports = TransactionProcessor;
