import React, { Component } from 'react'
// kết nối component với store từ redux
import { connect } from 'react-redux';
import BTGioHangRedux from './BTGioHangRedux';

class GioHangRedux extends Component {
    renderGioHang = () => {
        return this.props.gioHang.map((item, index) => {
            return <tr key={index}>
                <td className='text-center'>{item.maSP}</td>
                <td className='text-center'>{item.tenSP}</td>
                <td className='text-center'><img src={item.hinhAnh} height='100' alt={item.tenSP}></img></td>
                <td className='text-center'>{item.giaBan.toLocaleString()}</td>
                <td className='text-center'>
                    {/* <button className='btn btn-light' onClick={() => {
                        this.props.tangGiamSoLuong(item.maSP, -1)
                    }}>-</button> */}
                    {item.soLuong}
                    {/* <button className='btn btn-light' onClick={() => {
                        this.props.tangGiamSoLuong(item.maSP, 1)
                    }}>+</button> */}
                </td>
                <td className='text-center'>{(item.soLuong * item.giaBan).toLocaleString()}</td>
                {/* <td className='text-center'><button className='btn btn-danger' onClick={() => {
                    this.props.xoaGioHang(item.maSP);
                }}>Xóa</button></td> */}
            </tr>
        })

    }



    render() {
        console.log(this.props);
        return (
            <div>
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
            </div>
        )
    }
}



const mapStateToProps = (state) => { // ghi chú state chính là rootReducer (state tổng của ứng dụng)

    //hàm này tạo ra props từ state của redux
    return {
        gioHang: state.gioHangReducer.gioHang
    }

}

// biến đổi BTGioHangRedux thành BTGioHang có kết nối với redux
export default connect(mapStateToProps)(GioHangRedux)
