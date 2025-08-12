# ------ Exercise 1
month_input = int(input("Enter a month between 1 and 12: "))

if 3 <= month_input <= 5:
    season = "The season is Spring"
elif 6 <= month_input <= 8:
    season = "The season is Summer"
elif 9 <= month_input <= 11:
    season = "The season is Autumn"
elif month_input == 12 or month_input == 1 or month_input == 2:
    season = "The season is Winter"
else:
    season = "Invalid value of month, please enter a month between 1 and 12"

print(season)
# ------ Exercise 2
#2.1
number = 1

while number <= 20 :
    print(number)
    number+=1
#2.2
index=0
for number in range (1,21) :
    if index%2==0 : print(f"index : {index} , element : {number}")
    index+=1
# ------ Exercise 3
corret_name="chaimaa"
name=""
while name.lower().strip() != corret_name : name=input("what is your name :")
print (f"heey {corret_name} ")
# ------ Exercise 4
names=['Samus','Cortana','V','Link','Mario','Cortana','Samus']

user_name=input("please enter a name to find : V")

if user_name in names :
    first_index=names.index(user_name)
    print(f"the name {user_name} is found at index: {first_index}")
else : print(f"sorry the name {user_name} is not found in the list")
# ------ Exercise 5
input1=int(input("input the .1. number : "))
input2=int(input("input the .2. number : "))
input3=int(input("input the .3. number : "))
greatest = max(input1,input2,input3)
print(f"the greatest is {greatest}")
# ------ Exercise 6
import random

wins = 0
losses = 0

while True:
    user_input = input("Enter a number from 1 to 9 (or 'q' to quit): ")

    if user_input.lower() == 'q':
        break  

    if not user_input.isdigit():
        print("Please enter a valid number between 1 and 9.")
        continue

    guess = int(user_input)
    if guess < 1 or guess > 9:
        print("Number must be between 1 and 9.")
        continue

    random_number = random.randint(1, 9)

    if guess == random_number:
        print(f"Winner! The number was {random_number}.")
        wins += 1
    else:
        print(f"Better luck next time. The number was {random_number}.")
        losses += 1

print("\nGame Over!")
print(f"Total wins: {wins}")
print(f"Total losses: {losses}")

# ------ Exercise 7

# ------ Exercise 8
