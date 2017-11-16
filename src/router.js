import React from 'react';
import {
	Router,
	Route
} from 'dva/router';
import Login from './routes/Login';
import Main from './routes/Main';
import Path from './routes/path';


function RouterConfig({
	history
}) {
	return (
		<Router history={history}>
		<div>
	      <Route path="/" component={Login} />
	      <Route path="/main" component={Main} />
	      <Route path="/path" component={Path} />
	      </div>
	    </Router>
	);
}

export default RouterConfig;

