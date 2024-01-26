class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene")
    }

preload() {
    // loading images/sprites

    this.load.image('rocket', './assets/rocket.png')
    this.load.image('spaceship', './assets/spaceship.png')
    this.load.image('superspaceship', './assets/superspaceship.png')
    this.load.image('spaceback', './assets/spaceback.png')
    this.load.image('newstarfield', './assets/newstarfield.png')
    // load audio
    this.load.audio('spacemusic', './assets/spacemusic.wav')
    this.load.audio('sfx-select', './assets/sfx-select.wav')
    this.load.audio('sfx-explosion', './assets/sfx-explosion.wav')
    this.load.audio('sfx-shot', './assets/sfx-shot.wav')
    this.load.audio('sfx-explosion2', './assets/sfx-explosion2.wav')
    this.load.audio('sfx-explosion3', './assets/sfx-explosion3.wav')
    this.load.audio('sfx-explosion4', './assets/sfx-explosion4.wav')
    this.load.audio('sfx-explosion5', './assets/sfx-explosion5.wav')


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
    
        this.spaceback = this.add.tileSprite(0,0, 640, 480, 'spaceback').setOrigin(0, 0)

        // animation configuration
        this.anims.create({
            key: 'explode',
            frames: this.anims.generateFrameNumbers('explosion', { start: 0, end: 9, first: 0}),
            frameRate: 30
    })



        // display score
        let menuConfig = {
            fontFamily: 'Impact',
            fontSize: '35px',
            backgroundColor: '#00FF00',
            color: '#800080',
            align: 'center',
            padding: {
            top: 5,
            bottom: 5,
            },
            fixedWidth: 0
        }
        this.add.text(game.config.width/2, game.config.height/2 -borderUISize - borderPadding, 'ROCKET PATROL', menuConfig).setOrigin(0.5)
        this.add.text(game.config.width/2, game.config.height/2, 'Use <- -> arrows to move & (F) to fire', menuConfig).setOrigin(0.5)
        menuConfig.backgroundColor = '#800080'
        menuConfig.color = '#00FF00'
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
            gameTimer: 30000    
          }
          this.sound.play('sfx-select')
          this.scene.start('playScene')    
        }
        if (Phaser.Input.Keyboard.JustDown(keyRIGHT)) {
          // hard mode
          game.settings = {
            spaceshipSpeed: 6,
            superspaceshipspeed: 8,
            gameTimer: 25000    
          }
          this.sound.play('sfx-select')
          this.scene.start('playScene')    
        }
    }    
} 