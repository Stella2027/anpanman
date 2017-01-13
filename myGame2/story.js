/* global game Phaser game_state */

game_state.story = function() {};
game_state.story.prototype = {
    
   preload: function() {
    game.load.image ('black', 'assets/black.jpg');
  },
  create: function() {
  game.add.sprite(0, 0, 'black');
       this.spaceBar = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
       this.enter = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
       
       var _this = this;
       
       this.instrText = game.add.text(10, 10, 'Baikinman, the evil blue and purple anthropomorphic\n germ  attacked a village 2 years ago.', {
                fontSize: '18px',
                fill: '#ffffff'
            });
       
       
       setInterval(function(){_this.instrText.text = 'He partly brainwashed two civilians, now known\n by their villainous names, Dokin-chan and Horrorman, and made them\n his minions.'}, 4000);
       setInterval(function(){_this.instrText.text = 'Baikinman forced them to do evil things like \ndrink straight from the milk carton'}, 8000);
       setInterval(function(){_this.instrText.text = 'and steal candy from babies, even though they \nwere good at heart. Eventually, in desperation, Dokin-chan'}, 12000);
       setInterval(function(){_this.instrText.text = 'broadcasted a secret message to local heroes.\nThe only one who heard was a hero named "Saitama", but\n he was too busy watching anime to care.'}, 16000);
       setInterval(function(){_this.instrText.text = 'He sent his a diciple, Genos, to deal with the\n scene. Genos met another hero on his way there. \nThat hero was called Anpanman.'}, 20000);
       setInterval(function(){_this.instrText.text = 'When Anpanman heard from Genos that his archememy\n was causing disturbance, he immediately volunteered \nto take over.'}, 24000);
       setInterval(function(){_this.instrText.text = 'Genos was doubtful at first because his master had\n entrusted this mission to him, but after seeing the \nlook of.'}, 28000);
       setInterval(function(){_this.instrText.text = 'unadulterated confidence on the badly pixelated \nface of this hero with bread for a head, he allowed Anpanman\n take his place from there on.'}, 18000);
       setInterval(function(){_this.instrText.text = 'Unable to contain himself, Anpanman gleefully ran\n through the forest by which he was standing, right into a \ntrap that Baikinman had set.'}, 22000);
       setInterval(function(){_this.instrText.text = 'Now it is time for you to come into the picture.\n Anpanman is in a bit of a pickle, so you must take \ncontrol from here.'}, 26000);
       setInterval(function(){_this.instrText.text = 'Use the arrow keys to control Anmpanman and his\n movements. Dodge the falling Baikinman soul bombs, but\n collect the falling'}, 30000);
       setInterval(function(){_this.instrText.text = 'Dokin-chan and Horrorman ones because since they\n were good at heart, they give you barrier points that \nincrease your score.'}, 34000);
       setInterval(function(){_this.instrText.text = 'For every 25 points you earn, part of a barrier\n will appear that terminates all of the bombs'}, 38000);    
       setInterval(function(){_this.instrText.text = 'Once the entire barrier is there, the souls from\n the bombs will be collected and will be safely moved \nto sepparate locations.'}, 42000);
       setInterval(function(){_this.instrText.text = 'If you are skeptical of any of this being possible\n, know that I do not care and that you should press \nenter to start.'}, 46000);
            
            
           
        
        //game.state.start('main');
    },
  update: function() {
       if (this.enter.isDown) {
            game.state.start('main');
        }
  },


};

        game.state.add('story', game_state.story);
        game.state.start('story');