import {Recipe} from "components/Recipe/Recipe.tsx";
import {useLoaderData} from "react-router-dom";
import {Response} from 'routes/recipe'

export const RecipePage = () => {
  const {recipe} = useLoaderData() as Response

  return <Recipe recipe={recipe}/>
}
