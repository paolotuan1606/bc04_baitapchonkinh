import React, { Component } from 'react'
import SanPhamProps from './SanPhamProps'

export default class DanhSachSanPhamProps extends Component {

    productList = [
        { id: 1, name: 'iphone X', price: '15000000', picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUsRZ819B3OcDFDDtHUm07KKwj4vuRYeHyr8oL1U8HUbQek6AsKrChvZ-vjg&usqp=CAc' },
        { id: 2, name: 'iphone XS', price: '13000000', picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUsRZ819B3OcDFDDtHUm07KKwj4vuRYeHyr8oL1U8HUbQek6AsKrChvZ-vjg&usqp=CAc' },
        { id: 3, name: 'iphone XS Max', price: '10000000', picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUsRZ819B3OcDFDDtHUm07KKwj4vuRYeHyr8oL1U8HUbQek6AsKrChvZ-vjg&usqp=CAc' }
    ]

    renderSanPham = () => {
        return this.productList.map((sanPham, index) => {
            return <div className='col-4' key={index}>
                <SanPhamProps sp={sanPham} />
            </div>
        })
    }

    //component sử dụng thẻ được gọi là component cha, thẻ được sử dụng là component con

    render() {
        return (
            <div className='container'>
                <div className='row'>
                    {this.renderSanPham()}
                </div>
            </div>
        )
    }
}
