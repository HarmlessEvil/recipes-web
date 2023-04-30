import {Recipe as RecipeModel} from 'models'

type Props = {
  recipe: RecipeModel
}

export const Recipe = ({recipe}: Props) => (
  <div className="recipe">
    <h4>{recipe.name}</h4>
    <ul>
      {recipe.ingredients && recipe.ingredients.map((ingredient, index) => (
        <li key={`${ingredient}-${index}`}>{ingredient}</li>
      ))}
    </ul>
  </div>
)
