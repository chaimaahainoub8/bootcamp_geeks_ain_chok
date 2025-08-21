# ------ Exercise 1
birthdays = {
    "Fatima Al Bennani": "1999/01/01",
    "Karim Sadik": "1989/02/24",
    "Lamiaa Harri": "1997/04/14",
    "Leila Slimani": "1981/10/03",
    "Hamza Elmaleh": "1971/04/19"
}

print("Welcome!")
print("You can look up the birthdays of the people in the list!")

name = input("Please enter a name: ")

birthday = birthdays.get(name)

if birthday:
    print(f"{name}'s birthday is on {birthday}.")
else:
    print(f"Sorry, we don't have the birthday for {name}.")


# ------ Exercise 2

birthdays = {
    "Fatima Al Bennani": "1999/01/01",
    "Karim Sadik": "1989/02/24",
    "Lamiaa Harri": "1997/04/14",
    "Leila Slimani": "1981/10/03",
    "Hamza Elmaleh": "1971/04/19"
}

print("Welcome! Here are the names we have in our list:")
for name in birthdays:
    print(name)

print("\n----------------------------------") # For better separation
person_name = input("Please enter a name from the list above: ")

if person_name in birthdays:
    birthday = birthdays[person_name]
    print(f"{person_name}'s birthday is on {birthday}.")
else:
    print(f"Sorry, we don't have the birthday information for {person_name}.")



# ------ Exercise 3

def calculate_sum(x):

    s = str(x)

    n1_str = s
    n2_str = s + s
    n3_str = s + s + s
    n4_str = s + s + s + s

    
    total = int(n1_str) + int(n2_str) + int(n3_str) + int(n4_str)

    
    return total

number = 3
result = calculate_sum(number)
print(f"The result for X={number} is: {result}")

number = 5
result = calculate_sum(number)
print(f"The result for X={number} is: {result}")

# ------ Exercise 4

import random

def throw_dice():
    return random.randint(1, 6)

def throw_until_doubles():
    throw_count = 0
    while True:
        throw_count += 1
        dice1 = throw_dice()
        dice2 = throw_dice()
        if dice1 == dice2:
            return throw_count

def main():
    results = []
    for _ in range(100):
        result = throw_until_doubles()
        results.append(result)

    total_throws = sum(results)
    print(f"It took a total of {total_throws} throws to get 100 doubles.")

    average_throws = total_throws / len(results)
    print(f"The average number of throws to get doubles was {average_throws:.2f}.")


main()


# ------ Exercise 5

import random

def throw_dice():
    return random.randint(1, 6)

def throw_until_doubles():
    throw_count = 0
    while True:
        throw_count += 1
        dice1 = throw_dice()
        dice2 = throw_dice()
        if dice1 == dice2:
            return throw_count

def main():
    results = []
    for _ in range(100):
        result = throw_until_doubles()
        results.append(result)

    total_throws = sum(results)
    print(f"It took a total of {total_throws} throws to get 100 doubles.")

    average_throws = total_throws / len(results)
    print(f"The average number of throws to get doubles was {average_throws:.2f}.")

main()


# ------ Exercise 6

# ------ Exercise 7

# ------ Exercise 8
