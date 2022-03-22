import React, { Component } from "react";
import './Products.css';

class Products extends Component {
    render() {
        return (
            <div>
                <section className="section-products">
                    <div className="container">
                        <div className="row justify-content-center text-center">
                            <div className="col-md-8 col-lg-6">
                                <div className="header">
                                    <h3>Featured Product</h3>
                                    <h2>Popular Products</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <Item number="product-1" name="Sepatu" price="250.000" image="https://source.unsplash.com/random/300x300/?shoe"/>
                            <Item number="product-2" name="Sepatu" price="150.000" image="https://source.unsplash.com/random/300x300/?shoe"/>
                            <Item number="product-3" name="Sepatu" price="350.000" image="https://source.unsplash.com/random/300x300/?shoe"/>
                            <Item number="product-4" name="Sepatu" price="450.000" image="https://source.unsplash.com/random/300x300/?shoe"/>
                        </div>
                    </div>
                </section>
                <hr/>
            </div>
        )
    }
}

export default Products;

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