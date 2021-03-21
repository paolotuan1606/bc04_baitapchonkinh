import React, { Component } from 'react'
// cách 1: import đường dẫn css từ file component
// import './style.css';
// cách 2: import css tại component
import style from './styles.module.css'
export default class Style extends Component {
    render() {
        return (
            <div className='container'>
                <p className={style.textGreen}>cybersoft</p>
                <p className={style['textGreen']}>cybersoft</p>
                <p className={`${style['textGreen']} ${style['bg-black']} 
                display-4`}>cybersoft</p>

                <section style={{
                    backgroundColor: 'red',
                    color: 'white'
                }}>
                    component
                </section>
            </div>
        )
    }
}
