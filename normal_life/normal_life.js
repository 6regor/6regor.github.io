var game = new Phaser.Game(480, 420, Phaser.AUTO, '', { preload: preload, create: create, update: update });





function preload() {
    
    this.load.image('loadingBar', 'fulls.png');
    this.loadingBar = this.add.sprite(600, 350, 'loadingBar');
    this.load.setPreloadSprite(this.loadingBar);
    
    
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
    game.load.image('bass', 'bass.png');
    game.load.image('bassbottom', 'bass_bottom.png');
    game.load.image('bassoverlap', 'bass_overlap.png');
    game.load.image('playbass?', 'playbass.png');
    game.load.image('stairs', 'stair.png');
    game.load.image('stairtop', 'stairtop.png');
    game.load.image('compmssg', 'compmssg.png');
    game.load.image('info', 'info.png');
    game.load.image('infosheet', 'infosheet.png');
    game.load.image('prawn', 'prawn.png');
    game.load.image('prawnspot', 'prawnspot.png');
    
    game.load.audio('bassnotes', [ 'bassnotes.mp3', 'bassnotes.ogg' ]);
    game.load.audio('soundtrack', [ 'normal life soundtrack.mp3', 'normal life soundtrack.ogg' ]);
    game.load.audio('potsmash', [ 'potsmash.mp3', 'potsmash.ogg' ]);
    
}

var player;
var cursors;
var Akey;
var Zkey;
var Xkey;
var pausegame;
var fbmssg;
var fx;
var onekey;
var twokey;
var threekey;
var fourkey;
var fivekey;
var music;
var ikey;
var potsmash;
var prawnspot;

function create() {
    
    this.game.scale.pageAlignHorizontally = true;
    this.game.scale.pageAlignVertically = true;
    this.game.scale.refresh();
    
    music = game.add.audio('soundtrack', 1, true);
    music.play('', 0, 3, true);
    
    potsmash = game.add.audio('potsmash');
    
    
    TLwall = game.add.sprite(0, 0, 'topleftwall');
    game.physics.enable(TLwall, Phaser.Physics.ARCADE);
    TLwall.body.immovable = true;
    
    game.add.sprite(0, 0, 'bedroom_background');

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
    
    bassoverlap = game.add.sprite(337, 276, 'bassoverlap');
    game.physics.enable(bassoverlap, Phaser.Physics.ARCADE);
    bassoverlap.body.immovable = true;
    
    stairtop = game.add.sprite(0, 175, 'stairtop');
    game.physics.enable(stairtop, Phaser.Physics.ARCADE);
    stairtop.body.immovable = true;
    
    stairs = game.add.sprite(0, 175, 'stairs');
    game.physics.enable(stairs, Phaser.Physics.ARCADE);
    stairs.body.immovable = true;
    
    plant = game.add.sprite(150, 220, 'potplant');
    game.physics.enable(plant, Phaser.Physics.ARCADE);
    plant.body.drag.x = 500;
    plant.body.drag.y = 500;
    
    prawnspot = game.add.sprite(200, 350, 'prawnspot');
    game.physics.enable(prawnspot, Phaser.Physics.ARCADE);
    prawnspot.body.immovable = true;
    
    player = game.add.sprite(260, game.world.height - 130, 'me');
    game.physics.arcade.enable(player, Phaser.Physics.ARCADE);
    
    bass = game.add.sprite(348, 252, 'bass');
    game.physics.enable(bass, Phaser.Physics.ARCADE);
    bass.body.immovable = true;
    
    bassbottom = game.add.sprite(348, 316, 'bassbottom');
    game.physics.enable(bassbottom, Phaser.Physics.ARCADE);
    bassbottom.body.immovable = true;
    
    info = game.add.sprite(0, 0, 'info');
    game.physics.enable(info, Phaser.Physics.ARCADE);
    info.body.immovable = true;
    
    cursors = game.input.keyboard.createCursorKeys();
    Akey = game.input.keyboard.addKey(Phaser.Keyboard.A);
    Zkey = game.input.keyboard.addKey(Phaser.Keyboard.Z);
    Xkey = game.input.keyboard.addKey(Phaser.Keyboard.X);
    onekey = game.input.keyboard.addKey(Phaser.Keyboard.S);
    twokey = game.input.keyboard.addKey(Phaser.Keyboard.D);
    threekey = game.input.keyboard.addKey(Phaser.Keyboard.F);
    fourkey = game.input.keyboard.addKey(Phaser.Keyboard.G);
    fivekey = game.input.keyboard.addKey(Phaser.Keyboard.H);
    ikey = game.input.keyboard.addKey(Phaser.Keyboard.I);
    
    
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
    
    bassmusic = game.add.audio('bassnotes', 1, true);
    
    bassmusic.addMarker('one', 0, 3.8);
    bassmusic.addMarker('two', 4, 3.8);
    bassmusic.addMarker('three', 8, 3.8);
    bassmusic.addMarker('four', 12, 3.8);
    bassmusic.addMarker('five', 16, 3.8);
    

    
    



}

