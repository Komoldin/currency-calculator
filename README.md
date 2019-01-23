# Currency Calculator (beta)

Currency Converter App helps users to convert USD into another usable currency (RUB, CAD, or EUR) in just a moment. Based on current market exchange rates, app will calculate the currency's corresponding value of the entered amount of money.

## Features:
- AJAX requests;
- JSON API for live exchange rates updates;
- Cticky footer;
- HTML5, CSS3, JS(ES6).

## Updates in v1.0 1/23/2019:
- JSON API integrated as live JSON exchange rates server;
- Localization realized for users to display the time that the rates were published;
- UNIX Timestamp value used for DateTime manipulation;
- Ruble sign converted in HTML Entity to improve cross-browser support;
- Date script in copyright field fixed.

## Updates in beta 1/18/2019:
- Conversion expanded to CAD & EUR;
- Support to all directions of conversion realized;
- Fonts fixed;
- Icon & flexbox added;
- Art direction & resolution switching implemented;
- Updated local JSON server with stored exchange rate and update date;
- Optimized image breakpoints for background image introduced.

## GTBD:
- store JSON data from API to faster access it after the page is loaded and reduce requests to server (currently x5: repeated for each currency on input)
- optimize image breakpoints for retina displays;
- fix error message (after logical operator in requests)






/* Image Breakpoints */

/* 1.25 dpr */
@media 
(-webkit-min-device-pixel-ratio: 1.25), 
(min-resolution: 120dpi){ 
    /* Retina-specific stuff here */
}

/* 1.3 dpr */
@media 
(-webkit-min-device-pixel-ratio: 1.3), 
(min-resolution: 124.8dpi){ 
    /* Retina-specific stuff here */
}

/* 1.5 dpr */
@media 
(-webkit-min-device-pixel-ratio: 1.5), 
(min-resolution: 144dpi){ 
    /* Retina-specific stuff here */
}

 /* 2.0 dpr */
@media 
(-webkit-min-device-pixel-ratio: 2), 
(min-resolution: 192dpi) { 
    /* Retina-specific stuff here */
}