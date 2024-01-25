class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene")
    }

preload() {
    // loading images/sprites

    this.load.image('rocket', './assets/rocket.png')
    this.load.image('spaceship', './assets/spaceship.png')
    this.load.image('superspaceship', './assets/superspaceship.png')
    this.load.image('newstarfield', './assets/newstarfield.png')
    // load audio
    this.load.audio('spacemusic', './assets/spacemusic.wav')
    this.load.audio('sfx-select', './assets/sfx-select.wav')
    this.load.audio('sfx-explosion', './assets/sfx-explosion.wav')
    this.load.audio('sfx-shot', './assets/sfx-shot.wav')

    this.load.spritesheet('particles', './assets/particles.png', {
        frameWidth: 64,
        frameHeight: 32,
        startFrame: 0,
        endFrame: 9
    })

    this.load.spritesheet('explosion', './assets/explosion.png', {
        frameWidth: 64,
        frameHeight: 32,
        startFrame: 0,
        endFrame: 9
    })
}

    create() {
        // animation configuration
        this.anims.create({
            key: 'explode',
            frames: this.anims.generateFrameNumbers('explosion', { start: 0, end: 9, first: 0}),
            frameRate: 30
    })

        //this.add.text(20, 20, "Rocket Patrol Menu")
        //this.scene.start("playScene")


        // display score
        let menuConfig = {
            fontFamily: 'Courier',
            fontSize: '28px',
            backgroundColor: '#F3B141',
            color: '#843605',
            align: 'right',
            padding: {
            top: 5,
            bottom: 5,
            },
            fixedWidth: 0
        }
        this.add.text(game.config.width/2, game.config.height/2 -borderUISize - borderPadding, 'ROCKET PATROL', menuConfig).setOrigin(0.5)
        this.add.text(game.config.width/2, game.config.height/2, 'Use <- -> arrows to move & (F) to fire', menuConfig).setOrigin(0.5)
        menuConfig.backgroundColor = '#00FF00'
        menuConfig.color = '#000'
        this.add.text(game.config.width/2, game.config.height/2 + borderUISize + borderPadding, 'Press <- for Novice or -> for Expert', menuConfig).setOrigin(0.5)

        // define keys
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT)
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT)
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keyLEFT)) {
          // easy mode
          game.settings = {
            spaceshipSpeed: 3,
            superspaceshipspeed: 6,
            gameTimer: 20000    
          }
          this.sound.play('sfx-select')
          this.scene.start('playScene')    
        }
        if (Phaser.Input.Keyboard.JustDown(keyRIGHT)) {
          // hard mode
          game.settings = {
            spaceshipSpeed: 6,
            superspaceshipspeed: 8,
            gameTimer: 10000    
          }
          this.sound.play('sfx-select')
          this.scene.start('playScene')    
        }
    }    
} 