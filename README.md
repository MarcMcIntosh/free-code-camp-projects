# Free Code Camp Projects
A of projects from http://freecodecamp.com

## Use notes
Add google search API_KEY and CSE_ID to .env for the image-search program

#### Development
A couchdb or pouchdb-server service should be avaible at http://127.0.0.1:5984
Run in development with hot module reloading with `npm start`

#### Production
configure server.js in the root directory run a production build and start the server.
```bash
npm run build && node server.js
```
### Directories
+ **webpack** webpack configuration and development server directory
+ **data** development data directory for local-databases used by pouchdb-server
+ **src/app** client side applicaiton container
+ **src/server** server side renderer, api routes
+ **src/projects** Each project has a directory in-here
+ **src/common** files and infornmation shared between applicaitons

#### Usefull files
Update these when adding a project
+ **src/projects/portfolio/appData.js** Information about projects, and the routes used by them.
+ **src/projects/common/routes.jsx** Routes used by react router, this file also uses the appData file mentioned above

### Todos

#### Basic Front End Development Projects
 - [x] **tribute-page** [Build a Tribute Page](https://www.freecodecamp.org/challenges/build-a-tribute-page)
 - [x] **portfolio** [Build a Personal Portfolio Webpage](https://www.freecodecamp.org/challenges/build-a-personal-portfolio-webpage)

#### Intermediate Front End Development Projects
 - [x] **local-weather** [Show the Local Weather](https://www.freecodecamp.org/challenges/show-the-local-weather)
 - [x] **quote-machine** [Build a Random Quote Machine](https://www.freecodecamp.org/challenges/build-a-random-quote-machine)
 - [x] **wikipedia-viewer** [Build a Wikipedia Viewer](https://www.freecodecamp.org/challenges/build-a-wikipedia-viewer)
 - [x] **twitch-tv** [Use the Twitch.tv JSON API](https://www.freecodecamp.org/challenges/use-the-twitchtv-json-api)

#### Advanced Front End Development Projects
 - [x] **calculator** [Build a JavaScript Calculator](https://www.freecodecamp.org/challenges/build-a-javascript-calculator)
 - [x] **pomodoro** [Build a Pomodoro Clock](https://www.freecodecamp.org/challenges/build-a-pomodoro-clock)
 - [x] **tic-tac-toe** [Build a Tic Tac Toe Game](https://www.freecodecamp.org/challenges/build-a-tic-tac-toe-game)
 - [x] **simon** [Build a Simon Game](https://www.freecodecamp.org/challenges/build-a-simon-game)

#### React Projects
 - [x] **dungeon-crawler** [Build a Roguelike Dungeon Crawler Game](https://www.freecodecamp.org/challenges/build-a-roguelike-dungeon-crawler-game)
 - [x] **game-of-life** [Build the Game of Life](https://www.freecodecamp.org/challenges/build-the-game-of-life)
 - [x] **leader-board** [Build a Camper Leaderboard](https://www.freecodecamp.org/challenges/build-a-camper-leaderboard)
 - [x] **recipe-box** [Build a Recipe Box](https://www.freecodecamp.org/challenges/build-a-recipe-box)
 - [x] **markdown-previewer** [Build a Markdown Previewer](https://www.freecodecamp.org/challenges/build-a-markdown-previewer)

#### Data Visualization Projects
 - [x] **bar-chart** [Visualize Data with a Bar Chart](https://www.freecodecamp.org/challenges/map-data-across-the-globe)
 - [x] **data-globe**  [Map Data Across the Globe](https://www.freecodecamp.org/challenges/map-data-across-the-globe)
 - [x] **force-directed** [Show National Contiguity with a Force Directed Graph](https://www.freecodecamp.org/challenges/show-national-contiguity-with-a-force-directed-graph)
 - [x] **heat-map** [Visualize Data with a Heat Map](https://www.freecodecamp.org/challenges/visualize-data-with-a-heat-map)
 - [x] **scatterplot-graph** [Visualize Data with a Scatterplot Graph](https://www.freecodecamp.org/challenges/visualize-data-with-a-scatterplot-graph)

#### API Projects
 - [x] **file-size** [File Metadata Microservice](https://www.freecodecamp.org/challenges/file-metadata-microservice)
 - [x] **header-parser** [Request Header Parser Microservice](https://www.freecodecamp.org/challenges/timestamp-microservice)
 - [x] **image-search** [Image Search Abstraction Layer](https://www.freecodecamp.org/challenges/image-search-abstraction-layer)
 - [x] **timestamp** [Timestamp Microservice](https://www.freecodecamp.org/challenges/timestamp-microservice)
 - [x] **url-shortener** [URL Shortener Microservice](https://www.freecodecamp.org/challenges/url-shortener-microservice)

#### Dynamic Web Application Projects
 - [ ] **voting** [Build a Voting App](https://www.freecodecamp.org/challenges/build-a-voting-app)
 - [ ] **nightlife-coordination** [Build a Nightlife Coordination App](https://www.freecodecamp.org/challenges/build-a-nightlife-coordination-app)
 - [ ] **stock-market-charts** [Chart the Stock Market](https://www.freecodecamp.org/challenges/chart-the-stock-market)
 - [ ] **book-trader** [Manage a Book Trading Club](https://www.freecodecamp.org/challenges/manage-a-book-trading-club)
 - [ ] **not-pintrest** [Build a Pinterest Clone](https://www.freecodecamp.org/challenges/build-a-pinterest-clone)
