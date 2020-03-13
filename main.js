var pantry = []
var recipes = []

function listPantry() {
    console.log(pantry)
}

function addToPantry(ingredient) {
    pantry.push(ingredient);
}

class Recipe {
    constructor(name, ingredients) {
        this.name = name;
        this.ingredients = ingredients
    }
}

var hummus = new Recipe("hummus", [chickpeas, tahini, garlic powder, onion powder, salt, paprika powder, olive oil]);

function listIngredients(recipe) {
    console.log(recipe.ingredients);
}

listIngredients(hummus);

function createRecipe(name, ingredients) {
    name = new Recipe(ingredients);
    recipes.push(name);
}

function highestOverlap() {
    var highestOverlapCount = 0;
    var highestOverlapName = "";
    for (x in recipes) {
        var overlap = 0;
        var i = 0;
        for (y in recipes[0]) {
            i += 1
            if (y in pantry) {
                overlap += 1;
            }
        }
        if (overlap > highestOverlapCount) {
            highestOverlapCount = overlap;
            highestOverlapName = x.name;
        }
    }
    return highestOverlapName
}
