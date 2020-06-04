import React, {useEffect} from "react"
import {useSelector, useDispatch} from "react-redux"
import {makeStyles} from '@material-ui/core/styles';

import {
    Grid,
    Card,
    CardHeader,
    CardContent,
    CardActionArea,
    CardActions,
    Button,
    Backdrop,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    CircularProgress,
} from "@material-ui/core"

import  {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Label} from "recharts";


const CardDetail = (props) => {
    // const classes = useStyles();
    const dispatch = useDispatch()
    const {forecastLoading, forecast, forecastIsError, currentForecastId } = useSelector((state) => state.weatherCards)
    let thisForecast;
    thisForecast = forecast.filter(e => e.id === currentForecastId)[0]
    
    // thisForecast = forecast.filter(e => e.id === props.cityId)[0]

    return (
        <Paper elevation={3}>
            {forecastLoading && !thisForecast && <CircularProgress />}
            {/* {thisForecast? thisForecast.list[0].dt : null} */}
            {/* {thisForecast? console.log(thisForecast) : null} */}
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
            
             {/* <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                    <TableCell>Item</TableCell>
                    <TableCell align="right">Valor</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    { {rows.map((row) => (
                    <TableRow key={row.name}>
                        <TableCell component="th" scope="row">
                        {row.name}
                        </TableCell>
                        <TableCell align="right">{row.calories}</TableCell>
                        <TableCell align="right">{row.fat}</TableCell>
                        <TableCell align="right">{row.carbs}</TableCell>
                        <TableCell align="right">{row.protein}</TableCell>
                    </TableRow>
                    ))} 
                    Object.keys(cardInfo).forEach(function (k) {
                    if (detailParamList.indexOf(k) >= 0) {
                        <TableRow key={addFunction(k, cardInfo.id)}>

                        </TableRow>
                    }
                    })
                    }
                    {
                    Object.keys(cardInfo).forEach(function (k) {
                        if (detailParamList.indexOf(k) >= 0) {
                        return (
                        <TableRow >
                            <TableCell component="th" scope="row">
                            {cardInfo.k}
                            </TableCell>
                            <TableCell align="right">{cardInfo.k}</TableCell>
                        </TableRow>
                        )
                        
                        }
                    })
                    }
                </TableBody>
                </Table>
            </TableContainer> */}
            </Paper>
    )
}

export default CardDetail;