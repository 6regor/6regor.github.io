var game = new Phaser.Game(1499, 711, Phaser.AUTO, '', { preload: preload, create: create, update: update });

function preload() {
    this.game.scale.pageAlignHorizontally = true;
    this.game.scale.pageAlignVertically = true;
    this.game.scale.refresh();
    
    game.load.spritesheet('fish', 'fish_sound_spritesheet.png', 1499, 711, 12);
    
    game.load.audio('sound', [ 'trout_music_audio.mp3', 'trout_music_audio.ogg' ]);
    game.load.audio('low', [ 'trout_low.mp3', 'trout_low.ogg' ]);
    game.load.audio('high', [ 'trout_high.mp3', 'trout_high.ogg' ]);
}

var swimming;
var cursors;
var ikey;
var skey;
var music;
var low;
var high;

function create() {
    
    music = game.add.audio('sound', 1, true);
    low = game.add.audio('low', 1, true);
    high = game.add.audio('high', 1, true);
    
    swimming = game.add.sprite(0, 0, 'fish');
    game.physics.arcade.enable(swimming, Phaser.Physics.ARCADE);
    swimming.body.immovable = true;
    
    
    cursors = game.input.keyboard.createCursorKeys();
    ikey = game.input.keyboard.addKey(Phaser.Keyboard.I);
    skey = game.input.keyboard.addKey(Phaser.Keyboard.S);
    
    swimming.animations.add('fast', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 15, true);
    swimming.animations.add('faster', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 30, true);
    swimming.animations.add('slow', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 10, true);
    swimming.animations.add('moderate', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 15, true);
    swimming.animations.play('moderate');
    
}


function update(){ 
    

    
    swimming.body.velocity.x = 0;
    swimming.body.velocity.y = 0;
    
    if (cursors.left.isDown) {
        music.stop('', 0, 3, true);
        low.stop('', 0, 3, true);
        swimming.body.velocity.x = 0;
        swimming.animations.play('faster');
        high.play('', 0, 3, true);


    }
    
    
    
    else if (cursors.right.isDown){
        music.stop('', 0, 3, true);
        high.stop('', 0, 3, true);
        swimming.body.velocity.x = 0;
        swimming.animations.play('slow');
        low.play('', 0, 3, true);
    }
    
    
    else {
        high.stop('', 0, 3, true);
        low.stop('', 0, 3, true);
        swimming.animations.play('moderate');
        music.play('', 0, 3, true);
    }
    
}