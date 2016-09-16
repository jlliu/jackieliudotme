var eyesCount = 0;
	var mouthsCount = 0;
	var browsCount = 0;
	var stylesCount = 0;
	var currentStyle = "bob";
	var currentColor = "black";
	var earringsCount = 0;
	var currentEarring = "none";
$(document).ready(function(){
	// window.sr =  ScrollReveal({
	// 	origin:'right',
	// 	distance:'30px',
	// 	scale:1,
	// 	duration:600,
	// 	delay:300,
	// 	easing:"cubic"
	// });
	// sr.reveal(".text p");
	// sr.reveal(".text h2");
	// sr.reveal("#works-section h3")
	var i = 1;

	$(".work-section img").hover(function(){
		
		$(this).css("bottom","10px");
	},function(){
		$(this).css("bottom","0px");
	});
	$(".work-section .button").hover(function(){
		// console.log("button work section");
		$(this).parent().parent().find("img").css("bottom","10px");
	},function(){
		$(this).parent().parent().find("img").css("bottom","0px");
	});
	window.setInterval(function(){
		$("#speech-bubble").css("opacity","1");
	}, 4000);
	$(".chevron").click(function(){
			$('html, body').animate({
    	scrollTop: $("#about-section").offset().top
		}, 800);
	});

	$(".home-avatar-wrap, #close-button, #background-wrap").click(function(){
		$("#background-wrap, #popup").fadeToggle(150);
		$("#speech-bubble").hide();
		clearInterval(changeTitleAvatar);
	});
	
	var assets = {"eyes": ["open","closed","wink","heart-eyes"],
				  "mouths":["smile-slight","straight","frown","frown-open","smile-big"],
				  "brows":["eyebrows-slightly-up","eyebrows-worried","eyebrows-angry"],
				  // "earrings1":["hoops","pendant"],
				  "shirts":["black","pink","grid","pattern"],
				  "styles":["bob", "long", "bob2", "bob3", "pixie"],
				  "colors":["pink","brown","black"],
				  "earrings":["none","pendant","hoops","second-piercings","earrings-double-pendant","earrings-double-hoops"]
				}

	var changeTitleAvatar = setInterval(function(){
			//Picks random element in assets to change
			var types = 4;
			var type = Math.floor(Math.random()*types);
			var typesTest = ["eyes","mouths","brows","shirts"];
			var typeToChange =typesTest[type];
			if (!(["colors","earrings","styles"].indexOf(typeToChange) >= 0)){
				var possibilitiesList = assets[typeToChange];
				var elementIndex = Math.floor(Math.random()*possibilitiesList.length);
				var element = possibilitiesList[elementIndex];
				var checkElementRepeat = function(index){
					if (window[typeToChange+"Count"] == index){
						// console.log("repeating");
						var newIndex = Math.floor(Math.random()*possibilitiesList.length)
						checkElementRepeat(newIndex);
						
					} else {
						// console.log("setting");
						window[typeToChange+"Count"] = index;
						element = possibilitiesList[index];
						$("img."+typeToChange).attr("src","avatar/"+typeToChange+"/"+element+".png");
					}
				}
				checkElementRepeat(elementIndex);
			}
			
		},3000);

	$(".button.game.cycle").click(function(){
		clearInterval(changeTitleAvatar);
		
		if ($(this).hasClass("eyes")){
			eyesCount = (eyesCount + 1) % assets["eyes"].length;
		
			$("img.eyes").attr("src","avatar/eyes/"+assets["eyes"][eyesCount]+".png");
		}
		else if ($(this).hasClass("brows")){
			browsCount = (browsCount + 1) % assets["brows"].length;
			$("img.brows").attr("src","avatar/brows/"+assets["brows"][browsCount]+".png");
		}
		else if ($(this).hasClass("mouths")){
			mouthsCount = (mouthsCount + 1) % assets["mouths"].length;
			$("img.mouths").attr("src","avatar/mouths/"+assets["mouths"][mouthsCount]+".png");
		}
		else if ($(this).hasClass("style")){
			stylesCount  = (stylesCount + 1) % assets["styles"].length;
			currentStyle = assets["styles"][stylesCount];
			$("img.hair").attr("src","avatar/hair/"+currentStyle+"-"+currentColor+".png");
		}
		else if ($(this).hasClass("earring")){
			earringsCount = (earringsCount + 1) % (assets["earrings"].length) ;
			// console.log(earringsCount);
			if (earringsCount == 0){
				$("img.earring").fadeOut(300);
			} else if (earringsCount == 1){
				$("img.earring").attr("src","avatar/extra/pendant.png");
				$("img.earring").fadeIn(300);
			} else {
				$("img.earring").attr("src","avatar/extra/"+assets["earrings"][earringsCount]+".png");
			}
		}

	});



	$(".button.game").click(function(){
		clearInterval(changeTitleAvatar);

		// clearTimeout(changeTitleAvatar);
		if ($(this).hasClass("shirts")){
			for (var i=0; i<assets["shirts"].length; i++){
				if ($(this).hasClass("shirt-"+assets["shirts"][i])){
					$("img.shirts").attr("src","avatar/shirts/"+assets["shirts"][i]+".png");
				}
			}
		}
		else if ($(this).hasClass("hair-color")){
			// console.log("hair")
			for (var i=0; i<assets["colors"].length; i++){
				// console
				if ($(this).hasClass(assets["colors"][i])){
					currentColor = assets["colors"][i];
					$("img.hair").attr("src","avatar/hair/"+currentStyle+"-"+currentColor+".png");
				}
			}
			
		}

	});
	var tearState = false;
	$(".button.toggle").click(function(){
		if ($(this).hasClass("tear")){
			// console.log('tear clicked');
			$("img.tear").fadeToggle(300);
		}
		else if ($(this).hasClass("sweat")){
			$("img.sweat").fadeToggle(300);
		}
		else if ($(this).hasClass("necklace")){
			$("img.necklace").fadeToggle(300);
		}
	});
	var menuStates = ["face","hair","extra"];
	var currentMenu = "face";
	var nextIndex = 1;
	$(".right-arrow, .left-arrow").click(function(){
		if ($(this).hasClass("right-arrow")){
			nextIndex = (menuStates.indexOf(currentMenu) + 1) % menuStates.length;
			$(".left-arrow").show();
			if (nextIndex == menuStates.length - 1){
				$(".right-arrow").hide();
			}
		}
		else if ($(this).hasClass("left-arrow")){
			nextIndex = (menuStates.indexOf(currentMenu) - 1) % menuStates.length;
			$(".right-arrow").show();
			if(nextIndex == 0){
				$(".left-arrow").hide();
			}
		}
		currentMenu = menuStates[nextIndex];
		$(".menu-category").hide();
		$("."+currentMenu).show();
		$(".category-title").html(currentMenu);
	});

});