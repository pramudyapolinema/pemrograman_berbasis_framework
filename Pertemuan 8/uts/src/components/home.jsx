import React, { Component } from "react";
import Products from "../Marketplace/Products";
import Profiles from "../Marketplace/Profiles";
import Cart from "./cart";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

class Marketplace extends Component {
    render() {
        return (
            <div>
                <Router>
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                        <div className="container-fluid">
                            <a className="navbar-brand" href="#">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/512px-Bootstrap_logo.svg.png"
                                    alt="" width="30" height="24" className="d-inline-block align-text-middle" />
                                Marketplace
                            </a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
                                aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <Navigation />
                        </div>
                    </nav>
                    <Switch>
                        <Route exact path="/"><Home /></Route>
                        <Route path="/profile"><Profile /></Route>
                        <Route path="/cart"><Carts /></Route>
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default Marketplace;

function Navigation() {
    return (
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/" className="nav-link" aria-current="page">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/cart" className="nav-link">Cart</Link>
                </li>
                <li className="nav-item">
                    <Link to="/profile" className="nav-link">Profile</Link>
                </li>
            </ul>
        </div>
    );
}

function Home() {
    return (
        <div><Products /></div>
    );
}

function Profile() {
    return (
        <div>
            <Profiles />
        </div>
    );
}

function Carts() {
    return (
        <div>
            <Cart />
        </div>
    )
}