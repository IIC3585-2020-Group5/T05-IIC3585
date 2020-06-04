import React from "react"
import {useSelector, useDispatch} from "react-redux"
import {makeStyles} from '@material-ui/core/styles';
import { fetchForecastByCity, removeCityWeather } from "../features/weather/weatherCardSlice";
import  CardDetail  from "./weatherCardDetail";
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
    Box,
} from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
    '@global': {
        ul: {
            margin: 0,
            padding: 0,
            listStyle: 'none'
        }
    },
    appBar: {
        borderBottom: `1px solid ${
            theme.palette.divider
        }`
    },
    toolbar: {
        flexWrap: 'wrap'
    },
    toolbarTitle: {
        flexGrow: 1
    },
    link: {
        margin: theme.spacing(1, 1.5)
    },
    heroContent: {
        padding: theme.spacing(8, 0, 6)
    },
    cardHeader: {
        backgroundColor: theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700]
    },
    cardPricing: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'baseline',
        marginBottom: theme.spacing(2)
    },
    footer: {
        borderTop: `1px solid ${
            theme.palette.divider
        }`,
        marginTop: theme.spacing(8),
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
        [theme.breakpoints.up('sm')]: {
            paddingTop: theme.spacing(6),
            paddingBottom: theme.spacing(6)
        }
    },
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    },
    table: {
      minWidth: 650,
    },
    grid: {
      marginTop: 30,
    },
}));


const CardList = () => {
    const classes = useStyles();
    const dispatch = useDispatch()
    const {cards} = useSelector((state) => state.weatherCards)

    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
      setOpen(false);
    };
    const handleToggle = (name) => {
      setOpen(!open);
      dispatch(fetchForecastByCity(name));
    };

    const handleDelete = (id) => {
      dispatch(removeCityWeather({ id }));
    }

    const objectMap = (obj, fn) =>
  Object.fromEntries(
    Object.entries(obj).map(
      ([k, v], i) => [k, fn(v, k, i)]
    )
  )

  const addFunction = (a, b) => {
    return a + b;
  }
  
  const detailParamList = ["feels_like", "humidity", "pressure", "temp", "temp_max", "temp_min"];

    return (
        <div>
          <Grid container direction="row" justify="space-evenly" alignItems="center" spacing={"5"}>
                {
                cards.map((cardInfo) => {
                    return (
                        <Grid item
                            xl={3}
                            key={
                                cardInfo.id
                        }>
                            <Card>
                                <CardHeader title={
                                    cardInfo.name
                                }/>
                                <CardActionArea>
                                    <CardContent>
                                        The current temperature is {
                                        Math.round(cardInfo.temp - 273.15)
                                    }
                                        &#176;C
                                    </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Button size="small" color="secondary"  onClick={() => handleDelete(cardInfo.id)}>
                                            Delete
                                        </Button>
                                        <Button size="small" color="primary"  onClick={() => handleToggle(cardInfo.name)}>
                                            More Details
                                        </Button>
                                        <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
                                          <CardDetail cityId={cardInfo.id} />
                                        </Backdrop>
                                    </CardActions>
                                

                            </Card>
                        </Grid>
                    )
                })
            } </Grid>
            
                  
        </div>
    )
}

export default CardList;
