//HS (1) d
//Music (1) d
//Fire UI (1) d
//New background (1) d
//Randomize movement (1) d
//New enemy spaceship (5) d
//New title screem (3)
//4 new explosion effects (3)
//Particle Emiter (5) d

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

