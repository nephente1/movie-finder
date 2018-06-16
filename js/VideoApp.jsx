import React from 'react';
import { render } from 'react-dom';
import Landing from './Landing.jsx';
import Homepage from './homepage.jsx';
import {BrowserRouter, Route, Switch } from 'react-router-dom';

const FourOFour = () => (
    <div><h1>error 404</h1></div>
)

const App = () => (
    <BrowserRouter>
    <div className="app">
    <Switch>
        <Route exact path="/" component={Homepage}/>
        <Route path="/search" component={Landing}/>
        <Route component={FourOFour}/>
        </Switch>
    </div>
    </BrowserRouter>
    );


render(<App />, document.getElementById('app'));