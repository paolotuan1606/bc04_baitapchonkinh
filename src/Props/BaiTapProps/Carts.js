import React, { Component } from 'react'

export default class Carts extends Component {

    renderGioHang = () => {
        let { gioHang } = this.props;
        return gioHang.map((item, index) => {
            return <tr key={index}>
                <td className='text-center'>{item.maSP}</td>
                <td className='text-center'>{item.tenSP}</td>
                <td className='text-center'><img src={item.hinhAnh} height='100' alt={item.tenSP}></img></td>
                <td className='text-center'>{item.giaBan.toLocaleString()}</td>
                <td className='text-center'>
                    <button className='btn btn-light' onClick={() => {
                        this.props.tangGiamSoLuong(item.maSP, -1)
                    }}>-</button>
                    {item.soLuong}
                    <button className='btn btn-light' onClick={() => {
                        this.props.tangGiamSoLuong(item.maSP, 1)
                    }}>+</button>
                </td>
                <td className='text-center'>{(item.soLuong * item.giaBan).toLocaleString()}</td>
                <td className='text-center'><button className='btn btn-danger' onClick={() => {
                    this.props.xoaGioHang(item.maSP);
                }}>Xóa</button></td>
            </tr>
        })
    }



    render() {

        return (
            <div className='container mt-5'>
                <h3>Giỏ hàng</h3>
                <table className="table">
                    <thead>
                        <tr>
                            <th className='text-center'>Mã SP</th>
                            <th className='text-center'>Tên SP</th>
                            <th className='text-center'>Hình ảnh</th>
                            <th className='text-center'>Đơn giá </th>
                            <th className='text-center'>Số lượng</th>
                            <th className='text-center'>Thành tiền </th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderGioHang()}

                    </tbody>
                </table>
            </div>
        )
    }
}
