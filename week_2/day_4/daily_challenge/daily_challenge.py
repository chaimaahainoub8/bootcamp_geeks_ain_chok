import requests
import random
import sqlite3

def fetch_and_store_countries():
    """
    Fonction principale pour récupérer les données de l'API, 
    sélectionner 10 pays au hasard et les stocker en base de données.
    """
    
    # --- 1. Récupérer les données de l'API ---
    api_url = "https://restcountries.com/v3.1/all?fields=name,capital,flag,subregion,population"
    try:
        response = requests.get(api_url)
        response.raise_for_status()  # Lève une exception pour les codes d'erreur HTTP
        all_countries = response.json()
        print(f"🌍 {len(all_countries)} pays récupérés avec succès !")
    except requests.exceptions.RequestException as e:
        print(f"❌ Erreur API : {e}")
        return

    # --- 2. Sélectionner 10 pays au hasard ---
    if not all_countries:
        print("Aucun pays à traiter.")
        return
        
    random.shuffle(all_countries)
    random_countries = all_countries[:10]
    print(f"🎲 Sélection de {len(random_countries)} pays au hasard.")

    # --- 3. & 4. Connexion et insertion en base de données ---
    try:
        conn = sqlite3.connect('countries.db')
        cursor = conn.cursor()

        # Création de la table
        cursor.execute('''
            CREATE TABLE IF NOT EXISTS countries (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL UNIQUE,
                capital TEXT,
                flag TEXT,
                subregion TEXT,
                population INTEGER
            )
        ''')

        # Insertion des pays
        for country in random_countries:
            name = country.get('name', {}).get('common', 'N/A')
            capital_list = country.get('capital', [])
            capital = capital_list[0] if capital_list else 'N/A'
            flag = country.get('flag', 'N/A')
            subregion = country.get('subregion', 'N/A')
            population = country.get('population', 0)
            
            # On insère ou on ignore si le nom du pays existe déjà (grâce à UNIQUE)
            cursor.execute('''
                INSERT OR IGNORE INTO countries (name, capital, flag, subregion, population)
                VALUES (?, ?, ?, ?, ?)
            ''', (name, capital, flag, subregion, population))
        
        conn.commit()
        print("✅ Opération terminée avec succès. Les pays ont été ajoutés à 'countries.db'.")

    except sqlite3.Error as e:
        print(f"❌ Erreur de base de données : {e}")
    finally:
        if conn:
            conn.close()

# Lancer le script
if __name__ == "__main__":
    fetch_and_store_countries()