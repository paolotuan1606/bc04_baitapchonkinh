import React, { Component } from 'react'

export default class SanPhamRedux extends Component {




    render() {
        let productItem = this.props.sanPham;


        return (
            <div>
                <div className="card text-left">
                    <img className="card-img-top " src={productItem.hinhAnh} height='400' alt={productItem.tenSP} />
                    <div className="card-body">
                        <h4 className="card-title">{productItem.tenSP}</h4>
                        <button className='btn btn-success' onClick={() => {
                            this.props.viewDetail(productItem)
                        }}>Xem chi tiết</button>
                        <button className='btn btn-primary ml-2' onClick={() => {
                            //sử dụng hàm thêm giỏ hàng từ component Product(com Cha) truyền vào
                            this.props.themGioHang(productItem)
                        }}>Thêm giỏ hàng</button>
                    </div>
                </div>
            </div>
        )
    }
}
