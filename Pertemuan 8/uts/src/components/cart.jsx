import React, { Component } from "react";
import './cart.css';

class Cart extends Component {
    state = {
        listKeranjang: []
    }

    ambilDataProduk = () => {
        fetch('http://localhost:3002/keranjang')
            .then(response => response.json())
            .then(jsonHasilAmbilDariAPI => {
                this.setState({
                    listKeranjang: jsonHasilAmbilDariAPI
                })
            })
    }

    componentDidMount() {
        this.ambilDataProduk();
    }

    handleHapusProduk = (data) => {
        fetch(`http://localhost:3002/keranjang/${data}`, { method: 'DELETE' })
            .then(res => {
                this.ambilDataProduk()
            })
    }

    render() {
        let total = 0;
        return (
            <div className="container padding-bottom-3x mb-1">
                <h1>Keranjang Belanja</h1>
                <div className="table-responsive shopping-cart">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Product Name</th>
                                <th className="text-center">Quantity</th>
                                <th className="text-center">Subtotal</th>
                                <th className="text-center">Discount</th>
                                <th className="text-center"><a className="btn btn-sm btn-outline-danger disabled" href="#">Clear Cart</a></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.listKeranjang.map(keranjang => {
                                    total += keranjang.harga * keranjang.jumlah;
                                    return <Items key={keranjang.id} idKeranjang={keranjang.id} jumlah={keranjang.jumlah} nama={keranjang.nama} harga={keranjang.harga * keranjang.jumlah} gambar={keranjang.gambar} hapusKeranjang={this.handleHapusProduk}/>
                                })
                            }
                        </tbody>
                    </table>
                </div>
                <div className="shopping-cart-footer">
                    <div className="column text-lg">Subtotal: <span className="text-medium">Rp{total}</span></div>
                </div>
                <div className="shopping-cart-footer">
                    {/* <div className="column"><a className="btn btn-outline-secondary" href="#"><i className="icon-arrow-left"></i>&nbsp;Back to Shopping</a></div> */}
                    <div className="column"><a className="btn btn-success" href="#">Checkout</a></div>
                </div>
            </div>
        );
    }
}

export default Cart;

const Items = (props) => {
    return (
        <>
            <tr>
                <td>
                    <div className="product-item">
                        <img src={props.gambar} style={{ width: "100px" }} alt="Product" />
                        <div className="product-info">
                            <h4 className="product-title">{props.nama}</h4><span><em>Harga:</em> Rp{props.harga}</span>
                        </div>
                    </div>
                </td>
                <td className="text-center">
                    <div className="count-input">
                        <input type="number" className="form-control" value={props.jumlah} />
                    </div>
                </td>
                <td className="text-center text-lg text-medium">Rp{props.harga}</td>
                <td className="text-center text-lg text-medium">-</td>
                <td className="text-center"><a className="remove-from-cart" onClick={() => props.hapusKeranjang(props.idKeranjang)}><i className="fa fa-trash"></i></a></td>
            </tr>
        </>
    )
}