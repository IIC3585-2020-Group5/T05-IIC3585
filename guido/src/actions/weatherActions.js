import axios from "axios";
import {createAction} from "@reduxjs/toolkit";

export const fetchCityWeather = createAction("")

//api.openweathermap.org/data/2.5/weather?q=Caracas&appid=af67df218a7afc4eb9dbd07fa3756f8b