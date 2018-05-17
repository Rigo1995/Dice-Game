
//who ever has 3 sums of even numbers within five turns wins!
//if no one get the 3 sets of sum numbers its a tie 

function getRandomNumbers() {
	
	let randomNumbersArray = [];
	let numberOfRolls;
	let i;
	 
	
	numberOfRolls = prompt("How Many Times Do You Want To Roll The Dice?");
	numberOfSides = prompt("How Many Sides Does The Dice Have?") 
		
	for (i=1; i <= numberOfRolls; i++) {
		let randomNumber = Math.floor(Math.random() * numberOfSides) + 1;
		randomNumbersArray.push(randomNumber);
		document.writeln(randomNumber+"<br>"); 
	}

    return randomNumbersArray;  
}
	
// console.log(getRandomNumbers());

function addNumbersInArray(arr){
 let sum = 0;
 for (let i = 0;i < arr.length; i++){
  	sum += arr[i];
  	console.log(sum); 
 	}
 	return sum; 
 }

function runGame (){
	let randomNumbersArray = getRandomNumbers(); 
	let sum = addNumbersInArray(randomNumbersArray);
	console.log("The sum is " + sum);

	if (sum % 2 === 0){ 
		

		
	} 
	else(sum % 1 === 0) 
		
	}
	



runGame();