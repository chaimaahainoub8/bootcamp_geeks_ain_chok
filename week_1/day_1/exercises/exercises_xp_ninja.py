# ------ Exercise 1

print(3 <= 3 < 9)
print(3 == 3 == 3)
print(bool(0))
print(bool(5 == "5"))
print(bool(4 == 4) == bool("4" == "4"))
print(bool(bool(None)))

x = (1 == True)
y = (1 == False)
a = True + 4
b = False + 10

print("x is", x)
print("y is", y)
print("a:", a)
print("b:", b)

# ------ Exercise 2

longest_sentence = ""

while True:
    sentence = input("Enter a sentence without the letter 'A' (or type 'quit' to exit): ")

    if sentence.lower() == 'quit':
        break

    if 'a' in sentence.lower() or 'A' in sentence:
        print("You used the letter 'A'. Try again.")
        continue

    if len(sentence) > len(longest_sentence):
        longest_sentence = sentence
        print("Congratulations! You set a new longest sentence.")


# ------ Exercise 3

paragraph = "Python is an amazing language. It is known for its simplicity and readability. Many developers love Python for this reason."

# Basic Analysis
char_count = len(paragraph)
sentence_count = paragraph.count('.') + paragraph.count('!') + paragraph.count('?')
words = paragraph.split()
word_count = len(words)
unique_words = set(words)
unique_word_count = len(unique_words)

# results
print("--- Paragraph Analysis ---")
print(f"Characters: {char_count}")
print(f"Sentences: {sentence_count}")
print(f"Words: {word_count}")
print(f"Unique Words: {unique_word_count}")
print("--------------------------")

# Bonus 
non_whitespace_char_count = len(paragraph.replace(" ", ""))
avg_words_per_sentence = word_count / sentence_count
non_unique_word_count = word_count - unique_word_count

print("--- Bonus Insights ---")
print(f"Non-Whitespace Characters: {non_whitespace_char_count}")
print(f"Average Words per Sentence: {avg_words_per_sentence}")
print(f"Non-Unique (Repeated) Words: {non_unique_word_count}")
print("----------------------")




