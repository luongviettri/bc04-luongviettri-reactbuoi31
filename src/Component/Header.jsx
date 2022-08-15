import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div>
                <div className='py-5 text-center header-custom'
                    style={{
                        opacity: "0.5",
                        backgroundColor: 'black',
                        color: "white"
                    }}
                >
                </div>
                <div
                    style={{
                        position: 'absolute',
                        top: '30px',
                        left: '50%',
                        textAlign: 'center',
                        transform: 'translateX(-50%)'
                    }}
                >
                    <h3  >
                        TRY GLASSES APP ONLINE
                    </h3>
                </div>
            </div>
        )
    }
}
