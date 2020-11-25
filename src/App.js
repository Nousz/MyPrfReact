import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import LoginPage from './pages/loginPage/loginPage.component';
import RegisterPage from './pages/registerPage/registerPage.component';
import ProfilePage from './pages/profilePage/profilePage.component';


import './App.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <LoginPage />
          </Route>
          <Route path="/register">
            <RegisterPage />
          </Route>
          <Route path="/profile">
            <ProfilePage />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
