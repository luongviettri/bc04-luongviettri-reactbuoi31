import React, { Component } from 'react'
export default class Glasses extends Component {
    renderGlasses = () => {
        let { handleChangeGlass, data } = this.props;

        return data.map(({ url }, index) => {
            return <img
                key={index.toString()}
                height={80} className='col-2 m-3 border border-dark rounded p-1 btn' src={url} alt=""
                onClick={() => {
                    handleChangeGlass(index);
                }}
            />
        })
    }
    render() {
        return (
            <div className='row bg-light p-5 justify-content-center'
            >
                {this.renderGlasses()}
            </div>
        )
    }
}
