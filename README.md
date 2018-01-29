# Free Code Camp Projects
A of projects from http://freecodecamp.com

## Use notes
Add google search API_KEY and CSE_ID to .env for the image-search program

### Development
Run in development with hot module reloading with
```bash
npm start
```
### Production
configure server.js in the root directory run a production build and start the server.
```bash
npm run build && node server.js
```
### Directories
+ **webpack** webpack configuration and development server directory
+ **data** Pouchdb data directory for local-databases
+ **src/app** client side applicaiton container
+ **src/server** server side renderer, api routes
+ **src/projects** Each project has a directory in-here
+ **src/common** files and infornmation shared between applicaitons

### Usefull files
Update these when adding a project
+ **src/projects/portfolio/appData.js** Information about projects, and the routes used by them.
+ **src/projects/common/routes.jsx** Routes used by react router, this file also uses the appData file mentioned above

### Todos
- [x] **bar-chart**
- [x] **calculator**
- [x] **data-globe**
- [x] **dungeon-crawler**
- [x] **file-size** 
- [x] **force-directed**
- [x] **game-of-life**
- [x] **header-parser**
- [x] **heat-map**
- [x] **image-search**
- [x] **leader-board**
- [x] **local-weather**
- [x] **markdown-previewer**
- [x] **pomodoro**
- [x] **portfolio**
- [x] **quote-machine**
- [x] **recipe-box**
- [x] **scatterplot-graph**
- [x] **simon**
- [x] **tic-tac-toe**
- [x] **timestamp**
- [x] **tribute-page**
- [x] **twitch-tv**
- [x] **url-shortener**
- [x] **wikipedia-viewer**
