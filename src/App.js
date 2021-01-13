import React from 'react';
import Nav from './components/Nav';
import AboutUs from './pages/AboutUs';
import OurWork from './pages/OurWork';
import ContactUs from './pages/ContactUs';
import MovieDetail from './pages/MovieDetail';

import { Switch, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import GlobalStyle from './components/GlobalStyle';

const App = () => {
	const location = useLocation();
	return (
		<div className='App'>
			<GlobalStyle />
			<Nav />
			<AnimatePresence exitBeforeEnter>
				<Switch Location={location} key={location.pathname}>
					<Route exact path='/'>
						<AboutUs />
					</Route>
					<Route path='/work'>
						<OurWork />
					</Route>
					<Route path='/work/:id'>
						<MovieDetail />
					</Route>
					<Route path='/contact'>
						<ContactUs />
					</Route>
				</Switch>
			</AnimatePresence>
		</div>
	);
};

export default App;
