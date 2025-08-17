# rock-paper-scissors.py

from game import Game

def get_user_menu_choice():
    """
    Displays the menu and gets the user's choice.
    Validates that the choice is one of the allowed options.
    """
    print("\nMenu:")
    print("(g) Play a new game")
    print("(s) Show scores and quit")
    print("(q) Quit")

    valid_choices = ['g', 's', 'q']
    user_choice = ''
    while user_choice not in valid_choices:
        user_choice = input("Enter your choice (g/s/q): ").lower()
    return user_choice

def print_results(results):
    """
    Prints the game results in a user-friendly format.
    """
    print("\n--- Game Results ---")
    print(f"Wins: {results.get('win', 0)}")
    print(f"Losses: {results.get('loss', 0)}")
    print(f"Draws: {results.get('draw', 0)}")
    print("Thank you for playing!")

def main():
    """
    The main function that runs the game loop.
    """
    game_results = {'win': 0, 'loss': 0, 'draw': 0}
    
    while True:
        choice = get_user_menu_choice()

        if choice == 'g':
            # Create a new Game object and play a round
            new_game = Game()
            result = new_game.play()
            
            # Update the results dictionary
            if result in game_results:
                game_results[result] += 1

        elif choice == 's':
            # Show scores and then exit
            print_results(game_results)
            break

        elif choice == 'q':
            # Quit the game immediately
            print("Goodbye!")
            break

# This line ensures that the main() function is called only when the script is run directly
if __name__ == "__main__":
    main()
