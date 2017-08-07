var mobile = function() {
    //Global assets
    var m_stage, slotLogo, m_slotBG, m_btnGlow, m_reelContainer, m_slotBlur, m_slotBlur2, requestId, m_click, m_tryAgain, m_spinBtn, m_renderer, m_cta, m_winMsg, m_blurContainer, m_t1, m_t2, m_t3, m_t4, m_t5, m_t6, m_t7, m_t8, m_t9, m_t10, m_t11, m_t12, m_t13, m_winIcon, m_slotArr1, m_slotArr2, m_slotArr3, m_SLOT_NUMBER, m_blurArray, m_blurSpriteArray, m_posArray, m_tweenArray, m_spins, m_spinning, m_blurSpeed, mReelContainersScale, mReelContainersWidth, mReelContainersHeight, mReelContainersX, mReelContainersY, m_slotPaddingRight, m_slotPaddingTop;

var mobileAssetsLoaded = false;
var m_fontObj = {}; 

var initMobile = function() {

        if (!commonAssetsLoaded) { //if commonn assets not loaded create loader object, else, just add to loader  
            mloader = new PIXI.loaders.Loader();
            // add resources
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
            mloader.add('winCTA', clientlibUrl + 'img/cta.png')
            mloader.add('logo', clientlibUrl + 'img/logo.png')
			mloader.add('sparkle', clientlibUrl + 'img/sparkle.png')
			mloader.add('joinGlow', clientlibUrl + 'img/joinGlow.png')
            commonAssetsLoaded = true;
            console.log(commonAssetsLoaded);
        }
        mloader.add('m_bg', clientlibUrl + 'img/mobile/mobileBG.png')
        mloader.add('m_straight', clientlibUrl + 'img/mobile/straight.png')
        mobileAssetsLoaded = true;

        //listen for progress
        mloader.on('progress', function(e) {
                var percnt = Math.round(e.progress);
                //loadingTxt.innerHTML  = percnt + "% of game loaded";
            })
            // load resources
        mloader.load(function(loader, resources) {
            m_stage = new PIXI.Container();
            // stage.interactive = true;
            m_spinBtn = document.createElement("button");
            m_spinBtn.setAttribute("id", "m_spin");
            TweenMax.set(m_spinBtn, {
                display: "block",
                width: "100%",
                position: "absolute",
                height: "100%",
                opacity: 0,
                cursor:"pointer"
            });
            mContainer.appendChild(m_spinBtn);
            m_renderer = new PIXI.autoDetectRenderer(450, 450, { transparent: true, view: mobile_game });
            document.getElementById("mContainer").appendChild(m_renderer.view);
            m_SLOT_NUMBER = 3;
            m_slotArr1 = [];
            m_slotArr2 = [];
            m_slotArr3 = [];
            m_blurArray = [];
            m_blurSpriteArray = [];
            m_posArray = [];
            m_mainSlotArr = [];
            m_slotContainerArr = [];
            m_blurContainerArr = [];
            m_tweenArray = [];
            m_spins = 0;
            m_spinning = false;
            m_blurSpeed = 20;
			//btnClicked = false;
            //add images to app, then add to array
            m_t1 = mloader.resources.num1.texture;
            m_t2 = mloader.resources.num2.texture;
            m_t3 = mloader.resources.num3.texture;
            m_t4 = mloader.resources.num4.texture;
            m_t5 = mloader.resources.num5.texture;
            m_t6 = mloader.resources.num6.texture;
            m_t7 = mloader.resources.num7.texture;
            m_t8 = mloader.resources.num8.texture;
            m_t9 = mloader.resources.num9.texture;
            m_t10 = mloader.resources.num10.texture;
            m_t11 = mloader.resources.num11.texture;
            m_t12 = mloader.resources.num12.texture;
            m_t13 = mloader.resources.num13.texture;
            
            m_mainSlotArr.push(m_t1, m_t2, m_t3, m_t4, m_t5, m_t6, m_t7, m_t8, m_t9, m_t10, m_t11, m_t12, m_t13);
            m_slotBlur = mloader.resources.slotBlur.texture;
            m_slotBlur2 = mloader.resources.slotBlur2.texture;
            m_blurSpriteArray.push(m_slotBlur, m_slotBlur2);

            m_spinGraphic = new PIXI.Sprite(mloader.resources.spin.texture);
            m_btnGlow = new PIXI.Sprite(mloader.resources.spinGlow.texture);
            m_slotBG = new PIXI.Sprite(mloader.resources.m_bg.texture);
            m_slotLogo = new PIXI.Sprite(mloader.resources.logo.texture);
            m_cta = new PIXI.Sprite(mloader.resources.winCTA.texture);
            m_winMsg = new PIXI.Container();
            m_stage.addChild(m_slotBG);
            m_stage.addChild(m_slotLogo);
            m_slotLogo.anchor.set(0.5, 0.5);
            mReelContainersWidth = 370;
            mReelContainersHeight = 370;
            
            
        })
        mloader.on('complete', function(e) {
            if (!mobileLoaded) {
                setup();
                mobileLoaded = true;
            }
        });
    };

    initMobile();

    function setup() {
        editSprites();
        buildBlur();
        buildReels();
        winMessage();
        setMessages();
        addBtn();
        if (!requestId) {

            requestId = requestAnimationFrame(animate);
        }

    };
var editSprites = function(){
/*****EDIT PROPERTIES FOR THIS GAME**********************************************************/
            //Edit logo sprite
            m_slotLogo.scale.x = m_slotLogo.scale.y = 1;
            m_slotLogo.x = m_renderer.width / 2;
            m_slotLogo.y = 40;
            //Use below to move the reels/slots and end message
            mReelContainersScale = .9;//control size of containers, adjusting width and height will not work
            mReelContainersX = m_renderer.width / 2;//centre the containers
            mReelContainersY = 250;
            m_slotPaddingRight = 100;//padding between slots
            m_pushSlotsRight = 40; //Push slots right, without affecting other objects in reelsContainer
            m_slotPaddingTop = 35;
	        pushPayline = 0;//push the win payLine left or right
          	//Text
	        m_winMsgY = mReelContainersY;
			m_clickY = 240;
			m_tryAgainY = 230;
	m_fontObj = { font: '22px Arial', fill:  0xe4e44a, align: 'center' , clickFont: '55px Arial', tryAgainFont: '45px Arial', small: '30px Arial' , larger: '40px Arial' };
	   }	
         

var winMessage = function(){
	var f = m_fontObj;
    var winBG = new PIXI.Graphics();
        winBG.beginFill(0xffffff, 0);
        winBG.drawRect(0, 0, mReelContainersWidth, mReelContainersHeight);
        winBG.endFill();
        m_winMsg.addChild(winBG);
        m_winMsg.pivot.set(mReelContainersWidth/2, mReelContainersHeight/2);
        m_winMsg.x = mReelContainersX;
        m_winMsg.y = m_winMsgY;
        m_winMsg.alpha = 0; 
    var centerNum = (mReelContainersWidth/2);//centre end message
    var topPadding = 90;

    var firstTxt = new PIXI.Text( gameSettings.winLine1, {font: f.small, fill: f.fill, align: f.align });
    var SecondTxt = new PIXI.Text( gameSettings.winLine2, {font: f.small, fill: f.fill, align: f.align  });
    var thirdTxt = new PIXI.Text( gameSettings.winLine3, {font: f.small, fill: f.fill, align: f.align });
    var fourthTxt = new PIXI.Text( gameSettings.winLine4, {font: f.small, fill: f.fill, align: f.align  });
	var m_joinGlow = new PIXI.Sprite(mloader.resources.joinGlow.texture);
	
	var youWonTxt = new PIXI.Text( gameSettings.youWon, { font: f.larger, fill: f.fill, align: f.align });
		//youWonTxt.anchor.set(0.5, 0.5);
		m_winContainer = new PIXI.Container();
		m_winContainer.addChild(youWonTxt);
		m_winContainer.pivot.set(m_winContainer.width/2, m_winContainer.height/2);
		m_winContainer.y = 250;
	    m_winContainer.x = 225;
		m_winContainer.alpha = 0;
	    m_stage.addChild(m_winContainer);
	
	    m_ctaContainer = new PIXI.Container();
	    m_ctaContainer.addChild(m_joinGlow)
	    m_ctaContainer.addChild(m_cta)
        m_winMsg.addChild(m_ctaContainer)
	
	
        firstTxt.anchor.set(0.5, 0.5);
        firstTxt.x = centerNum;
        firstTxt.y = topPadding;

        SecondTxt.anchor.set(0.5, 0.5);
        topPadding += 45;
        SecondTxt.x = centerNum;
        SecondTxt.y = topPadding;

        thirdTxt.anchor.set(0.5, 0.5);
        topPadding += 45;
        thirdTxt.y = topPadding;
        thirdTxt.x = centerNum;

        fourthTxt.anchor.set(0.5, 0.5);
        topPadding += 45;
        fourthTxt.x = centerNum;
        fourthTxt.y = topPadding;

        topPadding += 65;
        m_joinGlow.anchor.set(0.5, 0.5);
       // m_joinGlow.x = centerNum;
       // m_joinGlow.y = topPadding;
		m_joinGlow.alpha = 0;
        m_cta.anchor.set(0.5, 0.5);
        /*cta.x = centerNum;
        cta.y = topPadding;*/
	    m_ctaContainer.x = centerNum;
        m_ctaContainer.y = topPadding;
		m_ctaContainer.startX = m_ctaContainer.x;
		m_ctaContainer.startY = m_ctaContainer.y;
        
        m_winMsg.addChild(m_ctaContainer);
        m_winMsg.addChild(fourthTxt);
        m_winMsg.addChild(thirdTxt);
        m_winMsg.addChild(SecondTxt);
        m_winMsg.addChild(firstTxt);
        m_stage.addChild(m_winMsg);
    }

var addBtn = function(){
        m_btn = new PIXI.Container();
        m_btn.x = m_winMsg.x;
        m_btn.y = 370;
        m_btn.startY = m_btn.y;
        m_btn.startX = m_btn.x;
		m_btn.addChild(m_btnGlow);
		m_btn.addChild(m_spinGraphic)
      	m_btnGlow.scale.y = m_btnGlow.scale.x = .7;
        m_btnGlow.x = m_btnGlow.y = 1;
        m_btnGlow.alpha = 0;
	    m_spinGraphic.scale.y = m_spinGraphic.scale.x = .7;
        m_btn.pivot.set(m_btn.width/2,0);
        m_stage.addChild(m_btn);
	    btnPulse(m_btn);
		
    
}
var youWonAnim = function(){
		/*
    Build m_winContainer to hold Ypu won!
	*/
	sparkles();
	   TweenMax.to(m_winContainer, 1, {alpha:1})
		TweenMax.to(m_winContainer, 2, {width: 330, height: 70, onComplete: function(){
			TweenMax.to(m_winContainer, .6, {alpha:0, onComplete: winFrame})
		}})
	
}	
	
var sparkles = function (){
	
	for(var i = 0; i < 50; i++){
	//var num, sparkleRot, animTime, halfTime;
	var sparkle = new PIXI.Sprite(mloader.resources.sparkle.texture);
	
	    sparkle.anchor.set(0.5, 0.5);
		sparkle.x = getRandomNum(50, 400, false, false);
		sparkle.y = getRandomNum(80, 400, false, false);
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
		
		TweenMax.delayedCall(sparkle.halfTime, fadeOut,[sparkle])
		
		m_stage.addChild(sparkle);	
		
		
		}
	//
	
}	
var setMessages = function() {
	
   var f = m_fontObj;
	
		m_click = new PIXI.Text( gameSettings.clickSpin + "\n" + gameSettings.toPlay, { font: f.clickFont, fill: f.fill, align: f.align });
        m_click.anchor.set(0.5, 0.5);
        m_click.x = m_winMsg.x;
        m_click.y = m_clickY;
        m_click.alpha = 1;
        m_stage.addChild(m_click);
	
		m_tryAgain1 = new PIXI.Text(  gameSettings.badLuck + "\n" + gameSettings.tryAgainTxt1, {font: f.clickFont, fill: f.fill, align: f.align});
	    
		m_tryAgain2 = new PIXI.Text(gameSettings.badLuck + "\n" + gameSettings.tryAgainTxt2, {font: f.clickFont, fill: f.fill, align: f.align});
		
        m_tryAgain1.anchor.set(0.5, 0.5);
        m_tryAgain1.x = m_winMsg.x;
        m_tryAgain1.y = m_tryAgainY;
        m_tryAgain1.alpha = 0;
	
		m_tryAgain2.anchor.set(0.5, 0.5);
        m_tryAgain2.x = m_winMsg.x;
        m_tryAgain2.y = m_tryAgainY;
        m_tryAgain2.alpha = 0;
		m_stage.addChild(m_tryAgain2);
        m_stage.addChild(m_tryAgain1);
        addListeners();
    }

var addListeners = function() {
        if (m_spins != 3) {
            m_spin.addEventListener("click", startSpin);
            m_spin.addEventListener("touchstart", startSpin);
        } else {
            removeListeners();
            m_spin.addEventListener("click", gotoURL);
            m_spin.addEventListener("touchstart", gotoURL);
        }
    }

var removeListeners = function() {
        m_spin.removeEventListener("click", startSpin);
        m_spin.removeEventListener("touchstart", startSpin);
}

var gotoURL = function() {
           if (gameSettings.clickThroughURL!==""){
                window.location = gameSettings.clickThroughURL;
              }else{
               console.log("gameSettings.clickThroughURL");
             }
         }

var btnPulse = function(b) {
        var t, t1, t2;
		var bGlow = b.getChildAt(0);
	
        t = TweenMax.to(bGlow, .2, {alpha: 1});
        m_tweenArray.push(t);
        t1 = TweenMax.to(b, .5, {x: "-=15", y: "-=15", ease: Back.easeOut.config(1.7), onComplete: function() {
                t.reverse();
             
                TweenMax.to(b, .3, { x: b.startX, y: b.startY, ease: Back.easeOut.config(1.7), onComplete: function() {
                    
                        t.pause(0);
                        t1.pause(0);
                        t2 = TweenMax.delayedCall(.5, function() { t1.play(); t.play();})
                        m_tweenArray.push(t2);
                        
                    }
                });
             }
        });
	m_tweenArray.push(t, t1);
  };





var buildReels = function() {
        var bg = new PIXI.Graphics();
        bg.beginFill(0xffffff, 0);
        bg.drawRect(0, 0, mReelContainersWidth, mReelContainersHeight);
        bg.name = "bg";
        bg.endFill();
        m_reelContainer = new PIXI.Container();
        m_reelContainer.x = mReelContainersX;
        m_reelContainer.y = mReelContainersY;
        m_reelContainer.pivot.set(mReelContainersWidth/2, mReelContainersHeight/2);
        m_reelContainer.addChild(bg);
        m_reelContainer.scale.x = m_reelContainer.scale.y = mReelContainersScale;
        m_stage.addChild(m_reelContainer);
    };

    var buildBlur = function() {
        //setup images as tilingSprites
    var blur;
    var bg = new PIXI.Graphics();
        bg.beginFill(0xffffff, 0);
        bg.drawRect(0, 0, mReelContainersWidth, mReelContainersHeight);
        bg.name = "bg";
        bg.endFill();
        m_blurContainer = new PIXI.Container();
        m_blurContainer.x = mReelContainersX;
        m_blurContainer.y = mReelContainersY;
        m_blurContainer.pivot.set(mReelContainersWidth/2, mReelContainersHeight/2);
        m_blurContainer.addChild(bg);
        m_blurContainer.scale.x = m_blurContainer.scale.y = mReelContainersScale;
        m_blurContainer.alpha = 0;
        m_stage.addChild(m_blurContainer);
        for (var i = 0; i < m_SLOT_NUMBER; i++) {
            //randomly get blur image from array
            blur = m_blurSpriteArray[Math.floor(Math.random() * m_blurSpriteArray.length)];
            var slotContainer = new PIXI.Container();
            slotContainer.width = 100;
            slotContainer.height = 300;
            slotContainer.y = m_slotPaddingTop+10;
            slotContainer.x = i * m_slotPaddingRight + m_pushSlotsRight;
            slotContainer.alpha = 1;

            myMask = new PIXI.Graphics();
            myMask.beginFill();
            myMask.drawRect(0, 0, 100, 280)
            myMask.endFill();

            m_blurContainerArr.push(slotContainer);
            slotContainer.addChild(myMask)
            m_blurContainer.addChild(slotContainer);
            slotContainer.mask = myMask

            for (var j = 0; j < 2; j++) {
                var blurFilter = new PIXI.filters.BlurFilter();
                var blurSprite = new PIXI.extras.TilingSprite(blur, 200, 600);
                blurSprite.scale.y = blurSprite.scale.x = .5;
                blurSprite.endY = j * (blurSprite.height / 2);
                blurSprite.startY = (j * (blurSprite.height / 2)) * -1;

                if (blurSprite.startY == -300) {
                    blurSprite.startY = 0;
                } else if (blurSprite.startY == -0 || blurSprite.startY == 0) {

                    blurSprite.startY = -300;
                }
                blurSprite.y = blurSprite.startY;
                blurSprite.filters = [blurFilter];
                blurFilter.blur = 20;
                m_blurContainerArr[i].addChild(blurSprite);
                m_blurArray.push(blurSprite)
            }
        }
    };


    var loseSpin = function() {
        m_reelContainer.alpha = 1;
        // removeSlots();
        m_slotArr1 = m_mainSlotArr.slice(0);
        m_slotArr2 = m_mainSlotArr.slice(0);
        m_slotArr3 = m_mainSlotArr.slice(0);
        shuffle(m_slotArr1);
        shuffle(m_slotArr2);
        shuffle(m_slotArr3);
        createSlots();
    }
    var startSpin = function() {
		
        
       /* if (!btnClicked) {
			btnClicked = true;
            for (var i = 0; i < m_tweenArray.length; i++) {
                m_tweenArray[i].pause(0);
            }
        }*/
		m_spins++;
        m_click.alpha = 0;
        m_tryAgain1.alpha = 0;
		m_tryAgain2.alpha = 0;
		m_btn.alpha = 0;
        m_blurContainer.alpha = 1;
        m_spinning = true;
        removeSlots();

        if (m_spins == 3) {
            TweenMax.delayedCall(1, winSpin);
            removeListeners();
        } else {
            TweenMax.delayedCall(1, loseSpin);
            removeListeners();
        }
    };

    var winArrays = function() {
        var arrays = [];
        var top = [1, 4, 7, 10, 13, "top"];
        var middle = [2, 5, 8, 11, 14, "middle"];
        var bottom = [3, 6, 9, 12, 15, "bottom"];

        arrays.push(top, middle, bottom);
        m_posArray = arrays[Math.floor(Math.random() * arrays.length)];
        return m_posArray;
    }

    var winSpin = function() {
        m_reelContainer.alpha = 1;
        var winArray = [];
        winArray = m_mainSlotArr.splice(0);
        winArrays();
        //m_posArray =  [3, 6, 9, 12, 15, "bottom"];
        m_winIcon = winArray[Math.floor(Math.random() * winArray.length)];
        toDel = winArray.indexOf(m_winIcon);
        winArray.splice(toDel, 1);
        m_slotArr1 = winArray.slice(0);
        m_slotArr2 = winArray.slice(0);
        m_slotArr3 = winArray.slice(0);
        shuffle(m_slotArr1);
        shuffle(m_slotArr2);
        shuffle(m_slotArr3);
        //shuffleArrays();
        createSlots();

    }
    var removeSlots = function() {

        for (var i = m_reelContainer.children.length - 1; i >= 0; i--) {
             if(m_reelContainer.children[i].name !=="bg"){
            m_reelContainer.removeChild(m_reelContainer.children[i]);
            m_slotContainerArr.splice(m_slotContainerArr.indexOf(m_slotContainerArr[i]), 1);
            }
        };
    }


    var moveBlur = function() {
        if (m_spinning) {
            for (var i = 0; i < m_blurArray.length; i++) {
                if (m_blurArray[i].y == m_blurArray[i].endY) {
                    m_blurArray[i].y = m_blurArray[i].startY
                }
                m_blurArray[i].y += m_blurSpeed;

            }
        }
    }
    var createSlots = function() {
        var counter = 0;
        var slot;
        var toDel;
        var delay = 0.2;
        var blurFilter1 = new PIXI.filters.BlurFilter();
        m_blurContainer.alpha = 0;
        m_spinning = false;
        removeSlots();
        for (var i = 0; i < m_SLOT_NUMBER; i++) {
            var slotContainer = new PIXI.Container();
            slotContainer.width = 100;
            slotContainer.height = 300;
            slotContainer.y = m_slotPaddingTop;
            slotContainer.x = i * m_slotPaddingRight + m_pushSlotsRight;
            slotContainer.alpha = 1;
            m_slotContainerArr.push(slotContainer);
            m_reelContainer.addChild(slotContainer);
            for (var j = 0; j < 3; j++) {
                delay = i * 0.5;
                counter++;
                slot = new PIXI.extras.TilingSprite();
                if (i == 0 || i == 1) {
                    if (counter == m_posArray[0] || counter == m_posArray[1]) {
                        slot.texture = m_winIcon;
                    } else {
                        slot.texture = m_slotArr1[j];
                        toDel = m_slotArr1.indexOf(m_slotArr1[j]);
                        m_slotArr1.splice(toDel, 1);
                    }

                } else if (i == 2 || i == 3) {
                    if (counter == m_posArray[2] || counter == m_posArray[3]) {
                        slot.texture = m_winIcon;
                    } else {
                        slot.texture = m_slotArr2[j];
                        toDel = m_slotArr2.indexOf(m_slotArr2[j]);
                        m_slotArr2.splice(toDel, 1);
                    }
                } else {
                    if (counter == m_posArray[4]) {
                       slot.texture = m_winIcon;
                    } else {
                        slot.texture = m_slotArr3[j];
                        toDel = m_slotArr3.indexOf(m_slotArr3[j]);
                        m_slotArr3.splice(toDel, 1);
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
                m_slotContainerArr[i].addChild(slot);
            }

            checkIfWon(counter);
        }
    }

    var checkIfWon = function(counter) {
		var t2;
        if (m_spins != 3) {
            var t = TweenMax.delayedCall(1.7, function() {
				
				if(m_spins==1){
                     t2 = TweenMax.to([m_tryAgain1, m_btn], 0.7, { alpha: 1, onComplete: addListeners });
					}if(m_spins==2){
						t2 = TweenMax.to([m_tryAgain2, m_btn], 0.7, { alpha: 1, onComplete: addListeners });
					}
                var t3 = TweenMax.to(m_reelContainer, 0.7, { alpha: 0 });
                m_tweenArray.push(t2, t3);
			
            });
            m_tweenArray.push(t);
        } else if (m_spins == 3) { //You've won!!
            playWinAnims();
			TweenMax.delayedCall(1.5, function(){TweenMax.to(m_reelContainer, 1, { alpha: 0 })})
            TweenMax.delayedCall(1.7, youWonAnim);
        }
     

    }
    var winFrame = function() {
		
		tweenArray = [];
		//btnClicked = false;
		btnPulse(m_ctaContainer);
        TweenMax.to(m_reelContainer, 0.7, { alpha: 0 });
        TweenMax.to(m_winMsg, 0.7, { alpha: 1, onComplete: addListeners });
        TweenMax.to(m_btn, 0.7, { alpha: 0 });
    }
    var playWinAnims = function() {
        payLineAnim();
    }

var payLineAnim = function() {
    var payLine;
    var count = 0;
        payLine = new PIXI.Sprite(mloader.resources.m_straight.texture);
        payLine.pivot.set(payLine.width/2, payLine.height/2);
        payLine.x = mReelContainersWidth/2 + pushPayline; 
        payLine.alpha = 0;
        m_reelContainer.addChild(payLine);

        if (m_posArray[5] == "top") {
                payLine.y = 90;
            } else if (m_posArray[5] == "middle") {
                payLine.y = 190;
            } else if (m_posArray[5] == "bottom") {
                payLine.y = 290;
            }

        var loopPayline = function() {
            if (count != 4) {
                TweenMax.to(payLine, 0.5, { alpha: 1, onComplete: function() {
                        TweenMax.to(payLine, 0.5, { alpha: 0, onComplete: function() { count++; loopPayline(); }
                        })
                     }
                })
            }
        };
        loopPayline()
    }


    function shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;

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
        moveBlur();
        requestAnimationFrame(animate);
        m_renderer.render(m_stage);

    }
}