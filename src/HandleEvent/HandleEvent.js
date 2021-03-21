import React, { Component } from 'react'

export default class HandleEvent extends Component {

    handleClick = () => {
        alert('hello');
    }

    showMess = (name) => {
        alert(`hello ${name}`);
    }


    render() {
        return (
            <div>



                {/* cách 1 */}
                <button id="btnClick" onClick={this.handleClick}>Click me</button>
                {/* cách 2 */}
                {/* <button id="btnClick" onClick={() => {
                    alert('hello');
                }}>Click me</button> */}

                <button className='btn btn-success mt-2' onClick={() => {
                    this.showMess('tuấn');
                    this.showMess('aloalo');
                }}>click</button>


            </div>
        )
    }
}
