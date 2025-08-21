# ------ Exercise 1
import math

class Circle:
    def __init__(self, radius=1.0):
        self.radius = radius

    def compute_perimeter(self):
        return 2 * math.pi * self.radius

    def compute_area(self):
        return math.pi * self.radius**2

    def print_definition(self):
        print("A circle is a shape consisting of all points in a plane that are at a given distance from a given point, the centre.")

# Example Usage:
my_circle = Circle(5)
print(f"Radius: {my_circle.radius}")
print(f"Perimeter: {my_circle.compute_perimeter()}")
print(f"Area: {my_circle.compute_area()}")
my_circle.print_definition()

print("-" * 20)

default_circle = Circle()
print(f"Radius: {default_circle.radius}")
print(f"Perimeter: {default_circle.compute_perimeter()}")
print(f"Area: {default_circle.compute_area()}")
default_circle.print_definition()

# ===== Example Execution =====

c1 = Circle()       # Default radius = 1.0
c2 = Circle(5)      # Custom radius = 5




# ------ Exercise 2

import random

class MyList:
    def __init__(self, letters):
        self.letters = letters

    def get_reversed_list(self):
        return self.letters[::-1]

    def get_sorted_list(self):
        return sorted(self.letters)

    def generate_random_list(self):
        return [random.randint(0, 100) for _ in range(len(self.letters))]

# Example Usage:
my_list_obj = MyList(['d', 'a', 'c', 'b', 'f', 'e'])
print(f"Original List: {my_list_obj.letters}")
print(f"Reversed List: {my_list_obj.get_reversed_list()}")
print(f"Sorted List: {my_list_obj.get_sorted_list()}")
print(f"Random Numbers List: {my_list_obj.generate_random_list()}")
print(f"Original list is still unchanged: {my_list_obj.letters}")


# ------ Exercise 3

class MenuManager:
    def __init__(self):
        self.menu = [
            {'name': 'Soup', 'price': 10, 'spice': 'B', 'gluten': False},
            {'name': 'Hamburger', 'price': 15, 'spice': 'A', 'gluten': True},
            {'name': 'Salad', 'price': 18, 'spice': 'A', 'gluten': False},
            {'name': 'French Fries', 'price': 5, 'spice': 'C', 'gluten': False},
            {'name': 'Beef bourguignon', 'price': 25, 'spice': 'B', 'gluten': True},
        ]

    def add_item(self, name, price, spice, gluten):
        new_dish = {
            'name': name,
            'price': price,
            'spice': spice,
            'gluten': gluten
        }
        self.menu.append(new_dish)
        print(f"'{name}' was added to the menu.")


    def update_item(self, name, price, spice, gluten):

        for dish in self.menu:
            if dish['name'] == name:
                dish['price'] = price
                dish['spice'] = spice
                dish['gluten'] = gluten
                print(f"'{name}' was updated.")
                return
        print(f"'{name}' is not in the menu.")

    def remove_item(self, name):
        for i, dish in enumerate(self.menu):
            if dish['name'] == name:
                del self.menu[i]
                print(f"'{name}' was removed from the menu.")
                print("Updated Menu:")
                for item in self.menu:
                    print(item)
                return
        print(f"'{name}' is not in the menu.")

# Example Usage:
manager = MenuManager()

print("--- Initial Menu ---")
for item in manager.menu:
    print(item)
print("-" * 20)


manager.add_item('Pizza', 20, 'B', True)
print("-" * 20)


manager.update_item('Soup', 12, 'C', False)
print("-" * 20)


manager.update_item('Sushi', 30, 'A', False)
print("-" * 20)


manager.remove_item('Hamburger')
print("-" * 20)


manager.remove_item('Pasta')


# ------ Exercise 4

# ------ Exercise 5

# ------ Exercise 6

# ------ Exercise 7

# ------ Exercise 8
