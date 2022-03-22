import React, { Component } from "react";
import { BrowserRouter as Router, Link, Switch, Route, useHistory, Redirect, useLocation } from "react-router-dom";
import './Profiles.css';

export default function Profiles() {
    return (
        <Router>
            <Switch>
                <Route path="/login">
                    <LoginPage />
                </Route>
                <PrivateRoute path="/profile">
                    <ProtectedPage />
                </PrivateRoute>
            </Switch>
        </Router>
    );
}

const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb) {
        fakeAuth.isAuthenticated = true;
        setTimeout(cb, 100);
    },
    signout(cb) {
        fakeAuth.isAuthenticated = false;
        setTimeout(cb, 100);
    }
};

function AuthButton() {
    let history = useHistory();

    return fakeAuth.isAuthenticated ? (
        <p>
            Welcome!{" "}
            <button onClick={() => {
                fakeAuth.signout(() => history.push("/"));
            }}>Sign Out</button>
        </p>
    ) : (
        <p>You are not logged in</p>
    );
}

function PrivateRoute({ children, ...rest }) {
    return (
        <Route {...rest} render={({ location }) =>
            fakeAuth.isAuthenticated ? (
                children
            ) : (
                <Redirect to={{
                    pathname: "/login",
                    state: { from: location }
                }}
                />
            )
        }
        />
    );
}

function ProtectedPage() {
    let history = useHistory();
    return (
        <div class="wrapper">
            <div class="profile">
                <div class="overlay">
                    <div class="about d-flex flex-column">
                        <h4>Welcome!</h4> <span>Pramudya Wibowo<br /></span>
                    </div>
                    <ul class="sign-icons">
                        <li onClick={() => {
                            fakeAuth.signout(() => history.push("/profile"));
                        }}><i class="fas fa-sign-out-alt"></i></li>
                    </ul>
                </div>
            </div>
        </div>
        )
}

function LoginPage() {
    let history = useHistory();
    let location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };
    let login = () => {
        fakeAuth.authenticate(() => {
            history.replace(from);
        });
    };

    return (
        <div class="wrapper">
            <div class="profile">
                <div class="overlay">
                    <div class="about d-flex flex-column">
                        <h4>Sign In First!</h4> <span>This is the profile page<br />Sign In to see your profile</span>
                    </div>
                    <ul class="sign-icons">
                        <li onClick={login}><i class="fas fa-sign-in-alt"></i></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}