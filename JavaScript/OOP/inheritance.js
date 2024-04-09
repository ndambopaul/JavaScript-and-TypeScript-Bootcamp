class BankAccount {
    constructor(acc_name, acc_number, bank_name, balance) {
        this.acc_name = acc_name;
        this.acc_number = acc_number;
        this.bank_name = bank_name;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
        console.log(`You have deposited: ${amount}, new account balance is: ${this.balance}`);
    }

    withdraw(amount) {
        if(amount > this.balance) {
            console.log("You can't withdraw more than what you have")
        } else {
            this.balance -= amount;
            console.log(`You have withdrawn ${amount}, account balance: ${this.balance}`)
        }
    }

    get_balance() {
        console.log(`Account balance: ${this.balance}`)
    }
};

class SavingsAccount extends BankAccount {
    constructor(acc_name, acc_number, bank_name, balance, interest_rate) {
        super(acc_name, acc_number, bank_name, balance);
        this.interest_rate = interest_rate
    }
    
    calculate_interest() {
        let interest = this.balance * (this.interest_rate / 100)
        console.log(`Expected interest is: ${interest}`)
    }
}


// Bank Account class instance
const account = new BankAccount("James Doe", "050077392902", "Equity Bank Kenya", 50000);
account.deposit(2500);
account.get_balance();
account.withdraw(120500);
account.get_balance();

// SavingsAccount class instance
const savings_account = new SavingsAccount("John Doe", "1231188292", "KCB", 35000, 16);
savings_account.deposit(5000);
savings_account.get_balance();
savings_account.calculate_interest();
