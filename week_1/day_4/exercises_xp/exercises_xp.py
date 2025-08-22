# ------ Exercise 1
print("------------ exercice 1-------------")

class Pets():

    def __init__(self, animals) :
        self.animals = animals

    def walk(self):
        for animal in self.animals:
            print(animal.walk())

class Cat():
    is_lazy =True

    def __init__(self, name, age ):
        self.name = name
        self.age = age 

    def walk(self):
        return f"{self.name} is walking"

class Bengal(Cat):
    def sing(self, sounds) :
        return f"{sounds}"
    
class Chartreux(Cat):
    def sing(self, sounds):
        return f'{sounds}'
    
class Siamese(Cat):
    pass

bengal_cat = Bengal('Leo', 2)
chartreux_cat = Chartreux('Misty', 3)
siamese_cat =Siamese('Zoe', 1)

all_cats =[bengal_cat, chartreux_cat, siamese_cat]


sara_pets = Pets(all_cats)



sara_pets.walk()

print("-"*20)
# ------ Exercise 2
print("------------ exercice 2------------")


class Dog:
    
    def __init__(self, name, age, weight):
        self.name =name
        self.age =age 
        self.weight = weight

   
    def bark(self):
        return f"{self.name} is barking"

    
    def run_speed(self):
        return (self.weight / self.age)*10

    def fight(self, other_dog) :
        self_power = self.run_speed()*self.weight
        other_dog_power = other_dog.run_speed()*other_dog.weight

        if self_power > other_dog_power :
            return f"{self.name} won this fight against {other_dog.name} congrats !!!"
        elif other_dog_power > self_power :
            return f"{other_dog.name} won this fight against {self.name} congrats !!!"
        else :
            return f"It's a tie between {self.name} and {other_dog.name} ..."
        

        """test """
dog1 = Dog("Rex", 5, 30)
dog2 = Dog("Roro", 3, 25)
dog3 = Dog("Zaatout", 7, 20)



print(dog1.bark())
print(dog2.bark())

print(f"{dog1.name}'s running speed is: {dog1.run_speed()}")
print(f"{dog2.name}'s running speed is : {dog2.run_speed()}")

print("-"*20)

print(dog1.fight(dog2))
print(dog2.fight(dog3))

# ------ Exercise 3

print("------------ exercice 3-------------")

import random
class PetDog(Dog):
    def __init__(self, name, age, weight):
        super().__init__(name, age, weight)
        self.trained = False

    def train(self):
        print(self.bark())
        self.trained = True
        print(f"{self.name} is trained . ")

    def play(self,*other_dog_names):
        all_names = ", ".join(other_dog_names)
        print(f"{self.name}, {all_names} all play together")

    def do_a_trick(self) :
        if self.trained:
            tricks = [
                f"{self.name} does a roll " ,
                f"{self.name} stand in his back legs " ,
                f"{self.name} clap his hands " ,
                f"{self.name} plays dead "
            ]

            print(random.choice(tricks))
        else : 
            print(f"{self.name} is not trained yet use train() method asap")

my_pet = PetDog("Lmaati", 4, 28)

print("------trying to do a trick without training ------")
my_pet.do_a_trick()

print(f"\n-----training {my_pet.name}-----")
my_pet.train()

print("\n----- trying to do a trick after training-----")
my_pet.do_a_trick()
my_pet.do_a_trick()


print("\n--- Playing with other dogs---")
my_pet.play("Zaatout","Roro")

# ------ Exercise 4
print("------ exercice 4------")

class Family:
    def __init__(self, members, last_name):
        self.members = members
        self.last_name = last_name

    def born(self, **child_info):
        self.members.append(child_info)
        print(f"Congratulations to the {self.last_name} family on their new , {child_info['name']} !!")

    def is_18(self, member_name) :
        for member in self.members:
            if member['name'] == member_name :
                if member['age']>= 18:
                    return True
                else :
                    return False

        return f"Member '{member_name} not found in the family. "        

    def family_presentation(self):
        print(f"this is the  {self.last_name}")
        for member in self.members:
            print(f"-{member['name']} (Age :{member['age']}, Gender : {member['gender']})")

initial_members = [

    {'name': 'Micheal', 'age': 35 , 'gender' : 'Male' , 'is_child' : False} ,
    {'name': 'Sarah' , 'age': 32, 'gender': 'Female' , 'is_child' : False} 
]

Simon_family = Family(initial_members, "Simon")


print(" A new baby is born !!!")
Simon_family.born(name='John',age=0, gender='Male', is_child=True)

print("\n---Checking ages ---")
print(f"Is Micheal over 18 ? {Simon_family.is_18('Micheal')}")
print(f"Is john over 18 ? {Simon_family.is_18('John')}")

print(f"\n-----{Simon_family.last_name}'s presentation-----")
Simon_family.family_presentation()


# ------ Exercise 5
print("----- exercice 5-------")
class TheIncredibles(Family):
    def __init__(self, members, last_name):
        super().__init__(members, last_name)

    def use_power(self,member_name):
        for member in self.members :
            if member['name'] == member_name:
                if self.is_18(member_name):
                    print(f"{member['name']} power is {member['power']}")
                else :
                    raise Exception(f"{member['name']} is not 18 yo yet")
                return
        print(f"Member '{member_name} not found.")
    
    def incredibles_presentation(self):
        print("\n----- Here is our powerfull family")
        super().family_presentation()

initial_incredibles = [
    {'name': 'Micheal' , 'age' : 35 , 'gender' : 'Male' , 'is_child' : False , 'power' : 'fly' ,'incredible_name' : 'MikeFly' },
    {'name': 'Sarah' , 'age' : 32 , 'gender' : 'Female' , 'is_child' : False , 'power' : 'read minds' ,'incredible_name' : 'Superwomen' }
]     

incredibles_family = TheIncredibles(initial_incredibles, "Incredibles")

incredibles_family.incredibles_presentation()

print("\n---- a incredible baby is born----")
incredibles_family.born(name='baby Jack', age=0, gender = 'Male', power= 'Unknown Power' , incredible_name ='IncrediJack')

incredibles_family.incredibles_presentation()

print("----testing use_power method----")
incredibles_family.use_power('Micheal')

try :
    incredibles_family.use_power('Baby Jack')
except Exception as e : print(f"Caught an error: {e}")    