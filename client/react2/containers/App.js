import React from 'react';
import { createStore } from 'redux';
import allReducers from '../reducers';
import { Provider } from 'react-redux';
import axios from 'axios';
import {Grid, Row } from 'react-bootstrap';

import CurrentCardContainer from './CurrentCardContainer';
import CurrentCardEditor from './CurrentCardEditor';
import Header from './Header';
import TemplateContainer from './TemplateContainer';

const store= createStore(allReducers);

class App extends React.Component {
	constructor(){
		super()
	}

	render(){
		return(
			<Provider store={store}>
			<Grid id ='main-app'>
				<Row>
				<Header/>
				</Row>
				<Row>
				<CurrentCardEditor/>
				<CurrentCardContainer/>
				</Row>
				<TemplateContainer/>
			</Grid>
			</Provider>
		)
	}
}

export default App;