import { combineReducers } from 'redux';
import recipesReducer from '../reducers/recipesReducer';

const rootReducer = () => {
    return combineReducers({
        recipes: recipesReducer,
    })
}
export default rootReducer