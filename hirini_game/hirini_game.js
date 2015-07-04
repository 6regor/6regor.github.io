var game = new Phaser.Game(776, 440, Phaser.AUTO, '', { preload: preload, create: create, update: update });

function preload() {
    this.game.scale.pageAlignHorizontally = true;
    this.game.scale.pageAlignVertically = true;
    this.game.scale.refresh();
    
    game.load.image('background', 'background.png');
    game.load.image('island', 'islands.png');
    game.load.spritesheet('raft', 'raft_sprite.png', 60, 60, 12);
    game.load.image('islandoverlap', 'islandoverlap.png');
    game.load.image('b1', 'b1.png');
    game.load.image('b2', 'b2.png');
    game.load.image('b3', 'b3.png');
    game.load.image('b4', 'b4.png');
    game.load.image('b5', 'b5.png');
    game.load.image('b6', 'b6.png');
    game.load.image('b7', 'b7.png');
    game.load.image('b8', 'b8.png');
    game.load.image('b9', 'b9.png');
    game.load.image('b10', 'b10.png');
    game.load.image('b11', 'b11.png');
    game.load.image('b12', 'b12.png');
    game.load.image('b13', 'b13.png');
    game.load.image('b14', 'b14.png');
    game.load.image('b15', 'b15.png');
    game.load.image('b16', 'b16.png');
    game.load.image('b17', 'b17.png');
    game.load.image('b18', 'b18.png');
    
}

var player;
var cursors;

function create() {
    
    game.add.sprite(0, 0, 'background');
    
    island = game.add.sprite(567, 240, 'island');
    game.physics.enable(island, Phaser.Physics.ARCADE);
    island.body.immovable = true;
    
    b1 = game.add.sprite(0, 0, 'b1');
    game.physics.enable(b1, Phaser.Physics.ARCADE);
    b1.body.immovable = true;
    
    b2 = game.add.sprite(0, 80, 'b2');
    game.physics.enable(b2, Phaser.Physics.ARCADE);
    b2.body.immovable = true;
    
    b3 = game.add.sprite(0, 110, 'b3');
    game.physics.enable(b3, Phaser.Physics.ARCADE);
    b3.body.immovable = true;
    
    b4 = game.add.sprite(0, 145, 'b4');
    game.physics.enable(b4, Phaser.Physics.ARCADE);
    b4.body.immovable = true;
    
    b5 = game.add.sprite(39, 343, 'b5');
    game.physics.enable(b5, Phaser.Physics.ARCADE);
    b5.body.immovable = true;
    
    b6 = game.add.sprite(84, 375, 'b6');
    game.physics.enable(b6, Phaser.Physics.ARCADE);
    b6.body.immovable = true;
    
    b7 = game.add.sprite(147, 403, 'b7');
    game.physics.enable(b7, Phaser.Physics.ARCADE);
    b7.body.immovable = true;
    
    b8 = game.add.sprite(349, 380, 'b8');
    game.physics.enable(b8, Phaser.Physics.ARCADE);
    b8.body.immovable = true;
    
    b9 = game.add.sprite(618, 341, 'b9');
    game.physics.enable(b9, Phaser.Physics.ARCADE);
    b9.body.immovable = true;
    
    b10 = game.add.sprite(658, 319, 'b10');
    game.physics.enable(b10, Phaser.Physics.ARCADE);
    b10.body.immovable = true;
    
    b11 = game.add.sprite(753, 0, 'b11');
    game.physics.enable(b11, Phaser.Physics.ARCADE);
    b11.body.immovable = true;
    
    b12 = game.add.sprite(704, 0, 'b12');
    game.physics.enable(b12, Phaser.Physics.ARCADE);
    b12.body.immovable = true;
    
    b13 = game.add.sprite(661, 0, 'b13');
    game.physics.enable(b13, Phaser.Physics.ARCADE);
    b13.body.immovable = true;
    
    b14 = game.add.sprite(611, 0, 'b14');
    game.physics.enable(b14, Phaser.Physics.ARCADE);
    b14.body.immovable = true;
    
    b15 = game.add.sprite(507, 0, 'b15');
    game.physics.enable(b15, Phaser.Physics.ARCADE);
    b15.body.immovable = true;
    
    b16 = game.add.sprite(392, 0, 'b16');
    game.physics.enable(b16, Phaser.Physics.ARCADE);
    b16.body.immovable = true;
    
    b17 = game.add.sprite(348, 0, 'b17');
    game.physics.enable(b17, Phaser.Physics.ARCADE);
    b17.body.immovable = true;
    
    b18 = game.add.sprite(716, 291, 'b18');
    game.physics.enable(b18, Phaser.Physics.ARCADE);
    b18.body.immovable = true;

    
    player = game.add.sprite(400, game.world.height - 200, 'raft');
    game.physics.arcade.enable(player, Phaser.Physics.ARCADE);
    

    
    cursors = game.input.keyboard.createCursorKeys();
    
    player.animations.add('north', [0, 1, 2, 1], 9, true);
    player.animations.add('east', [3, 4, 5, 4], 9, true);
    player.animations.add('south', [6, 7, 8, 7], 9, true);
    player.animations.add('west', [9, 10, 11, 10], 9, true);
    
}


function update(){ 
    
    game.physics.arcade.collide(island, player);
    game.physics.arcade.collide(b1, player);
    game.physics.arcade.collide(b2, player);
    game.physics.arcade.collide(b3, player);
    game.physics.arcade.collide(b4, player);
    game.physics.arcade.collide(b5, player);
    game.physics.arcade.collide(b5, player);
    game.physics.arcade.collide(b6, player);
    game.physics.arcade.collide(b7, player);
    game.physics.arcade.collide(b8, player);
    game.physics.arcade.collide(b9, player);
    game.physics.arcade.collide(b10, player);
    game.physics.arcade.collide(b11, player);
    game.physics.arcade.collide(b12, player);
    game.physics.arcade.collide(b13, player);
    game.physics.arcade.collide(b14, player);
    game.physics.arcade.collide(b15, player);
    game.physics.arcade.collide(b16, player);
    game.physics.arcade.collide(b17, player);
    game.physics.arcade.collide(b18, player);
    
    player.body.velocity.x = 0;
    player.body.velocity.y = 0;
    player.body.acceleration.x = 200;
    player.body.acceleration.y = -50;


    
    if (cursors.left.isDown){
            player.body.velocity.x = -70;
            player.animations.play('west');
    }
    
    else if (cursors.right.isDown)
    {
            player.body.velocity.x = 70;
            player.animations.play('east');
    }
    
    
    else if (cursors.up.isDown)
    {
            player.body.velocity.y = -70;
            player.animations.play('north');
    }
    
    else if (cursors.down.isDown)
    {
            player.body.velocity.y = 70;
            player.animations.play('south');
    }

    else
    {
        //  Stand still
            player.animations.stop();

    }
}



