import React, { createContext } from "react"; 
import { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import AddAdmin from "./Components/DashBoard/AdminPanel/AddAdmin/AddAdmin";
import AddService from "./Components/DashBoard/AdminPanel/AddService/AddService";
import OrderList from "./Components/DashBoard/AdminPanel/OrderList/OrderList";
import Order from "./Components/DashBoard/UserPanel/Order/Order";
import UserReview from "./Components/DashBoard/UserPanel/UserReview/UserReview";
import UserStatus from "./Components/DashBoard/UserPanel/UserStatus/UserStatus";
import Home from "./Components/Home/Home/Home";
import Login from "./Components/Login/Login";
import NotFound from "./Components/NotFound/NotFound";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import 'bootstrap/dist/css/bootstrap.min.css';

export const UserContext = createContext();

function App() {
  const [loggedInUser, SetLoggedInUser] = useState({})
  return (
    <UserContext.Provider value = {[loggedInUser, SetLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path = '/'>
            <Home/>
          </Route>
          <Route path = '/login'>
            <Login/>
          </Route>
          <PrivateRoute path = '/dashboard'>
            <Order/>
          </PrivateRoute>
          <PrivateRoute path = '/review'>
            <UserReview/>
          </PrivateRoute>
          <PrivateRoute path = '/order-list'>
            <UserStatus/>
          </PrivateRoute>
          <PrivateRoute path = '/service-list'>
            <OrderList/>
          </PrivateRoute>
          <PrivateRoute path = '/addService'>
            <AddService/>
          </PrivateRoute>
          <PrivateRoute path = '/addAdmin'>
            <AddAdmin/>
          </PrivateRoute>
          <Route path = '*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
