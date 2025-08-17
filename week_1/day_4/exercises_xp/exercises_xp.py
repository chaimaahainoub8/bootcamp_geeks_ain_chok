# ------ Exercise 1

class Pets():
    def __init__(self, animals):
        self.animals = animals

    def walk(self):
        for animal in self.animals:
            print(animal.walk())

class Cat():
    is_lazy = True

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def walk(self):
        return f'{self.name} is just walking around'

class Bengal(Cat):
    def sing(self, sounds):
        return f'{sounds}'

class Chartreux(Cat):
    def sing(self, sounds):
        return f'{sounds}'

# -----------------------------------------------------
# Step 1: Create a new class named Siamese that inherits from Cat
# -----------------------------------------------------
class Siamese(Cat):
    pass

# -----------------------------------------------------
# Step 2: Create a list of cat instances
# -----------------------------------------------------
bengal_cat = Bengal('Leo', 3)
chartreux_cat = Chartreux('Misty', 5)
siamese_cat = Siamese('Simba', 2)

all_cats = [bengal_cat, chartreux_cat, siamese_cat]

# -----------------------------------------------------
# Step 3: Create an instance of the Pets class
# -----------------------------------------------------
sara_pets = Pets(all_cats)

# -----------------------------------------------------
# Step 4: Make all the cats walk

sara_pets.walk()

# ------ Exercise 2

#dog_class.py
# Step 1 & 2: Define the Dog class with its attributes and methods
class Dog:
    """
    A class to represent a dog with a name, age, and weight.
    It includes methods for barking, calculating run speed, and fighting.
    """
    # The initializer method to set up a new dog object
    def __init__(self, name, age, weight):
        self.name = name
        self.age = age
        self.weight = weight

    # Method to make the dog bark
    def bark(self):
        return f"{self.name} is barking"

    # Method to calculate the dog's running speed
    def run_speed(self):
        return (self.weight / self.age) * 10

    # Method to simulate a fight with another dog
    def fight(self, other_dog):
        # Calculate the score for this dog (self) and the other dog
        my_score = self.run_speed() * self.weight
        other_dog_score = other_dog.run_speed() * other_dog.weight
        
        # Determine the winner based on the higher score
        if my_score > other_dog_score:
            winner_name = self.name
        else:
            winner_name = other_dog.name
            
        # Return a string announcing the winner
        return f"{winner_name} won the fight!"

# Step 3: Create 3 dog instances
dog1 = Dog("Rex", 5, 30)
dog2 = Dog("Buddy", 3, 25)
dog3 = Dog("Lucy", 7, 20)

# Run them through the class methods and print the results
print("--- Testing the Dogs ---")
print(dog1.bark())
print(dog2.bark())
print(f"{dog3.name}'s running speed is: {dog3.run_speed():.2f}") # Using .2f to format to 2 decimal places

print("\n--- Let the fights begin! ---")
print(f"Fight 1: {dog1.name} vs {dog2.name}")
print(dog1.fight(dog2))

print(f"\nFight 2: {dog1.name} vs {dog3.name}")
print(dog1.fight(dog3))

# ------ Exercise 3

# Import necessary modules
import random
"""from dog_class import Dog # Assuming dog_class.py is in the same folder"""

# Define the new PetDog class that inherits from Dog
class PetDog(Dog):
    def __init__(self, name, age, weight):
        super().__init__(name, age, weight)
        self.trained = False

    def train(self):
        print(self.bark())
        self.trained = True
        print(f"{self.name} is now trained!")

    def play(self, *other_dogs):
        dog_names = ", ".join(other_dogs)
        print(f"{self.name}, {dog_names} all play together")

    def do_a_trick(self):
        if self.trained:
            tricks = [
                f"{self.name} does a barrel roll",
                f"{self.name} stands on his back legs",
                f"{self.name} shakes your hand",
                f"{self.name} plays dead"
            ]
            print(random.choice(tricks))
        else:
            print(f"{self.name} is not trained yet.")


