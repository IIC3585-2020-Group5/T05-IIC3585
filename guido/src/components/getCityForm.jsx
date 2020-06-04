import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux"
import {fetchWeatherByCity} from "../features/weather/weatherCardSlice"
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import TextField from '@material-ui/core/TextField';
import {Typography, Grid, Box} from "@material-ui/core"
// export default class CityForm extends React.Component {
// constructor(props){
//     super(props);
//     this.onSubmit = this.onSubmit.bind(this);
// }
const CityForm = () => {
        const {loading, isError} = useSelector((state) => state.weatherCards)
        const dispatch = useDispatch();

        const [cityName, setCityName] = useState('');

        const onChange = (e) => {
            setCityName(e.currentTarget.value);
        };

        const handleSubmit = () => { // const city = this.city.value;
            console.log(cityName);
            // this.props.addCity(city);
            // this.city.value = "";
            dispatch(fetchWeatherByCity(cityName));
        }


        return (<div>

            <Grid container justify="center" direction="column" alignItems="center">

                <Grid container item  direction="horizontal" alignItems="center"  justify="center" style={{textAlign: "center", verticalAlign: "middle"}}>
                <img src="logo192.png" width="100" height="100"/>
                    <Typography variant="h1"
                        component={"h1"}>
                        Hello
                    </Typography>
                </Grid>
                  


            {
            !loading ? <>
                <Grid item>
                    <Typography variant="body1">
                        Enter your city:
                    </Typography>
                </Grid>
                <Grid item>
                    <TextField error={isError}
                        type="text"
                        id="City-basic"
                        label="City"
                        onChange={onChange}/>
                </Grid>
                <Box mt={3}
                    mb={4}>
                    <Button variant="contained" color="primary" name="" id=""
                        onClick={handleSubmit}>
                        Add City
                    </Button>
                </Box>
            </> : <CircularProgress/>
        } </Grid>
    </div>
    );
}

export default CityForm;
