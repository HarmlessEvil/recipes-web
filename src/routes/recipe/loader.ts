import {Recipe} from "models";
import {LoaderFunctionArgs} from "react-router-dom";
import {getRecipe} from "sdk/recipes.ts";

type Params = {
  id: string
}

export type Response = {
  recipe: Recipe
}

export const loader = async (args: LoaderFunctionArgs): Promise<Response> => {
  const params = args.params as Params

  const recipe = await getRecipe(params.id)
  return {recipe}
}
