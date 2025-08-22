# ------ Exercise 1
import random 
import time
import os 

class GameOfLife:
    def __init__(self, width, height):
        self.width = width
        self.height = height 
        self.grid = self.create_initial_grid()
        self.next_grid =self.create_initial_grid()

    def create_initial_grid(self):
        grid = []
        for row in range(self.height) :
            grid_row = []
            for col in range(self.width) :
                grid_row.append(random.randint(0,1))
            grid.append(grid_row)
        return grid 

    def print_grid(self):
        os.system('cls'if os.name == 'nt' else 'clear')
        for row in self.grid:
            for cell in row :
                if cell == 1:
                    print("°" , end=" ")
                else :
                    print(" " , end=" ")               
            print()

    def count_live_neighbors(self, row, col):
        live_neighbors =0
        for i in range(-1,2):
            for j in range(-1,2):
                if i == 0 and j == 0:
                    continue
                neighbor_row =(row + i)%self.height
                neighbor_col =(col + j)%self.width 
                live_neighbors += self.grid[neighbor_row][neighbor_col]
        return live_neighbors

    def update_grid(self):
        for row in range(self.height):
            for col in range(self.width):
                cell_state =self.grid[row][col]
                live_neighbors =self.count_live_neighbors(row,col)
                if cell_state == 1 and (live_neighbors < 2 or live_neighbors> 3):
                    self.next_grid[row][col] = 0
                elif cell_state == 0 and live_neighbors == 3 :
                    self.next_grid[row][col] = 1
                else : 
                    self.next_grid[row][col] = cell_state
        self.grid = [row[:] for row in self.next_grid]

    def run_game(self, generations):
        for gen in range(generations) :
            self.print_grid()
            print(f"Generation; {gen + 1}/{generations}")
            self.update_grid()
            time.sleep(0.1)

if __name__ == "__main__" :

    GRID_WIDTH = 40
    GRID_HEIGHT = 20
    GENERATIONS = 100

    game = GameOfLife(GRID_WIDTH, GRID_HEIGHT)
    game.run_game(GENERATIONS)




# ------ Exercise 2

# ------ Exercise 3

# ------ Exercise 4

# ------ Exercise 5

# ------ Exercise 6

# ------ Exercise 7

# ------ Exercise 8
