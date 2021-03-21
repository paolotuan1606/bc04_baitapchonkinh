import React, { Component } from 'react'
import Carts from './Carts'
import ProductItem from './ProductItem'

export default class Products extends Component {

    arrProduct = [
        {
            "maSP": 1,
            "tenSP": "VinSmart Live",
            "manHinh": "AMOLED, 6.2\", Full HD+",
            "heDieuHanh": "Android 9.0 (Pie)",
            "cameraTruoc": "20 MP",
            'cameraSau': "Chính 48 MP & Phụ 8 MP, 5 MP",
            "ram": "4 GB",
            "rom": "64 GB",
            "giaBan": 5700000,
            "hinhAnh": "./img/vsphone.jpg"
        },

        {
            "maSP": 2,
            "tenSP": "Meizu 16Xs",
            "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels",
            "heDieuHanh": "Android 9.0 (Pie); Flyme",
            "cameraTruoc": "20 MP",
            "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP",
            "ram": "4 GB",
            "rom": "64 GB",
            "giaBan": 7600000,
            "hinhAnh": "./img/meizuphone.jpg"
        },

        {
            "maSP": 3,
            "tenSP": "Iphone XS Max",
            "manHinh": "OLED, 6.5\", 1242 x 2688 Pixels",
            "heDieuHanh": "iOS 12",
            "cameraSau": "Chính 12 MP & Phụ 12 MP",
            "cameraTruoc": "7 MP",
            "ram": "4 GB",
            "rom": "64 GB",
            "giaBan": 27000000,
            "hinhAnh": "./img/applephone.jpg"
        }
    ]

    state = {
        productDetail: {
            "maSP": 1,
            "tenSP": "VinSmart Live",
            "manHinh": "AMOLED, 6.2\", Full HD+",
            "heDieuHanh": "Android 9.0 (Pie)",
            "cameraTruoc": "20 MP",
            'cameraSau': "Chính 48 MP & Phụ 8 MP, 5 MP",
            "ram": "4 GB",
            "rom": "64 GB",
            "giaBan": 5700000,
            "hinhAnh": "./img/vsphone.jpg"
        },
        gioHang: [


        ]

    }

    themGioHang = (spClick) => {
        console.log(spClick, "spClick");
        // xử lý setState cho giỏ hàng
        // b1: từ sản phẩm được click tạo ra sản phẩm giỏ hàng
        let spGioHang = {
            maSP: spClick.maSP,
            tenSP: spClick.tenSP,
            giaBan: spClick.giaBan,
            soLuong: 1,
            hinhAnh: spClick.hinhAnh,
        }
        //b2: xử lý sk thêm giỏ hàng
        let gioHangCapNhat = [...this.state.gioHang];


        // kiểm tra sản phẩm có sẵn trên giỏ hàng chưa 
        let index = gioHangCapNhat.findIndex(item => item.maSP === spGioHang.maSP);

        if (index !== -1) {//nếu có tăng số lương
            gioHangCapNhat[index].soLuong += 1;
        } else { // nếu ko thêm mới vào danh sách giỏ hàng
            // gioHangCapNhat.push(spGioHang);  ES5
            gioHangCapNhat = [...gioHangCapNhat, spGioHang]; // ES6
        }
        //b3: set lại state sau khi xử lý
        this.setState({
            gioHang: gioHangCapNhat
        })
    }

    // giamSoLuong = (maSP) => {
    //     let gioHangCapNhat = [...this.state.gioHang];
    //     let index = gioHangCapNhat.findIndex(item => item.maSP === maSP);
    //     if (gioHangCapNhat[index].soLuong !== 0) {
    //         gioHangCapNhat[index].soLuong -= 1;
    //     } else {
    //         gioHangCapNhat.splice(index, 1);
    //     }
    //     this.setState({
    //         gioHang: gioHangCapNhat
    //     })
    // }
    // tangSoLuong = (maSP) => {
    //     let gioHangCapNhat = [...this.state.gioHang];
    //     let index = gioHangCapNhat.findIndex(item => item.maSP === maSP);
    //     gioHangCapNhat[index].soLuong += 1;
    //     this.setState({
    //         gioHang: gioHangCapNhat
    //     })
    // }


