import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Home from './Home';
import Reservation from './Reservation';
import Activities from './Activities';
import Commentaire from './Commentaire';
import Header from './Header';

import userEvent from '@testing-library/user-event';


const App = () => {

  return (
    <Router>
      <div className="App">
      <Header/>
      <Switch>
        <Route exact path="/ActivitePourTous">
            <Home/>
        </Route>
        <Route path="/Reservation">
            <Reservation/>
        </Route>
        <Route path="/Activities">
            <Activities/>
        </Route>
        <Route path="/Commentaire">
            <Commentaire/>
        </Route>
      </Switch>
      </div>
    </Router>
  )
}

export default App

