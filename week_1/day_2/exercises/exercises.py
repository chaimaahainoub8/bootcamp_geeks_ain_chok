# ------ Exercise 1
keys=['ten','twenty','thirty']
values =[10,20,30]

result_dict = dict(zip(keys,values))

print(result_dict)
# ------ Exercise 2
family = {"rick": 43, "beth": 13, "morty": 5, "summer": 8}

total_cost = 0
print("Individual ticket prices:")

# Loop through each family member in the dictionary
for name, age in family.items():
    cost = 0
    # Determine the cost 
    if age < 3:
        cost = 0
    elif 3 <= age <= 12:
        cost = 10
    else: 
        cost = 15
    
    # Print the cost for family member 
    print(f"- {name.capitalize()}'s ticket is ${cost}.")
    
    # calcul the total
    total_cost += cost

# Print final total cost 
print(f"\nThe family's total cost for the movies is ${total_cost}.")

# ------ Exercise 3
brand = {
    "name": "Zara",
    "creation_date": 1975,
    "creator_name": "Amancio Ortega Gaona",
    "type_of_clothes": ["men", "women", "children", "home"],
    "international_competitors": ["Gap", "H&M", "Benetton"],
    "number_stores": 7000,
    "major_color": {
        "France": "blue",
        "Spain": "red",
        "US": ["pink", "green"]
    }
}

# Step 2: Change the number of stores to 2.
brand["number_stores"] = 2
print(f"2. Number of stores changed to: {brand['number_stores']}")

# Step 3: Use the key `type_of_clothes` to print a sentence.
client_types = ", ".join(brand["type_of_clothes"])
print(f"3. Zara's clients are {client_types}.")

# Step 4: Add a new key `country_creation` with a value of "Spain".
brand["country_creation"] = "Spain"
print(f"4. Added 'country_creation': {brand['country_creation']}")

# Step 5: Check for `international_competitors` and add "Desigual".
if "international_competitors" in brand:
    brand["international_competitors"].append("Desigual")
print(f"5. Competitors list updated: {brand['international_competitors']}")

# Step 6: Delete the information about the date of creation.
del brand["creation_date"]
print(f"6. 'creation_date' key deleted. Current keys: {list(brand.keys())}")

# Step 7: Print the last international competitor.
last_competitor = brand["international_competitors"][-1]
print(f"7. The last international competitor is: {last_competitor}")

# Step 8: Print the major clothes colors in the US.
us_colors = brand["major_color"]["US"]
print(f"8. Major colors in the US are: {us_colors}")

# Step 9: Print the amount of key-value pairs (length of the dictionary).
num_key_value_pairs = len(brand)
print(f"9. The dictionary has {num_key_value_pairs} key-value pairs.")

# Step 10: Print the keys of the dictionary.
print(f"10. The keys of the dictionary are: {list(brand.keys())}")

# Step 11: Create another dictionary called `more_on_zara`.
more_on_zara = {
    "creation_date": 1975,
    "number_stores": 10000
}
print(f"11. Created `more_on_zara` dictionary: {more_on_zara}")

# Step 12: Use a method to add the information from `more_on_zara` to `brand`.
brand.update(more_on_zara)
print("12. `brand` dictionary has been updated.")

# Step 13: Print the value of the key `number_stores`. What just happened?
print(f"13. The current value of 'number_stores' is: {brand['number_stores']}")

# ------ Exercise 4
def describe_city(city, country="Iceland"):
    """Prints a simple sentence describing a city and its country."""
    print(f"{city.capitalize()} is in {country.capitalize()}.")


print("--- Calling the function with different arguments ---")

#1: Provide both city and country. This will override the default value.
describe_city("Paris", "France")

#2: Provide only the city. The default country "Iceland" will be used.
describe_city("london")

#3: Another example using the default country.
describe_city("new york")

#4: Another example with a specific country.
describe_city("Tokyo", "Japan")

# ------ Exercise 5



# ------ Exercise 6

# ------ Exercise 7

# ------ Exercise 8
