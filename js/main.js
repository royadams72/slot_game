//Global assets
var deskTop = function() {

    //loading images
    var stage, slotLogo, slotBG, spinBtn, btnGlow, messageContainer, mgsBG, reelContainer, slotBlur, slotBlur2, lepSprite, lepLaugh, requestId, t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12, t13, winIcon, SLOT_NUMBER, slotArr1, slotArr2, slotArr3, blurArray, posArray, slotContainerArr, blurContainerArr, blurContainer, tweenArray, spins, spinning, blurSpeed, firstTime, ReelContainersHeight, ReelContainersWidth, ReelContainersX, ReelContainersY, slotPaddingRight, slotPaddingTop, slotScale, winMsgScale, winContainer, ctaContainer;

    var dTopAssetsLoaded = false;
    var fontObj = {};
   
    var initDeskTop = function() {

        if (!commonAssetsLoaded) {
            mloader = new PIXI.loaders.Loader();

            mloader.add('num1', clientlibUrl + 'img/num1.png')
            mloader.add('num2', clientlibUrl + 'img/num2.png')
            mloader.add('num3', clientlibUrl + 'img/num3.png')
            mloader.add('num4', clientlibUrl + 'img/num4.png')
            mloader.add('num5', clientlibUrl + 'img/num5.png')
            mloader.add('num6', clientlibUrl + 'img/num6.png')
            mloader.add('num7', clientlibUrl + 'img/num7.png')
            mloader.add('num8', clientlibUrl + 'img/num8.png')
            mloader.add('num9', clientlibUrl + 'img/num9.png')
            mloader.add('num10', clientlibUrl + 'img/num10.png')
            mloader.add('num11', clientlibUrl + 'img/num11.png')
            mloader.add('num12', clientlibUrl + 'img/num12.png')
            mloader.add('num13', clientlibUrl + 'img/num13.png')
            mloader.add('spin', clientlibUrl + 'img/spin.png')
            mloader.add('spinGlow', clientlibUrl + 'img/spinGlow.png')
            mloader.add('slotBlur', clientlibUrl + 'img/slotBlur.png')
            mloader.add('slotBlur2', clientlibUrl + 'img/slotBlur2.png')
            mloader.add('logo', clientlibUrl + 'img/logo.png')
            mloader.add('winCTA', clientlibUrl + 'img/cta.png')
			mloader.add('sparkle', clientlibUrl + 'img/sparkle.png')
			mloader.add('joinGlow', clientlibUrl + 'img/joinGlow.png')
            commonAssetsLoaded = true;

        }
        mloader.add('bg', clientlibUrl + 'img/slotBG.png')
        mloader.add('mbg', clientlibUrl + 'img/msgBG.png')
        mloader.add('up', clientlibUrl + 'img/up.png')
        mloader.add('down', clientlibUrl + 'img/down.png')
        mloader.add('straight', clientlibUrl + 'img/straight.png')

        //Spritesheet
        mloader.add('s1', clientlibUrl + 'img/spriteSheets/sprite_001.png')
        mloader.add('s2', clientlibUrl + 'img/spriteSheets/sprite_002.png')
        mloader.add('s3', clientlibUrl + 'img/spriteSheets/sprite_003.png')
        mloader.add('s4', clientlibUrl + 'img/spriteSheets/sprite_004.png')
        mloader.add('s5', clientlibUrl + 'img/spriteSheets/sprite_005.png')
        mloader.add('s6', clientlibUrl + 'img/spriteSheets/sprite_006.png')
        mloader.add('s7', clientlibUrl + 'img/spriteSheets/sprite_007.png')
        mloader.add('s8', clientlibUrl + 'img/spriteSheets/sprite_008.png')
        mloader.add('s9', clientlibUrl + 'img/spriteSheets/sprite_009.png')
        mloader.add('s10', clientlibUrl + 'img/spriteSheets/sprite_010.png')
        mloader.add('s11', clientlibUrl + 'img/spriteSheets/sprite_011.png')
        mloader.add('s12', clientlibUrl + 'img/spriteSheets/sprite_012.png')
        mloader.add('s13', clientlibUrl + 'img/spriteSheets/sprite_013.png')
        mloader.add('s14', clientlibUrl + 'img/spriteSheets/sprite_014.png')
        mloader.add('s15', clientlibUrl + 'img/spriteSheets/sprite_015.png')
        mloader.add('s16', clientlibUrl + 'img/spriteSheets/sprite_016.png')
        mloader.add('s17', clientlibUrl + 'img/spriteSheets/sprite_017.png')
        mloader.add('s18', clientlibUrl + 'img/spriteSheets/sprite_018.png')
        mloader.add('s19', clientlibUrl + 'img/spriteSheets/sprite_019.png')
        mloader.add('s20', clientlibUrl + 'img/spriteSheets/sprite_020.png')
        mloader.add('s21', clientlibUrl + 'img/spriteSheets/sprite_021.png')
        mloader.add('s22', clientlibUrl + 'img/spriteSheets/sprite_022.png')
        mloader.add('s23', clientlibUrl + 'img/spriteSheets/sprite_023.png')
        mloader.add('s24', clientlibUrl + 'img/spriteSheets/sprite_024.png')
        mloader.add('s25', clientlibUrl + 'img/spriteSheets/sprite_025.png')
            //listen for progress
        dTopAssetsLoaded = true;
        
        mloader.on('progress', function(e) {
                var percnt = Math.round(e.progress);
                //loadingTxt.innerHTML  = percnt + "% of game loaded";
               
            })
            // load resources
        mloader.load(function(loader, resources) {

                stage = new PIXI.Container();
                stage.interactive = true;
                spinB = document.createElement("button");
                spinB.setAttribute("id", "spin");
                TweenMax.set(spinB, { display: "block", width: "100%", position: "absolute", height: "100%", opacity: 0, cursor:"pointer"});
                sContainer.appendChild(spinB);
                renderer = new PIXI.autoDetectRenderer(900, 500, { transparent: true, view: game });
                document.getElementById("sContainer").appendChild(renderer.view);
                SLOT_NUMBER = 5;
                slotArr1 = [];
                slotArr2 = [];
                slotArr3 = [];
                slotCheckArr = [];
                blurArray = [];
                posArray = [];
                slotContainerArr = [];
                blurContainerArr = [];
                tweenArray = [];
			    tweenArray2 = [];
                mainSlotArr = [];
                blurSpriteArray = [];
                spins = -1;
                winIcon;
                spinning = false;
                blurSpeed = 20;
                firstTime = true;
                btnClicked = false;
                //add images to app, then add to array
                t1 = mloader.resources.num1.texture;
                t2 = mloader.resources.num2.texture;
                t3 = mloader.resources.num3.texture;
                t4 = mloader.resources.num4.texture;
                t5 = mloader.resources.num5.texture;
                t6 = mloader.resources.num6.texture;
                t7 = mloader.resources.num7.texture;
                t8 = mloader.resources.num8.texture;
                t9 = mloader.resources.num9.texture;
                t10 = mloader.resources.num10.texture;
                t11 = mloader.resources.num11.texture;
                t12 = mloader.resources.num12.texture;
                t13 = mloader.resources.num13.texture;
                mainSlotArr.push(t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12, t13);
                slotBlur = mloader.resources.slotBlur.texture;
                slotBlur2 = mloader.resources.slotBlur2.texture;
                blurSpriteArray.push(slotBlur, slotBlur2);
                spinBtn = new PIXI.Sprite(mloader.resources.spin.texture);
                btnGlow = new PIXI.Sprite(mloader.resources.spinGlow.texture);
                slotBG = new PIXI.Sprite(mloader.resources.bg.texture);
                slotLogo = new PIXI.Sprite(mloader.resources.logo.texture);
				
                mgsBG = new PIXI.Sprite(mloader.resources.mbg.texture);
                cta = new PIXI.Sprite(mloader.resources.winCTA.texture);
                winMsg = new PIXI.Container();
                stage.addChild(slotBG);
                stage.addChild(slotLogo);
                slotLogo.anchor.set(0.5, 0);
                ReelContainersWidth = 550;
                ReelContainersHeight = 350;
            
            })
            .on('complete', function(e) {
                if (!deskTopLoaded) {
                    deskTopLoaded = true;
                    setup();
                }
            });
    };

    initDeskTop();

	
	
	
 function setup() {
        editSprites();
        buildSprites();
        addBtn();
        buildBlur();
        buildReels();
	    winMessage();
        setMessages();
	 	
        startSpin();
        if (!requestId) {
            requestId = requestAnimationFrame(animate);
        }
    };
	
	
var editSprites = function(){
     /*****EDIT PROPERTIES FOR THIS GAME**********************************************************/
        slotBG.y = 30;//Background
	    containersScale = 1;//control size of the reels/slots using scale, adjusting width and height will not work
	    ReelContainersX = 370;//Containers are positioned by centre point
        ReelContainersY = 250;
        slotPaddingRight = 100;//padding between slots
        slotPaddingTop = 20;//push slots down
        pushSlotsRight = 0; //Push slots right, without affecting other objects in reelContainer
        slotLogo.x = 370;//Position logo
        slotLogo.y = -20;
		winMsgScale = 1;//Scale for the message at end of game
	    winMessagePush = 10;//push the win message - left = negative num push right = posisitive
		pushPayline = -30;//push the win payLine left or right
		winMsgY = 220;//y position of "you've won" message container
	    messagesX = 30;//position for click an try again messages
	    messagesY = 400;
		clickY = 20;
		tryAgainY = 22;
		fontObj = { font: '22px Arial', fill:  0xe4e44a, align: 'center' , clickFont: '32px Arial', tryAgainFont: '23px Arial', small: '30px Arial' , larger: '35px Arial' };
	   }	
	
    


    
//Add textures here for spritesheet
    var buildSprites = function() {
			//Edit animated sprite
			lepLaugh = new Audio(clientlibUrl + "sounds/laugh.mp3"); // buffers automatically when created
			lepPlaying = false;
			lepSpeed = 0.3;
		var frame1 = mloader.resources.s1.texture;
        var frame2 = mloader.resources.s2.texture;
        var frame3 = mloader.resources.s3.texture;
        var frame4 = mloader.resources.s4.texture;
        var frame5 = mloader.resources.s5.texture;
        var frame6 = mloader.resources.s6.texture;
        var frame7 = mloader.resources.s7.texture;
        var frame8 = mloader.resources.s8.texture;
        var frame9 = mloader.resources.s9.texture;
        var frame10 = mloader.resources.s10.texture;
        var frame11 = mloader.resources.s11.texture;
        var frame12 = mloader.resources.s12.texture;
        var frame13 = mloader.resources.s13.texture;
        var frame14 = mloader.resources.s14.texture;
        var frame15 = mloader.resources.s15.texture;
        var frame16 = mloader.resources.s16.texture;
        var frame17 = mloader.resources.s17.texture;
        var frame18 = mloader.resources.s18.texture;
        var frame19 = mloader.resources.s19.texture;
        var frame20 = mloader.resources.s20.texture;
        var frame21 = mloader.resources.s21.texture;
        var frame22 = mloader.resources.s22.texture;
        var frame23 = mloader.resources.s23.texture;
        var frame24 = mloader.resources.s24.texture;
        var frame25 = mloader.resources.s25.texture;
        // create an array containing all the textures to use in the animation
        var animationFrames = [frame1, frame2, frame3, frame4, frame5, frame6, frame7, frame8, frame9, frame10, frame11, frame12, frame13, frame14, frame15, frame16, frame17, frame18, frame19, frame20, frame21, frame22, frame23, frame24, frame25];
        // create a movieclip instance with the animation frames..
        lepSprite = new PIXI.extras.MovieClip(animationFrames);
        lepSprite.x = 625;
        lepSprite.y = 180;
        lepSprite.loop = false;
        lepSprite.animationSpeed = lepSpeed;
        lepSprite.stop();
        stage.addChild(lepSprite);
    
    };

 var addBtn = function(){
      btn = new PIXI.Container();
        btn.x = 680;
        btn.y = 380;
        btn.startY = btn.y;
        btn.startX = btn.x;
        btnGlow.scale.y = btnGlow.scale.x = .5;
        //console.log(this.btnGlow)
        btnGlow.alpha = 0;
        btn.addChild(btnGlow);
        spinBtn.scale.y = spinBtn.scale.x = .5;
        btn.addChild(spinBtn);
      stage.addChild(btn);
}	
var youWonAnim = function(){
		/*
    Build winContainer to hold Ypu won!
	*/
	
		sparkles();
	TweenMax.to(winContainer, 1, {alpha:1})
		TweenMax.to(winContainer, 2, {width: 330, height: 70, onComplete: function(){
			TweenMax.to(winContainer, .6, {alpha:0, onComplete: winFrame})
		}})
	
}	
	
var sparkles = function (){
	
	for(var i = 0; i < 50; i++){
	//var num, sparkleRot, animTime, halfTime;
	var sparkle = new PIXI.Sprite(mloader.resources.sparkle.texture);
	
	    sparkle.anchor.set(0.5, 0.5);
		sparkle.x = getRandomNum(200, 500, false, false);
		sparkle.y = getRandomNum(200, 300, false, false);
		sparkle.alpha = 0;
		sparkle.width = sparkle.height = 3
	    
	    sparkle.num = sparkle.width + getRandomNum(10, 40, false, false);
	    sparkle.sparkleRot = getRandomNum(2, 7, false, false);
	    sparkle.animTime = getRandomNum(1, 3, true, false);
	 	sparkle.halfTime = sparkle.animTime / 2;
	
		TweenMax.to(sparkle, sparkle.halfTime, {alpha:1});
	    TweenMax.to(sparkle, sparkle.animTime, {rotation:sparkle.sparkleRot});
	    TweenMax.to(sparkle, sparkle.animTime, {width:sparkle.num, height: sparkle.num});
			
		var fadeOut = function (c){
		var s = c
			TweenMax.to( s, s.halfTime, { alpha: 0, onComplete: function(){
			
			
		        	} 
				});
		      }
			//
	
		TweenMax.delayedCall(sparkle.halfTime, fadeOut,[sparkle])
		
		stage.addChild(sparkle);	
		
		
		}
	//
	
}	
var winMessage = function(){

	var f = fontObj;
	var topPadding = 0;
	var centerNum;
    var firstTxt = new PIXI.Text( gameSettings.winLine1, { font: f.larger, fill: f.fill, align: f.align });
    var SecondTxt = new PIXI.Text( gameSettings.winLine2, { font: f.larger, fill: f.fill, align: f.align });
    var thirdTxt = new PIXI.Text( gameSettings.winLine3, { font: f.larger, fill: f.fill, align: f.align });
    var fourthTxt = new PIXI.Text( gameSettings.winLine4, { font: f.larger, fill: f.fill, align: f.align });
	var joinGlow = new PIXI.Sprite(mloader.resources.joinGlow.texture);
	
	var youWonTxt = new PIXI.Text( gameSettings.youWon, { font: f.larger, fill: f.fill, align: f.align });
		//youWonTxt.anchor.set(0.5, 0.5);
		winContainer = new PIXI.Container();
		winContainer.addChild(youWonTxt);
		winContainer.pivot.set(winContainer.width/2, winContainer.height/2);
		winContainer.y = renderer.height / 2;

	    winContainer.x = ReelContainersX;
		winContainer.alpha = 0;
	    stage.addChild(winContainer);
	
	    ctaContainer = new PIXI.Container();
	    ctaContainer.addChild(joinGlow)
	    ctaContainer.addChild(cta)
        winMsg.addChild(ctaContainer);
        winMsg.addChild(fourthTxt);
        winMsg.addChild(thirdTxt);
        winMsg.addChild(SecondTxt);
        winMsg.addChild(firstTxt);
	    winMsg.pivot.set(winMsg.width/2, winMsg.height/2);//only has width after children added
	    winMsg.x = reelContainer.x + winMessagePush; //Centre win message to the reelContainer
        winMsg.y = winMsgY;
	    winMsg.alpha = 0;
	 
		centerNum = ( winMsg.width / 2 );
	
	    firstTxt.anchor.set(0.5, 0.5);
        firstTxt.x = centerNum;
        firstTxt.y = topPadding;
     
        SecondTxt.anchor.set(0.5, 0.5);
        topPadding += 50;
        SecondTxt.x = centerNum;
        SecondTxt.y = topPadding;

        thirdTxt.anchor.set(0.5, 0.5);
        topPadding += 50;
        thirdTxt.y = topPadding;
        thirdTxt.x = centerNum;

        fourthTxt.anchor.set(0.5, 0.5);
        topPadding += 50;
        fourthTxt.x = centerNum;
        fourthTxt.y = topPadding;

        topPadding += 65;
		joinGlow.anchor.set(0.5, 0.5);
       // joinGlow.x = centerNum;
       // joinGlow.y = topPadding;
		joinGlow.alpha = 0;
        cta.anchor.set(0.5, 0.5);
        /*cta.x = centerNum;
        cta.y = topPadding;*/
	    ctaContainer.x = centerNum;
        ctaContainer.y = topPadding;
		ctaContainer.startX = ctaContainer.x;
		ctaContainer.startY = ctaContainer.y;
	    winMsg.scale.x = winMsg.scale.y = winMsgScale;
        stage.addChild(winMsg);
	//btnPulse(ctaContainer)
};  
    
    
var setMessages = function() {
	var f = fontObj;
        tryAgain1 = new PIXI.Text(  gameSettings.badLuck + " " + gameSettings.tryAgainTxt1, {font: f.clickFont, fill: f.fill, align: f.align});
	    tryAgain2 = new PIXI.Text(gameSettings.badLuck + " " + gameSettings.tryAgainTxt2, {font: f.clickFont, fill: f.fill, align: f.align});
        click = new PIXI.Text( gameSettings.clickSpin + " " + gameSettings.toPlay, { font: f.clickFont, fill: f.fill, align: f.align });

        messageContainer = new PIXI.Container();
        messageContainer.x = messagesX;
        messageContainer.y = messagesY;
      
        click.anchor.set(0.5, 0.5);
        click.x = mgsBG.width / 2 - 25;
        click.y = clickY;
        click.alpha = 1;
        tryAgain1.anchor.set(0.5, 0.5);
        tryAgain1.x = mgsBG.width / 2 - 25;
        tryAgain1.y = clickY;
        tryAgain1.alpha = 0;
	
		tryAgain2.anchor.set(0.5, 0.5);
        tryAgain2.x = mgsBG.width / 2 - 25;
        tryAgain2.y = clickY;
        tryAgain2.alpha = 0;
	
	
        messageContainer.addChild(mgsBG);
        messageContainer.addChild(click);
        messageContainer.addChild(tryAgain1);
	    messageContainer.addChild(tryAgain2);
        stage.addChild(messageContainer);
    };

    var addListeners = function() {
        if (spins != 3) {
            spin.addEventListener("click", startSpin);
            spin.addEventListener("touchstart", startSpin);
        } else {
            removeListeners();
            spin.addEventListener("click", gotoURL);
            spin.addEventListener("touchstart", gotoURL);

        }
    };

var removeListeners = function() {
        spin.removeEventListener("click", startSpin);
        spin.removeEventListener("touchstart", startSpin);
    };

var gotoURL = function() {
     if (gameSettings.clickThroughURL!==""){
        window.location = gameSettings.clickThroughURL;
        }else{
            console.log("gameSettings.clickThroughURL");
        }
    };


var btnPulse = function(b) {
        var t, t1, t2;
		var bGlow = b.getChildAt(0);
	
        t = TweenMax.to(bGlow, .2, {alpha: 1});
        tweenArray.push(t);
        t1 = TweenMax.to(b, .5, {x: "-=15", y: "-=15", ease: Back.easeOut.config(1.7), onComplete: function() {
                t.reverse();
             
                TweenMax.to(b, .3, { x: b.startX, y: b.startY, ease: Back.easeOut.config(1.7), onComplete: function() {
                    if(!btnClicked){
                        t.pause(0);
                        t1.pause(0);
                        t2 = TweenMax.delayedCall(.5, function() { t1.play(); t.play();})
                        tweenArray.push(t2);
                        }
                    }
                });
             }
        });
	tweenArray.push(t, t1);
  };


	
	
var buildReels = function() {
             reelContainer = new PIXI.Container();
	         reelContainer.x = ReelContainersX;
             reelContainer.y = ReelContainersY;
	         reelContainer.pivot.set(ReelContainersWidth/2, ReelContainersHeight/2);
             reelContainer.scale.x = reelContainer.scale.y = containersScale;
             stage.addChild(reelContainer);
      };

var buildBlur = function() {
    var blur; //declare var for loop here, dies in I.E if not!!
        blurContainer = new PIXI.Container();
		blurContainer.x = ReelContainersX;
        blurContainer.y = ReelContainersY;
	   	blurContainer.pivot.set(ReelContainersWidth/2, ReelContainersHeight/2);
		stage.addChild(blurContainer);
        blurContainer.scale.x = blurContainer.scale.y = containersScale;
        for (var i = 0; i < SLOT_NUMBER; i++) {
            //randomly get blur image from array
            blur = blurSpriteArray[Math.floor(Math.random() * blurSpriteArray.length)];
            var slotContainer = new PIXI.Container();
            slotContainer.width = 100;
            slotContainer.height = 300;
            slotContainer.y = slotPaddingTop+10;
            slotContainer.x = i * slotPaddingRight + pushSlotsRight;
            slotContainer.alpha = 1;
            myMask = new PIXI.Graphics();
            myMask.beginFill();
            myMask.drawRect(0, 0, 100, 280)
            myMask.endFill();
            blurContainerArr.push(slotContainer);
            slotContainer.addChild(myMask)
            blurContainer.addChild(slotContainer);
            slotContainer.mask = myMask
                //Get 2 blur images at a time for srolling
            for (var j = 0; j < 2; j++) {
                var blurFilter = new PIXI.filters.BlurFilter();
                var blurSprite = new PIXI.extras.TilingSprite(blur, 200, 600);
                blurSprite.scale.y = blurSprite.scale.x = .5;
                blurSprite.endY = j * (blurSprite.height / 2);
                blurSprite.startY = (j * (blurSprite.height / 2)) * -1;
                //calculate startY for so can reset images for scrolling
                if (blurSprite.startY == -300) {
                    blurSprite.startY = 0;
                } else if (blurSprite.startY == -0 || blurSprite.startY == 0) {
                    blurSprite.startY = -300;
                }
                blurSprite.y = blurSprite.startY;
                blurSprite.filters = [blurFilter];
                blurFilter.blur = 20;
                blurContainerArr[i].addChild(blurSprite);
                blurArray.push(blurSprite)
            }
        }

    };


    var loseSpin = function() {
        // removeSlots();
        slotArr1 = mainSlotArr.slice(0);
        slotArr2 = mainSlotArr.slice(0);
        slotArr3 = mainSlotArr.slice(0);
        shuffle(slotArr1);
        shuffle(slotArr2);
        shuffle(slotArr3);
		
        createSlots();
    };
    var startSpin = function() {
        if (!firstTime) {
            click.alpha = 0;
            tryAgain1.alpha = 0;
			tryAgain2.alpha = 0;
            btnClicked = true;
			
            for (var i = 0; i < tweenArray.length; i++) {
                tweenArray[i].pause(0);
            }
        }
		
        spins++;
        blurContainer.alpha = 1;
        spinning = true;
        removeSlots();
        if (spins == 3) {
            TweenMax.delayedCall(1, winSpin);
            removeListeners();
        } else {
            if (firstTime) {
                addListeners();

            } else {

                removeListeners();
            }
            TweenMax.delayedCall(1, loseSpin);

        }
    };

    var winArrays = function() {
        var arrays = [];
        var top = [1, 4, 7, 10, 13, "top"];
        var middle = [2, 5, 8, 11, 14, "middle"];
        var bottom = [3, 6, 9, 12, 15, "bottom"];
        var payLineTop = [1, 4, 8, 10, 13, "down"];
        var payLineBottom = [3, 6, 8, 12, 15, "up"];
        arrays.push(top, middle, bottom, payLineTop, payLineBottom);
        posArray = arrays[Math.floor(Math.random() * arrays.length)];
        return posArray;
    };

    var winSpin = function() {
        var winArray = [];
        winArray = mainSlotArr.splice(0);
        winArrays();
        //posArray = [3, 6, 8, 12, 15, "up"];
        winIcon = winArray[Math.floor(Math.random() * winArray.length)];
        toDel = winArray.indexOf(winIcon);
        winArray.splice(toDel, 1);
        slotArr1 = winArray.slice(0);
        slotArr2 = winArray.slice(0);
        slotArr3 = winArray.slice(0);
        shuffle(slotArr1);
        shuffle(slotArr2);
        shuffle(slotArr3);
        //shuffleArrays();
        createSlots();

    }
    var removeSlots = function() {

        for (var i = reelContainer.children.length - 1; i >= 0; i--) {
             reelContainer.removeChild(reelContainer.children[i]);
             slotContainerArr.splice(slotContainerArr.indexOf(slotContainerArr[i]), 1);

        }
    };


    var moveBlur = function() {
        if (spinning) {
            for (var i = 0; i < blurArray.length; i++) {
                if (blurArray[i].y == blurArray[i].endY) {
                    blurArray[i].y = blurArray[i].startY
                }
                blurArray[i].y += blurSpeed;

            }
        }
    };
    var createSlots = function() {
        var counter = 0;
        var slot;
        var toDel;
        var delay = 0.2;
        var blurFilter1 = new PIXI.filters.BlurFilter();
        blurContainer.alpha = 0;
        spinning = false;
        removeSlots();

        for (var i = 0; i < SLOT_NUMBER; i++) {
            
            var slotContainer = new PIXI.Container();
            slotContainer.width = 100;
            slotContainer.height = 300;
            slotContainer.y = slotPaddingTop;
            slotContainer.x = i * slotPaddingRight + pushSlotsRight;
            slotContainer.alpha = 1;
            slotContainerArr.push(slotContainer);
            reelContainer.addChild(slotContainer);

            for (var j = 0; j < 3; j++) {
                delay = i * 0.5;
                counter++;
                slot = new PIXI.extras.TilingSprite();
                
                if (i == 0 || i == 1) {
                    if (counter == posArray[0] || counter == posArray[1]) {
                        slot.texture = winIcon;
                    } else {
                        slot.texture = slotArr1[j];
                        toDel = slotArr1.indexOf(slotArr1[j]);
                        slotArr1.splice(toDel, 1);
                    }

                } else if (i == 2 || i == 3) {
                    if (counter == posArray[2] || counter == posArray[3]) {
                       slot.texture = winIcon;
                    } else {
                        slot.texture = slotArr2[j];
                        toDel = slotArr2.indexOf(slotArr2[j]);
                        slotArr2.splice(toDel, 1);
                    }
                } else {
                    if (counter == posArray[4]) {
                        slot.texture = winIcon;
                    } else {
                        slot.texture = slotArr3[j];
                        toDel = slotArr3.indexOf(slotArr3[j]);
                        slotArr3.splice(toDel, 1);
                    }
                }
                slot.width = 200;
                slot.height = 200;
                slot.scale.y = slot.scale.x = .5;
                endY = j * (slot.height / 2);
                slot.y = endY - 30;
                slot.endY = endY;
                slot.filters = [blurFilter1];
                blurFilter1.blur = 10;
                TweenMax.to(slot, delay, { y: slot.endY, ease: Bounce.easeOut, onComplete: function() {
                        blurFilter1.blur = 0;
                        slot.filters = null;
                    }
                });

                slotContainerArr[i].addChild(slot);

            }

            checkIfWon(counter);

        }

    };

    var checkIfWon = function(counter) {
     var t2
        if (spins != 3) {
            //if you have not won play try again txt
            if (!firstTime) {
				 var t1 = TweenMax.delayedCall(1.5, btnPulse ,[btn]);
                 tweenArray.push(t1);
				btnClicked = false;
                var t = TweenMax.delayedCall(1, function() {
					
					if(spins==1){
                     t2 = TweenMax.to(tryAgain1, 0.5, { alpha: 1, onComplete: addListeners });
					}if(spins==2){
						 t2 = TweenMax.to(tryAgain2, 0.5, { alpha: 1, onComplete: addListeners });
					}
                    tweenArray.push(t2);
                });
                tweenArray.push(t);
            }
        } else if (spins == 3) { //You've won!!
            playWinAnims();
			TweenMax.delayedCall(1.5, function(){TweenMax.to(reelContainer, 1, { alpha: 0 })})
             TweenMax.delayedCall(1.7, youWonAnim);
            //tweenArray.push(t);
        }
        //Call btnPulse animation
        if (counter == 15 && firstTime) {
            var t1 = TweenMax.delayedCall(1.5, btnPulse ,[btn]);
            tweenArray.push(t1);
            firstTime = false;
        }

    };
	
    var winFrame = function() {
		tweenArray = [];
		btnClicked = false;
        
        TweenMax.to(winMsg, 0.7, { alpha: 1, onComplete: addListeners })
		btnPulse(ctaContainer);
    };
	
    var playWinAnims = function() {

        lepSprite.play();
        lepLaugh.play();
        lepPlaying = true;
        payLineAnim();
    };
    var lepLoop = function() {

        if (lepPlaying) {
            if (lepSprite.currentFrame == 24) {

                lepSprite.animationSpeed = -lepSpeed;

            }
            if (lepSprite.currentFrame == 20) {

                lepSprite.animationSpeed = 0.07;

            }
        }
    };

    var payLineAnim = function() {

        //for(i = 0; i < loopArray.length; i++){
        var payLine;
        var count = 0;
        if (posArray[5] == "top" || posArray[5] == "middle" || posArray[5] == "bottom") {
            payLine = new PIXI.Sprite(mloader.resources.straight.texture);
          

            if (posArray[5] == "top") {
                payLine.y = 70;
            } else if (posArray[5] == "middle") {
                payLine.y = 170;
            } else if (posArray[5] == "bottom") {
                payLine.y = 270;
            }

            
        } else if (posArray[5] == "up") {
            payLine = new PIXI.Sprite(mloader.resources.up.texture);
            payLine.y = 220;
        } else if (posArray[5] == "down") {
            payLine = new PIXI.Sprite(mloader.resources.down.texture);
            payLine.y = 110;

        }
        payLine.pivot.set(payLine.width/2, payLine.height/2);
        payLine.x =  ReelContainersWidth/2 + pushPayline; //position to reelContainer
        payLine.alpha = 0;
        reelContainer.addChild(payLine);
        var loopPayline = function() {

            if (count != 4) {
                TweenMax.to(payLine, 0.5, {alpha: 1, onComplete: function() {
                        TweenMax.to(payLine, 0.5, { alpha: 0, onComplete: function() { count++; loopPayline(); }})
                    }})
                }
            };

        loopPayline()
      TweenMax.to(spinBtn, 0.5, { alpha: 0 });
    };


    function shuffle(array) {
        var currentIndex = array.length,
            temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }

	 var getRandomNum = function(min, max, hasDecimal, belowOne) {
        if (hasDecimal) {
            return Math.floor(Math.random() * 100) / 100 + 1;
        } else if (belowOne) {
            return Math.random() * (max - min) + min;

        } else {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
    };
	
	
    function animate() {

        lepLoop()
        moveBlur();
        requestAnimationFrame(animate);
        renderer.render(stage);

    }
}