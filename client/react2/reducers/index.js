import { combineReducers } from 'redux';
import reduceCardEditor from './reduceCardEditor';
import reduceUser from './reduceUser';

const allReducers = combineReducers({
  cards: reduceCardEditor,
  user: reduceUser,
})

export default allReducers;