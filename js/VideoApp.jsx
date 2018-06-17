import React from 'react';
import { render } from 'react-dom';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from './Landing';
import Homepage from './homepage';

import DetailedMovie from './detailedMovie';
import data from '../data.json';

const FourOFour = () => (
    <div><h1>error 404</h1></div>
)

const App = () => (
    <BrowserRouter>
    <div className="app">
    <Switch>
        <Route exact path="/" component={Homepage}/>
        <Route path="/search" component={(props) => <Landing shows={data.shows} {...props} />}/>
        <Route path="/details/:id" component={(props)=> <DetailedMovie show={data.shows.find(item => item.imdbID === props.match.params.id)} />}/>
        <Route component={FourOFour}/>
        </Switch>
    </div>
    </BrowserRouter>
    );


render(<App />, document.getElementById('app'));