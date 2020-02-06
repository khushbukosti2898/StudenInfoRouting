import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import StudentList from './studentlist';
import * as serviceWorker from './serviceWorker';
import Info from './info'
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const routing=(
    <BrowserRouter>
    <Switch>
    <Route path='/student/:id' component={Info}>
    </Route>
    <Route path='/student'>
        <StudentList />
    </Route>
    
    </Switch>
    </BrowserRouter>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
