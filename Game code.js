<!doctype html> 
<html lang="en"> 
<head> 
	<meta charset="UTF-8" />
    <title>Fruit blasters</title>
	<script type="text/javascript" src="js/phaser.min.js"></script>
    <style type="text/css">
        body {
            margin: 0;
        }
    </style>
</head>
<body>

<script type="text/javascript">

var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });

function preload() {
game.load.image('machine gun', 'Desktop/gun.png');
 
game.load.image('pistol', 'Desktop/pistol.png');

game.load.image('slingshot1', 'Desktop/sling shot1.png'); 

 game.load.image('slingshot2', 'Desktop/Sling shot2.png');

game.load.image('FemaleAvatar', 'Desktop/Female Avatar.png’);

game.load.image('MaleAvatar', 'Desktop/Male Avatar.png’);

game.load.image('ground', 'Desktop/Ground.png’);

game.load.image('sky’, 'Desktop/sky.png');

}

var player;
var platforms;
var cursors;
var bullets;
var bulletTime = 0;
var cursors;
var fireButton;
var explosions
var score = 0;
var scoreString = '';
var scoreText;
var lives;                

function create() {

game.physics.startsystem

 game.physics.startSystem(Phaser.Physics.ARCADE);

game.add.sprite(0,0, ‘sky’);

platforms.enableBody = true;
var ground = platforms.create
 player = game.add.sprite(32, game.world.height - 150, 'FemaleAvatar' 'MaleAvatar');

    cursors = game.input.keyboard.createCursorKeys();
    
    game.physics.arcade.enable(player);


enemies = [];

    enemiesTotal = 20;
    enemiesAlive = 20;

    for (var i = 0; i < enemiesTotal; i++)
}

function update() {
 game.physics.arcade.collide(player, platforms);
 
