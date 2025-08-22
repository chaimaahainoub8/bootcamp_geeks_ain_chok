# ------ Exercise 1
print("------exercice 1------")
class Cat:
    def __init__(self, cat_name, cate_age):
        self.name = cat_name
        self.age = cate_age

cat1 = Cat("Mishmish", 5)
cat2 = Cat("Mazgiti", 8)
cat3 = Cat("Dora", 3)

def find_oldest_cat(cat_list):
    oldest_cat_find =cat_list[0]
    for cat in cat_list:
        if cat.age > oldest_cat_find.age :
            oldest_cat_find = cat

    return oldest_cat_find

cats = [cat1, cat2, cat3]
oldest = find_oldest_cat(cats)

print(f"The oldest cat is {oldest.name}, and is {oldest.age} yo  ")
    
# ------ Exercise 2
print("------ exercice 2 -------")
class Dog:
    def __init__(self,dog_name, dog_height):
        self.name = dog_name
        self.height = dog_height

    def bark(self):
        print(f"{self.name} goes wooooff !!")

    def jump(self):
        jump_height = self.height*2
        print(f"{self.name} jumps {jump_height} cm high !!!")

davids_dog = Dog("Max", 50)
print(f"David's dog is named {davids_dog.name} and is {davids_dog.height}")
davids_dog.bark()                
davids_dog.jump()

print("\n------- the next dog ---------")

sarahs_dog= Dog("Boubi", 20)

print(f"Sarah's dog is named {sarahs_dog.name} and is {sarahs_dog.height}cm")
sarahs_dog.bark()
sarahs_dog.jump()

print("\n-----Caomparison-----\n")

if davids_dog.height > sarahs_dog.height:
    print(f"the bigger dog is {davids_dog.name}")
else : 
    print(f"the bigger dog is {sarahs_dog.name}")    
# ------ Exercise 3
print("------exercice 3------")
class Song :
    def __init__(self,lyrics):
        self.lyrics=lyrics
        return
    def sing_me_a_song(self):
        for line in self.lyrics:
            print(line)

set_fire=Song([
    "I let it fall, my heart "
"And as it fell, you rose to claim it "
"It was dark and I was over "
"Until you saved me "
])
set_fire.sing_me_a_song()

# ------ Exercise 4
print("----- exercice 4 --------")
class Zoo:
    def __init__(self, zoo_name):
        self.name = zoo_name
        self.animals = []
        self.sorted_animals = {}

    def add_animal(self, new_animal):
        if new_animal not in self.animals:
            self.animals.append(new_animal)
            print(f"{new_animal} has been added to the zoo .")
        else : print(f"{new_animal} is already in the zoo .")


    def get_animals(self):
        print(f"\n--- Animals in {self.name}---")
        for animal in self.animals:
            print(f"-{animal}")

    def sell_animal(self, animal_sold):
        if animal_sold in self.animals:
            self.animals.remove(animal_sold)
            print(f"{animal_sold} has been sold")

        else :
            print(f"{animal_sold} was not found in the zoo")

    def sort_animals(self):
        self.animals.sort()
        self.sorted_animals = {}

        for animal in self.animals:
            first_letter = animal[0].upper()

            if first_letter not in self.sorted_animals :
                self.sorted_animals[first_letter] = []

            self.sorted_animals[first_letter].append(animal)
        print("\n Animals have been sorted into groups")

    def get_groups(self):
        print(f"\n --- Animal groups in {self.name}---") 
        for letter, animal_list in self.sorted_animals.items():
            print(f"{letter} : {animal_list}")

print("--- ZOO initializing---")
new_york_zoo = Zoo("New York Zoo")

new_york_zoo.add_animal("Ape")
new_york_zoo.add_animal("Baboon")
new_york_zoo.add_animal("Bear")
new_york_zoo.add_animal("Cat")
new_york_zoo.add_animal("Cougar")
new_york_zoo.add_animal("Eel")
new_york_zoo.add_animal("Emu")

new_york_zoo.get_animals()

new_york_zoo.sell_animal("Cat")
new_york_zoo.sell_animal("Lion")

new_york_zoo.get_animals()

new_york_zoo.sort_animals()
new_york_zoo.get_groups()
