from menu_item import MenuItem
from menu_manager import MenuManager

def show_user_menu():
    """Displays the user menu and handles user input."""
    while True:
        print("\n--- Program Menu ---")
        print("(V) View an Item")
        print("(A) Add an Item")
        print("(D) Delete an Item")
        print("(U) Update an Item")
        print("(S) Show the Full Menu")
        print("(E) Exit")
        choice = input("Enter your choice: ").upper()

        if choice == 'V':
            item_name = input("Enter the name of the item to view: ")
            item = MenuManager.get_by_name(item_name)
            if item:
                print(f"Found: {item.name}, Price: ${item.price}")
            else:
                print("Item not found.")
        elif choice == 'A':
            add_item_to_menu()
        elif choice == 'D':
            remove_item_from_menu()
        elif choice == 'U':
            update_item_from_menu()
        elif choice == 'S':
            show_restaurant_menu()
        elif choice == 'E':
            print("Final Restaurant Menu:")
            show_restaurant_menu()
            print("Exiting program.")
            break
        else:
            print("Invalid input, please try again.")

def add_item_to_menu():
    """Asks user for item details and adds it to the menu."""
    name = input("Enter the new item's name: ")
    try:
        price = int(input("Enter the new item's price: "))
        item = MenuItem(name, price)
        if item.save():
            print("Item was added successfully.")
        else:
            print("Error adding item.")
    except ValueError:
        print("Invalid price. Please enter a number.")

def remove_item_from_menu():
    """Asks user for an item to remove and deletes it."""
    name = input("Enter the name of the item to remove: ")
    item = MenuItem(name)
    if item.delete():
        print("Item was deleted successfully.")
    else:
        print("Error: Item not found or could not be deleted.")

def update_item_from_menu():
    
    old_name = input("Enter the name of the item to update: ")
    try:
        new_price = int(input("Enter the new price: "))
        new_name = input("Enter the new name: ")
        item_to_update = MenuItem(old_name)
        if item_to_update.update(new_name, new_price):
            print("Item was updated successfully.")
        else:
            print("Error: Item not found or could not be updated.")
    except ValueError:
        print("Invalid price. Please enter a number.")

def show_restaurant_menu():
   
    print("\n--- Restaurant Menu ---")
    items = MenuManager.all_items()
    if not items:
        print("The menu is empty.")
    else:
        for item in items:
            print(f"- {item.name}: ${item.price}")
    print("-----------------------")


# Start the program
if __name__ == "__main__":
    show_user_menu()