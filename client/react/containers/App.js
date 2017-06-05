import React from 'react';
import { createStore } from 'redux';
import allReducers from '../reducers';
import { Provider } from 'react-redux';


import Header from './Header';
import Templates from './Templates';
import TextEdit from './TextEdit';
import CurrentCard from './CurrentCard';
require('../../public/style/app.scss');

const store = createStore(allReducers);



class App extends React.Component {
	constructor(){
		super()
	}

	render(){
		return(
			<Provider store={store}>
			<div id ='main-app'>
				<Header />
				<div className ='left-column'>
					<TextEdit/>
				</div>
				<div className='right-column'>
					<CurrentCard/>
				</div>
				<Templates />
			</div>
			</Provider>
		)
	}
}

export default App;