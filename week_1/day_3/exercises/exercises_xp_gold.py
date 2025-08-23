# ------ Exercise 1
import math 
class Circle :
    def __init__(self, raduis= 1.0):
        self.raduis = raduis

    def compute_area(self):
        return math.pi*(self.raduis**2)

    def compute_perimeter(self):
        return 2*math.pi*(self.raduis)

    def print_definition(self):
        print("A circle is a set of all points on a plane that are a fixed distance from a central point. This fixed distance is known as the radius.")

my_circle = Circle(5)

area = my_circle.compute_area()
print(f"the area of this circle with raduis = {my_circle.raduis} is : {area:0.2f}")

perimeter = my_circle.compute_perimeter()
print(f"the perimeter of this circle with raduis = {my_circle.raduis} is : {perimeter:0.2f}")

my_circle.print_definition()

print("--- using the default raduis ---")

default_circle = Circle()

default_area = default_circle.compute_area()
print(f"the area of this circle with raduis = {default_circle.raduis} is : {default_area:0.2f}")

# ------ Exercise 2

import random
class MyList :
    def __init__(self, letters):
        self.letters = letters

    def get_reversed_list(self):
        return self.letters[::-1]

    def get_sorted_list(self):
        return sorted(self.letters)

    def genrate_random_list(self):
        return [random.randint(0, 100) for _ in range(len(self.letters))]


my_letter_list = ['d', 'a', 'c', 'b','f', 'e', 'x', 'r', 'k']

custom_list = MyList(my_letter_list)

reversed_list = custom_list.get_reversed_list()
print(f"Original list : {custom_list.letters}")
print(f"Reversed list : {reversed_list}")

sorted_list = custom_list.get_sorted_list()
print(f"Sorted list : {sorted_list}")

random_numbers = custom_list.genrate_random_list()
print(f"Random numbers list : {random_numbers}")

# ------ Exercise 3

class MenuManager :
    
    def __init__(self):
        self.menu =[
            {'name' : 'Soup' , 'price' : 10 ,'spice_level' : 'B' , 'gluten' : False },
            {'name' : 'Hamburger' , 'price' : 15 ,'spice_level' : 'A' , 'gluten' : True },
            {'name' : 'Salad' , 'price' : 18 ,'spice_level' : 'A' , 'gluten' : False },
            {'name' : 'French Fries' , 'price' : 5 ,'spice_level' : 'C' , 'gluten' : False },
            {'name' : 'Beef bourguignon' , 'price' : 25 ,'spice_level' : 'B' , 'gluten' : True },
        ]

    def add_item(self, name, price, spice, gluten):
        new_dish={'name' : name ,'price' : price , 'spice_level' : spice , 'gluten' : gluten }
        self.menu.append(new_dish)
        print(f"'{name}' has been added to our menu")

    def update_item(self, name, price, spice, gluten) :
        for dish in self.menu:
            if dish['name'] == name:
                dish['price'] = price
                dish['spice_level'] = spice
                dish['gluten'] = gluten
                print(f"'{name}' has been updated !!")
                return 

        print(f"Error {name} is not in the menu")

    def remove_item(self, name) :
        for dish in self.menu :
            if dish['name'] == name:
                self.menu.remove(dish)
                print(f"'{name}' has been removed from our menu !!") 
                print("updated Menu")
                print(self.menu)
                return
        print(f"Error: The dish '{name}' is not in the Menu !!")

#using class

restaurant_menu=MenuManager()

print("----INITIAL-MENU----")
print(restaurant_menu.menu)

print("\n----TESTING-ADD----")
restaurant_menu.add_item('Pizza', 20, 'A', True)
print(restaurant_menu.menu)

print("\n----TESTING-UPDATE----")
print("\n----SUCCESFULL-UPDATE----")
restaurant_menu.update_item('Soup', 12, 'C', False)
print(restaurant_menu.menu)
print("\n----FAILURE-UPDATE----")
restaurant_menu.update_item('Fish', 22, 'A', False)

print("\n----TESTING-REMOVE----")
restaurant_menu.remove_item('Hamburger')

print("\n----FINAL-VERSION----")
print(restaurant_menu.menu)