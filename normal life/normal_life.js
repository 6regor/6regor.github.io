var game = new Phaser.Game(480, 420, Phaser.AUTO, '', { preload: preload, create: create, update: update });

function preload() {
    
    game.load.image('bedroom_background', 'bedroom background.png');
    game.load.image('topleftwall', 'topleftwall.png');
    game.load.image('bottomwall', 'bottomwall.png');
    game.load.image('doortop', 'doortop.png');
    game.load.image('leftwall', 'leftwall.png');
    game.load.image('rightwall', 'rightwall.png');
    game.load.image('toprightwall', 'toprightwall.png');
    game.load.image('computer_screen', 'computer_object.png');
    game.load.spritesheet('me', 'me_spritesheet.png', 48, 48);
    
}

var player;
var cursors;
var TLwall;

function create() {
    
    game.physics.startSystem(Phaser.Physics.ARCADE);
    
    game.add.sprite(0, 0, 'bedroom_background');
    
    
    TLwall = game.add.sprite(0, 0, 'topleftwall');
    TLwall.enableBody = true;





    
    player = game.add.sprite(260, game.world.height - 150, 'me');
    game.physics.arcade.enable(player);
    player.body.collideWorldBounds = true;
    cursors = game.input.keyboard.createCursorKeys();
    
    player.animations.add('left', [3, 4, 3, 5], 13, true);
    player.animations.add('right', [9, 10, 9, 11], 13, true);
    player.animations.add('up', [6, 7, 6, 8], 13, true);
    player.animations.add('down', [0, 1, 0, 2], 13, true);
}

function update() { 
    
    
    player.body.velocity.x = 0;
    player.body.velocity.y = 0;

    if (cursors.left.isDown)
    {
        //  Move to the left
        player.body.velocity.x = -70;
        
        player.animations.play('left');

    }
    else if (cursors.right.isDown)
    {
        //  Move to the right
        player.body.velocity.x = 70;
        
        player.animations.play('right');
    }
    
    
    else if (cursors.up.isDown)
    {
        player.body.velocity.y = -70;
        
        player.animations.play('up');
    }
    else if (cursors.down.isDown)
    {
        player.body.velocity.y = 70;
        
        player.animations.play('down');
    }
    else
    {
        //  Stand still
        player.animations.stop();

    }

}