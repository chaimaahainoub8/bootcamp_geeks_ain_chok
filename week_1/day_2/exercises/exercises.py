# ------ Exercise 1
keys = ['Ten', 'Twenty', 'Thirty']
values = [10, 20, 30]

result_dict = dict(zip(keys, values))
print(result_dict)

# ------ Exercise 2 

family = {"rick": 43, "beth": 13, "morty": 5, "summer": 17}
total_cost = 0

print("Individual ticket prices:")


for name, age in family.items():
    cost = 0
    if age >= 3 and age <= 12:
        cost = 10
    elif age > 12:
        cost = 15
    

    total_cost += cost
    print(f"{name.capitalize()}: ${cost}")

print(f"\nTotal family cost: ${total_cost}")

print("\n--- Bonus Section ---")
family_from_input = {}
total_cost_input = 0

while True:
    name_input = input("Enter a family member's name (or type 'done' to finish): ")
    if name_input.lower() == 'done':
        break
    
    try:
        age_input = int(input(f"Enter {name_input.capitalize()}'s age: "))
        family_from_input[name_input.lower()] = age_input

    except ValueError:
        print("Invalid age. Please enter a number.")

if family_from_input:
    print("\nCalculating costs for the entered family...")
    for name, age in family_from_input.items():
        cost = 0
        if age >= 3 and age <= 12:
            cost = 10
        elif age > 12:
            cost = 15
        
        total_cost_input += cost
        print(f"{name.capitalize()}: ${cost}")

    print(f"\nTotal cost for this family: ${total_cost_input}")
else:
    print("No family members were entered.")

# ------ Exercise 3
# 1. Create the dictionary
brand = {
    'name': 'Zara',
    'creation_date': 1975,
    'creator_name': 'Amancio Ortega Gaona',
    'type_of_clothes': ['men', 'women', 'children', 'home'],
    'international_competitors': ['Gap', 'H&M', 'Benetton'],
    'number_stores': 7000,
    'major_color': {
        'France': 'blue',
        'Spain': 'red',
        'US': ['pink', 'green']
    }
}

# 2. Change the number of stores to 2
brand['number_stores'] = 2

# 3. Print a sentence about Zara's clients
client_types = ", ".join(brand['type_of_clothes'])
print(f"Zara's clients are {client_types}.")

# 4. Add a new key-value pair
brand['country_creation'] = 'Spain'

# 5. Add a competitor
if 'international_competitors' in brand:
    brand['international_competitors'].append('Desigual')

# 6. Delete the creation_date
if 'creation_date' in brand:
    del brand['creation_date']

# 7. Print the last international competitor
print(f"The last international competitor is: {brand['international_competitors'][-1]}")

# 8. Print the major clothes colors in the US
print(f"The major clothes colors in the US are: {brand['major_color']['US']}")

# 9. Print the amount of key-value pairs
print(f"The dictionary has {len(brand)} key-value pairs.")

# 10. Print the keys of the dictionary
print(f"The keys of the dictionary are: {list(brand.keys())}")

# 11. Create another dictionary
more_on_zara = {
    'creation_date': 1975,
    'number_stores': 10000
}


# 12. Add the information from the new dictionary to the brand dictionary
brand.update(more_on_zara)


# 13. Print the value of the key number_stores and explain what happened
print(f"The current value of number_stores is: {brand['number_stores']}")
print("The value of 'number_stores' was updated from 2 to 10000 because the update() method overwrites existing keys with new values.")

# ------ Exercise 4

def describe_city(city, country="Iceland"):
  """Prints a sentence describing a city and its country."""
  print(f"{city} is in {country}.")

# Call the function for three different cities.
describe_city("Reykjavik")
describe_city("Paris", "France")
describe_city("New York", "USA")

# ------ Exercise 5

import random

def check_random_number(user_number):
  if not 1 <= user_number <= 100:
    print("Please enter a number between 1 and 100.")
    return

  random_number = random.randint(1, 100)

  if user_number == random_number:
    print("Success! The numbers are the same.")
  else:
    print(f"Fail! Your number was {user_number}, the random number was {random_number}.")

# Example call to the function

check_random_number(22)


# ------ Exercise 6

def make_shirt(size="large", text="I love Python"):
  print(f"The size of the shirt is {size} and the text is '{text}'.")

make_shirt()
make_shirt(size="medium")
make_shirt("small", "Hello World!")
make_shirt(text="Python is Fun", size="extra large")


# ------ Exercise 7
import random

def get_random_temp():
 
  return random.randint(-10, 40)

