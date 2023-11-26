// Import necessary modules
const axios = require('axios');

// Function to fetch recipe data from spoonacular API
async function fetchRecipeData() {
  try {
    const response = await axios.get('https://api.spoonacular.com/recipes/random?apiKey=YOUR_API_KEY');
    const recipeData = response.data;
    return recipeData;
  } catch (error) {
    console.log('Error fetching recipe data:', error);
    return null;
  }
}

// Function to display recipe to the user
function displayRecipe(recipe) {
  console.log('Recipe:');
  console.log('Title:', recipe.title);
  console.log('Ingredients:', recipe.ingredients);
  console.log('Instructions:', recipe.instructions);
}

// Function to fetch and display a food recipe
async function fetchAndDisplayRecipe() {
  const recipeData = await fetchRecipeData();
  if (recipeData) {
    const recipe = {
      title: recipeData.title,
      ingredients: recipeData.ingredients,
      instructions: recipeData.instructions,
    };
    displayRecipe(recipe);
  }
}

// Export the fetchAndDisplayRecipe function
module.exports = {
  fetchAndDisplayRecipe,
};