# TicTacToe
React redux tic-tac-toe game played against an AI using a minimax algorithm on sliding scale of number of times to recuse, resulting in a game where the user may win.

# Components
## Container
Top level element for the app that also contains the redux store.

## Header
Header for the game, see src/main.scss for an example of styling this and child elements

## Board
The board and buttons that make the ui of the game, child elements can be styled using a classnames object.

### props
+ className **string**
+ classnames **object** *with keys "button, _, X, O" which will be passed to child elements*
