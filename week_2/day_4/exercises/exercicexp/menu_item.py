import psycopg2

# --- IMPORTANT: CHANGE THESE DETAILS TO MATCH YOUR DATABASE ---
DB_NAME = "restaurant"
DB_USER = "postgres"
DB_PASS = "16092000"
DB_HOST = "localhost"
DB_PORT = "5432"
# -------------------------------------------------------------

def get_connection():
    """Helper function to connect to the database."""
    return psycopg2.connect(
        dbname=DB_NAME, user=DB_USER, password=DB_PASS, host=DB_HOST, port=DB_PORT
    )

class MenuItem:
    def __init__(self, name, price=0):
        self.name = name
        self.price = price

    def save(self):
        """Saves the item to the database."""
        try:
            conn = get_connection()
            cursor = conn.cursor()
            query = "INSERT INTO Menu_Items (item_name, item_price) VALUES (%s, %s)"
            cursor.execute(query, (self.name, self.price))
            conn.commit()
            cursor.close()
            conn.close()
            return True
        except psycopg2.Error as e:
            print(f"Error saving item: {e}")
            return False

    def delete(self):
        """Deletes the item from the database by name."""
        try:
            conn = get_connection()
            cursor = conn.cursor()
            query = "DELETE FROM Menu_Items WHERE item_name = %s"
            cursor.execute(query, (self.name,))
            conn.commit()
            # Check if any row was actually deleted
            deleted_rows = cursor.rowcount
            cursor.close()
            conn.close()
            return deleted_rows > 0
        except psycopg2.Error as e:
            print(f"Error deleting item: {e}")
            return False

    def update(self, new_name, new_price):
        """Updates the item's name and price in the database."""
        try:
            conn = get_connection()
            cursor = conn.cursor()
            query = "UPDATE Menu_Items SET item_name = %s, item_price = %s WHERE item_name = %s"
            cursor.execute(query, (new_name, new_price, self.name))
            conn.commit()
            # Check if any row was actually updated
            updated_rows = cursor.rowcount
            cursor.close()
            conn.close()
            return updated_rows > 0
        except psycopg2.Error as e:
            print(f"Error updating item: {e}")
            return False