import CityForm from './getCityForm.jsx'

import React, { Component } from 'react'

export default class Layout extends Component {

    addCity(city) {
        console.log(city);
        console.log(process.env.API_KEY);
    }


    render() {
        return (
            <div>
                <CityForm addCity={(city) => {this.addCity(city)}}></CityForm>
            </div>
        )
    }
}
