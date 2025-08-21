# ------ Challenge 1
from datetime import date

birthdate_str = input("Enter your birthdate (DD/MM/YYYY): ")

day = int(birthdate_str[0:2])
month = int(birthdate_str[3:5])
year = int(birthdate_str[6:10])

today = date.today()
age = today.year - year - ((today.month, today.day) < (month, day))

last_digit_of_age = age % 10

candles = "i" * last_digit_of_age

cake = f"""
    __{candles}__
    |:H:a:p:p:y:|
  __|___________|__
 |^^^^^^^^^^^^^^^^^|
 |:B:i:r:t:h:d:a:y:|
 |                 |
 ~~~~~~~~~~~~~~~~~~~
"""

is_leap = False
if (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0):
    is_leap = True

if is_leap:
    print(cake)
    print(cake)
else:
    print(cake)

# ------ Challenge 2

