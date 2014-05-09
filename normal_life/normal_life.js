var game = new Phaser.Game(480, 420, Phaser.AUTO, '', { preload: preload, create: create, update: update });

function preload() {
    
    game.load.image('bedroom_background', 'bedroom_background.png');
    game.load.image('topleftwall', 'tpleftwall.png');
    game.load.image('bottomwall', 'bottomwall.png');
    game.load.image('doortop', 'doortop.png');
    game.load.image('leftwall', 'leftwall.png');
    game.load.image('rightwall', 'rightwall.png');
    game.load.image('toprightwall', 'toprightwall.png');
    game.load.image('computer_screen', 'computer_object.png');
    game.load.image('comp_overlap', 'comp_overlap.png');
    game.load.spritesheet('potplant', 'potplant_sprite_sheet.png', 36, 48, 2);
    game.load.image('facebook', 'facebook_screen.png');
    game.load.spritesheet('me', 'me_sprite_sheet.png', 24, 48, 12);
    
}

var player;
var cursors;
var Akey; 
var Zkey;
var Xkey;
var pausegame;
var fbmssg;
var fbook;

function create() {
    
    
    TLwall = game.add.sprite(0, 0, 'topleftwall');
    game.physics.enable(TLwall, Phaser.Physics.ARCADE);
    TLwall.body.immovable = true;
    
    game.add.sprite(0, 0, 'bedroom_background');
    
    plant = game.add.sprite(200, 230, 'potplant');
    game.physics.enable(plant, Phaser.Physics.ARCADE);
    plant.body.drag.x = 500;
    plant.body.drag.y = 500;
    
    

    Bwall = game.add.sprite(0, 360, 'bottomwall');
    game.physics.enable(Bwall, Phaser.Physics.ARCADE);
    Bwall.body.immovable = true;
    
    door = game.add.sprite(330, 56, 'doortop');
    game.physics.enable(door, Phaser.Physics.ARCADE);
    door.body.immovable = true;
    
    Lwall = game.add.sprite(1, 0, 'leftwall');
    game.physics.enable(Lwall, Phaser.Physics.ARCADE);
    Lwall.body.immovable = true;
    
    Rwall = game.add.sprite(393, 0, 'rightwall');
    game.physics.enable(Rwall, Phaser.Physics.ARCADE);
    Rwall.body.immovable = true;
    
    TRwall = game.add.sprite(480, 0, 'toprightwall');
    game.physics.enable(TRwall, Phaser.Physics.ARCADE);
    TRwall.body.immovable = true;
    
    compscrn = game.add.sprite(96, 102, 'computer_screen');
    game.physics.enable(compscrn, Phaser.Physics.ARCADE);
    compscrn.body.immovable = true;

    compovr = game.add.sprite(99, 132, 'comp_overlap');
    game.physics.enable(compovr, Phaser.Physics.ARCADE);
    compovr.body.immovable = true;
    
    player = game.add.sprite(260, game.world.height - 150, 'me');
    game.physics.arcade.enable(player, Phaser.Physics.ARCADE);
    
    cursors = game.input.keyboard.createCursorKeys();
    Akey = game.input.keyboard.addKey(Phaser.Keyboard.A);
    Zkey = game.input.keyboard.addKey(Phaser.Keyboard.Z);
    Xkey = game.input.keyboard.addKey(Phaser.Keyboard.X);
    
    
    player.animations.add('left', [3, 4, 3, 5], 13, true);
    player.animations.add('right', [9, 10, 9, 11], 13, true);
    player.animations.add('up', [6, 7, 6, 8], 13, true);
    player.animations.add('down', [0, 1, 0, 2], 13, true);
    player.animations.add('runleft', [3, 4, 3, 5], 20, true);
    player.animations.add('runright', [9, 10, 9, 11], 20, true);
    player.animations.add('runup', [6, 7, 6, 8], 20, true);
    player.animations.add('rundown', [0, 1, 0, 2], 20, true);

    
    plant.animations.add('break', [1], 20, true);
    plant.animations.add('broken', [0], 20, true);
    



}

function update() { 
   
    game.physics.arcade.collide(TLwall, player);
    game.physics.arcade.collide(Bwall, player);
    game.physics.arcade.collide(door, player);
    game.physics.arcade.collide(Lwall, player);
    game.physics.arcade.collide(Rwall, player);
    game.physics.arcade.collide(TRwall, player);
    game.physics.arcade.collide(compscrn, player);
    game.physics.arcade.overlap(compovr, player, cmscrr);
    game.physics.arcade.collide(plant, player);
    game.physics.arcade.collide(TLwall, plant, plantbreak);
    game.physics.arcade.collide(Bwall, plant, plantbreak);
    game.physics.arcade.collide(door, plant, plantbreak);
    game.physics.arcade.collide(Lwall, plant, plantbreak);
    game.physics.arcade.collide(Rwall, plant, plantbreak);
    game.physics.arcade.collide(TRwall, plant, plantbreak);
    game.physics.arcade.collide(compscrn, plant, plantbreak);
    


    
    //game.physics.arcade.overlap(player, compscrn, collectStar, null, this);
    
    
    player.body.velocity.x = 0;
    player.body.velocity.y = 0;

    if (cursors.left.isDown)
    {
        if (Akey.isDown)
        {
            player.body.velocity.x = -170;
            player.animations.play('runleft');
        }
        else
        {
            player.body.velocity.x = -70;
            player.animations.play('left');
        }
    }
    
    else if (cursors.right.isDown)
    {
        if (Akey.isDown)
        {
            player.body.velocity.x = 170;
            player.animations.play('runright');
        }
        else
        {
            player.body.velocity.x = 70;
            player.animations.play('right');
        }
    }
    
    
    else if (cursors.up.isDown)
    {
        if (Akey.isDown)
        {
            player.body.velocity.y = -170;
            player.animations.play('runup');
        }
        else
        {
            player.body.velocity.y = -70;
            player.animations.play('up');
        }
    }
    
    else if (cursors.down.isDown)
    {
        if (Akey.isDown)
        {
            player.body.velocity.y = 170;
            player.animations.play('rundown');
        }
        else
        {
            player.body.velocity.y = 70;
            player.animations.play('down');
        }
    }

    else
    {
        //  Stand still
        player.animations.stop();

    }
    
    
    

    
        


}

function plantbreak(TLwall, plant) {

    plant.animations.play('break');
}


function cmscrr(compovr, player) {
        
    if (Zkey.isDown)
    {
        fbmssg = true;
        fbook = game.add.sprite(0, 0, 'facebook');
    }
    if (Xkey.isDown && fbmssg === true)
    {
        fbmssg = false;
        fbook.kill();
    }

}


