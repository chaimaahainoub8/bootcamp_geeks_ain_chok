# ------ Exercise 1
class Cat:
    def __init__(self,cat_name,cat_age):
        self.name=cat_name
        self.age=cat_age

cat1=Cat("mimi",4)    
cat2=Cat("souzi",5)
cat3=Cat("roro",6)

def find_oldest_cat(*cats):
    oldest_cat= None
    max_age=-1
    for cat in cats:
        if cat.age > max_age :
            max_age = cat.age 
            oldest_cat = cat
    return oldest_cat

oldest= find_oldest_cat(cat1,cat2,cat3)

if oldest:
    print(f"the oldest cat is {oldest.name} and it age is {oldest.age}")        
# ------ Exercise 2

class Dog :
    def __init__(self,name,height):
        self.name = name
        self.height = height

    def bark(self):
        print(f"{self.name} goes woof!!")

    def jump(self):
        jump_height=self.height*2
        print(f"{self.name} jumps {jump_height} cm high !!")

davids_dog=Dog("Rex",50)        

print(f"Davids dog's name is {davids_dog.name} and it is {davids_dog.height} cm tall !!")
davids_dog.bark()
davids_dog.jump()
print("\n" + "="*30 + "\n")

sarahs_dog=Dog("Teacup",20)

print(f"Sarahs dog's name is {sarahs_dog.name} and it is {sarahs_dog.height} cm tall !!")
sarahs_dog.bark()
sarahs_dog.jump()
print("\n" + "="*30 + "\n")

def find_biggest_dog(*dogs):
    if not dogs :
        print("there is no dogs to compare ")
        return
    biggest_dog=dogs[0]
    for current_dog in dogs :
        if current_dog.height>biggest_dog.height:
            biggest_dog=current_dog

    print(f"the biggest dog actually is {biggest_dog.name} with a {biggest_dog.height} heignt tall")

find_biggest_dog(sarahs_dog,davids_dog)

# ------ Exercise 3

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

class Zoo:
    def __init__(self, zoo_name):
        self.name = zoo_name
        self.animals = []
        self.animal_groups = {}

    def add_animal(self, new_animal):
        if new_animal.lower() not in [animal.lower() for animal in self.animals]:
            self.animals.append(new_animal)
            print(f"✅ {new_animal} has been added successfully!")
        else:
            print(f"⚠ {new_animal} is already in the zoo!")

    def sell_animal(self, animal_sold):
        if animal_sold in self.animals:
            self.animals.remove(animal_sold)
            print(f"💰 {animal_sold} has been sold!")
        else:
            print(f"❌ {animal_sold} could not be found!")

    def sort_animals(self):
        if not self.animals:
            print("⚠ No animals to sort!")
            return

        self.animals.sort(key=lambda x: x.lower())
        self.animal_groups.clear()

        group_number = 1
        self.animal_groups[group_number] = [self.animals[0]]

        for i in range(1, len(self.animals)):
            current_animal = self.animals[i]
            previous_animal = self.animals[i - 1]

            if current_animal[0].upper() != previous_animal[0].upper():
                group_number += 1
                self.animal_groups[group_number] = []

            self.animal_groups[group_number].append(current_animal)

        print("✅ Animals have been sorted into groups!")

    def get_groups(self):
        if not self.animal_groups:
            print("⚠ No groups to display! Sort animals first.")
        else:
            print(f"📋 Animal groups in {self.name}:")
            for number, group in self.animal_groups.items():
                print(f"  Group {number}: {', '.join(group)}")


# ================== Example Execution ==================

zoo = Zoo("African Safari")

# Adding animals with different capitalizations
zoo.add_animal("Lion")
zoo.add_animal("Elephant")
zoo.add_animal("Zebra")
zoo.add_animal("lion")     # duplicate, different case
zoo.add_animal("LION")     # duplicate, different case
zoo.add_animal("elephant") # duplicate, different case
zoo.add_animal("Giraffe")
zoo.add_animal("Cheetah")
zoo.add_animal("cheetah")  # duplicate
zoo.add_animal("Tiger")
zoo.add_animal("tiger")    # duplicate

print("\n📜 Current animal list:", zoo.animals)

# Selling an animal
zoo.sell_animal("Zebra")
zoo.sell_animal("Panther")  # not found

print("\n📜 List after selling:", zoo.animals)

# Sorting and grouping
zoo.sort_animals()
zoo.get_groups()


# ------ Exercise 5

# ------ Exercise 6

# ------ Exercise 7

# ------ Exercise 8
