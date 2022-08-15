import React, { Component } from 'react'
import Glasses from './Glasses'
import Model from './Model'

import data from '../data/dataGlasses.json'


export default class Body extends Component {
    state = {
        anhMau: {
            "id": 1,
            "price": 30,
            "name": "GUCCI G8850U",
            "url": "./img/v1.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        }
    }

    handleChangeGlass = (index) => {
        let newGlass = data[index];
        this.setState({
            anhMau: newGlass
        })
    }

    render() {

        return (
            <div className='container text-center' >

                <Model anhMau={this.state.anhMau} />
                <Glasses handleChangeGlass={this.handleChangeGlass}
                    data={data}
                />
            </div>
        )
    }
}
