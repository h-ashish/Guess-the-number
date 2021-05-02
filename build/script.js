'use strict'; 
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = "🎉Correct number!";

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;


// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value); 

let secretnumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;


document.querySelector('.check').addEventListener('click', function(){
	const guess = Number (document.querySelector('.guess').value);
	console.log(guess, typeof guess);

	if(!guess){
		document.querySelector('.message').textContent = "❌No Number!";
	} else if(guess === secretnumber){
		document.querySelector('.number').textContent = secretnumber;
		document.querySelector('.message').textContent = "🎉Correct number!";
		document.querySelector('body').style.backgroundColor = '#60b347';
		document.querySelector('.number').style.width = '30 rem';

		if(score > highscore){
			highscore = score;
			document.querySelector('.highscore').textContent = highscore;
		}
	} else if (guess !== secretnumber) {
	if(score >1){
			document.querySelector('.message').textContent = guess >secretnumber? "Number too High 📈" : "Number too Low 📉";
			score --;
			document.querySelector('.score').textContent = score;
		}else{
			document.querySelector('.message').textContent = "☹ You Lost the Game!";
			document.querySelector('.score').textContent = 0;
		}
	}
	// else if(guess > secretnumber){
	// 	if(score >1){
	// 		document.querySelector('.message').textContent = "Number too High 📈";
	// 		score --;
	// 		document.querySelector('.score').textContent = score;
	// 	}else{
	// 		document.querySelector('.message').textContent = "☹ You Lost the Game!";
	// 		document.querySelector('.score').textContent = 0;
	// 	}
		
	// } else if(guess < secretnumber){
	// 	if(score >1){
	// 		document.querySelector('.message').textContent = "Number too Low 📉";
	// 		score --;
	// 		document.querySelector('.score').textContent = score;
	// 	}else{
	// 		document.querySelector('.message').textContent = "☹ You Lost the Game!";
	// 		document.querySelector('.score').textContent = 0;
	// 	}
	// }
});

document.querySelector('.again').addEventListener('click', function(){
	secretnumber = Math.trunc(Math.random() * 20) + 1;
	score = 20;
	document.querySelector('.message').textContent = "Start guessing...";
	document.querySelector('.score').textContent = score;
	document.querySelector('.number').textContent = '?';
	document.querySelector('.guess').value = ' ';
	document.querySelector('body').style.backgroundColor = '#222';
	document.querySelector('.number').style.width = '15 rem';

})