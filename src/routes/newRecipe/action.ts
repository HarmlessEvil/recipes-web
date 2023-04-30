import {ActionFunctionArgs, redirect} from "react-router-dom";
import {createRecipe, CreateRecipeInput} from "sdk/recipes.ts";

export const action = async ({request}: ActionFunctionArgs) => {
  const formData = await request.formData()
  const data = Object.fromEntries(formData) as unknown as CreateRecipeInput

  const recipe = await createRecipe(data)
  return redirect(`/recipes/${recipe.id}`)
}
