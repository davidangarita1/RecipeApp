import axios from 'axios'
import { recipesLoadSuccess, recipesLoadError, recipesLoading } from '../actions/recipesActions'
import { API_URL, API_KEY, API_HOST } from '../../utils/conecction'

export const getAllRecipes = (): any => (dispatch: any) => {
    dispatch(recipesLoading())

    const options = {
        method: 'GET',
        url: `${API_URL}/recipes/list`,
        params: {from: '0', size: '20', tags: 'under_30_minutes'},
        headers: {
            'Content-Type': 'application/json',
            'X-RapidAPI-Key': API_KEY,
            'X-RapidAPI-Host': API_HOST
        }
    }

    axios.request(options).then((response) => {
        dispatch(recipesLoadSuccess(response.data))
    }).catch(function (error) {
        dispatch(recipesLoadError(error.message))
    })
}