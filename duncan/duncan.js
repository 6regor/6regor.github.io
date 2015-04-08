var game = new Phaser.Game(150, 207, Phaser.CANVAS, '', { preload: preload, create: create, update: update });





function preload() {
    
    this.game.scale.pageAlignHorizontally = true;
    this.game.scale.pageAlignVertically = true;
    this.game.scale.refresh();
    

    game.load.spritesheet('duncan', 'duncan.png', 150, 207, 7);
    

}



function create() {
    
    


    
    duncan = game.add.sprite(0, 0, 'duncan');
    game.physics.enable(duncan, Phaser.Physics.ARCADE);

    cursors = game.input.keyboard.createCursorKeys();
    ikey = game.input.keyboard.addKey(Phaser.Keyboard.I);
    Xkey = game.input.keyboard.addKey(Phaser.Keyboard.X);
    
     duncan.animations.add('look', [0, 1, 2, 3, 2, 1, 0, 4, 5, 6, 5, 4], 7, true);
    duncan.animations.play('look', true);
    
    
}

function update(){ 

}