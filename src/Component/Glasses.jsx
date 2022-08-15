import React, { Component } from 'react'
export default class Glasses extends Component {
    renderGlasses = () => {
        let { handleChangeGlass, data } = this.props;

        return data.map(({ url }, index) => {
            return (
                <div key={index.toString()}
                    className="col-2 my-3"
                >
                    <img

                        className='border border-dark rounded p-1 btn w-100' src={url} alt=""
                        onClick={() => {
                            handleChangeGlass(index);
                        }}
                    />
                </div>
            )
        })
    }
    render() {
        return (
            <div className='row bg-light p-5 '
                style={{
                    boxSizing: "border-box"
                }}
            >
                {this.renderGlasses()}
            </div>
        )
    }
}
