import { accountType } from "../context/config";

const Withdraw = ()=>
{
    
}

/**
 * Calculate balances
 * @param {*} data 
 * @returns 
 */
const GlobalBalance = (data)=>
{
    //set floating point on validation
      const x = data
        .filter(n=> n.balance.match(/^-?[0-9]\d*(\.\d+)?$/))
        .map(n=> 
        {
            return {...n,balance: parseFloat(n.balance)}
        }).sort((a,b)=> a.accountType === b.accountType); 

    //return filtered object
    let accounts = {};
        accounts.debitBalance = x.filter(n=> n.balance > 0).reduce((a,b)=> { return a + b.balance },0);
        accounts.creditBalance = x.filter(n=> n.balance < 0).reduce((a,b)=> { return a + b.balance },0);
        accounts.balance = accounts.creditBalance + accounts.debitBalance;
        accounts.data = x;
        return accounts;
}

export { GlobalBalance }