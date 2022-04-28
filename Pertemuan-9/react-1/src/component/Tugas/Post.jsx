import React from "react";

const Post = (props) => {
    return (
        <div className="mahasiswa">
            <div className="konten-mahasiswa">
                <div className="nim-mahasiswa">Nim : {props.nim}</div>
                <div className="nama-mahasiswa">Nama : {props.nama}</div>
                <div className="alamat-mahasiswa">Alamat : {props.alamat}</div>
                <div className="hp-mahasiswa">No.Hp : {props.hp}</div>
                <div className="angkatan-mahasiswa">Angkatan : {props.angkatan}</div>
                <div className="status-mahasiswa">Status : {props.status}</div>
                <button className="btn btn-sm btn-warning" onClick={() => props.hapusMahasiswa(props.id)}>Hapus</button>
            </div>
        </div>
    )
}
export default Post;