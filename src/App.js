import React from 'react';
import {Route, Switch} from 'react-router';
import './App.scss';
import Header from './components/header/Header';
import HomePage from './pages/homepage/HomePage'
import ShopPage from './pages/shop/ShopPage';
import LoginRegister from "./pages/login-register/LoginRegister";

function App() {
    return (
        <div className="App">
            <Header/>
            <Switch>
                <Route exact path='/' component={HomePage}/>
                <Route path='/shop' component={ShopPage}/>
                <Route path='/login' component={LoginRegister}/>
            </Switch>
        </div>
    );
}

export default App;
