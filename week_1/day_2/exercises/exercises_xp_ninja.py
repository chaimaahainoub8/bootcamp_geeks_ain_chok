# ------ Exercise 1

manufacturers_string = "Volkswagen, Toyota, Ford Motor, Honda, Chevrolet"
manufacturers_list = manufacturers_string.split(", ")
print(f"There are {len(manufacturers_list)} manufacturers in the list.")
manufacturers_list.sort(reverse=True)
print(manufacturers_list)

count_with_o = 0
for manufacturer in manufacturers_list:
    if "o" in manufacturer.lower():
        count_with_o += 1
print(f"There are {count_with_o} manufacturers with the letter 'o'.")

count_without_i = 0
for manufacturer in manufacturers_list:
    if "i" not in manufacturer.lower():
        count_without_i += 1
print(f"There are {count_without_i} manufacturers without the letter 'i'.")

print("\n--- Bonus 1 ---")
duplicates_list = ["Honda", "Volkswagen", "Toyota", "Ford Motor", "Honda", "Chevrolet", "Toyota"]
no_duplicates_list = list(set(duplicates_list))
print(", ".join(no_duplicates_list))
print(f"There are now {len(no_duplicates_list)} companies in the list.")

print("\n--- Bonus 2 ---")
no_duplicates_list.sort()
reversed_letter_list = []
for company in no_duplicates_list:
    reversed_letter_list.append(company[::-1])
print(reversed_letter_list)


# ------ Exercise 2

def get_full_name(first_name, last_name, middle_name=None):
    first = first_name.strip().capitalize()
    last = last_name.strip().capitalize()
    
    if middle_name:
        middle = middle_name.strip().capitalize()
        return f"{first} {middle} {last}"
    else:
        return f"{first} {last}"


full_name1 = get_full_name(first_name="Houssam", middle_name="Marouane", last_name="Filali")
print(full_name1)

full_name2 = get_full_name(first_name="Salma", last_name="Laouina")
print(full_name2)

full_name3 = get_full_name(first_name="  Ali  ", last_name="Jabir  ")
print(full_name3)


# ------ Exercise 3

MORSE_CODE_DICT = {
    'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.',
    'G': '--.', 'H': '....', 'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..',
    'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.',
    'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-',
    'Y': '-.--', 'Z': '--..', '1': '.----', '2': '..---', '3': '...--',
    '4': '....-', '5': '.....', '6': '-....', '7': '--...', '8': '---..',
    '9': '----.', '0': '-----', ',': '--..--', '.': '.-.-.-', '?': '..--..',
    ' ': '/'
}

def encrypt_to_morse(message):
    encrypted_message = ""
    for char in message.upper():
        if char in MORSE_CODE_DICT:
            encrypted_message += MORSE_CODE_DICT[char] + " "
    return encrypted_message.strip()

def decrypt_from_morse(morse_code):
    morse_code += ' '
    decrypted_message = ""
    morse_char = ""
    
    # Create a reversed dictionary for easy lookup
    MORSE_TO_ENG_DICT = {value: key for key, value in MORSE_CODE_DICT.items()}

    for symbol in morse_code:
        if symbol != ' ':
            morse_char += symbol
        else:
            if morse_char == '/':
                decrypted_message += ' '
            elif morse_char in MORSE_TO_ENG_DICT:
                decrypted_message += MORSE_TO_ENG_DICT[morse_char]
            morse_char = ""
            
    return decrypted_message

# Example Usage
english_text = "Hello World"
morse_result = encrypt_to_morse(english_text)
print(f"Original: {english_text}")
print(f"Morse Code: {morse_result}")

print("-" * 20)

morse_text = ".... . .-.. .-.. --- / .-- --- .-. .-.. -.."
english_result = decrypt_from_morse(morse_text)
print(f"Original: {morse_text}")
print(f"English Text: {english_result}")


# ------ Exercise 4

# ------ Exercise 5

# ------ Exercise 6

# ------ Exercise 7

# ------ Exercise 8
