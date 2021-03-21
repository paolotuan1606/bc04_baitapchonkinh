import React, { Component } from 'react'

export default class DemoClass extends Component {




    // Phương thức render sẽ tự kích hoạt khi mình sử dụng thẻ component
    render() {
        return (
            <div className="container bg-dark p-5 text-light">
                <p className="display-4 pt-2 bg-primary">title</p>
                <p>content</p>
            </div>
        )
    }
}
