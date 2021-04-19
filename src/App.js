import logo from './logo.svg';
import React from 'react';
import './App.css';
import { createContext, useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from './component/Login/Login';
import Home from './component/Home/Home/Home';
import Header from './component/Home/Header/Header';
import NoMatch from './component/NoMatch/NoMatch';
import Dashboard from './component/Dashboard/Dshboard/Dashboard';
import ServiceDetails from './component/Home/ServiceDetails/ServiceDetails';
import AddService from './component/Dashboard/AddService/AddService';
import PrivateRoute from './component/privateRoute/PrivateRoute';
import BookingList from './component/Dashboard/BookingList/BookingList';
import Review from './component/Dashboard/Dshboard/Review/Review';
import OrderList from './component/Dashboard/OrderList/OrderList';
import MakeAdmin from './component/Dashboard/MakeAdmin/MakeAdmin';
import ManageService from './component/Dashboard/ManageService/ManageService';

export const UserContext = createContext()
function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  console.log('data is ', loggedInUser);
  const [isAdmin, setIsAdmin] = React.useState(false)

  useEffect(() => {
    fetch('http://localhost:9000/isAdmin', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ email: loggedInUser.email })
    })
      .then(res => res.json())
      .then(res => setIsAdmin(res))
  }, [])

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>
          <PrivateRoute path="/admin">
            <Dashboard />
          </PrivateRoute>

          <PrivateRoute path="/addService">
            <AddService />
          </PrivateRoute>
          <PrivateRoute path="/orderList">
            <OrderList />
          </PrivateRoute>
          <PrivateRoute path="/makeAdmin">
            <MakeAdmin />
          </PrivateRoute>
          <PrivateRoute path="/manageService">
            <ManageService />
          </PrivateRoute>
          <PrivateRoute path="/service/book">
            <ServiceDetails />
          </PrivateRoute>
          <PrivateRoute path="/book/booklist">
            <BookingList />
          </PrivateRoute>
          <PrivateRoute path="/book/review">
            <Review />
          </PrivateRoute>
          <PrivateRoute path="/details/:id">
            <ServiceDetails />
          </PrivateRoute>

          <Route path="/login">
            <Login />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>

    </UserContext.Provider>
  );
}

export default App;
