# PocketWeather
####  A Mini Weather App Project build with [Angular16](https://angular.io) and [Weather API](https://www.weatherapi.com/)
![AnguWeatherApp](https://user-images.githubusercontent.com/27999631/241835739-c079e399-13d6-4b75-89ac-dac324117799.png)

## Table of contents
* [Overview](#overview)
* [Features](#features)
* [Getting Started](#getting-started)
* [Acknowledgments](#acknowledgments)
* [Further help](#further-help)


## Overview

This project was developed to help you get weather updates from different cities. All weather data displayed are reliable and sourced from the Weather API.  PocketWeather also gives you accurate weather forecasts to enable you plan your week outdoors with ease. 


## Features

This project comes with all the standard Angular 16 dependencies out of the box. It is a monolith application currently deployed and hosted on [Firebase](https://firebase.google.com/). It was also developed from scratch using modern web application best practices like:
 1. Debouncing of high traffic search API calls. 
 2. Loading state to ensure app initialises correctly.
 3. Persistence of last searched city on Local Storage in-browser application memory.
 4. High unit test coverage to ensure application is easily maintained and works as intended leveraging on [Jasmine](https://jasmine.github.io/) and [Karma](https://karma-runner.github.io/latest/index.html) test runner.

## Getting Started

Ensure you have [Nodejs](https://nodejs.org/) installed locally or on a Container/VM to Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically and open in your browser.
You will need to register an account with [Weather API](https://www.weatherapi.com/) to get make use of their API.
Navigate to the `src/environments` directory see which variable keys are needed to communicate with the weather APIs.
Next you should create a file `environment.development.ts` inside the `src/environments/` directory can paste your keys like so:


```
  WEATHER_API_BASE_URL: '',
  X_RAPIDAPI_HOST_LABEL: '',
  X_RAPIDAPI_HOST_VALUE: '',
  X_RAPIDAPI_KEY_LABEL: '',
  X_RAPIDAPI_KEY_VALUE: '',
  WEATHER_API_CITY_SEARCH_URL: ''
```

Two main endpoints are used in this project, the `Forecast Weather API` and `Search/Autocomplete API` [endpoints](https://rapidapi.com/weatherapi/api/weatherapi-com/). They should be copied along with http headers variables shown aboove. 


## Acknowledgments

PocketWeather is made possible thanks to all the hard work the good people at various open source teams are doing. I will like to give special thanks to contributor behind Weather API.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page. If there is any specific request you will like to direct to me personally, feel free to say hi to me on [Twitter](https://twitter.com/degivenchy) 
