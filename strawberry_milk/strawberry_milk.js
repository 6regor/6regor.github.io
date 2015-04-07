var game = new Phaser.Game(300, 300, Phaser.AUTO, '', { preload: preload, create: create, update: update });
var w;
var milk;




function preload() {
    this.game.scale.pageAlignHorizontally = true;
    this.game.scale.pageAlignVertically = true;
    this.game.scale.refresh();
    
    game.load.image('white', 'white.png');
    game.load.spritesheet('milk', 'milk_spritesheet.png', 51, 63, 17);
    
}

function create() {

    w = game.add.sprite(0, 0, 'white');
    game.physics.enable(w, Phaser.Physics.ARCADE);
    
    milk = game.add.sprite(130, 120, 'milk');
    game.physics.enable(milk, Phaser.Physics.ARCADE);

    cursors = game.input.keyboard.createCursorKeys();
    ikey = game.input.keyboard.addKey(Phaser.Keyboard.I);
    
    milk.animations.add('0', [0], 1, true);
    milk.animations.add('1', [1], 1, true);
    milk.animations.add('2', [2], 1, true);
    milk.animations.add('3', [3], 1, true);
    milk.animations.add('4', [4], 1, true);
    milk.animations.add('5', [5], 1, true);
    milk.animations.add('6', [6], 1, true);
    milk.animations.add('7', [7], 1, true);
    milk.animations.add('8', [8], 1, true);
    milk.animations.add('9', [9], 1, true);
    milk.animations.add('10', [10], 1, true);
    milk.animations.add('11', [11], 1, true);
    milk.animations.add('12', [12], 1, true);
    milk.animations.add('13', [13], 1, true);
    milk.animations.add('14', [14], 1, true);
    milk.animations.add('15', [15], 1, true);
    milk.animations.add('16', [16], 1, true);
    milk.animations.add('test', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 17, true);
    
    milk.animations.play('test');

}
count = 7    
function update(){ 

// var count;
    
    milk.body.velocity.x = 0;
    milk.body.velocity.y = 0;

    if (cursors.left.isDown){

        milk.body.velocity.x = -70;
    }

    
    else if (cursors.right.isDown)
    {

        milk.body.velocity.x = 70;

    }
    
    
    else if (cursors.up.isDown)
    {

        milk.body.velocity.y = -70;
    }
    
    else if (cursors.down.isDown)
    {

        milk.body.velocity.y = 70;

    }

    
    //if (cursors.left.isDown){
      //  if (count > 0){
        //    milk.animations.play(count - 1);
          //  count -= 1;
    //    }
      //  else{
        //    milk.animations.play('0');
//        }
  //  }
    
//    else if (cursors.right.isDown){
  //      if (count < 16){
    //        milk.animations.play(count + 1);
      //      count += 1;
        //}
//        else{
  //          milk.animations.play('16');
    //    }
//    }
}