import React, { Component } from 'react'

export default class RenderWithMap extends Component {

    productList = [
        { id: 1, name: 'iphone X', price: '15000000', picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUsRZ819B3OcDFDDtHUm07KKwj4vuRYeHyr8oL1U8HUbQek6AsKrChvZ-vjg&usqp=CAc' },
        { id: 2, name: 'iphone X', price: '13000000', picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUsRZ819B3OcDFDDtHUm07KKwj4vuRYeHyr8oL1U8HUbQek6AsKrChvZ-vjg&usqp=CAc' },
        { id: 3, name: 'iphone X', price: '10000000', picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUsRZ819B3OcDFDDtHUm07KKwj4vuRYeHyr8oL1U8HUbQek6AsKrChvZ-vjg&usqp=CAc' }
    ]

    renderProduct = () => {


        // CÁCH 1: củ chuối cho starter
        // const arrDivProduct = [];
        // for (let i = 0; i < this.productList.length; i++) {
        //     //mỗi lần duyệt lấy ra 1 object trong mảng
        //     let product = this.productList[i];
        //     const jxsDivProduct = <div className='col-4'>
        //         <div className="card text-left">
        //             <img className="card-img-top" src={product.picture} alt />
        //             <div className="card-body">
        //                 <h4 className="card-title">{product.name}</h4>
        //                 <p className="card-text">{product.price}</p>
        //             </div>
        //         </div>
        //     </div>;
        //     arrDivProduct.push(jxsDivProduct);
        // }
        // return arrDivProduct;

        const contentJXS = this.productList.map((product, index) => {
            return <div key={index} className='col-4'>
                <div className="card text-left">
                    <img className="card-img-top" src={product.picture} alt={product.name} />
                    <div className="card-body">
                        <h4 className="card-title">{product.name}</h4>
                        <p className="card-text">{product.price}</p>
                    </div>
                </div>
            </div>;
        })
        return contentJXS;
    }


    renderTableProduct = () => {
        return this.productList.map((product, index) => {
            return <tr key={index}>
                <td className='text-center'>{product.id}</td>
                <td className='text-center'>{product.name}</td>
                <td className='text-center'><img src={product.picture} width='100' alt={product.name}></img></td>
                <td className='text-center'>{product.price}</td>
            </tr>
        });
    }




    render() {
        return (
            <div className='container'>
                <h1 className='text-center display-4'>Danh sách sản phẩm </h1>
                <div className='row'>
                    {this.renderProduct()}
                </div>
                <div className="mt-5 bg-dark text-white">
                    <table className="table">
                        <thead>
                            <tr>
                                <th className='text-center'>STT</th>
                                <th className='text-center'>Tên</th>
                                <th className='text-center'>Hình Ảnh</th>
                                <th className='text-center'>Giá</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderTableProduct()}
                        </tbody>
                    </table>

                </div>

            </div>
        )
    }
}
