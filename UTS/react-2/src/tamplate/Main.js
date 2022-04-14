import React, { Component, Suspense, useState } from 'react';
import Detail from './Detail';
import Post from './Post';

export class Main extends Component {

    state = {
        listProduk: [],
        listKeranjang: [],
        insertKeranjang: {
            id: 1,
            idbarang: "",
            nama: "",
            harga: 1,
        },
        id: 1,
        idbarang: "a",
        nama: "a",
        harga: 1,
    }

    ambilDataProDariServerAPI = () => {
        fetch(`http://localhost:3001/produk`)
            .then(response => response.json())
            .then(jsonHasilAmbilDariAPI => {
                this.setState({
                    listProduk: jsonHasilAmbilDariAPI
                })
            })

    }

    ambilDataKraDariServerAPI = () => {
        fetch(`http://localhost:3002/keranjang`)
            .then(response => response.json())
            .then(jsonHasilAmbilDariAPI => {
                this.setState({
                    listKeranjang: jsonHasilAmbilDariAPI
                })
            })

    }

    componentDidMount() {
        this.ambilDataProDariServerAPI()
        this.ambilDataKraDariServerAPI()
    }

    handleHapusKeranjang = (data) => {
        fetch(`http://localhost:3002/keranjang/${data}`, { method: 'DELETE' })
            .then(res => {
                this.ambilDataKraDariServerAPI()
            })
    }

    tambahKeranjang(){
        this.handleTambahKeranjang()
        this.handleTombolSimpan()
    }

    handleTambahKeranjang = (event) => {
        let formInsertKeranjang = { ...this.state.id, ...this.state.idbarang, ...this.state.nama, ...this.state.harga};
        let timestamp = new Date().getTime();
        formInsertKeranjang['id'] = timestamp;
        formInsertKeranjang[event.target.name] = event.target.value;
        this.setState({
            insertKeranjang: formInsertKeranjang
        })
    }

    handleTambahid = (event) => {
        let formInsertKeranjang = { ...this.state.insertKeranjang };
        let timestamp = new Date().getTime();
        formInsertKeranjang['id'] = timestamp;
        formInsertKeranjang[event.target.name] = event.target.value;
        this.setState({
            insertKeranjang: formInsertKeranjang
        })
    }

    handleTombolSimpan = () => {
        fetch('http://localhost:3002/keranjang', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.insertArtikel)
        })

            .then((response) => {
                this.ambilDataKraDariServerAPI();
            });
    }

    render() {
        return (
            <section className="page-section portfolio" id="portfolio">
                <div className="container">
                    <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Barang</h2>

                    <div className="divider-custom">
                        <div className="divider-custom-line"></div>
                        <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                        <div className="divider-custom-line"></div>
                    </div>
                    <div className="row justify-content-center">
                        {
                            this.state.listProduk.map(produk => {
                                return (
                                    <div className="col-md-6 col-lg-4 mb-5">
                                        <div className="portfolio-item mx-auto" >
                                            <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">{produk.nama}</h2>

                                            <div className="divider-custom">
                                                <div className="divider-custom-line"></div>
                                                <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                                                <div className="divider-custom-line"></div>
                                            </div>

                                            <img className="img-fluid rounded mb-5" src={produk.gambar} alt="..." />

                                            <p className="mb-4">{produk.fitur} Harga : Rp.{produk.harga}</p>
                                            <div className="post">
                                                <div className="form">
                                                    <div class="form-group">
                                                        <input type="hidden" className="form-control" id="idbarang" name="idbarang" onChange={this.handleTambahKeranjang} value={produk.id} />
                                                        <input type="hidden" className="form-control" id="nama" name="nama" onChange={this.handleTambahKeranjang} value={produk.nama} />
                                                        <input type="hidden" className="form-control" id="harga" name="harga" onChange={this.handleTambahKeranjang} value={produk.harga} />
                                                    </div>
                                                    <button type="submit" className="btn btn-primary" onClick={()=>{this.setState({idbarang:produk.id}); this.tambahKeranjang(); }}>tambah ke keranjang</button>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                    )
                            })
                        }
                </div>
            </div>
            </section >
        )
    }
}

export default Main