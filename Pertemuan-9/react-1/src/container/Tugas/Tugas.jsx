import React, { Component } from "react";
import Post from "../../component/Tugas/Post";
import './Tugas.css';

class BlogPost extends Component {
    state = {
        listMahasiswa: [],
        insertMahasiswa: {
            NIM: 1,
            nama: "",
            alamat: "",
            hp: "",
            angkatan: 1,
            status: "Aktif"
        }
    }

    ambilDataDariServerAPI = () => {
        fetch(`http://localhost:3001/mahasiswa`)
            .then(response => response.json())
            .then(jsonHasilAmbilDariAPI => {
                this.setState({
                    listMahasiswa: jsonHasilAmbilDariAPI
                })
            })

    }

    componentDidMount() {
        this.ambilDataDariServerAPI()
    }

    handleHapusMahasiswa = (data) => {
        fetch(`http://localhost:3001/mahasiswa/${data}`, { method: 'DELETE' })
            .then(res => {
                this.ambilDataDariServerAPI()
            })
    }

    handleTambahMahasiswa = (event) => {
        let formInsertMahasiswa = { ...this.state.insertMahasiswa };
        let timestamp = new Date().getTime();
        formInsertMahasiswa['id'] = timestamp;
        formInsertMahasiswa[event.target.name] = event.target.value;
        this.setState({
            insertMahasiswa: formInsertMahasiswa
        })
    }

    handleTombolSimpan = () => {
        fetch('http://localhost:3001/mahasiswa', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.insertMahasiswa)
        })

            .then((response) => {
                this.ambilDataDariServerAPI();
            });
    }


    render() {
        return (
            <div className="post-mahasiswa">
                <div className="form pb-2 border-button">
                    <div className="form-group row">
                        <label htmlFor="NIM" className="col-sm-2 col-form-label">NIM</label>
                        <div className="col-sm">
                            <input type="number" className="form-control" id="NIM" name="NIM" onChange={this.handleTambahMahasiswa} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="nama" className="col-sm-2 col-form-label">Nama</label>
                        <div className="col-sm">
                            <input type="text" className="form-control" id="nama" name="nama" onChange={this.handleTambahMahasiswa} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="alamat" className="col-sm-2 col-form-label">Alamat</label>
                        <div className="col-sm">
                            <input type="text" className="form-control" id="alamat" name="alamat" onChange={this.handleTambahMahasiswa} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="hp" className="col-sm-2 col-form-label">No.Hp</label>
                        <div className="col-sm">
                            <input type="text" className="form-control" id="hp" name="hp" onChange={this.handleTambahMahasiswa} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="angkatan" className="col-sm-2 col-form-label">Angkatan</label>
                        <div className="col-sm">
                            <input type="number" className="form-control" id="angkatan" name="angkatan" onChange={this.handleTambahMahasiswa} />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={this.handleTombolSimpan}>Simpan</button>
                </div>
                <h2>Daftar Mahasiswa</h2>
                {
                    this.state.listMahasiswa.map(Mahasiswa => {
                        return <Post key={Mahasiswa.id} id={Mahasiswa.id} nama={Mahasiswa.nama} alamat={Mahasiswa.alamat} nim={Mahasiswa.NIM} hp={Mahasiswa.hp} angkatan={Mahasiswa.angkatan} status={Mahasiswa.status} hapusMahasiswa={this.handleHapusMahasiswa} />
                    })
                }
            </div>
        )
    }
}

export default BlogPost;