import React, { useState } from 'react';
import { auth, createUserProfileDoc } from './firebase/FirebaseUtils';
import { Route, Switch } from 'react-router';
import './App.scss';
import Header from './components/header/Header';
import HomePage from './pages/homepage/HomePage'
import ShopPage from './pages/shop/ShopPage';
import LoginRegister from "./pages/login-register/LoginRegister";

function App() {
    const [currentUser, setCurrentUser] = useState(null);
    auth.onAuthStateChanged(async userAuth => {
        if(userAuth) {
            const userRef = await createUserProfileDoc(userAuth);
            userRef.onSnapshot(snapShot => {
                setCurrentUser({
                    currentUser: {
                        id: snapShot.id,
                        ...snapShot.data()
                    }
                });
            });
            //console.log(currentUser);
        }
        else {
            setCurrentUser(null);
        }
    });

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
