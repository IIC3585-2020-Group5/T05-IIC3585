const moment = require('moment');

let data = {
    "cod": "200",
    "message": 0,
    "cnt": 40,
    "list": [
        {
            "dt": 1591153200,
            "main": {
                "temp": 285.33,
                "feels_like": 284.12,
                "temp_min": 285.33,
                "temp_max": 285.51,
                "pressure": 1015,
                "sea_level": 1014,
                "grnd_level": 949,
                "humidity": 65,
                "temp_kf": -0.18
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "clouds": {
                "all": 95
            },
            "wind": {
                "speed": 0.36,
                "deg": 48
            },
            "rain": {
                "3h": 1.38
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2020-06-03 03:00:00"
        },
        {
            "dt": 1591164000,
            "main": {
                "temp": 284.27,
                "feels_like": 282.69,
                "temp_min": 284.03,
                "temp_max": 284.27,
                "pressure": 1014,
                "sea_level": 1014,
                "grnd_level": 949,
                "humidity": 70,
                "temp_kf": 0.24
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "clouds": {
                "all": 85
            },
            "wind": {
                "speed": 0.9,
                "deg": 246
            },
            "rain": {
                "3h": 1.39
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2020-06-03 06:00:00"
        },
        {
            "dt": 1591174800,
            "main": {
                "temp": 281.78,
                "feels_like": 278.65,
                "temp_min": 281.55,
                "temp_max": 281.78,
                "pressure": 1015,
                "sea_level": 1015,
                "grnd_level": 950,
                "humidity": 78,
                "temp_kf": 0.23
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "clouds": {
                "all": 97
            },
            "wind": {
                "speed": 2.87,
                "deg": 242
            },
            "rain": {
                "3h": 1.02
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2020-06-03 09:00:00"
        },
        {
            "dt": 1591185600,
            "main": {
                "temp": 281.38,
                "feels_like": 279.56,
                "temp_min": 281.35,
                "temp_max": 281.38,
                "pressure": 1019,
                "sea_level": 1019,
                "grnd_level": 953,
                "humidity": 73,
                "temp_kf": 0.03
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": {
                "all": 99
            },
            "wind": {
                "speed": 0.63,
                "deg": 243
            },
            "rain": {
                "3h": 1.38
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2020-06-03 12:00:00"
        },
        {
            "dt": 1591196400,
            "main": {
                "temp": 282.7,
                "feels_like": 280.63,
                "temp_min": 282.7,
                "temp_max": 282.7,
                "pressure": 1021,
                "sea_level": 1021,
                "grnd_level": 955,
                "humidity": 65,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": {
                "all": 93
            },
            "wind": {
                "speed": 0.89,
                "deg": 7
            },
            "rain": {
                "3h": 0.33
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2020-06-03 15:00:00"
        },
        {
            "dt": 1591207200,
            "main": {
                "temp": 285.31,
                "feels_like": 282.07,
                "temp_min": 285.31,
                "temp_max": 285.31,
                "pressure": 1020,
                "sea_level": 1020,
                "grnd_level": 955,
                "humidity": 42,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": {
                "all": 96
            },
            "wind": {
                "speed": 1.72,
                "deg": 14
            },
            "rain": {
                "3h": 0.29
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2020-06-03 18:00:00"
        },
        {
            "dt": 1591218000,
            "main": {
                "temp": 285.56,
                "feels_like": 282.71,
                "temp_min": 285.56,
                "temp_max": 285.56,
                "pressure": 1021,
                "sea_level": 1021,
                "grnd_level": 956,
                "humidity": 41,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 1.13,
                "deg": 152
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2020-06-03 21:00:00"
        },
        {
            "dt": 1591228800,
            "main": {
                "temp": 283.5,
                "feels_like": 280.49,
                "temp_min": 283.5,
                "temp_max": 283.5,
                "pressure": 1022,
                "sea_level": 1022,
                "grnd_level": 957,
                "humidity": 49,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 63
            },
            "wind": {
                "speed": 1.49,
                "deg": 185
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2020-06-04 00:00:00"
        },
        {
            "dt": 1591239600,
            "main": {
                "temp": 282.35,
                "feels_like": 280.39,
                "temp_min": 282.35,
                "temp_max": 282.35,
                "pressure": 1024,
                "sea_level": 1024,
                "grnd_level": 958,
                "humidity": 58,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 1
            },
            "wind": {
                "speed": 0.26,
                "deg": 133
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2020-06-04 03:00:00"
        },
        {
            "dt": 1591250400,
            "main": {
                "temp": 282.04,
                "feels_like": 279.75,
                "temp_min": 282.04,
                "temp_max": 282.04,
                "pressure": 1023,
                "sea_level": 1023,
                "grnd_level": 957,
                "humidity": 56,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 0.56,
                "deg": 70
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2020-06-04 06:00:00"
        },
        {
            "dt": 1591261200,
            "main": {
                "temp": 281.8,
                "feels_like": 279.41,
                "temp_min": 281.8,
                "temp_max": 281.8,
                "pressure": 1022,
                "sea_level": 1022,
                "grnd_level": 956,
                "humidity": 53,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 0.5,
                "deg": 99
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2020-06-04 09:00:00"
        },
        {
            "dt": 1591272000,
            "main": {
                "temp": 281.49,
                "feels_like": 278.86,
                "temp_min": 281.49,
                "temp_max": 281.49,
                "pressure": 1022,
                "sea_level": 1022,
                "grnd_level": 956,
                "humidity": 54,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 0.84,
                "deg": 83
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2020-06-04 12:00:00"
        },
        {
            "dt": 1591282800,
            "main": {
                "temp": 285.63,
                "feels_like": 282.77,
                "temp_min": 285.63,
                "temp_max": 285.63,
                "pressure": 1021,
                "sea_level": 1021,
                "grnd_level": 956,
                "humidity": 41,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 1.16,
                "deg": 246
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2020-06-04 15:00:00"
        },
        {
            "dt": 1591293600,
            "main": {
                "temp": 288.04,
                "feels_like": 285.08,
                "temp_min": 288.04,
                "temp_max": 288.04,
                "pressure": 1019,
                "sea_level": 1019,
                "grnd_level": 955,
                "humidity": 34,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 1.22,
                "deg": 239
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2020-06-04 18:00:00"
        },
        {
            "dt": 1591304400,
            "main": {
                "temp": 287.74,
                "feels_like": 284.84,
                "temp_min": 287.74,
                "temp_max": 287.74,
                "pressure": 1020,
                "sea_level": 1020,
                "grnd_level": 956,
                "humidity": 35,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 1.17,
                "deg": 212
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2020-06-04 21:00:00"
        },
        {
            "dt": 1591315200,
            "main": {
                "temp": 284.8,
                "feels_like": 282.09,
                "temp_min": 284.8,
                "temp_max": 284.8,
                "pressure": 1022,
                "sea_level": 1022,
                "grnd_level": 957,
                "humidity": 44,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 1,
                "deg": 241
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2020-06-05 00:00:00"
        },
        {
            "dt": 1591326000,
            "main": {
                "temp": 283.41,
                "feels_like": 281.3,
                "temp_min": 283.41,
                "temp_max": 283.41,
                "pressure": 1023,
                "sea_level": 1023,
                "grnd_level": 957,
                "humidity": 54,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 0.48,
                "deg": 213
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2020-06-05 03:00:00"
        },
        {
            "dt": 1591336800,
            "main": {
                "temp": 282.96,
                "feels_like": 280.72,
                "temp_min": 282.96,
                "temp_max": 282.96,
                "pressure": 1024,
                "sea_level": 1024,
                "grnd_level": 958,
                "humidity": 53,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 0.51,
                "deg": 53
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2020-06-05 06:00:00"
        },
        {
            "dt": 1591347600,
            "main": {
                "temp": 282.52,
                "feels_like": 280.24,
                "temp_min": 282.52,
                "temp_max": 282.52,
                "pressure": 1022,
                "sea_level": 1022,
                "grnd_level": 957,
                "humidity": 50,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 0.31,
                "deg": 130
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2020-06-05 09:00:00"
        },
        {
            "dt": 1591358400,
            "main": {
                "temp": 282.26,
                "feels_like": 279.83,
                "temp_min": 282.26,
                "temp_max": 282.26,
                "pressure": 1022,
                "sea_level": 1022,
                "grnd_level": 957,
                "humidity": 50,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 0.48,
                "deg": 112
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2020-06-05 12:00:00"
        },
        {
            "dt": 1591369200,
            "main": {
                "temp": 286.59,
                "feels_like": 284.18,
                "temp_min": 286.59,
                "temp_max": 286.59,
                "pressure": 1021,
                "sea_level": 1021,
                "grnd_level": 957,
                "humidity": 38,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 0.49,
                "deg": 217
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2020-06-05 15:00:00"
        },
        {
            "dt": 1591380000,
            "main": {
                "temp": 289.73,
                "feels_like": 287.39,
                "temp_min": 289.73,
                "temp_max": 289.73,
                "pressure": 1019,
                "sea_level": 1019,
                "grnd_level": 955,
                "humidity": 30,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 0.29,
                "deg": 258
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2020-06-05 18:00:00"
        },
        {
            "dt": 1591390800,
            "main": {
                "temp": 289.25,
                "feels_like": 286.68,
                "temp_min": 289.25,
                "temp_max": 289.25,
                "pressure": 1020,
                "sea_level": 1020,
                "grnd_level": 955,
                "humidity": 31,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 0.63,
                "deg": 186
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2020-06-05 21:00:00"
        },
        {
            "dt": 1591401600,
            "main": {
                "temp": 286.91,
                "feels_like": 284.59,
                "temp_min": 286.91,
                "temp_max": 286.91,
                "pressure": 1020,
                "sea_level": 1020,
                "grnd_level": 955,
                "humidity": 35,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 0.19,
                "deg": 178
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2020-06-06 00:00:00"
        },
        {
            "dt": 1591412400,
            "main": {
                "temp": 286.24,
                "feels_like": 283.19,
                "temp_min": 286.24,
                "temp_max": 286.24,
                "pressure": 1020,
                "sea_level": 1020,
                "grnd_level": 955,
                "humidity": 34,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 1.06,
                "deg": 57
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2020-06-06 03:00:00"
        },
        {
            "dt": 1591423200,
            "main": {
                "temp": 286.01,
                "feels_like": 282.65,
                "temp_min": 286.01,
                "temp_max": 286.01,
                "pressure": 1019,
                "sea_level": 1019,
                "grnd_level": 954,
                "humidity": 33,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 1.39,
                "deg": 59
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2020-06-06 06:00:00"
        },
        {
            "dt": 1591434000,
            "main": {
                "temp": 285.08,
                "feels_like": 282.27,
                "temp_min": 285.08,
                "temp_max": 285.08,
                "pressure": 1019,
                "sea_level": 1019,
                "grnd_level": 954,
                "humidity": 36,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02n"
                }
            ],
            "clouds": {
                "all": 19
            },
            "wind": {
                "speed": 0.66,
                "deg": 57
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2020-06-06 09:00:00"
        },
        {
            "dt": 1591444800,
            "main": {
                "temp": 284,
                "feels_like": 281.35,
                "temp_min": 284,
                "temp_max": 284,
                "pressure": 1021,
                "sea_level": 1021,
                "grnd_level": 955,
                "humidity": 39,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 54
            },
            "wind": {
                "speed": 0.46,
                "deg": 225
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2020-06-06 12:00:00"
        },
        {
            "dt": 1591455600,
            "main": {
                "temp": 287.1,
                "feels_like": 284.38,
                "temp_min": 287.1,
                "temp_max": 287.1,
                "pressure": 1021,
                "sea_level": 1021,
                "grnd_level": 956,
                "humidity": 35,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 0.8,
                "deg": 249
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2020-06-06 15:00:00"
        },
        {
            "dt": 1591466400,
            "main": {
                "temp": 289.41,
                "feels_like": 285.93,
                "temp_min": 289.41,
                "temp_max": 289.41,
                "pressure": 1019,
                "sea_level": 1019,
                "grnd_level": 955,
                "humidity": 31,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 97
            },
            "wind": {
                "speed": 1.96,
                "deg": 239
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2020-06-06 18:00:00"
        },
        {
            "dt": 1591477200,
            "main": {
                "temp": 288.14,
                "feels_like": 285.09,
                "temp_min": 288.14,
                "temp_max": 288.14,
                "pressure": 1020,
                "sea_level": 1020,
                "grnd_level": 955,
                "humidity": 35,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03d"
                }
            ],
            "clouds": {
                "all": 43
            },
            "wind": {
                "speed": 1.45,
                "deg": 229
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2020-06-06 21:00:00"
        },
        {
            "dt": 1591488000,
            "main": {
                "temp": 285.5,
                "feels_like": 282.83,
                "temp_min": 285.5,
                "temp_max": 285.5,
                "pressure": 1021,
                "sea_level": 1021,
                "grnd_level": 956,
                "humidity": 42,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03n"
                }
            ],
            "clouds": {
                "all": 36
            },
            "wind": {
                "speed": 0.94,
                "deg": 208
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2020-06-07 00:00:00"
        },
        {
            "dt": 1591498800,
            "main": {
                "temp": 285.04,
                "feels_like": 282.57,
                "temp_min": 285.04,
                "temp_max": 285.04,
                "pressure": 1020,
                "sea_level": 1020,
                "grnd_level": 955,
                "humidity": 42,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 0.56,
                "deg": 82
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2020-06-07 03:00:00"
        },
        {
            "dt": 1591509600,
            "main": {
                "temp": 284.86,
                "feels_like": 282.15,
                "temp_min": 284.86,
                "temp_max": 284.86,
                "pressure": 1020,
                "sea_level": 1020,
                "grnd_level": 955,
                "humidity": 41,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 7
            },
            "wind": {
                "speed": 0.81,
                "deg": 60
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2020-06-07 06:00:00"
        },
        {
            "dt": 1591520400,
            "main": {
                "temp": 284.09,
                "feels_like": 281.49,
                "temp_min": 284.09,
                "temp_max": 284.09,
                "pressure": 1019,
                "sea_level": 1019,
                "grnd_level": 954,
                "humidity": 42,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 0.58,
                "deg": 88
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2020-06-07 09:00:00"
        },
        {
            "dt": 1591531200,
            "main": {
                "temp": 283.71,
                "feels_like": 281.19,
                "temp_min": 283.71,
                "temp_max": 283.71,
                "pressure": 1020,
                "sea_level": 1020,
                "grnd_level": 955,
                "humidity": 43,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 0.47,
                "deg": 100
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2020-06-07 12:00:00"
        },
        {
            "dt": 1591542000,
            "main": {
                "temp": 288.21,
                "feels_like": 285.41,
                "temp_min": 288.21,
                "temp_max": 288.21,
                "pressure": 1019,
                "sea_level": 1019,
                "grnd_level": 955,
                "humidity": 32,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02d"
                }
            ],
            "clouds": {
                "all": 24
            },
            "wind": {
                "speed": 0.86,
                "deg": 244
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2020-06-07 15:00:00"
        },
        {
            "dt": 1591552800,
            "main": {
                "temp": 290.25,
                "feels_like": 286.93,
                "temp_min": 290.25,
                "temp_max": 290.25,
                "pressure": 1018,
                "sea_level": 1018,
                "grnd_level": 954,
                "humidity": 28,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 52
            },
            "wind": {
                "speed": 1.6,
                "deg": 230
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2020-06-07 18:00:00"
        },
        {
            "dt": 1591563600,
            "main": {
                "temp": 289.26,
                "feels_like": 286.08,
                "temp_min": 289.26,
                "temp_max": 289.26,
                "pressure": 1019,
                "sea_level": 1019,
                "grnd_level": 955,
                "humidity": 31,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 74
            },
            "wind": {
                "speed": 1.5,
                "deg": 243
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2020-06-07 21:00:00"
        },
        {
            "dt": 1591574400,
            "main": {
                "temp": 285.63,
                "feels_like": 283.21,
                "temp_min": 285.63,
                "temp_max": 285.63,
                "pressure": 1022,
                "sea_level": 1022,
                "grnd_level": 957,
                "humidity": 43,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03n"
                }
            ],
            "clouds": {
                "all": 37
            },
            "wind": {
                "speed": 0.67,
                "deg": 233
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2020-06-08 00:00:00"
        }
    ],
    "city": {
        "id": 3871336,
        "name": "Santiago",
        "coord": {
            "lat": -33.4569,
            "lon": -70.6483
        },
        "country": "CL",
        "population": 4837295,
        "timezone": -14400,
        "sunrise": 1591097951,
        "sunset": 1591134149
    }
}
let data1 = data.list;




console.log(forecastListParser(data1));