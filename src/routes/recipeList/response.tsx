import {Recipe} from "models";
import {getRecipes} from "sdk/recipes.ts";

export type Response = {
  recipes: Recipe[]
}

export const loader = async (): Promise<Response> => {
  const recipes = await getRecipes()
  return {recipes}
}
