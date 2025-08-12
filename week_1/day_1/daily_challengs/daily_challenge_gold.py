#challenge1

number = int(input("Enter a number: "))
length = int(input("Enter the list length: "))


my_list = []

for i in range(1, length + 1):
    my_list.append(number * i)
print(f"number {number} lenght {i}: {my_list}")

#---------------------------------------------------------------------------
#challenge2

user_word = input("Enter a word: ")
# Create an empty string for the result.
new_word = ""


for letter in user_word:
  
    if not new_word or letter != new_word[-1]:
       
        new_word += letter


print(f"user's word :{user_word} -> {new_word}")
