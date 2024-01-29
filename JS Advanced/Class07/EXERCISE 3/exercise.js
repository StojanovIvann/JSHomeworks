let apiUrl = `https://dummyjson.com/recipes`;

fetch(apiUrl)
.then(response => response.json())
.then(recipes => {
    console.log(recipes)
    console.log('All Deserts')
    // All deserts
    let allDeserts = (item) =>{
        let deserts = item.filter(item => item.mealType.includes('Dessert'))
        return deserts
    }
    console.log(allDeserts(recipes.recipes))


    console.log(` Recipes with more than 30 reviews`);
    // Recipes with more than 30 reviews
    let recipesWithMoreReviews = (item) =>{
        let reviews = item.filter(item => item.reviewCount > 30);
        return reviews
    }
    console.log(recipesWithMoreReviews(recipes.recipes));


    console.log(`Recipes including Cinnamon`);
    // Recipes including Cinnamon
    let usingCinnamon = (item) =>{
     let cinnamon = item.filter((item) => item.ingredients.includes('Cinnamon'))
     return cinnamon
    }
    console.log(usingCinnamon(recipes.recipes))

    
//    Recipes that are served as both Lunch and Dinner
    console.log(`Recipes that are served as both Lunch and Dinner`);
    let lunchAndDinner = (item) =>{
        // Staviv >=2 bidejki ima i recepti koji se sluzat i za dorucek rucek i vecera dokolku stoese samo ===2 dava samo za rucek i vecera 
        let recipes = item.filter(meal => meal.mealType.length >= 2 && meal.mealType.includes('Lunch' && 'Dinner'));
        return recipes;
    }
    console.log(lunchAndDinner(recipes.recipes))

    // 
    //  Ingredients for Mango Salsa Chicken
    console.log(`Ingredients for Mango Salsa Chicken`);
    let ingForMangoSalsa = (item) =>{
        let ing = item.find((item) => item.name == "Mango Salsa Chicken").ingredients
        return ing
    }
    console.log(ingForMangoSalsa(recipes.recipes))

    // Avarage calories per serving
    let avgCalories = (item) =>{
        let americanCuisine = item.filter(item => item.cuisine == `American`)
        let avgNumOfCalories = americanCuisine.reduce((a, b) => a + b.caloriesPerServing / americanCuisine.length, 0);
        return avgNumOfCalories
    }
    console.log(`The avarage calories per serving for all American cuisine recipes  is: ${avgCalories(recipes.recipes)} `)

    // Avarage cooking time
    let avgCookingTime = (item) =>{
        let pastas = item.filter(item => item.name.includes('Pasta'))
        console.log(pastas)
        let avgTime = pastas.reduce((a,b)=> a + b.cookTimeMinutes / pastas.length,0) 
        return avgTime;
    }

    console.log(`Avarage time for cooking a pasta is: ${avgCookingTime(recipes.recipes)} minutes`)
    // Lowest review recipe
    console.log('Lowest reviewed recipe')
    let lowestRevies = (item) =>{
        let lowest  = item.sort((a,b) => a.reviewCount - b.reviewCount)
        return lowest
    }
    console.log(lowestRevies(recipes.recipes)[0])
})