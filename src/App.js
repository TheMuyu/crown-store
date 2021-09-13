import React, { useState } from 'react';
import { auth } from './firebase/FirebaseUtils';
import { Route, Switch } from 'react-router';
import './App.scss';
import Header from './components/header/Header';
import HomePage from './pages/homepage/HomePage'
import ShopPage from './pages/shop/ShopPage';
import LoginRegister from "./pages/login-register/LoginRegister"; 

function App() {
    const [currentUser, setCurrentUser] = useState(null);
    auth.onAuthStateChanged(user => { setCurrentUser(user)});
    
    return (
        <div className="App">
            <Header user={currentUser} />
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route path='/shop' component={ShopPage} />
                <Route path='/login' component={LoginRegister} />
            </Switch>
        </div>
    );
}

export default App;
