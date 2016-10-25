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


//no javascript until page loads
$(document).ready(function() {
	//selecting user character
	// "div.yourCharacter > div.img > img"
	$(".character").on("click", function() {		
		//clicking r2d2 moves other 3 down a div
		if ($(this).hasClass("r2d2")) {
			$(".c3po, .chewy, .yoda").removeClass("character").addClass("enemy").appendTo(".enemiesAvail");
			console.log($(".enemiesAvail").html());
		//clicking c3po moves other 3 down a div
		} else if ($(this).hasClass("c3po")) {
			$(".r2d2, .chewy, .yoda").removeClass("character").addClass("enemy").appendTo(".enemiesAvail");
			console.log($(".enemiesAvail").html());
		//clicking chewy moves other 3 down a div
		} else if ($(this).hasClass("chewy")) {
			$(".r2d2, .c3po, .yoda").removeClass("character").addClass("enemy").appendTo(".enemiesAvail");
			console.log($(".enemiesAvail").html());
		//clicking yoda moves other 3 down a div
		} else if ($(this).hasClass("yoda")) {
			$(".r2d2, .c3po, .chewy").removeClass("character").addClass("enemy").appendTo(".enemiesAvail");
			console.log($(".enemiesAvail").html());
		};
	});
	$(".enemy").on("click", function() {
		//clicking r2d2 moves r2d2 down a div
		if ($(this).hasClass("r2d2")) {
			$(this).appendTo(".defender")
			console.log($(".defender").html());
		//clicking c3po moves c3po down a div
		} else if ($(this).hasClass("c3po")) {
			$(this).appendTo(".defender");
			console.log($(".defender").html());
		//clicking chewy moves chewy down a div
		} else if ($(this).hasClass("chewy")) {
			$(this).appendTo(".defender");
			console.log($(".defender").html());
		//clicking yoda moves yoda down a div
		} else if ($(this).hasClass("yoda")) {
			$(this).appendTo(".defender");
			console.log($(".defender").html());
		}
	});
});


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

