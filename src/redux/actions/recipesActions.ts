import actionTypesRecipes from './actionTypes/actionTypesRecipes'

export const recipesLoadSuccess = (recipes: any) => {
    return {
        type: actionTypesRecipes.LOAD_SUCCESS_RECIPES,
        payload: recipes
    }
}

export const recipesLoadError = (error: any) => {
    return {
        type: actionTypesRecipes.LOAD_FAILURE_RECIPES,
        payload: error
    }
}

export const recipesLoading = () => {
    return {
        type: actionTypesRecipes.LOADING_RECIPES
    }
}