import React from "react"
import {useSelector} from "react-redux"

import {
    Paper,
    CircularProgress,
} from "@material-ui/core"

import  {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Label} from "recharts";


const CardDetail = (props) => {

    const {forecastLoading, forecast, currentForecastId } = useSelector((state) => state.weatherCards)
    let thisForecast;
    thisForecast = forecast.filter(e => e.id === currentForecastId)[0]


    return (
        <Paper elevation={3}>
            {forecastLoading && !thisForecast && <CircularProgress />}
            {thisForecast? 
                <LineChart width={900} height={500} data={thisForecast.list}
                    margin={{top: 35, right: 30, left: 20, bottom: 65}}>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <XAxis dataKey="dt" tick={{ angle: 30 }} textAnchor="start" minorTickInterval="0"/>
                    <YAxis yAxisId="left" >
                        <Label
                            value="Temperature"
                            position="insideLeft"
                            angle={-90}
                            style={{ textAnchor: 'middle' }}
                        />
                    </YAxis>
                    <YAxis yAxisId="right" orientation="right"> 
                    <Label
                            value="Windspeed"
                            position="insideRight"
                            angle={-90}
                            style={{ textAnchor: 'middle' }}
                        />
                    </YAxis>
                    <Tooltip/>
                    <Legend layout="horizontal" verticalAlign="top" align="center"/>
                    <Line yAxisId="left" type="monotone" dataKey="main_temp" name="Temperature" stroke="#8884d8" activeDot={{r: 8}}/>
                    <Line yAxisId="right" type="monotone" dataKey="wind_speed" name="Wind Speed" stroke="#82ca9d" />
                </LineChart>
             : null}
            </Paper>
    )
}

export default CardDetail;