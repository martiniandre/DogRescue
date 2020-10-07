import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

/* import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register' */
const Home = lazy(() => import('../pages/Home'));
const Login = lazy(() => import('../pages/Login'));
const Register = lazy(() => import('../pages/Register'));
const Groups = lazy(() => import('../pages/Groups'));
const Favorites = lazy(() => import('../pages/Favorites'));
const Dogs = lazy(() => import('../pages/Dogs'));

const Routes = () => (
  <Router>
    <Switch>
      <Suspense fallback={<h3>Loading...</h3>}>
        <Route path="/" exact component={Home} />
        <Route path="/login/" exact component={Login} />
        <Route path="/groups" exact component={Groups} />
        <Route path="/register/" exact component={Register} />
        <Route path="/dogs/" exact component={Dogs} />
        <Route path="/favorites/" exact component={Favorites} />
      </Suspense>
    </Switch>
  </Router>
);

export default Routes;
