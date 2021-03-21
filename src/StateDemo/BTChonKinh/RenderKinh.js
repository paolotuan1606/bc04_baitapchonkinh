import React, { Component } from 'react'

export default class RenderKinh extends Component {

    render() {
        let { item } = this.props;
        return (
            <div>
                <div className='card-img-overlay'>
                    <img src={item.url2} style={{ width: 160, marginTop: 70, marginLeft: 48 }} />
                    <div className="card-img-overlay" style={{ marginTop: 230 }}>
                        <h4 className="card-title">{item.name}</h4>
                        <p className="card-text">{item.desc}</p>
                    </div>
                </div>

            </div>

        )
    }
}
