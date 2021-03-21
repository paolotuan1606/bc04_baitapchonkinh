import React, { Component } from 'react'

export default class CardProduct extends Component {
    render() {
        return (
            <div className="w-25">
                <div className="card text-left">
                    <img className="card-img-top " src="http://lms.cybersoft.edu.vn/pluginfile.php/28155/mod_folder/content/0/img/lt_macbook.png?preview=tinyicon&oid=1614861967" alt />
                    <div className="card-body">
                        <h4 className="card-title">Iphone 10</h4>
                        <p className="card-text">1000</p>
                    </div>
                </div>
            </div>


        )
    }
}
