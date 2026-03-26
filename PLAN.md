# D3: 2040Earth

## Game Design Vision

The goal of the project is to make a game with similar mechanics and vibe to the game 2048. In 2048, the player controls boxes that combine when they have the same value. For my project I would like for the player to be able to pick up a value in a real-world cell and physically have to move into a new cell with the same value as the one they are holding in able to combine them and create a new value.

## Technologies

- TypeScript for most game code, little to no explicit HTML, and all CSS collected in common `style.css` file
- Deno and Vite for building
- GitHub Actions + GitHub Pages for deployment automation

## Assignments

## D3.a: Core Mechanics (token collection and crafting)

Key technical challenge: Can you assemble a map-based user interface using the Leaflet mapping framework?
Key gameplay challenge: Can players collect and craft tokens from nearby locations to finally make one of sufficiently high value?

### Steps

- [x] Create the PLAN.md file
- [ ] Display a leaflet map when the program is run
- [ ] Draw grids on the map of even size (roughly the size of a building)
- [ ] Determine if a cell should be assigned a value and what the value should be (0,1,2,4)
- [ ] Make sure the cells display their assigned value without interaction needed
- [ ] The cells can be clicked to be interacted with
- [ ] Use the sample "luck" function to create token spawning consistancy
- [ ] If two cells are clicked in succession with the same displayed value, the cell that was clicked second will double its value while the cell clicked first will have its value set to 0
- [ ] If a cell has a value of zero, have the cell display nothing
- [ ] Replace main.ts

## D3.b: Globe-spanning gameplay

### Steps

- [ ] Create steps for D3.b
- [ ] Implement simulation for real world moving using arrow keys
- [ ] As movement occurs, cells should continuously load
- [ ] Use earth spanning coordinate system based at null island

## D3.c: Object Persistence

### Steps

- [ ] Create steps for D3.c
- [ ] Apply Flyweight memory saving strategy to save progress through play sessions
- [ ] Use memento to save the value of cells when they go offscreen

## D3.d: Gameplay Across Real World Space and Time

### Steps

- [ ] Complete steps for D3.d
- [ ] Implement real world tracking applied to the game map
- [ ] Browser local storage
- [ ] The player can only access functionality in a cell when physically inside of it