# --- Let's test our new PetDog class ---

# Create a new PetDog instance
my_pet = PetDog("Milo", 2, 8)

# Try to do a trick before training
print(f"--- Attempting a trick with {my_pet.name} (untrained) ---")
my_pet.do_a_trick()

# Now, let's train the dog
print(f"\n--- Training {my_pet.name} ---")
my_pet.train()

# Try to do a trick after training
print(f"\n--- Attempting a trick with {my_pet.name} (trained) ---")
my_pet.do_a_trick()
my_pet.do_a_trick() # Let's try again to see a different trick

# Test the play method
print(f"\n--- Playtime! ---")
my_pet.play("Rex", "Buddy", "Lucy")

# ------ Exercise 4

# Full Code Solution for Exercise 4

class Family:
    """
    A class to represent a family with a last name and a list of members.
    """
    def __init__(self, members, last_name):
        self.members = members
        self.last_name = last_name

    def born(self, **kwargs):
        # Add required keys to the new member's dictionary
        kwargs['is_child'] = True
        # Add the new member to the members list
        self.members.append(kwargs)
        # Print a confirmation message
        print(f"Congratulations to the {self.last_name} family on the birth of {kwargs['name']}!")

    def is_18(self, member_name):
        for member in self.members:
            if member['name'] == member_name:
                return member['age'] >= 18
        print(f"Member '{member_name}' not found in the family.")
        return False

    def family_presentation(self):
        print(f"\nThe {self.last_name} Family:")
        print("--------------------")
        for member in self.members:
            print(f" - Name: {member['name']}, Age: {member['age']}, Gender: {member['gender']}")

# --- Step 3: Create instance and test methods ---

# Initial data
initial_members = [
    {'name': 'Michael', 'age': 35, 'gender': 'Male', 'is_child': False},
    {'name': 'Sarah', 'age': 32, 'gender': 'Female', 'is_child': False}
]

# Create a Family instance
smith_family = Family(initial_members, "Smith")

# Call all the methods
print("--- Initial Family State ---")
smith_family.family_presentation()

print("\n--- Adding a new member ---")
smith_family.born(name='Leo', age=0, gender='Male')

print("\n--- Age Verification ---")
print(f"Is Michael over 18? {smith_family.is_18('Michael')}")
print(f"Is Leo over 18? {smith_family.is_18('Leo')}")

print("\n--- Final Family State ---")
smith_family.family_presentation()


# ------ Exercise 5

class TheIncredibles(Family):
    def use_power(self, member_name):
        if not self.is_18(member_name):
            raise ValueError(f"{member_name} is not over 18 years old.")
        
        for member in self.members:
            if member['name'] == member_name:
                print(f"{member['incredible_name']} is using their power: {member['power']}!")
                return

    def incredible_presentation(self):
        print("\n*** Here is our powerful family ***")
        super().family_presentation()

# Create and test an Incredibles instance
incredibles_members = [
    {'name': 'Bob', 'age': 40, 'gender': 'Male', 'is_child': False, 'power': 'Super Strength', 'incredible_name': 'Mr. Incredible'},
    {'name': 'Helen', 'age': 38, 'gender': 'Female', 'is_child': False, 'power': 'Elasticity', 'incredible_name': 'Elastigirl'}
]
incredibles_family = TheIncredibles(incredibles_members, "Incredibles")
incredibles_family.incredible_presentation()

# Add Baby Jack
incredibles_family.born(name='Jack', age=1, gender='Male', power='Unknown Power', incredible_name='Jack-Jack')
incredibles_family.incredible_presentation()

# Test use_power method
print("\n--- Testing Powers ---")
incredibles_family.use_power('Bob')
try:
    incredibles_family.use_power('Jack')
except ValueError as e:
    print(f"Error: {e}")
print("="*40 + "\n")

# ------ Exercise 6

# ------ Exercise 7

# ------ Exercise 8
