import random

class Game:
    def __init__(self):
        pass

    def get_user_item(self):
        while True:
            user_input = input("Select (r)ock, (p)aper, or (s)cissors: ")
            if user_input in ['r', 'p', 's']:
                return user_input
            else:
                print("Invalid input. Please try again.")

    def get_computer_item(self):
        computer_choice = random.choice(['r', 'p', 's'])
        return computer_choice

    def get_game_result(self, user_item, computer_item):
        if user_item == computer_item:
            return 'draw'
        elif (user_item == 'r' and computer_item == 's') or \
             (user_item == 's' and computer_item == 'p') or \
             (user_item == 'p' and computer_item == 'r'):
            return 'win'
        else:
            return 'loss'

    def play(self):
        user_choice = self.get_user_item()
        computer_choice = self.get_computer_item()
        result = self.get_game_result(user_choice, computer_choice)
        
        print(f"You chose: {user_choice}. The computer chose: {computer_choice}. Result: {result}")
        
        return result
