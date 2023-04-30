import {Auth0Provider} from "@auth0/auth0-react";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import {ErrorPage} from "routes/error";
import {action as newRecipeAction, NewRecipe} from "routes/newRecipe"
import {loader as recipeLoader, RecipePage} from "routes/recipe";
import {loader as recipeListLoader, RecipeList} from "routes/recipeList";
import {Root} from "routes/root.tsx";
import './index.css'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root/>} errorElement={<ErrorPage/>}>
      <Route errorElement={<ErrorPage/>}>
        <Route index loader={recipeListLoader} element={<RecipeList/>}/>
        <Route path="recipes/new" action={newRecipeAction} element={<NewRecipe/>}/>
        <Route path="recipes/:id" loader={recipeLoader} element={<RecipePage/>}/>
      </Route>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-j4nuxe1b4qfwimjb.us.auth0.com"
      clientId="vIrjWFzDGQon1V6RU8qTHXWNR7LjVVLM"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
      <RouterProvider router={router}/>
    </Auth0Provider>
  </React.StrictMode>,
)
