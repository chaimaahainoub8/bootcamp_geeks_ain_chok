# game.py

import random

class Game:
    def __init__(self):
        """
        This is the constructor method. It runs automatically when a new Game object is created.
        We can initialize game properties here if needed, but for this simple game, it's not required.
        """
        pass

    def get_user_item(self):
        """
        Prompts the user to choose rock, paper, or scissors and validates the input.
        It will keep asking until a valid choice is made.
        """
        valid_choices = ['rock', 'paper', 'scissors']
        user_choice = ''
        while user_choice not in valid_choices:
            user_choice = input("Select rock, paper, or scissors: ").lower()
        return user_choice

    def get_computer_item(self):
        """
        Selects a random choice (rock, paper, or scissors) for the computer.
        """
        valid_choices = ['rock', 'paper', 'scissors']
        computer_choice = random.choice(valid_choices)
        return computer_choice

    def get_game_result(self, user_item, computer_item):
        """
        Compares the user's item and the computer's item to determine the winner.
        Returns 'win', 'draw', or 'loss'.
        """
        if user_item == computer_item:
            return 'draw'
        elif (user_item == 'rock' and computer_item == 'scissors') or \
             (user_item == 'scissors' and computer_item == 'paper') or \
             (user_item == 'paper' and computer_item == 'rock'):
            return 'win'
        else:
            return 'loss'

    def play(self):
        """
        Plays a single round of the game.
        It gets choices, determines the result, prints the outcome, and returns the result.
        """
        user_item = self.get_user_item()
        computer_item = self.get_computer_item()
        result = self.get_game_result(user_item, computer_item)

        print(f"You selected {user_item}. The computer selected {computer_item}. You {result}!")

        return result
