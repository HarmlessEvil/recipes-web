import {Recipe} from "models";
import {fetchAndThrowIfNotSuccess} from "sdk/fetch.ts";

export const getRecipes = (): Promise<Recipe[]> => fetchAndThrowIfNotSuccess('http://localhost:8080/recipes')

export type CreateRecipeInput = Omit<Recipe, 'id'>

export const createRecipe = (recipe: CreateRecipeInput): Promise<Recipe> => fetchAndThrowIfNotSuccess('http://localhost:8080/recipes', {
  method: 'POST',
  body: JSON.stringify(recipe)
})

export const getRecipe = (id: string): Promise<Recipe> => fetchAndThrowIfNotSuccess(`http://localhost:8080/recipes/${id}`)
