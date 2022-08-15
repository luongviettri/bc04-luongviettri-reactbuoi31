import React, { Component } from 'react'

export default class Model extends Component {
    render() {
        let { anhMau } = this.props
        return (
            <div
                className='position-relative'
            >
                <img src="./img/model.jpg" alt="model"
                    height={400}
                    className="my-5 "
                />

                <div className='model-body' >
                    <img src={anhMau.url} alt=""
                        style={{
                            opacity: "0.8"
                        }}
                        width={200}
                        className="glass"
                    />
                </div>
                <div className="model-footer text-left"
                >
                    <p className='px-2 m-0'>{anhMau.name}</p>
                    <p className='px-2 mb-4'>{anhMau.desc}</p>
                </div>

            </div>

        )
    }
}
