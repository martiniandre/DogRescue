import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {AuthProvider} from '../context/auth';

const Home = lazy(() => import('../pages/Home'));
const Login = lazy(() => import('../pages/Login'));
const Register = lazy(() => import('../pages/Register'));
const Groups = lazy(() => import('../pages/Groups'));
const Dogs = lazy(() => import('../pages/Dogs'));
const AdoptionHints = lazy(() => import('../pages/AdoptionHints'));
const Adoption = lazy(() => import('../pages/Adoption'));
const Favorites = lazy(() => import('../pages/Favorites'));

const Routes = () =>{
  return(

  <AuthProvider>
     <Router>
        <Switch>
          <Suspense fallback={<h3>Loading...</h3>}>
            <Route path="/" exact component={Home} />
            <Route path="/login/" exact component={Login} />
            <Route path="/groups" exact component={Groups} />
            <Route path="/register/" exact component={Register} />
            <Route path="/dogs/:limit" exact component={Dogs} />
            <Route path="/guide/" exact component={AdoptionHints} />
            <Route path="/how-to-adopt/" exact component={Adoption} />
            <Route path="/favorites" component={Favorites}/>
          </Suspense>
        </Switch>
    </Router>
  </AuthProvider>

)};






export default Routes;
