import React from 'react';

const Item = (props) => {
    return (
        <div className="col-md-6 col-lg-4 col-xl-3">
            <div id={props.number} className="single-product">
                <div className="part-1" style={{ background: `url('${props.image}') center no-repeat`}}>
                    {/* <span className="discount">{props.discount}% off</span>
                    <span className="new">New</span> */}
                    <ul>
                        <li><a onClick={() => props.tambahKeranjang(props.id, props.name, props.price, 1, props.image)}><i className="fas fa-shopping-cart"></i></a></li>
                        <li><a onClick={() => props.hapusProduk(props.idProduk)}><i className="fas fa-times"></i></a></li>
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

export default Item;