function update(){ 
   
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
    game.physics.arcade.collide(stairtop, plant, plantbreak);
    game.physics.arcade.collide(Bwall, plant, plantbreak);
    game.physics.arcade.collide(bassbottom, plant, plantbreak);
    game.physics.arcade.collide(door, plant, plantbreak);
    game.physics.arcade.collide(Lwall, plant, plantbreak);
    game.physics.arcade.collide(Rwall, plant, plantbreak);
    game.physics.arcade.collide(TRwall, plant, plantbreak);
    game.physics.arcade.collide(compscrn, plant, plantbreak);
    game.physics.arcade.collide(bassbottom, player);
    game.physics.arcade.overlap(bassoverlap, player, playbass);
    game.physics.arcade.overlap(prawnspot, player, thought);

    


    
    //game.physics.arcade.overlap(player, compscrn, collectStar, null, this);
    
    
    player.body.velocity.x = 0;
    player.body.velocity.y = 0;

    if (cursors.left.isDown){
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
    
    if (ikey.isDown){
        var infosheet = game.add.sprite(127, 100, 'infosheet');
        Xkey.onDown.add(closeinfo);
        
        function closeinfo(){
            infosheet.kill();
        }
    }   


}

function plantbreak(TLwall, plant) {

    plant.animations.play('break');
    potsmash.play();
    plant.body.immovable = true;
}


function cmscrr(compovr, player) {
    
    var compmssg = game.add.sprite(0, 0, 'compmssg');
    Xkey.onDown.add(closecomputer);
    Zkey.onDown.add(openfacebook);
    
    function openfacebook(){
        game.addsprite(0, 0, 'facebook');
    //Xkey.onDown.add(closefacebook);
    //function closefacebook(){
      //  fbook.kill();

    }
    
    function closecomputer(){
        compmssg.kill();
    }

}


    
    //}


function playbass(bassoverlap, player) {
    onekey.onDown.add(playnoteone);
    twokey.onDown.add(playnotetwo);
    threekey.onDown.add(playnotethree);
    fourkey.onDown.add(playnotefour);
    fivekey.onDown.add(playnotefive);
    var playthebass = game.add.sprite(0, 0, 'playbass?');
    Xkey.onDown.add(closemessage);
    
    function closemessage(){
        playthebass.kill();
    }

    

    

    //if (onekey.isDown)
    //{
       // bassmusic.play('five');

        //var playthebass = game.add.sprite(0, 0, 'playbass?');
        
        //function stopplayingbass(playthebass){
            //if (Xkey.isDown){
                //playthebass.kill();
            //}
        //}
   // }
    


}

function playnoteone(){
    if(game.physics.arcade.overlap(bassoverlap, player)){
        bassmusic.play('five', 0, 4);
    }
}

function playnotetwo(){
    if(game.physics.arcade.overlap(bassoverlap, player)){
        bassmusic.play('one', 0, 4);
    }
}

function playnotethree(){
    if(game.physics.arcade.overlap(bassoverlap, player)){
        bassmusic.play('two', 0, 4);
    }
}

function playnotefour(){
    if(game.physics.arcade.overlap(bassoverlap, player)){
        bassmusic.play('three', 0, 4);
    }
}

function playnotefive(){
    if(game.physics.arcade.overlap(bassoverlap, player)){
        bassmusic.play('four',0, 5);
    }
}

function thought(){
    var thght = game.add.sprite(90, 363, 'prawn');
    prawnspot.kill();
    Xkey.onDown.add(closethought);
    
    function closethought(){
        thght.kill();
    }
}
        
    
    
