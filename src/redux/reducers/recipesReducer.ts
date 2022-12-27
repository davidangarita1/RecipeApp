import actionTypesRecipes from '../actions/actionTypes/actionTypesRecipes'

const initialState = {
    isLoading: false,
    recipes: [],
    error: false
}

const recipesReducer = (state = initialState, { type, payload }: any) => {
    switch (type) {
        case actionTypesRecipes.LOAD_SUCCESS_RECIPES:
            return {
                ...state,
                isLoading: false,
                recipes: payload,
                error: null
            }
        case actionTypesRecipes.LOAD_FAILURE_RECIPES:
            return {
                ...state,
                isLoading: false,
                error: payload
            }
        case actionTypesRecipes.LOADING_RECIPES
        :
            return {
                ...state,
                isLoading: true,
                error: payload
            }
        default: return state
    }
}

export default recipesReducer