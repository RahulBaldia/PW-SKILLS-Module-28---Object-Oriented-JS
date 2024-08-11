class BankAccount {
    constructor(accountHolder, initialBalance = 0) {
        this.accountHolder = accountHolder;
        this.balance = initialBalance;
    }

    // Method to deposit money into the account
    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Deposited: $${amount}. New balance: $${this.balance}.`);
        } else {
            console.log("Deposit amount must be positive.");
        }
    }

    // Method to withdraw money from the account
    withdraw(amount) {
        if (amount > 0) {
            if (this.balance >= amount) {
                this.balance -= amount;
                console.log(`Withdrew: $${amount}. New balance: $${this.balance}.`);
            } else {
                console.log("Insufficient funds.");
            }
        } else {
            console.log("Withdrawal amount must be positive.");
        }
    }

    // Method to check the account balance
    checkBalance() {
        console.log(`Account Balance: $${this.balance}`);
        return this.balance;
    }
}

// Example usage
const myAccount = new BankAccount("John Doe", 100);
myAccount.deposit(50); // Deposited: $50. New balance: $150.
myAccount.withdraw(30); // Withdrew: $30. New balance: $120.
myAccount.checkBalance(); // Account Balance: $120
myAccount.withdraw(200); // Insufficient funds.
myAccount.deposit(-10); // Deposit amount must be positive.
