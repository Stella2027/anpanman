/*global Phaser*/

var game = new Phaser.Game(800, 600, Phaser.AUTO, '');
var game_state = {};
var scoreText;
var score = 0;
var platforms;



game_state.main = function() {};
game_state.main.prototype = {


    preload: function() {
        game.load.spritesheet('Anpanman', 'assets/anpanman.png', 128, 128);
        game.load.image('baikinmans', 'assets/baikinman.png');
        game.load.image('thingy', 'assets/papyrus.png');
        game.load.image('ground', 'assets/ground.1.png');
        game.load.image('mabobber', 'assets/dokin.png');
        game.load.image('forest', 'assets/forest.jpg');
        game.load.image('mini', 'assets/platform5.png');
    },

    create: function() {
        game.add.sprite(0, 0, 'forest');
        game.physics.startSystem(Phaser.Physics.ARCADE);
        this.player = game.add.sprite(32, game.world.height - 148, 'Anpanman');

        //ground i hope...
        platforms = game.add.group();
        platforms.enableBody = true;
        var ground = platforms.create(0, game.world.height - 32, 'ground');
        ground.scale.setTo(25, 1);
        ground.body.immovable = true;



        game.physics.arcade.enable(this.player);
        this.player.enableBody = true;
        this.player.body.bounce.y = 0.6;
        this.player.body.gravity.y = 900;
        this.player.body.collideWorldBounds = true;


        this.left = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
        this.right = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
        this.up = game.input.keyboard.addKey(Phaser.Keyboard.UP);

        this.player.body.collideWorldBounds = true;
        this.player.animations.add('left', [2, 3], 10, true);
        this.player.animations.add('right', [4, 5], 10, true);
        //this is the hit box
        this.player.body.setSize(60, 70, 20, 46);

        this.baikinmans = game.add.group();
        this.baikinmans.enableBody = true;

        this.objects = game.add.group();
        this.objects.enableBody = true;

        this.mini = game.add.group();
        this.mini.enableBody = true;






        var _this = this;

        scoreText = game.add.text(16, 16, 'Score: 0', {
            fontSize: '32px',
            fill: '#000'
        });


        setInterval(function() {
            var baikinman = _this.baikinmans.create(Math.random() * 950, -200, 'baikinmans');
            baikinman.body.gravity.y = 25;
            baikinman.body.setSize(55, 55, 27, 27);
        }, 900);

        setInterval(function() {
            var object = _this.objects.create(Math.random() * 950, -250, 'thingy');
            object.body.gravity.y = 25;
            object.body.setSize(55, 55, 27, 27);

        }, 900);

        setInterval(function() {
            var object = _this.objects.create(Math.random() * 950, -200, 'mabobber');
            object.body.gravity.y = 25;
            object.body.setSize(55, 55, 27, 27);
        }, 900);


    },

    update: function() {

        game.physics.arcade.collide(this.player, platforms);


        this.player.body.velocity.x = 0;

        if (this.left.isDown) {
            this.player.body.velocity.x = -600;
            this.player.animations.play('left');
        }
        else if (this.right.isDown) {
            this.player.body.velocity.x = 600;
            this.player.animations.play('right');
        }
        else {
            this.player.animations.stop();
            this.player.frame = 0;
        }

        //allow the player to jump if the are touching the ground?
        if (this.up.isDown && this.player.body.touching.down) {
            this.player.body.velocity.y = -350;
        }



        game.physics.arcade.overlap(this.player, this.objects, this.collectObject, null, this);
        game.physics.arcade.overlap(this.player, this.baikinmans, this.hitBaikinmans, null, this);
        game.physics.arcade.overlap(this.objects, platforms, this.hitMini, null, this);
        game.physics.arcade.overlap(this.baikinmans, platforms, this.hitMini, null, this);


        //This shows the hitbox if you want to see how big it is
        //game.debug.body(this.player);

    },

    collectObject: function(player, object) {
        object.kill();
        score += 10;
        scoreText.text = "Score: " + score; + "Score: ";

        console.log(score);

        if (score >= 25 && score < 50) {
            this.mini = platforms.create(0, 200, 'mini');
            this.mini.body.immovable = true;
        }
        else if (score >= 50 && score < 75) {
            this.mini = platforms.create(150, 200, 'mini');
            this.mini.body.immovable = true;
        }
        else if (score >= 75 && score < 100) {
            this.mini = platforms.create(300, 200, 'mini');
            this.mini.body.immovable = true;
        }
        else if (score >= 100 && score < 125) {
            this.mini = platforms.create(450, 200, 'mini');
            this.mini.body.immovable = true;
        }
        else if (score >= 125 && score < 150) {
            this.mini = platforms.create(600, 200, 'mini');
            this.mini.body.immovable = true;
        }
        else if (score >= 150 && score < 175) {
            this.mini = platforms.create(750, 200, 'mini');
            this.mini.body.immovable = true;
        }



        if (score >= 150) {
            game.add.Text = (450, 250, 'You rescued Dokin-chan and Horrorman\n and beat the evil Baikinman!!\n In technicallity, I guess you win!!', {
                fontSize: '64px',
                fill: '#000000'
            });
        }


    },



    hitBaikinmans: function(player, baikinmans) {
        baikinmans.kill();
        score -= 20;
        scoreText.text = "Score: " + score; + "Score: ";
    },
    hitMini: function(object, mini) {

        object.kill();

    },







};
game.state.add('main', game_state.main);
game.state.start('main');
