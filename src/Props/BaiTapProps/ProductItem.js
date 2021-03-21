import React, { Component } from 'react'

export default class ProductItem extends Component {
    render() {

        let { item } = this.props;

        return (
            <div className="card text-left">
                <img className="card-img-top " src={item.hinhAnh} alt height='400' />
                <div className="card-body">
                    <h4 className="card-title">{item.tenSP}</h4>
                    <button className='btn btn-success' onClick={() => {
                        this.props.viewDetail(item)
                    }}>Xem chi tiết</button>
                    <button className='btn btn-primary ml-2' onClick={() => {
                        //sử dụng hàm thêm giỏ hàng từ component Product(com Cha) truyền vào
                        this.props.themGioHang(item)
                    }}>Thêm giỏ hàng</button>
                </div>
            </div>

        )
    }
}
