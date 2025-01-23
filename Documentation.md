# CCL1-new

# Game Development Progress Log  

### Day 1:  
- Attempted to create 144 individual `div`s for the objects but realized it didn't suit my needs. Switched to using a template-based approach.  
- Designed and styled the game area using CSS.  
- Created classes and instantiated objects (`miner` and `surfaces`).  
- Encountered an issue where the miner's size was too large.  
- Made the miner moveable.  
- Discovered that the canvas bounds were not working properly, allowing the miner to move outside the canvas.  

---

### Day 2:  
- Fixed the canvas bounds issue (with help from the teacher).  
- Asked the teacher for help with collision detection since the miner could collide with two surfaces simultaneously (struggled with this for a while before seeking help).  
- Added new objects: `gold`, `silver`, and `bombs`.  
- Implemented collision reactions for the new objects:  
  - **Gold/Silver**: Add money.  
  - **Bombs**: Subtract life.  

---

### Day 3:  
- Implemented a start and end page for the game.  
- Styled both the start and end pages.  
- Began implementing a **bomb detection object**:  
  - It moves with the miner.  
  - It is three times the miner's size and activates when the miner collides with a small object.  
  - If a collision with a bomb occurs, the object turns red.  
- Added the **dynamite object**:  
  - Reacts to collisions by increasing its size threefold.  
  - Collides with surfaces to reveal hidden objects beneath them.  

---

### Day 4:  
- Added extra life functionality.  
- Introduced fixed blocks.  
- Implemented a delay for the appearance of the miner and surfaces.  
- Ensured the miner becomes moveable only after the delay.  

---

### Day 5:  
- Began designing three distinct maps for different levels.  
- Updated the item randomization logic:  
  - The number of items now depends on the current level.  
- Started working on **won** and **lost** pages that depend on the game's outcome.  

---

### Day 6:  
- Completed the implementation of the **won** and **lost** pages.  
- Continued troubleshooting the bomb detection functionality.  
- Added sound effects to the game.  
- Implemented a countdown timer:  
  - When the timer reaches zero, the game transitions to the end page.  
- Adjusted the score mechanics:  
  - The max score now varies depending on the level.  
  - Displayed the max score on both the **won** and **lost** pages.  
- Added dynamic quotes to the **won** and **lost** pages based on the game's outcome.  

---

### Day 7:  
- Began drawing game assets:  
  - **Bomb**, **cube**, **heart**, and **miner**.  
- Added a background image for the game.  

---
### Day 8:  
- Break and a little bit of drawing 

---
### Day 9:  
- Break and trying to fix bombdetection.

---

### Day 10:  
- Converted assets into sprites and implemented animations.  
- Added a feature where, after the miner dies, the surface disappears and reappears three times before transitioning to the end page.  

---

### Day 11:  
- Finally fixed the bomb detection functionality (with help). 
