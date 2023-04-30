import {Recipe} from "components/Recipe/Recipe.tsx";
import {useLoaderData} from "react-router-dom";
import {Response} from "routes/recipeList/response.tsx";

export const RecipeList = () => {
  const {recipes} = useLoaderData() as Response

  return (
    <>
      {
        recipes.length ? (
          recipes.map((recipe, index) => (
            <Recipe key={`${recipe.name}-${index}`} recipe={recipe}/>)
          )
        ) : (
          <p><em>No recipes</em></p>
        )
      }
    </>
  )
}
