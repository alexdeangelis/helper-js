'use strict'

const apiUrl = "http://localhost:5000";
let randomCeil = '';
let recipes = '';

window.addEventListener('load', async function () {
	const root = document.querySelector('.root');
	const response = await fetch(`${apiUrl}/recipes`);
	recipes = await response.json();


	// Get the length of the recipes object array
	const recipesLength = Object.keys(recipes).length;
	// Get a random key from the Recipes Object Array
	const random = Math.random() * recipesLength;
	
	randomCeil = Math.ceil(random);
	console.log(randomCeil);
	// Get the random recipe
	updateRecipe(randomCeil);

})

const updateRecipe = (recipeID) => {
	const recipe = recipes[recipeID];
	if (recipe) {
		const recipeName = recipe['name'];
		console.log(recipeName);
		// Add this name to the breadcrumb
		document.querySelector('.breadcrumb p span').innerHTML = recipeName;
		// Add the name to the title
		document.querySelector('.search h1').innerHTML = recipeName;

		// Get the ingredients from the json
		const recipeIngredients = recipe['ingredients'];
		const ingredientsList = document.querySelector('.ingredients__list');
		ingredientsList.innerHTML = '';
		recipeIngredients.forEach(getIngredient);
		function getIngredient(item) {
			ingredientsList.innerHTML += "<li>" + item['display'] + "</li>";
		}

		// Get the Instructions from the json
		const recipeInstructions = recipe['instructions'];
		let instructionsList = document.querySelector('.method__list');
		instructionsList.innerHTML = '';
		// Loop through all intructions
		Object.entries(recipeInstructions).forEach(([key, val]) => {
			instructionsList.innerHTML += "<li>" + val['text'] + "</li>";
		});
	}
}


document.getElementById('previous').onclick = function() {
	getPrevious();
}
const getPrevious = () => {
	if (randomCeil == 1) {
		randomCeil = 20;
	} else {
		randomCeil = randomCeil - 1;
	}
	console.log(randomCeil);
	updateRecipe(randomCeil);
}
document.getElementById('next').onclick = function() {
	getNext();
}
const getNext = () => {
	if (randomCeil == 20) {
		randomCeil = 1;
	} else {
		randomCeil = randomCeil + 1;
	}
	
	console.log(randomCeil);
	updateRecipe(randomCeil);
}