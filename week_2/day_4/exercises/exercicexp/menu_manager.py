from menu_item import get_connection, MenuItem

class MenuManager:
    @classmethod
    def get_by_name(cls, name):
        """Gets a single item from the database by its name."""
        try:
            conn = get_connection()
            cursor = conn.cursor()
            query = "SELECT item_name, item_price FROM Menu_Items WHERE item_name = %s"
            cursor.execute(query, (name,))
            item_data = cursor.fetchone()
            cursor.close()
            conn.close()
            if item_data:
                # Returns a MenuItem object if found
                return MenuItem(item_data[0], item_data[1])
            else:
                # Returns None if not found
                return None
        except Exception as e:
            print(f"Error fetching item by name: {e}")
            return None


    @classmethod
    def all_items(cls):
        """Gets all items from the database."""
        try:
            conn = get_connection()
            cursor = conn.cursor()
            query = "SELECT item_name, item_price FROM Menu_Items"
            cursor.execute(query)
            items_data = cursor.fetchall()
            cursor.close()
            conn.close()
            # Create a list of MenuItem objects
            all_menu_items = [MenuItem(item[0], item[1]) for item in items_data]
            return all_menu_items
        except Exception as e:
            print(f"Error fetching all items: {e}")
            return []