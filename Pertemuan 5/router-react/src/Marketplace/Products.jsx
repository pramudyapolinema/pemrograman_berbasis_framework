import React, { Component } from "react";
import { BrowserRouter as Router, Link, Switch, Route, useHistory, Redirect, useLocation } from "react-router-dom";
import './Products.css';

class Products extends Component {
    render() {
        return (
            <div>
                <Router>
                <section className="section-products">
                    <div className="container">
                        <div className="row justify-content-center text-center">
                            <div className="col-md-8 col-lg-12">
                                <div className="header">
                                    <h3>Featured Product</h3>
                                    <h2><Link to="/popular">Popular Products</Link> || <Link to="/random">Random Products</Link></h2>
                                </div>
                            </div>
                        </div>
                        <Switch>
                            <Route exact path="/">
                                <Popular/>
                            </Route>
                            <Route path="/popular">
                                <Popular/>
                            </Route>
                            <Route path="/random">
                                <Random/>
                            </Route>
                        </Switch>
                    </div>
                </section>
                <hr />
                </Router>
            </div>
        )
    }
}

export default Products;

function Popular(){
    return(
        <div className="row">
            <Item number="product-1" name="Sepatu" price="250.000" image="https://source.unsplash.com/random/300x300/?shoe" />
            <Item number="product-2" name="Baju" price="150.000" image="https://source.unsplash.com/random/300x300/?shirt" />
            <Item number="product-3" name="Topi" price="350.000" image="https://source.unsplash.com/random/300x300/?hat" />
            <Item number="product-4" name="Celana" price="450.000" image="https://source.unsplash.com/random/300x300/?trouser" />
        </div>
    )
}

function Random(){
    return(
        <div className="row">
            <Item number="product-1" name="Handphone" price="2.500.000" image="https://source.unsplash.com/random/300x300/?handphone" />
            <Item number="product-2" name="Laptop" price="15.000.000" image="https://source.unsplash.com/random/300x300/?laptop" />
            <Item number="product-3" name="Topi" price="350.000" image="https://source.unsplash.com/random/300x300/?hat" />
            <Item number="product-4" name="Celana" price="450.000" image="https://source.unsplash.com/random/300x300/?trouser" />
        </div>
    )
}

const Item = (props) => {
    return (
        <div className="col-md-6 col-lg-4 col-xl-3">
            <div id={props.number} className="single-product">
                <div className="part-1" style={{ background: `url('${props.image}') center no-repeat`}}>
                    {/* <span className="discount">{props.discount}% off</span>
                    <span className="new">New</span> */}
                    <ul>
                        <li><a href="#"><i className="fas fa-shopping-cart"></i></a></li>
                        <li><a href="#"><i className="fas fa-heart"></i></a></li>
                        <li><a href="#"><i className="fas fa-plus"></i></a></li>
                        <li><a href="#"><i className="fas fa-expand"></i></a></li>
                    </ul>
                </div>
                <div className="part-2">
                    <h3 className="product-title">{props.name}</h3>
                    <h4 className="product-price">Rp{props.price}</h4>
                </div>
            </div>
        </div>
    )
}