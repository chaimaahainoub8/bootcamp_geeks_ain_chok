# Full Code for the Circle Exercise

import math

class Circle:
    """
    A class that represents a simple circle.
    It can be initialized with either a radius or a diameter.
    It supports addition, comparison, and sorting.
    """
    def __init__(self, radius=None, diameter=None):
        if radius is not None and diameter is not None:
            raise ValueError("Please provide either a radius or a diameter, not both.")
        if radius is not None:
            self.radius = radius
        elif diameter is not None:
            self.radius = diameter / 2
        else:
            raise ValueError("You must provide a radius or a diameter to create a circle.")

    @property
    def diameter(self):
        """Calculates and returns the diameter of the circle."""
        return self.radius * 2

    @property
    def area(self):
        """Computes and returns the circle's area."""
        return math.pi * (self.radius ** 2)

    # --- Dunder Methods ---
    def __str__(self):
        """Returns a user-friendly string representation."""
        return f"Circle with radius: {self.radius:.2f}" # Format to 2 decimal places

    def __repr__(self):
        """Returns an official string representation."""
        return f"Circle(radius={self.radius})"

    def __add__(self, other_circle):
        """Defines the '+' operator. Returns a new Circle."""
        new_radius = self.radius + other_circle.radius
        return Circle(radius=new_radius)

    def __gt__(self, other_circle):
        """Defines the '>' operator (greater than)."""
        return self.radius > other_circle.radius

    def __eq__(self, other_circle):
        """Defines the '==' operator (equal)."""
        return self.radius == other_circle.radius

# ==============================================================================
# --- Testing the Circle Class ---
# ==============================================================================
print("--- Initializing Circles ---")
# Create a circle using radius
c1 = Circle(radius=5)
# Create a circle using diameter
c2 = Circle(diameter=20)

print(f"Circle 1 (c1): {c1}") # Uses __str__
print(f"Circle 2 (c2): {c2}")
print(f"c1 radius: {c1.radius}, c1 diameter: {c1.diameter}, c1 area: {c1.area:.2f}")
print(f"c2 radius: {c2.radius}, c2 diameter: {c2.diameter}, c2 area: {c2.area:.2f}")

print("\n--- Testing Addition ---")
c3 = c1 + c2 # This calls c1.__add__(c2)
print(f"c1 + c2 = New Circle (c3): {c3}")
print(f"c3 has radius {c3.radius}")

print("\n--- Testing Comparisons ---")
print(f"Is c2 > c1? {c2 > c1}") # Calls c2.__gt__(c1) -> True
print(f"Is c1 > c2? {c1 > c2}") # Calls c1.__gt__(c2) -> False
c4 = Circle(radius=10)
print(f"Is c2 == c4? {c2 == c4}") # Calls c2.__eq__(c4) -> True

print("\n--- Testing Sorting ---")
# Create a list of circles in a random order
circles_list = [Circle(radius=8), Circle(radius=2), Circle(diameter=30), Circle(radius=1)]
print("Original list:", circles_list) # Uses __repr__ for items in a list

# Sort the list. Python will use our __gt__ and __eq__ methods to do this.
circles_list.sort()
print("Sorted list:  ", circles_list)


# --- Bonus: Drawing the sorted circles with Turtle ---
# You might need to install turtle if it's not available: pip install PythonTurtle

try:
    import turtle

    print("\n--- Bonus: Drawing the sorted circles ---")
    
    # Setup the screen
    screen = turtle.Screen()
    screen.title("Sorted Circles")
    t = turtle.Turtle()
    t.speed(0) # Fastest speed
    t.hideturtle() # Hide the arrow cursor

    # Move to the starting position
    t.penup()
    t.goto(-200, 0)
    t.pendown()

    # Draw each circle from the sorted list
    for circle_obj in circles_list:
        # The turtle's circle method takes the radius as an argument
        t.circle(circle_obj.radius * 10) # Scale up for better visibility
        # Move to the right to draw the next circle without overlapping
        t.penup()
        t.forward(circle_obj.diameter * 10)
        t.pendown()

    print("Drawing complete. Check the Turtle graphics window.")
    screen.mainloop() # Keep the window open until closed manually

except ImportError:
    print("\nTurtle module not found. Skipping the drawing bonus.")
except Exception as e:
    print(f"\nAn error occurred during turtle drawing: {e}")

