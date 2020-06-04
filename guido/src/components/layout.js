import CityForm from './getCityForm.jsx';
import  CardList  from "./weatherCardList.jsx";
import WeatherMap from "./weatherMap.jsx";
import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import 'leaflet/dist/leaflet.css';


const useStyles = makeStyles((theme) => ({
    '@global': {
      ul: {
        margin: 0,
        padding: 0,
        listStyle: 'none',
      },
    },
    appBar: {
      borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbar: {
      flexWrap: 'wrap',
    },
    toolbarTitle: {
      flexGrow: 1,
    },
    link: {
      margin: theme.spacing(1, 1.5),
    },
    heroContent: {
      padding: theme.spacing(8, 0, 6),
    },
    cardHeader: {
      backgroundColor:
        theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
    },
    cardPricing: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'baseline',
      marginBottom: theme.spacing(2),
    },
    footer: {
      borderTop: `1px solid ${theme.palette.divider}`,
      marginTop: theme.spacing(8),
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3),
      [theme.breakpoints.up('sm')]: {
        paddingTop: theme.spacing(6),
        paddingBottom: theme.spacing(6),
      },
    },
  }));

const Layout = () => {
    const classes = useStyles();
    return (
        <div>
            <Container maxWidth="lg" component="main" className={classes.heroContent}>
                <CityForm addCity={(city) => {this.addCity(city)}}></CityForm>
                <CardList></CardList>
                
                
            </Container>
            <Container maxWidth="md" component="main" className={classes.heroContent}>
              <WeatherMap></WeatherMap>
            </Container>

         </div>     
    )
}

export default Layout;