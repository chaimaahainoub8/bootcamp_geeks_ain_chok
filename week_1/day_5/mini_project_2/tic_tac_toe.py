
board = [' ' for _ in range(9)]
current_player = 'X'
game_over = False

def display_board():

    print("-" * 11)
    print(f"| {board[0]} | {board[1]} | {board[2]} |")
    print("-" * 11)
    print(f"| {board[3]} | {board[4]} | {board[5]} |")
    print("-" * 11)
    print(f"| {board[6]} | {board[7]} | {board[8]} |")
    print("-" * 11)

def player_input():
    global current_player

    while True:
        try:
            position = int(input(f"Player {current_player}, enter a number from 1-9: ")) - 1
            # Check if the position is valid and the space is empty
            if 0 <= position < 9 and board[position] == ' ':
                board[position] = current_player
                break
            else:
                print("This position is taken or invalid. Please choose another one.")
        except ValueError:
            print("Invalid input. Please enter a number from 1-9.")

def check_win():
    global game_over

    winning_combinations = [
        (0, 1, 2), (3, 4, 5), (6, 7, 8),  # Rows
        (0, 3, 6), (1, 4, 7), (2, 5, 8),  # Columns
        (0, 4, 8), (2, 4, 6)             # Diagonals
    ]
    for combo in winning_combinations:
        if board[combo[0]] == board[combo[1]] == board[combo[2]] != ' ':
            print(f"Player {current_player} wins! 🎉")
            game_over = True
            return
        
    if ' ' not in board:
        print("It's a tie! 🤝")
        game_over = True
        return


def switch_player():
    global current_player
    if current_player == 'X':
        current_player = 'O'
    else:
        current_player = 'X'

def play_game():
    global game_over
    while not game_over:
        display_board()
        player_input()
        check_win()
        if not game_over:
            switch_player()
    display_board()

play_game()