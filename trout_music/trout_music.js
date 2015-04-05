var game = new Phaser.Game(1499, 711, Phaser.AUTO, '', { preload: preload, create: create, update: update });

function preload() {
    this.game.scale.pageAlignHorizontally = true;
    this.game.scale.pageAlignVertically = true;
    this.game.scale.refresh();
    
    game.load.spritesheet('fish', 'fish_sound_spritesheet.png', 1499, 711, 12);
    
    game.load.image('info', 'info.png');
    game.load.image('infopage', 'infopage.png');
    
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
    
    
    swimming = game.add.sprite(0, 0, 'fish');
    game.physics.arcade.enable(swimming, Phaser.Physics.ARCADE);
    swimming.body.immovable = true;
    
    music = game.add.audio('sound', 1, true);
    
    music.play('', 0, 3, true);
    low = game.add.audio('low', 1, true);
    high = game.add.audio('high', 1, true);
    
    info = game.add.sprite(0, 0, 'info');
    game.physics.enable(info, Phaser.Physics.ARCADE);
    info.body.immovable = true;
    
    cursors = game.input.keyboard.createCursorKeys();
    ikey = game.input.keyboard.addKey(Phaser.Keyboard.I);
    Xkey = game.input.keyboard.addKey(Phaser.Keyboard.X);
    
    cursors.left.onDown.add(playhigh);
    cursors.right.onDown.add(playlow);
    cursors.left.onUp.add(stophigh);
    cursors.right.onUp.add(stoplow);
    
    swimming.animations.add('fast', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 15, true);
    swimming.animations.add('faster', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 30, true);
    swimming.animations.add('slow', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 10, true);
    swimming.animations.add('moderate', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 15, true);
    swimming.animations.play('moderate');
    
}


function update(){ 
    

    
    swimming.body.velocity.x = 0;
    swimming.body.velocity.y = 0;
    

    
    if (ikey.isDown){
        var infopage = game.add.sprite(0, 0, 'infopage');
        Xkey.onDown.add(closeinfo);
        
        function closeinfo(){
            infopage.kill();
        }
    }   
    
    
    if (cursors.left.isDown) {
        swimming.body.velocity.x = 0;
        swimming.animations.play('faster');
        


    }
    

    
    else if (cursors.right.isDown){
        swimming.body.velocity.x = 0;
        swimming.animations.play('slow');
    }
    
    
    else {

        swimming.animations.play('moderate');
    }
    
}

function playhigh() {
    high.play('', 0, 3, true);
    music.stop('', 0, 3, true);
    low.stop('', 0, 3, true);
    
}

function playlow() {
    low.play('', 0, 3, true);
    music.stop('', 0, 3, true);
    high.stop('', 0, 3, true);
    
}

function stophigh() {
    music.play('', 0, 3, true);
    low.stop('', 0, 3, true);
    high.stop('', 0, 3, true);
}

function stoplow() {
    music.play('', 0, 3, true);
    high.stop('', 0, 3, true);
    low.stop('', 0, 3, true);
}