
import math

# ok this is the main class
class Pagination:
    # this is the function that starts everything, the constructor
    # it has default values, cool. items is None and page_size is 10
    def __init__(self, items=None, page_size=10):
        
        # check if the list is empty first
        if items is None:
            self.items = [] # make it an empty list
        else:
            self.items = items # this is the list of stuff like 'a', 'b', 'c'
            
        # save the page size variable
        self.page_size = int(page_size) # make sure its a number not "10"
        
        # this is the current page, always start at 0
        self.current_idx = 0
        
        # now calculate how many pages total
        # first get the length of the list
        total_items = len(self.items)
        
        # use the ceil thing to round up always
        # so 2.5 pages becomes 3 pages. makes sense
        # what if there are no items?
        if total_items > 0:
            self.total_pages = math.ceil(total_items / self.page_size)
        else:
            self.total_pages = 0 # no items means no pages

    # this function gets the items for the page we are on
    def get_visible_items(self):
        # where to start cutting the list
        start = self.current_idx * self.page_size
        # where to stop
        end = start + self.page_size
        
        # this is list slicing, it's like cutting a cake
        return self.items[start:end]

    # this is for the 'next' button
    def next_page(self):
        # check if we are not on the last page
        # total_pages is 7, last index is 6. so less than 6
        if self.current_idx < self.total_pages - 1:
            self.current_idx = self.current_idx + 1 # go to next page
        
        # this is the chaining thing, so i can do p.next_page().next_page()
        return self

    # this is for the 'previous' button
    def previous_page(self):
        # just go back if not on page 0
        if self.current_idx > 0:
            self.current_idx = self.current_idx - 1
        return self # also for chaining

    # go to the first page
    def first_page(self):
        self.current_idx = 0 # easy
        return self

    # go to the last page
    def last_page(self):
        # index is total pages minus 1
        self.current_idx = self.total_pages - 1
        return self

    # this one is a bit tricky
    # user gives page 1, but for me it's index 0
    def go_to_page(self, page_num):
        # so i subtract 1
        the_index = int(page_num) - 1
        
        # check if the number is not crazy, like page 100
        # must be 0 or more, and less than total pages
        if the_index >= 0 and the_index < self.total_pages:
            self.current_idx = the_index
        else:
            # ERROR!!
            # teacher said to use ValueError
            raise ValueError("this page does not exist!!")

    # this is a magic method for the print() function
    def __str__(self):
        # get the items for the current page
        items_on_page = self.get_visible_items()
        
        # put them all in one big string with new lines
        # the '\n' is a new line character
        # this is a list comprehension, a bit confusing but it works
        return "\n".join([str(i) for i in items_on_page])


# --- TESTING MY CODE ---

alphabet = list("abcdefghijklmnopqrstuvwxyz")
# my paginator object, with the alphabet and page size 4
p = Pagination(alphabet, 4)

# test 1
print("--- Test 1: First Page ---")
print(p.get_visible_items()) # should be a,b,c,d

# test 2
p.next_page()
print("\n--- Test 2: Next Page ---")
print(p.get_visible_items()) # should be e,f,g,h

# test 3
p.last_page()
print("\n--- Test 3: Last Page ---")
print(p.get_visible_items()) # should be y,z

# test 4, go to page 7
p.go_to_page(7)
print("\n--- Test 4: Go To Page 7 ---")
print(f"Current page index is {p.current_idx}") # should be 6
print(p.get_visible_items())

# test 5, test the error
print("\n--- Test 5: Test Error ---")
try:
    p.go_to_page(99) # this should fail
except ValueError as err:
    print(f"Caught the error, yay! -> {err}")

# test 6, test the print()
print("\n--- Test 6: Test print() ---")
p.first_page()
print(p) # this should call __str__

# test 7, method chaining
print("\n--- Test 7: Test Chaining ---")
# go to first page, then next, then next again. should be page 3
p.first_page().next_page().next_page()
print(f"After chaining, current page is {p.current_idx + 1}")
print(p.get_visible_items())
