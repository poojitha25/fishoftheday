import React from 'react';

import { Route, HashRouter as Router, Switch } from 'react-router-dom';

import StorePicker from './components/pages/StorePicker';
import FishStore from './components/pages/FishStore';
import StyleGuide from './components/pages/StyleGuide';
import PageNotFound from './components/pages/PageNotFound';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={StorePicker} />
        <Route path='/store/:storename' component={FishStore} />
        <Route path='/styleguide' component={StyleGuide} />
        <Route component={PageNotFound} />
      </Switch>
    </Router>
  );
}

export default App;
