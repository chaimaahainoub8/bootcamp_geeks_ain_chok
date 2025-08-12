# ------ Exercise 1

for i in range(4):
    print("Hello World")

# ------ Exercise 2

result= pow(99,3)*8
print(result)

# ------ Exercise 3

my_name = "Chaimaa" 
user_name = input("What's your name? ")
#lower : evite le probleme de majuscule miniscule 
#strip : elimine les espace et les tab et retour a la ligne
if user_name.strip().lower() == my_name.lower():
    print(f"Hey {my_name}! ooow we have the same name ")
else:
    print(f"{user_name}? Nice name mine is {my_name} ")

# ------ Exercise 4

height = int(input("please enter you height in cm : "))
if height > 145 :
    print('you are tall enought to ride the coller roaster ')
else :
    print("you are too short to ride the coller roaster")

# ------ Exercise 5

my_fav_numbers={11,22,33}

my_fav_numbers.add(44)
my_fav_numbers.add(55)

my_fav_numbers.remove(55)
#my_fav_numbers.pop() we can use it too but sets are unordered

my_friend_fav_numbers={66,77,88}

our_fav_numbers=my_fav_numbers.union(my_friend_fav_numbers)

print(f"my favourites numbers are :{my_fav_numbers}")
print(f"my friend's favourites numbers are :{my_friend_fav_numbers}")
print(f"our favourites numbers are :{our_fav_numbers}")


# ------ Exercise 6

print(" for tuple we can't add more integers because it' immutable" \
" but we can create another tuple and add both values ")
my_tuple = (1, 2, 3)
new_tuple = my_tuple + (4, 5)
print(new_tuple) 


# ------ Exercise 7

basket = ["Banana", "Apples", "Oranges", "Blueberries"]
print(f"Original basket: {basket}")

# 1. Remove "Banana" from the list.
basket.remove("Banana")
print(f'basket after removing "Banana": {basket}')

# 2. Remove "Blueberries" from the list.
basket.remove("Blueberries")
print(f'basket after removing "Blueberries": {basket}')

# 3. Add "Kiwi" to the end of the list.
basket.append("Kiwi")
print(f'basket after adding "Kiwi": {basket}')

# 4. Add "Apples" to the beginning of the list.
basket.insert(0, "Apples")
print(f'basket after adding "apples" to the beginning: {basket}')

# 5. Count how many apples are in the basket.
apple_count = basket.count("Apples")
print(f'number of apples in the basket is: {apple_count}')

# 6. Empty the basket.
basket.clear()
print(f"basket after emptying the basket: {basket}")

# 7. Print the final state of the basket.
print(f"Final basket : {basket}")

# ------ Exercise 8

# Initial list of sandwich orders
sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich", "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", "Pastrami sandwich"]

# Create an empty list to store finished sandwiches
finished_sandwiches = []

# --- Part 1: Handle the out-of-stock item ---

print("The deli has run out of pastrami. Removing pastrami orders.")

# Use a while loop to remove all occurrences of "Pastrami sandwich"
# We loop as long as "Pastrami sandwich" is still found in the list.
while "Pastrami sandwich" in sandwich_orders:
    sandwich_orders.remove("Pastrami sandwich")

print(f"\nUpdated orders after removing pastrami: {sandwich_orders}\n")


# --- Part 2: Prepare the remaining orders ---

print("Preparing the remaining sandwiches...")

# Loop through the updated sandwich_orders list.
# We use a while loop that continues until sandwich_orders is empty.
while sandwich_orders:
    # .pop(0) removes the first sandwich from the orders list and returns it.
    current_sandwich = sandwich_orders.pop(0)
    
    # Add the prepared sandwich to the finished_sandwiches list.
    finished_sandwiches.append(current_sandwich)
    
    # Optional: Print a confirmation for each sandwich made.
    print(f"I made your {current_sandwich}.")

# --- Part 3: List all the finished sandwiches ---

# After the loop finishes, print a summary of all the sandwiches that were made.
print("\n--- All sandwiches have been made! ---")
for sandwich in finished_sandwiches:
    print(f"- {sandwich}")