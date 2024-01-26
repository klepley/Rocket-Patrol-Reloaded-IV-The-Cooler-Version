//Kaylie Lepley
//Rocket Patrol Reloaded IV: The Cooler Version
//Approx 14 hours

//Mods:
//Track a high score that persists across scenes and display it in the UI (1)
//Implement the 'FIRE' UI text from the original game (1)
//Add your own (copyright-free) looping background music to the Play scene (keep the volume low and be sure that multiple instances of your music don't play when the game restarts) (1)
//Randomize each spaceship's movement direction at the start of each play (1)
//Create a new scrolling tile sprite for the background (1)
//Create 4 new explosion sound effects and randomize which one plays on impact (3)
//Create a new title screen (e.g., new artwork, typography, layout) (3)
//Create a new enemy Spaceship type (w/ new artwork) that's smaller, moves faster, and is worth more points (5)
//Use Phaser's particle emitter to create a particle explosion when the rocket hits the spaceship (5)




let config = {
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    scene: [Menu, Play]
}

let game = new Phaser.Game(config)
let highScore = 0;


// setting UI sizes
let borderUISize = game.config.height / 15
let borderPadding = borderUISize / 3

//reserve keyboard bidnngs
let keyFIRE, keyRESET, keyLEFT, keyRIGHT

