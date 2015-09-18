var game = new Phaser.Game(631, 308, Phaser.AUTO, '', { preload: preload, create: create, update: update });

function preload() {
    this.game.scale.pageAlignHorizontally = true;
    this.game.scale.pageAlignVertically = true;
    this.game.scale.refresh();
    
    game.load.spritesheet('flowingwater', 'flowingwater.png', 631, 308, 4);
    game.load.image('cheese', 'cheesesprite.png');
    
}

var player;
var cursors;

function create() {
    
    
    water = game.add.sprite(0, 0, 'flowingwater');
    game.physics.arcade.enable(water, Phaser.Physics.ARCADE);
    
    player = game.add.sprite(400, game.world.height - 200, 'cheese');
    game.physics.arcade.enable(player, Phaser.Physics.ARCADE);
    
    cursors = game.input.keyboard.createCursorKeys();
    
    water.animations.add('flow', [0, 1, 2, 3], 9, true);
    
}

function update(){ 
    
    water.animations.play('flow');
    
    player.body.velocity.x = 0;
    player.body.velocity.y = 0;
    player.body.acceleration.x = 200;
    player.body.acceleration.y = -50;
    
    if (cursors.left.isDown){
            player.body.velocity.x = -70;
        
    }
    
    else if (cursors.right.isDown)
    {
            player.body.velocity.x = 70;
    }
    
    
    else if (cursors.up.isDown)
    {
            player.body.velocity.y = -70;
    }
    
    else if (cursors.down.isDown)
    {
            player.body.velocity.y = 70;
    }

}