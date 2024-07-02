type ReceipeName = { recipes: string; };

(async () => {
    try {
      const response : Response = await fetch('https://dummyjson.com/recipes');
      const data = await response.json();
      const recipeNames : ReceipeName = data.recipes.map(r => r.name);
      console.log(recipeNames);
    } catch (error) {
      console.error(error);
    }
  })();

 