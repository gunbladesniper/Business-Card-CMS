import { combineReducers } from 'redux';
import reduceCardEditor from './reduceCardEditor';
import reduceUser from './reduceUser';
import reduceTemplates from './reduceTemplates';

const allReducers = combineReducers({
	cards: reduceCardEditor,
	user: reduceUser,
	templates: reduceTemplates
})

export default allReducers;