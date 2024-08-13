# TO-DO: set text-content of display to 0 upon startup and when AC is clicked

# Functions to populate display when number is pressed
    - Displaying appropriate number variable

# Logic for calculations
1. Store number as first number input, display first number
2. If an operator is clicked, store operator as operator input
3. When another number is pressed, display the new second number
4. If equals is clicked
    1. Call operate function on stored values
    2. Display the result of operate and store it as first number input
5. Else if another operator is clicked
    1. Call operate on current stored values
    2. Store result as first number input and display
    3. Store the operator that was clicked as the operator input

## Side cases
    + User clicks operation first
    + User clicks operation twice before entering num2
    - User users keyboard to enter numbers and operators, including clear (c)
    - Rounding long decimals, to avoid screen overflow
    + If equals is pressed before 2 numbers and an operator are stored
    + Clear should wipe all saved values
    + Handle dividing by 0