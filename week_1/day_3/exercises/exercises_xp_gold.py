# ------ Exercise 1
import math

class Circle:
    def __init__(self, radius=1.0):
        self.radius = radius

    def perimeter(self):
        return 2 * math.pi * self.radius

    def area(self):
        return math.pi * (self.radius ** 2)

    def definition(self):
        print("A circle is a shape with all points equidistant from its center.")

# ===== Example Execution =====

c1 = Circle()       # Default radius = 1.0
c2 = Circle(5)      # Custom radius = 5

print("Circle 1:")
print("Radius:", c1.radius)
print("Perimeter:", c1.perimeter())
print("Area:", c1.area())
c1.definition()

print("\nCircle 2:")
print("Radius:", c2.radius)
print("Perimeter:", c2.perimeter())
print("Area:", c2.area())
c2.definition()

# ------ Exercise 2

import random

class MyList:
    def __init__(self, letters):
        self.letters = letters

    def reversed_list(self):
        return self.letters[::-1]

    def sorted_list(self):
        return sorted(self.letters)

    def random_numbers_list(self):
        return [random.randint(0, 100) for _ in range(len(self.letters))]


# ===== Example Execution =====

my_list = MyList(['d', 'a', 'c', 'b', 'e'])

print("Original List:", my_list.letters)
print("Reversed List:", my_list.reversed_list())
print("Sorted List:", my_list.sorted_list())
print("Random Numbers List:", my_list.random_numbers_list())


# ------ Exercise 3

class MenuManager:
    def __init__(self):
        self.menu = [
            {'name': 'Soup', 'price': 10, 'spice': 'B', 'gluten': False},
            {'name': 'Hamburger', 'price': 15, 'spice': 'A', 'gluten': True},
            {'name': 'Salad', 'price': 18, 'spice': 'A', 'gluten': False},
            {'name': 'French Fries', 'price': 5, 'spice': 'C', 'gluten': False},
            {'name': 'Beef Bourguignon', 'price': 25, 'spice': 'B', 'gluten': True}
        ]

    def add_item(self, name, price, spice, gluten):
        new_dish = {'name': name, 'price': price, 'spice': spice, 'gluten': gluten}
        self.menu.append(new_dish)
        print(f"The dish '{name}' has been added to the menu.")

    def update_item(self, name, price, spice, gluten):
        dish_found = False
        for dish in self.menu:
            if dish['name'] == name:
                dish['price'] = price
                dish['spice'] = spice
                dish['gluten'] = gluten
                dish_found = True
                print(f"The dish '{name}' has been updated.")
                break
        if not dish_found:
            print(f"Warning: The dish '{name}' is not in the menu.")

    def remove_item(self, name):
        dish_to_remove = None
        for dish in self.menu:
            if dish['name'] == name:
                dish_to_remove = dish
                break
        if dish_to_remove:
            self.menu.remove(dish_to_remove)
            print(f"The dish '{name}' has been removed.")
            print("Here is the updated menu:")
            print(self.menu)
        else:
            print(f"Warning: The dish '{name}' is not in the menu.")


# Example usage
restaurant_menu = MenuManager()

print("--- Initial Menu ---")
print(restaurant_menu.menu)
print("\n")

print("--- Adding a dish ---")
restaurant_menu.add_item('Pizza', 20, 'A', True)
print(restaurant_menu.menu)
print("\n")

print("--- Updating a dish ---")
restaurant_menu.update_item('Soup', 12, 'C', False)
print(restaurant_menu.menu)
print("\n")

print("--- Trying to update a dish that does not exist ---")
restaurant_menu.update_item('Paella', 30, 'B', False)
print("\n")

print("--- Removing a dish ---")
restaurant_menu.remove_item('French Fries')
print("\n")

print("--- Trying to remove a dish that does not exist ---")
restaurant_menu.remove_item('Lasagna')


# ------ Exercise 4

# ------ Exercise 5

# ------ Exercise 6

# ------ Exercise 7

# ------ Exercise 8
