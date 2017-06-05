import { combineReducers } from 'redux';
import reduceCurrentCard from './reduceCurrentCard';
import reduceUser from './reduceUser';
import reduceTemplates from './reduceTemplates';


const allReducers = combineReducers({
	user: reduceUser,
	card: reduceCurrentCard,
	templates: reduceTemplates
})

export default allReducers;