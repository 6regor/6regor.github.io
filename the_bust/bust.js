var game = new Phaser.Game(184, 196, Phaser.CANVAS, '', { preload: preload, create: create, update: update });





function preload() {
    
    this.preloadBar = game.add.graphics(0, 50);
    this.preloadBar.lineStyle(3, 0xffffff, 1);
    this.preloadBar.moveTo(0, 0);
    this.preloadBar.lineTo(game.width, 0);
    
    this.preloadBar.scale.x = 0; // set the bar to the beginning position



    this.game.scale.pageAlignHorizontally = true;
    this.game.scale.pageAlignVertically = true;
    this.game.scale.refresh();
    
    game.load.image('infosheet', 'infosheet.png')
    game.load.spritesheet('bust', 'bust_spritesheet.png', 184, 196, 16);
    
    game.load.audio('music', [ 'bust_music.mp3', 'bust_music.ogg' ]);
}

function loadUpdate() {
  // every frame during loading, set the scale.x of the bar to the progress (an integer between 0
  // and 100) divided by 100 to give a float between 0 and 1
  this.preloadBar.scale.x = game.load.progress * 0.01;
}

var music;

function create() {
    
    music = game.add.audio('music', 1, true);
    music.play('', 0, 0.5, true);

    
    bust = game.add.sprite(0, 0, 'bust');
    game.physics.enable(bust, Phaser.Physics.ARCADE);

    cursors = game.input.keyboard.createCursorKeys();
    ikey = game.input.keyboard.addKey(Phaser.Keyboard.I);
    Xkey = game.input.keyboard.addKey(Phaser.Keyboard.X);
    
     bust.animations.add('clock', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 7, true, true);
     bust.animations.add('anti', [15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 7, true, true);
    
    
}

function update(){ 
    
    if (ikey.isDown){
        var infosheet = game.add.sprite(0, 0, 'infosheet');
        Xkey.onDown.add(closeinfo);
        
        function closeinfo(){
            infosheet.kill();
        }
    }

    if (cursors.left.isDown){
        
        
        bust.animations.play('clock');
        
    }

    else if (cursors.right.isDown){
        
        
        bust.animations.play('anti');
        
    }
    
    else{
        bust.animations.stop();
    }
}