def main():

  temperature = get_random_temp()

  print(f"The temperature right now is {temperature} degrees Celsius.")


  if temperature < 0:
    print("Brrr, that's freezing! Wear a warm coat.")
  elif temperature < 16:
    print("Quite chilly. You should wear a jacket.")
  elif temperature < 25:
    print("It's a pleasant day. A t-shirt is fine.")
  else:
    print("It's hot outside! Wear something light.")

main()

"""BOUNUS EXERCISE 7"""

import random

def get_random_temp_from_month(month):

  if month in [12, 1, 2]: 
    lower = -10.0
    upper = 16.0
  elif month in [3, 4, 5]: 
    lower = 0.0
    upper = 23.0
  elif month in [6, 7, 8]: 
    lower = 24.0
    upper = 40.0
  else: 
    lower = 10.0
    upper = 23.0
  
  return random.uniform(lower, upper)

def main_bonus():

  month_number = int(input("Enter the number of the month (1-12): "))

  temperature = get_random_temp_from_month(month_number)

  print(f"The temperature right now is {temperature:.1f} degrees Celsius.")

  if temperature < 0:
    print("Brrr, that's freezing! Wear a warm coat.")
  elif temperature < 16:
    print("Quite chilly. You should wear a jacket.")
  elif temperature < 24:
    print("It's a pleasant day. A t-shirt is fine.")
  else:
    print("It's hot outside! Wear something light.")

main_bonus()

# ------ Exercise 8

data = [
    {"question": "What is Baby Yoda's real name?", "answer": "Grogu"},
    {"question": "Where did Obi-Wan take Luke Skywalker as a baby?", "answer": "Tatooine"},
    {"question": "What year did the first Star Wars movie come out?", "answer": "1977"},
    {"question": "Who built C-3PO?", "answer": "Anakin Skywalker"},
    {"question": "Anakin Skywalker grew up to be who?", "answer": "Darth Vader"},
    {"question": "What species is Chewbacca?", "answer": "Wookiee"}
]

def run_quiz(questions):
    correct_answers = 0
    incorrect_answers = 0
    wrong_answers_list = []

    for item in questions:
        question_text = item["question"]
        correct_answer = item["answer"]
        user_answer = input(f"{question_text} ")

        if user_answer.lower() == correct_answer.lower():
            correct_answers += 1
        else:
            incorrect_answers += 1
            wrong_answers_list.append({
                "question": question_text,
                "your_answer": user_answer,
                "correct_answer": correct_answer
            })
    
    return correct_answers, incorrect_answers, wrong_answers_list

def show_results(correct, incorrect):
    print(f"\nYou had {correct} correct answers and {incorrect} incorrect answers.")

def main_quiz():
    correct, incorrect, wrong_list = run_quiz(data)
    show_results(correct, incorrect)

main_quiz()

"""BONUS EXERCISE 8"""

data = [
    {"question": "What is Baby Yoda's real name?", "answer": "Grogu"},
    {"question": "Where did Obi-Wan take Luke Skywalker as a baby?", "answer": "Tatooine"},
    {"question": "What year did the first Star Wars movie come out?", "answer": "1977"},
    {"question": "Who built C-3PO?", "answer": "Anakin Skywalker"},
    {"question": "Anakin Skywalker grew up to be who?", "answer": "Darth Vader"},
    {"question": "What species is Chewbacca?", "answer": "Wookiee"}
]

def run_quiz_with_bonus():
    correct_answers = 0
    incorrect_answers = 0
    wrong_answers_list = []

    for item in data:
        question_text = item["question"]
        correct_answer = item["answer"]
        user_answer = input(f"{question_text} ")

        if user_answer.lower() == correct_answer.lower():
            correct_answers += 1
        else:
            incorrect_answers += 1
            wrong_answers_list.append({
                "question": question_text,
                "your_answer": user_answer,
                "correct_answer": correct_answer
            })
    
    print(f"\nYou had {correct_answers} correct answers and {incorrect_answers} incorrect answers.")

    if incorrect_answers > 0:
        print("\nHere are the questions you answered wrong:")
        for wrong in wrong_answers_list:
            print(f"Question: {wrong['question']}")
            print(f"  Your answer: {wrong['your_answer']}")
            print(f"  Correct answer: {wrong['correct_answer']}")
    
    if incorrect_answers > 3:
        play_again = input("\nYou had more than 3 wrong answers. Do you want to play again? (yes/no) ")
        if play_again.lower() == 'yes':
            run_quiz_with_bonus()

run_quiz_with_bonus()
