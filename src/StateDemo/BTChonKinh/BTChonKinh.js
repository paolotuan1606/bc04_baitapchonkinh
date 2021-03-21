import React, { Component } from 'react'
import RenderKinh from './RenderKinh';

export default class BTChonKinh extends Component {
    arrProduct = [
        { id: 1, price: 30, name: 'GUCCI G8850U', url2: './img/glassesImage/v1.png', url1: './img/glassesImage/g1.jpg', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
        { id: 2, price: 50, name: 'GUCCI G8759H', url2: './img/glassesImage/v2.png', url1: './img/glassesImage/g2.jpg', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
        { id: 3, price: 30, name: 'DIOR D6700HQ', url2: './img/glassesImage/v3.png', url1: './img/glassesImage/g3.jpg', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
        { id: 4, price: 30, name: 'DIOR D6005U', url2: './img/glassesImage/v4.png', url1: './img/glassesImage/g4.jpg', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
        { id: 5, price: 30, name: 'PRADA P8750', url2: './img/glassesImage/v5.png', url1: './img/glassesImage/g5.jpg', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
        { id: 6, price: 30, name: 'PRADA P9700', url2: './img/glassesImage/v6.png', url1: './img/glassesImage/g6.jpg', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
        { id: 7, price: 30, name: 'FENDI F8750', url2: './img/glassesImage/v7.png', url1: './img/glassesImage/g7.jpg', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
        { id: 8, price: 30, name: 'FENDI F8500', url2: './img/glassesImage/v8.png', url1: './img/glassesImage/g8.jpg', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
        { id: 9, price: 30, name: 'FENDI F4300', url2: './img/glassesImage/v9.png', url1: './img/glassesImage/g9.jpg', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
    ];


    state = {
        Kinh: {}



    };

    hienThiDanhSachKinh = () => {
        return this.arrProduct.map((item, index) => {
            return <img src={item.url1} style={{ width: '150px', cursor: 'pointer' }} key={index} onClick={() => {
                { this.renderKinh(item) }
            }} />

        })
    }
    renderKinh = (kinhCLick) => {

        let spKinh = {
            id: kinhCLick.id,
            price: kinhCLick.price,
            name: kinhCLick.name,
            url1: kinhCLick.url1,
            url2: kinhCLick.url2,
            desc: kinhCLick.desc
        }
        let kinhCapNhat = this.state.Kinh
        if (kinhCapNhat.id !== spKinh.id) {
            kinhCapNhat = spKinh;
        } else {
            kinhCapNhat = {}
        }
        this.setState({
            Kinh: kinhCapNhat
        })
    }

    render() {
        return (
            <div className='img-fluid' style={{ backgroundImage: 'url(./img/glassesImage/background.jpg)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} >
                <h3 className='text-center text-light text-uppercase bg-dark p-3' style={{ opacity: 0.5 }}>try glasses app online</h3>
                <div className='container mt-5'>
                    <div className='row'>
                        <div className='col-2'>
                        </div>
                        <div className='col-3'>
                            <div className="card" style={{ width: 300 }}>
                                <img className="card-img-top" src="./img/glassesImage/model.jpg" alt="Card image" />
                                <RenderKinh item={this.state.Kinh} />
                            </div>
                        </div>
                    </div>
                    <div className='container mt-5 bg-white'>
                        <div className='pt-2 pb-2'>
                            {this.hienThiDanhSachKinh()}
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
