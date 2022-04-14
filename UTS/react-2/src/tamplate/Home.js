import React, { Component } from 'react'

export class Home extends Component {
    render() {
        return (
            <><section className="page-section bg-primary text-white mb-0" id="about">
                <div className="container">
                    <h2 className="page-section-heading text-center text-uppercase text-white">Tentang</h2>

                    <div className="divider-custom divider-light">
                        <div className="divider-custom-line"></div>
                        <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                        <div className="divider-custom-line"></div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 ms-auto"><p className="lead">Logic merupakan dasar dari segalanya, menurut saya semua ajaran baik buku atau kitab suci dan lain lain adalah tujuan logic, sedangkan pengajar adalah pengarah logic, dimana ini lah penyebab dimana tanpa pengajar yang tepat maka pemahaman akan berbeda</p></div>
                        <div className="col-lg-4 me-auto"><p className="lead">Menurut saya logic bagaikan achievement didalam game, dimana achievement didapat setelah mencapai sesuatu, jadi ketika kita berbuat sesuatu atau belajar sesuatu akan mendapat achievement yang berupa logic, achievement itu tidak bisa dibagi tapi kita bisa memberi tahu cara mendapat achievement tersebut</p></div>
                    </div>
                </div>
            </section></>
        )
    }
}

export default Home 