import React, { Component } from 'react'
import BT1Carousel from './BT1Carousel'
import BT1Footer from './BT1Footer'
import BT1Header from './BT1Header'
import BT1Laptop from './BT1Laptop'
import BT1SmartPhone from './BT1SmartPhone'

export default class BaiTapLayout1 extends Component {
    render() {
        return (
            <div className=" bg-dark">
                <BT1Header />
                <BT1Carousel />
                <BT1SmartPhone />
                <BT1Laptop />
                <BT1Footer />
            </div>
        )
    }
}
