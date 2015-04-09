var game = new Phaser.Game(198, 439, Phaser.CANVAS, '', { preload: preload, create: create, update: update });





function preload() {
    
    this.game.scale.pageAlignHorizontally = true;
    this.game.scale.pageAlignVertically = true;
    this.game.scale.refresh();
    
    game.load.image('infosheet', 'infosheet.png')
    game.load.spritesheet('gregor', 'gregor.png', 198, 439, 11);
    
    game.load.audio('music', [ 'music.mp3', 'music.ogg' ]);
}

var music;

function create() {
    
    
    music = game.add.audio('music', 1, true);
    music.play('', 0, 1, true);

    
    gregor = game.add.sprite(0, 0, 'gregor');
    game.physics.enable(gregor, Phaser.Physics.ARCADE);

    cursors = game.input.keyboard.createCursorKeys();
    ikey = game.input.keyboard.addKey(Phaser.Keyboard.I);
    Xkey = game.input.keyboard.addKey(Phaser.Keyboard.X);
    
     gregor.animations.add('anti', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 7, false, true);
     gregor.animations.add('clock', [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 7, false, true);
    
    
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
        
        
        gregor.animations.play('clock');
        
        
    }

    else if (cursors.right.isDown){
        
        
        gregor.animations.play('anti');
        
    }
    
    else{
        gregor.animations.stop();
    }
}