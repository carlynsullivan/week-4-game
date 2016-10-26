// define variables and functions:
// can arrays include variables?
// var characters = []

// function pickDefender() {
// 	$(".enemiesAvail > .r2d2").on("click", function() {
// 		(this).appendTo(".defender");
// 	});
// }

//game initialized at beginning and for restart
// var gameStart {

// }
// var r2d2 = {name: "r2d2",hp: 120, damage: 8},
// var	c3po = {name: "r2d2",hp: 140, damage: 5},
// var chewy = {name: "r2d2",hp: 160, damage: 10},
// var yoda = {name: "r2d2",hp: 180, damage: 25};




//no javascript until page loads
$(document).ready(function() {
	//selecting user character
function selectChar() {
	if ($(".character").hasClass("r2d2")) {
			$(".c3po, .chewy, .yoda").removeClass("character").addClass("enemy").appendTo(".enemiesAvail").css("background-color", "red");
			// console.log($(".enemiesAvail").html());
		//clicking c3po moves other 3 down a div
		} else if ($(".character").hasClass("c3po")) {
			$(".r2d2, .chewy, .yoda").removeClass("character").addClass("enemy").appendTo(".enemiesAvail").css("background-color", "red");
			// console.log($(".enemiesAvail").html());
		//clicking chewy moves other 3 down a div
		} else if ($(".character").hasClass("chewy")) {
			$(".r2d2, .c3po, .yoda").removeClass("character").addClass("enemy").appendTo(".enemiesAvail").css("background-color", "red");
			// console.log($(".enemiesAvail").html());
		//clicking yoda moves other 3 down a div
		} else if ($(".character").hasClass("yoda")) {
			$(".r2d2, .c3po, .chewy").removeClass("character").addClass("enemy").appendTo(".enemiesAvail").css("background-color", "red");
			// console.log($(".enemiesAvail").html());
		}
};

function selectDefender() {
	//clicking r2d2 moves r2d2 down a div
		if ($(".enemy").hasClass("r2d2")) {
			$(".r2d2").removeClass("enemy").addClass("defender").appendTo(".defenderHolder").css({"background-color": "black", "color": "gold"});
			console.log($(".defender").html());
		//clicking c3po moves c3po down a div
		} else if ($(".enemy").hasClass("c3po")) {
			$(".c3po").removeClass("enemy").addClass("defender").appendTo(".defenderHolder").css({"background-color": "black", "color": "gold"});
			console.log($(".defender").html());
		//clicking chewy moves chewy down a div
		} else if ($(".enemy").hasClass("chewy")) {
			$(".chewy").removeClass("enemy").addClass("defender").appendTo(".defenderHolder").css({"background-color": "black", "color": "gold"});
			console.log($(".defender").html());
		//clicking yoda moves yoda down a div
		} else if ($(".enemy").hasClass("yoda")) {
			$(".yoda").removeClass("enemy").addClass("defender").appendTo(".defenderHolder").css({"background-color": "black", "color": "gold"});
			console.log($(".defender").html());
		}
	};

	// "div.yourCharacter > div.img > img"
	$(".character").on("click", function() {		
		selectChar();
		console.log($(".enemiesAvail").html());
	});


	// 	//clicking r2d2 moves other 3 down a div
	// 	if ($(this).hasClass("r2d2")) {
	// 		$(".c3po, .chewy, .yoda").removeClass("character").addClass("enemy").appendTo(".enemiesAvail").css();
	// 		console.log($(".enemiesAvail").html());
	// 	//clicking c3po moves other 3 down a div
	// 	} else if ($(this).hasClass("c3po")) {
	// 		$(".r2d2, .chewy, .yoda").removeClass("character").addClass("enemy").appendTo(".enemiesAvail");
	// 		console.log($(".enemiesAvail").html());
	// 	//clicking chewy moves other 3 down a div
	// 	} else if ($(this).hasClass("chewy")) {
	// 		$(".r2d2, .c3po, .yoda").removeClass("character").addClass("enemy").appendTo(".enemiesAvail");
	// 		console.log($(".enemiesAvail").html());
	// 	//clicking yoda moves other 3 down a div
	// 	} else if ($(this).hasClass("yoda")) {
	// 		$(".r2d2, .c3po, .chewy").removeClass("character").addClass("enemy").appendTo(".enemiesAvail");
	// 		console.log($(".enemiesAvail").html());
	// 	};
	// });
	
	// $('.enemiesAvail').children('.enemy').on("click", function() {
	$(document).on("click", ".enemy", function() {
		selectDefender();
	});

	// function minus(x, y) {
	// 	x - y;
	// }

	// function attack() {
	// 	if ($(".character").hasClass("r2d2").parseInt("r2d2.hp"); {
	// 		$(".defender").val().parseInt(".val");
	// 		hp = $("button.hp").innerHTML();

	// 	}
	// };

	// $(".attack").on("click", function() {
	// 	if $(".character").hasClass("r2d2")
	// 		attack();
	});

	// 	//clicking r2d2 moves r2d2 down a div
	// 	if ($(".enemy").hasClass("r2d2")) {
	// 		$(".enemy").appendTo(".defender")
	// 		console.log($(".defender").html());
	// 	//clicking c3po moves c3po down a div
	// 	} else if ($(".enemy").hasClass("c3po")) {
	// 		$(".enemy").appendTo(".defender");
	// 		console.log($(".defender").html());
	// 	//clicking chewy moves chewy down a div
	// 	} else if ($(".enemy").hasClass("chewy")) {
	// 		$(".enemy").appendTo(".defender");
	// 		console.log($(".defender").html());
	// 	//clicking yoda moves yoda down a div
	// 	} else if ($(".enemy").hasClass("yoda")) {
	// 		$(".enemy").appendTo(".defender");
	// 		console.log($(".defender").html());
	// 	}
	// });
// };


	// 	}
	// });



//pseudocoding

// player clicks a player to be their character.
// other 3 character options move down to enemeies available div.
// player clicks an enemy.
// selected enemy moves down to defender div.

// attack button is clicked to begin attacking.
// counterattack is carried out.
// continue clicking attack until game over or defender is defeated.

// if game over, restart game.

// if defender is defeated, pick another enemy to move down to defender.

// math considerations:
// when attack is clicked, defender hp is decreased by user's character.
// each time attack is clicked, user's character attack amount increases exponentially. (pow)
// defender's counter attack is always the same amount.
// each player has a different beginning level hp.

