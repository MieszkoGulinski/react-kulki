# Rules
A logic game where:
- we have a 9 x 9 grid with colorful balls, balls have 5, 7 or 9 colors available
- when the game starts, the player gets 5 balls in random locations, in random colors
- the player can move a ball to another cell if other balls don't block the path
- after a move that doesn't result in 5 (or more) balls of identical color in series, in a row, column or diagonally, 3 more balls appear (in random positions unless occupied by another ball, with random colors)
- if a move results in a series of 5 (or more) balls having identical color, these balls disappear, and player's score counter is increased
- the game ends when the grid is completely filled

# Build and run
Commands:
`npm install` - install JS packages
`npm run watch` - build and watch development version
`npm run build` - build production version
`npm install -g http-server` - install server allowing viewing the page on localhost
`http-server` - start the server on localhost

Files build/bundle.js and build/style.css are built by Webpack - but they need to be commited to Git, because they need to be available on the website (they're imported in index.html).

# Why?
This is a clone of an already existing game, built with JavaScript, React and Redux.
