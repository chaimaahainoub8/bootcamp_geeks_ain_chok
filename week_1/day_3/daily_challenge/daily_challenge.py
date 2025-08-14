class Farm:

    def __init__(self, farm_name):
        self.name = farm_name
        self.animals = {}

    def add_animal(self, animal_type, count = 1):
        if animal_type in self.animals:
            self.animals[animal_type]+=count 
        else:
            self.animals[animal_type]=count
    def get_info(self):
        output = f"{self.name}'s farm \n\n"
        for animal, num in self.animals.items() :
            output+= f"{animal} : {num} \n"
            output+= "\n   E-I-E-I-O!"
            return output
    def get_animal_types(self):
        return sorted(self.animals.keys())    
        
    def get_short_info(self):
        animal_types = self.get_animal_types()

        if len(animal_types) == 0:
            return f"{self.name}'s farm has no animals"
        if len(animal_types) == 1:
            return f"{self.name}'s farm has {animal_types[0]}s."
        all_but_last = ", ".join(animal_types[:-1])
        last_animal = animal_types[-1]
        return f"{self.name}'s farm has {all_but_last} and {last_animal}s."
    

print("--- Testing the Main Methods (Steps 1-5) ---")
macdonald = Farm("McDonald")
macdonald.add_animal('cow', 5)
macdonald.add_animal('sheep') # Uses the default count of 1
macdonald.add_animal('sheep') # Adds another sheep
macdonald.add_animal('goat', 12)
print(macdonald.get_info())

print("\n" + "="*40 + "\n")


print("--- Testing the Bonus Methods (Steps 6-7) ---")
print("Sorted animal types:", macdonald.get_animal_types())
print(macdonald.get_short_info())
class Farm:

    def __init__(self, farm_name):
        self.name = farm_name
        self.animals = {}

    def add_animal(self, animal_type, count = 1):
        if animal_type in self.animals:
            self.animals[animal_type]+=count 
        else:
            self.animals[animal_type]=count
    def get_info(self):
        output = f"{self.name}'s farm \n\n"
        for animal, num in self.animals.items() :
            output+= f"{animal} : {num} \n"
            output+= "\n   E-I-E-I-O!"
            return output
    def get_animal_types(self):
        return sorted(self.animals.keys())    
        
    def get_short_info(self):
        animal_types = self.get_animal_types()

        if len(animal_types) == 0:
            return f"{self.name}'s farm has no animals"
        if len(animal_types) == 1:
            return f"{self.name}'s farm has {animal_types[0]}s."
        all_but_last = ", ".join(animal_types[:-1])
        last_animal = animal_types[-1]
        return f"{self.name}'s farm has {all_but_last} and {last_animal}s."
    

print("--- Testing the Main Methods (Steps 1-5) ---")
macdonald = Farm("McDonald")
macdonald.add_animal('cow', 5)
macdonald.add_animal('sheep') # Uses the default count of 1
macdonald.add_animal('sheep') # Adds another sheep
macdonald.add_animal('goat', 12)
print(macdonald.get_info())

print("\n" + "="*40 + "\n")


print("--- Testing the Bonus Methods (Steps 6-7) ---")
print("Sorted animal types:", macdonald.get_animal_types())
print(macdonald.get_short_info())
