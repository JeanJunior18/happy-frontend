import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CreateOrphanage from './pages/CreateOrphanage';
import Landing from './pages/Landing';
import Orphanage from './pages/Orphanage';
import OrphanagesMap from './pages/OrphanagesMap';

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/app" component={OrphanagesMap} />
        <Route exact path="/orphanage/create" component={CreateOrphanage} />
        <Route exact path="/orphanage/:id" component={Orphanage} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;