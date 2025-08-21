# ------ Exercise 1
class BankAccount:
    def __init__(self, balance, username, password):
        if balance > 0:
            self.balance = balance
        else:
            self.balance = 0
        self.username = username
        self.password = password
        self.authenticated = False

    def deposit(self, amount):
        if not self.authenticated:
            raise Exception("Authentication required")
        if amount > 0:
            self.balance += amount
        else:
            raise Exception("Cannot deposit a non-positive amount")

    def withdraw(self, amount):
        if not self.authenticated:
            raise Exception("Authentication required")
        if amount > 0:
            if self.balance >= amount:
                self.balance -= amount
            else:
                raise Exception("Insufficient funds")
        else:
            raise Exception("Cannot withdraw a non-positive amount")

    def authenticate(self, username, password):
        if self.username == username and self.password == password:
            self.authenticated = True


class MinimumBalanceAccount(BankAccount):
    def __init__(self, balance, username, password, minimum_balance=0):
        super().__init__(balance, username, password)
        self.minimum_balance = minimum_balance

    def withdraw(self, amount):
        if not self.authenticated:
            raise Exception("Authentication required")
        if amount > 0:
            if self.balance - amount > self.minimum_balance:
                self.balance -= amount
            else:
                raise Exception("Withdrawal would go below the minimum balance")
        else:
            raise Exception("Cannot withdraw a non-positive amount")


class ATM:
    def __init__(self, account_list, try_limit):
        self.account_list = []
        for acc in account_list:
            if isinstance(acc, (BankAccount, MinimumBalanceAccount)):
                self.account_list.append(acc)

        try:
            if int(try_limit) > 0:
                self.try_limit = int(try_limit)
            else:
                self.try_limit = 2
        except (ValueError, TypeError):
            self.try_limit = 2

        self.current_tries = 0
        self.show_main_menu()

    def show_main_menu(self):
        while True:
            print("1. Log in")
            print("2. Exit")
            choice = input("Select an option: ")
            if choice == '1':
                self.log_in()
                break
            elif choice == '2':
                print("Exiting...")
                break
            else:
                print("Invalid option, please try again.")

    def log_in(self):
        while self.current_tries < self.try_limit:
            username = input("Enter username: ")
            password = input("Enter password: ")
            
            found_account = None
            for account in self.account_list:
                if account.username == username and account.password == password:
                    found_account = account
                    break
            
            if found_account:
                found_account.authenticate(username, password)
                print("Login successful.")
                self.show_account_menu(found_account)
                return
            else:
                self.current_tries += 1
                remaining_tries = self.try_limit - self.current_tries
                print(f"Invalid username or password. You have {remaining_tries} tries left.")

        print("You have reached the maximum number of tries. The system will now shut down.")
        exit()

    def show_account_menu(self, account):
        while True:
            print("\n--- Account Menu ---")
            print(f"Current Balance: {account.balance}")
            print("1. Deposit")
            print("2. Withdraw")
            print("3. Exit")
            choice = input("Select an option: ")

            if choice == '1':
                try:
                    amount = float(input("Enter amount to deposit: "))
                    account.deposit(amount)
                    print(f"New balance: {account.balance}")
                except Exception as e:
                    print(f"Error: {e}")
            elif choice == '2':
                try:
                    amount = float(input("Enter amount to withdraw: "))
                    account.withdraw(amount)
                    print(f"New balance: {account.balance}")
                except Exception as e:
                    print(f"Error: {e}")
            elif choice == '3':
                print("Logging out...")
                return
            else:
                print("Invalid option, please try again.")

