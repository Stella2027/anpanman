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
       
       
       setTimeout(function(){_this.instrText.text = 'He partly brainwashed two civilians -now known \nby their villainous names, Dokin-chan and Horrorman- and \nmade them his minions.'}, 4000);
       setTimeout(function(){_this.instrText.text = 'Baikinman forced them to do evil things like \ndrink straight from the milk cartonand steal candy from \nbabies, even though they were good at heart.'}, 8000);
       setTimeout(function(){_this.instrText.text = 'Eventually, in desperation, Dokin-chan \nbroadcasted a secret message to local heroes.'}, 12000);
       setTimeout(function(){_this.instrText.text = 'The only one who heard was a hero named \n"Saitama", but he was too busy watching anime to care.'}, 16000);
       setTimeout(function(){_this.instrText.text = 'He sent his diciple, Genos, to deal with the \nscene. Genos met another hero on his way there. \nThat hero was called Anpanman.'}, 20000);
       setTimeout(function(){_this.instrText.text = 'When Anpanman heard from Genos that his archememy \nwas causing disturbance, he immediately volunteered \nto take over.'}, 24000);
       setTimeout(function(){_this.instrText.text = 'Genos was doubtful at first because his master had \nentrusted this mission to him, but after seeing \nthe look of unadulterated confidence on the badly pixelated \nface of this hero with bread for a head,\nhe allowed Anpanman take his place \nfrom there on.'}, 28000);
       setTimeout(function(){_this.instrText.text = 'Unable to contain himself, Anpanman gleefully ran \nthrough the forest by which he was standing, right into a \ntrap that Baikinman had set.'}, 36000);
       setTimeout(function(){_this.instrText.text = 'Now it is time for you to come into the picture. \nAnpanman is in a bit of a pickle, so you must take \ncontrol from here.'}, 40000);
       setTimeout(function(){_this.instrText.text = 'Use the arrow keys to control Anmpanman and his \nmovements. Dodge the falling Baikinman soul bombs, but\n collect the falling Dokin-chan and Horrorman \nones because since the two villans were \nactually good at heart, the bombs give you \nbarrier points that increase your score.'}, 44000);
       setTimeout(function(){_this.instrText.text = 'For every 25 points you earn, part of a barrier \nwill appear that terminates all of the bombs. As the \nbarrier gets longer, the amount of barriwe points \n you nees will lessen.'}, 52000);    
       setTimeout(function(){_this.instrText.text = 'Once the entire barrier is there, the souls from \nthe bombs will be collected and will be safely moved \nto separate locations.'}, 56000);
       setTimeout(function(){_this.instrText.text = 'If you are skeptical of any of this being possible,\nknow that I do not care and that you should press \nenter to start.'}, 60000);
            
            
           
        
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