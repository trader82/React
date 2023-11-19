
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter ,Switch , Route, Link } from 'react-router-dom';
import './app.scss';

import App from './components/App';
import Sticker from './components/Sticker';

const Root = () => (
	<BrowserRouter>
		<div>
			<Route exact path="/" component={Sticker}/>
			<Route path="/store/:storeId" component={App}/>
		</div>
	</BrowserRouter>
);

render(<Root/>,document.querySelector("#app"));