    tangGiamSoLuong = (maSP, soLuong) => {
        let gioHangCapNhat = [...this.state.gioHang];
        let spGioHang = gioHangCapNhat.find(item => item.maSP === maSP);
        if (spGioHang) {
            spGioHang.soLuong += soLuong;
        }
        if (spGioHang.soLuong < 1) {
            alert('Số lượng tối thiểu là 1');
            spGioHang.soLuong -= soLuong;
        }
        this.setState({
            gioHang: gioHangCapNhat
        })
    }


    // phương thức thay đổi state đặt tại component chứa state
    xoaGioHang = (maSP) => {
        //tạo ra biến giỏ hàng cập nhật
        let gioHangCapNhat = [...this.state.gioHang];

        // tìm kiếm phần tử đó trong mảng
        let index = gioHangCapNhat.findIndex(item => item.maSP === maSP);
        // nếu tìm thấy 
        if (index !== -1) {
            gioHangCapNhat.splice(index, 1);
        }

        //cập nhật lại state giỏ hàng sau khi xóa 
        this.setState({
            gioHang: gioHangCapNhat
        })

    }


    renderProduct = () => {
        return this.arrProduct.map((item, index) => {
            return <div className='col-4' key={index}>
                {/* <div className="card text-left">
                    <img className="card-img-top " src={item.hinhAnh} alt height='400' />
                    <div className="card-body">
                        <h4 className="card-title">{item.tenSP}</h4>
                        <button className='btn btn-success' onClick={() => {
                            this.viewDetail(item);
                        }}>Xem chi tiết</button>
                    </div>
                </div> */}
                <ProductItem item={item} viewDetail={this.viewDetail} themGioHang={this.themGioHang} />
            </div>
        })
    }

    //hàm xử lý sk cho nút xem chi tiết
    viewDetail = (itemCLick) => {
        console.log('itemCLick', itemCLick);

        this.setState({
            productDetail: itemCLick,
        });
    }

    render() {
        let { hinhAnh, rom, ram, cameraSau, cameraTruoc, tenSP, heDieuHanh, manHinh } = this.state.productDetail;
        return (
            <div className='container'>
                <h3 className='text-center display-4'>Danh sách sản phẩm</h3>
                <div className='row'>
                    {this.renderProduct()}
                </div>
                <div className='productDetail mt-5'>
                    <div className='row'>
                        <div className='col-4'>
                            <div className='display-4 text-center'>{tenSP}</div>
                            <img src={hinhAnh} height='400' className='img-fluid'></img>
                        </div>
                        <div className='col-8 '>
                            <div className='display-4'>Thông số kỹ thuật</div>
                            <table class="table mt-3">
                                <thead>
                                    <tr>
                                        <th>Màn hình</th>
                                        <th>{manHinh}</th>
                                    </tr>
                                    <tr>
                                        <th>Hệ điều hành</th>
                                        <th>{heDieuHanh}</th>
                                    </tr>
                                    <tr>
                                        <th>Camera trước</th>
                                        <th>{cameraTruoc}</th>
                                    </tr>
                                    <tr>
                                        <th>Camera sau</th>
                                        <th>{cameraSau}</th>
                                    </tr>
                                    <tr>
                                        <th>RAM</th>
                                        <th>{ram}</th>
                                    </tr>
                                    <tr>
                                        <th>ROM</th>
                                        <th>{rom}</th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                </div>
                <Carts tangGiamSoLuong={this.tangGiamSoLuong} xoaGioHang={this.xoaGioHang} gioHang={this.state.gioHang} />
            </div>
        )
    }
}
