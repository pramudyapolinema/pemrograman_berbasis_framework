import React, { Component } from "react";
import './Products.css';
import Popular from "../components/popular";

class Products extends Component {
    render() {
        return (
            <div>
                <section className="section-products">
                    <div className="container">
                        <div className="row justify-content-center text-center">
                            <div className="col-md-8 col-lg-12">
                                <div className="header">
                                    <h3>Featured Product</h3>
                                    <h2>Popular Products</h2>
                                </div>
                            </div>
                        </div>
                        <Popular />
                    </div>
                </section>
                <hr />
            </div>
        )
    }
}

export default Products;
