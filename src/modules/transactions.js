/*
    I should have made a ledger to record dt + corresponding cr
*/

/**
 * 
 * @param {*} accountType 
 * @param {*} balance 
 * @param {*} debit 
 * @returns valid balance
 */
const Withdraw = (accountType,balance,debit)=>
{
    let accountBalance = parseFloat(balance) - parseFloat(debit);

    switch(accountType)
    {
        case "cheque": return ( balance > 0 && accountBalance > 0)  ?  accountBalance : balance;
        case "savings": return ( balance > -500 && accountBalance > -500)  ?  accountBalance  : balance;
        default: return "1";
    }
}

/**
 * Calculate balances
 * @param {*} data 
 * @returns summary of bank balance
 */
const GlobalBalance = (data)=>
{
    //set floating point on validation
      const x = data
        .filter(n=> n.balance.match(/^-?[0-9]\d*(\.\d+)?$/))
        .map(n=> 
        {
            return {...n,balance: parseFloat(n.balance)}
        }); 

    //return filtered object
    let accounts = {};
        accounts.debitBalance = x.filter(n=> n.balance > 0).reduce((a,b)=> { return a + b.balance },0);
        accounts.creditBalance = x.filter(n=> n.balance < 0).reduce((a,b)=> { return a + b.balance },0);
        accounts.balance = accounts.creditBalance + accounts.debitBalance;
        accounts.data = x;
        return accounts;
}

export { GlobalBalance, Withdraw }