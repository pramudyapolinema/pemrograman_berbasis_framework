import React, { Component } from "react";
import Item from "./item";

class Popular extends Component {
    state = {
        listProduk: [],
        insertProduk: {
            userId: 1,
            id: 1,
            nama: "",
            harga: "",
            stok: "",
            gambar: ""
        },
        insertKeranjang: {
            userId: 1,
            id: 1,
            produkId: 1,
            jumlah: 1,
            nama: "",
            harga: ""
        }
    }

    ambilDataProduk = () => {
        fetch('http://localhost:3001/listproduk')
            .then(response => response.json())
            .then(jsonHasilAmbilDariAPI => {
                this.setState({
                    listProduk: jsonHasilAmbilDariAPI
                })
            })
    }

    componentDidMount() {
        this.ambilDataProduk();
    }

    handleTambahProduk = (event) => {
        let formInsertProduk = { ...this.state.insertProduk };
        let timestamp = new Date().getTime();
        formInsertProduk['id'] = timestamp;
        formInsertProduk[event.target.name] = event.target.value;
        this.setState({
            insertProduk: formInsertProduk
        });
    }

    handleTombolSimpan = () => {
        fetch('http://localhost:3001/listproduk', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.insertProduk)
        })
            .then((Response) => {
                this.ambilDataProduk();
            })
    }

    handleHapusProduk = (data) => {
        fetch(`http://localhost:3001/listproduk/${data}`, { method: 'DELETE' })
            .then(res => {
                this.ambilDataProduk()
            })
    }

    handleTombolKeranjang = (produkId, nama, harga, jumlah, gambar) => {
        let formInsertKeranjang = { ...this.state.insertKeranjang };
        let timestamp = new Date().getTime();
        formInsertKeranjang['id'] = timestamp;
        formInsertKeranjang['produkId'] = produkId;
        formInsertKeranjang['jumlah'] = jumlah;
        formInsertKeranjang['nama'] = nama;
        formInsertKeranjang['harga'] = harga * jumlah;
        formInsertKeranjang['gambar'] = gambar;
        fetch('http://localhost:3002/keranjang', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formInsertKeranjang)
        })
            .then((Response) => {
                this.ambilDataProduk();
            })
    }

    render() {
        return (
            <div>
                <div className="row">
                    {
                        this.state.listProduk.map(produk => {
                            return <Item stok={produk.stok} key={produk.id} name={produk.nama} price={produk.harga} image={produk.gambar} idProduk={produk.id} hapusProduk={this.handleHapusProduk} tambahKeranjang={this.handleTombolKeranjang} />
                        })
                    }
                </div>
                <hr />
                {/* <h1>Tambahkan Produk</h1>
                <br />
                <div className="form-group">
                    <label htmlFor="nama">Nama Produk</label>
                    <input type="text" className="form-control" id="nama" name="nama" placeholder="Masukkan Nama Produk" onChange={this.handleTambahProduk} />
                </div>
                <div className="form-group">
                    <label htmlFor="harga">Harga Produk</label>
                    <input type="number" className="form-control" id="harga" name="harga" placeholder="Masukkan Harga Produk" onChange={this.handleTambahProduk} />
                </div>
                <div className="form-group">
                    <label htmlFor="stok">Stok Produk</label>
                    <input type="number" className="form-control" id="stok" name="stok" placeholder="Masukkan Stok Produk" onChange={this.handleTambahProduk} />
                </div>
                <div className="form-group">
                    <label htmlFor="gambar">Gambar Produk</label>
                    <input type="text" className="form-control" id="gambar" name="gambar" placeholder="Masukkan Gambar Produk" onChange={this.handleTambahProduk} />
                </div>
                <button type="submit" onClick={this.handleTombolSimpan} className="btn btn-primary">Submit</button> */}
            </div>
        )
    }
} export default Popular;