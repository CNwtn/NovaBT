let map;
let mapDetails = {
    center:{lat: 38.84575643258774,lng: -77.30619430989303},
    zoom:10, 
    mapId: '65b3b8fe5572941b'};
let markerArray = [];
let today = new Date();
let weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let currentWeekday = today.getDay();
let shops = [
    {
        shopName:"4 Sisters Asian Snack Bar",
        lat: 39.00997062697114, 
        lng: -77.49176499849285,
        city: "Ashburn",
        zip: "20147",
        food: 'y',
        dessert: 'y',
        games: 'n',
        Sunday: {
            hours: "11:30AM - 6PM",
            open: "11:30",
            close: "18:00"
        },
        Monday: {
            hours: "11:30AM - 7PM",
            open: "11:30",
            close: "19:00"
        },
        Tuesday: {
            hours: "Closed for Today",
            open: "Closed for Today",
            close: "Closed for Today"
        },
        Wednesday: {
            hours: "11:30AM - 7PM",
            open: "11:30",
            close: "19:00"
        },
        Thursday: {
            hours: "11:30AM - 7PM",
            open: "11:30",
            close: "19:00"
        },
        Friday: {
            hours: "11:30AM - 7PM",
            open: "11:30",
            close: "19:00"
        },
        Saturday: {
            hours: "11:30AM - 7PM",
            open: "11:30",
            close: "19:00"
        }
    },
    {
        shopName:"5T Ice",
        lat: 38.9375001600823,
        lng: -77.5222773905383,
        city: "Dulles",
        zip: "20166",
        food: 'y',
        dessert: 'y',
        games: 'n',
        Sunday: {
            hours: "11AM - 9PM",
            open: "11:00",
            close: "21:00"
        },
        Monday: {
            hours: "11AM - 9PM",
            open: "11:00",
            close: "21:00"
        },
        Tuesday: {
            hours: "11AM - 9PM",
            open: "11:00",
            close: "21:00"
        },
        Wednesday: {
            hours: "11AM - 9PM",
            open: "11:00",
            close: "21:00"
        },
        Thursday: {
            hours: "11AM - 9PM",
            open: "11:00",
            close: "21:00"
        },
        Friday: {
            hours: "11AM - 9:30PM",
            open: "11:00",
            close: "21:30"
        },
        Saturday: {
            hours: "11AM - 9PM",
            open: "11:00",
            close: "21:00"
        }
    },
    {
        shopName:"ArTea Shop",
        lat: 38.93092351750966, 
        lng: -77.17351848455093,
        city: "McLean",
        zip: "22101",
        food: 'n',
        dessert: 'y',
        games: 'n',
        Sunday: {
            hours: "10AM - 4PM",
            open: "10:00",
            close: "16:00"
        },
        Monday: {
            hours: "Closed for Today",
            open: "Closed for Today",
            close: "Closed for Today"
        },
        Tuesday: {
            hours: "11AM - 7PM",
            open: "11:00",
            close: "19:00"
        },
        Wednesday: {
            hours: "11AM - 7PM",
            open: "11:00",
            close: "19:00"
        },
        Thursday: {
            hours: "11AM - 4:30PM",
            open: "11:00",
            close: "16:30"
        },
        Friday: {
            hours: "11AM - 7PM",
            open: "11:00",
            close: "19:00"
        },
        Saturday: {
            hours: "10AM - 7PM",
            open: "10:00",
            close: "19:00"
        }
    },
     {
        shopName:"AYE Tea Lounge",
        lat: 38.853947526221106, 
        lng: -77.32921131738038, 
        city: "Fairfax",
        zip: "22030",
        food: 'n',
        dessert: 'y',
        games: 'n',
        Sunday: {
            hours: "11AM - 10PM",
            open: "11:00",
            close: "22:00"
        },
        Monday: {
            hours: "11AM - 12AM",
            open: "11:00",
            close: "00:00"
        },
        Tuesday: {
            hours: "11AM - 12AM",
            open: "11:00",
            close: "00:00"
        },
        Wednesday: {
            hours: "11AM - 12AM",
            open: "11:00",
            close: "00:00"
        },
        Thursday: {
            hours: "11AM - 12AM",
            open: "11:00",
            close: "00:00"
        },
        Friday: {
            hours: "11AM - 12AM",
            open: "11:00",
            close: "00:00"
        },
        Saturday: {
            hours: "11AM - 12AM",
            open: "11:00",
            close: "00:00"
        }
    },
    // {  temporarily closed
    //     shopName:"Bambu Coffe Tea Che",
    //     lat: 38.83194831559987, 
    //     lng: -77.19701571539082,
    //     city: "Annandale",
    //     zip: "22003",
    //     food: 'n',
    //     dessert: 'y',
    //     games: 'n',
    //     Sunday: {
    //         hours: "11AM - 10PM",
    //         open: "11:00",
    //         close: "22:00"
    //     },
    //     Monday: {
    //         hours: "11AM - 10PM",
    //         open: "11:00",
    //         close: "22:00"
    //     },
    //     Tuesday: {
    //         hours: "Closed for Today",
    //         open: "Closed for Today",
    //         close: "Closed for Today"
    //     },
    //     Wednesday: {
    //         hours: "11AM - 10PM",
    //         open: "11:00",
    //         close: "22:00"
    //     },
    //     Thursday: {
    //         hours: "11AM - 10PM",
    //         open: "11:00",
    //         close: "22:00"
    //     },
    //     Friday: {
    //         hours: "11AM - 10PM",
    //         open: "11:00",
    //         close: "22:00"
    //     },
    //     Saturday: {
    //         hours: "11AM - 10PM",
    //         open: "11:00",
    //         close: "22:00"
    //     }
    // }, 
    {
        shopName:"Bees and Tea",
        lat: 38.8631918707671,
        lng: -77.0629887873384,
        city: "Arlington",
        zip: "22202",
        food: 'y',
        dessert: 'y',
        games: 'n',
        Sunday: {
            hours: "11:00AM - 10PM",
            open: "11:00",
            close: "22:00"
        },
        Monday: {
            hours: "11:00AM - 10PM",
            open: "11:00",
            close: "22:00"
        },
        Tuesday: {
            hours: "11:00AM - 10PM",
            open: "11:00",
            close: "22:00"
        },
        Wednesday: {
            hours: "11:00AM - 10PM",
            open: "11:00",
            close: "22:00"
        },
        Thursday: {
            hours: "11:00AM - 10PM",
            open: "11:00",
            close: "22:00"
        },
        Friday: {
            hours: "11AM - 11PM",
            open: "11:00",
            close: "23:00"
        },
        Saturday: {
            hours: "11AM - 11PM",
            open: "11:00",
            close: "23:00"
        }
    },
    {
        shopName:"Ben Gong's Tea",
        lat: 38.8310810997249,
        lng: -77.1884120341947,
        city: "Annandale",
        zip: "22003",
        food: 'n',
        dessert: 'n',
        games: 'n',
        Sunday: {
            hours: "11AM - 9PM",
            open: "11:00",
            close: "21:00"
        },
        Monday: {
            hours: "12PM - 9PM",
            open: "12:00",
            close: "21:00"
        },
        Tuesday: {
            hours: "12PM - 9PM",
            open: "12:00",
            close: "21:00"
        },
        Wednesday: {
            hours: "12PM - 9PM",
            open: "12:00",
            close: "21:00"
        },
        Thursday: {
            hours: "2PM - 9PM",
            open: "14:00",
            close: "21:00"
        },
        Friday: {
            hours: "12PM - 10PM",
            open: "12:00",
            close: "22:00"
        },
        Saturday: {
            hours: "11AM - 10PM",
            open: "11:00",
            close: "22:30"
        }
    },
    {
        shopName:"Ben Gong's Tea",
        lat: 38.8381926231755,
        lng: -77.4398033183466,
        city: "Centreville",
        zip: "20121",
        food: 'n',
        dessert: 'n',
        games: 'y',
        Sunday: {
            hours: "12PM - 9:30PM",
            open: "12:00",
            close: "21:30"
        },
        Monday: {
            hours: "12PM - 9:30PM",
            open: "12:00",
            close: "21:30"
        },
        Tuesday: {
            hours: "12PM - 9:30PM",
            open: "12:00",
            close: "21:30"
        },
        Wednesday: {
            hours: "12PM - 9:30PM",
            open: "12:00",
            close: "21:30"
        },
        Thursday: {
            hours: "12PM - 9:30PM",
            open: "12:00",
            close: "21:30"
        },
        Friday: {
            hours: "12PM - 10PM",
            open: "12:00",
            close: "22:00"
        },
        Saturday: {
            hours: "12PM - 10PM",
            open: "12:00",
            close: "22:00"
        }
    },
    {
        shopName:"Ben Gong's Tea",
        lat: 38.856461861476774, 
        lng: -77.31560336595811,
        city: "Fairfax",
        zip: "22030",
        food: 'n',
        dessert: 'n',
        games: 'n',
        Sunday: {
            hours: "12PM - 9:30PM",
            open: "12:00",
            close: "21:30"
        },
        Monday: {
            hours: "12PM - 9:30PM",
            open: "12:00",
            close: "21:30"
        },
        Tuesday: {
            hours: "12PM - 9:30PM",
            open: "12:00",
            close: "21:30"
        },
        Wednesday: {
            hours: "12PM - 9:30PM",
            open: "12:00",
            close: "21:30"
        },
        Thursday: {
            hours: "12PM - 9:30PM",
            open: "12:00",
            close: "21:30"
        },
        Friday: {
            hours: "12PM - 10PM",
            open: "12:00",
            close: "22:00"
        },
        Saturday: {
            hours: "12PM - 10PM",
            open: "12:00",
            close: "22:00"
        }
    },
    {
        shopName:"Bloom Tea",
        lat: 38.8009794935077, 
        lng: -77.04802616136675,
        city: "Alexandria",
        zip: "22314",
        food: 'n',
        dessert: 'y',
        games: 'n',
        Sunday: {
            hours: "12PM - 6PM",
            open: "12:00",
            close: "18:00"
        },
        Monday: {
            hours: "11AM - 8PM",
            open: "11:00",
            close: "20:00"
        },
        Tuesday: {
            hours: "11AM - 8PM",
            open: "11:00",
            close: "20:00"
        },
        Wednesday: {
            hours: "11AM - 8PM",
            open: "11:00",
            close: "20:00"
        },
        Thursday: {
            hours: "11AM - 8PM",
            open: "11:00",
            close: "20:00"
        },
        Friday: {
           hours: "11AM - 8PM",
           open: "11:00",
           close: "20:00"
        },
        Saturday: {
            hours: "11AM - 8PM",
            open: "11:00",
            close: "20:00"
        }
    },
    {
        shopName:"Boba Knight",
        lat: 38.86221024012838, 
        lng: -77.2959162196095,
        city: "Fairfax",
        zip: "22030",
        food: 'n',
        dessert: 'n',
        games: 'n',
        Sunday: {
            hours: "11AM - 10PM",
            open: "11:00",
            close: "22:00"
        },
        Monday: {
            hours: "11AM - 10PM",
            open: "11:00",
            close: "22:00"
        },
        Tuesday: {
            hours: "11AM - 10PM",
            open: "11:00",
            close: "22:00"
        },
        Wednesday: {
            hours: "11AM - 10PM",
            open: "11:00",
            close: "22:00"
        },
        Thursday: {
            hours: "11AM - 10PM",
            open: "11:00",
            close: "22:00"
        },
        Friday: {
           hours: "11AM - 10PM",
            open: "11:00",
            close: "22:00"
        },
        Saturday: {
            hours: "11AM - 10PM",
            open: "11:00",
            close: "22:00"
        }
    },
    {
        shopName:"Boba TomTom",
        lat: 38.84843408498978,
        lng: -77.30087692899075,
        city: "Fairfax",
        zip: "22030",
        food: 'y',
        dessert: 'n',
        games: 'n',
        Sunday: {
            hours: "Closed for today",
            open: "Closed for today",
            close: "Closed for today"
        },
        Monday: {
            hours: "10AM - 9PM",
            open: "10:00",
            close: "21:00"
        },
        Tuesday: {
            hours: "10AM - 9PM",
            open: "10:00",
            close: "21:00"
        },
        Wednesday: {
            hours: "10AM - 9PM",
            open: "10:00",
            close: "21:00"
        },
        Thursday: {
            hours: "10AM - 9PM",
            open: "10:00",
            close: "21:00"
        },
        Friday: {
            hours: "10AM - 9:30PM",
            open: "10:00",
            close: "21:30"
        },
        Saturday: {
            hours: "10AM - 9:30PM",
            open: "10:00",
            close: "21:30"
        }
    },
    {
        shopName:"Bobapop Tea Bar",
        lat: 38.8737540086376,
        lng: -77.225153162887,
        city: "Falls Church",
        zip: "22042",
        food: 'n',
        dessert: 'n',
        games: 'n',
        Sunday: {
            hours: "11AM - 9PM",
            open: "11:00",
            close: "21:00"
        },
        Monday: {
            hours: "11AM - 9PM",
            open: "11:00",
            close: "21:00"
        },
        Tuesday: {
            hours: "11AM - 9PM",
            open: "11:00",
            close: "21:00"
        },
        Wednesday: {
            hours: "11AM - 9PM",
            open: "11:00",
            close: "21:00"
        },
        Thursday: {
            hours: "11AM - 9PM",
            open: "11:00",
            close: "21:00"
        },
        Friday: {
            hours: "11AM - 10PM",
            open: "11:00",
            close: "22:00"
        },
        Saturday: {
            hours: "11AM - 10PM",
            open: "11:00",
            close: "22:00"
        }
    },
    {
        shopName:"Bobapop Tea Bar",
        lat: 38.7651000792815,
        lng: -77.15265030403896,
        city: "Alexandria",
        zip: "22310",
        food: 'n',
        dessert: 'n',
        games: 'n',
        Sunday: {
            hours: "11:30AM - 9PM",
            open: "11:30",
            close: "21:00"
        },
        Monday: {
            hours: "12PM - 9PM",
            open: "12:00",
            close: "21:00"
        },
        Tuesday: {
            hours: "12PM - 9PM",
            open: "12:00",
            close: "21:00"
        },
        Wednesday: {
            hours: "12PM - 9PM",
            open: "12:00",
            close: "21:00"
        },
        Thursday: {
            hours: "12PM - 9PM",
            open: "12:00",
            close: "21:00"
        },
        Friday: {
            hours: "11:30AM - 9PM",
            open: "11:30",
            close: "21:00"
        },
        Saturday: {
            hours: "11:30AM - 9PM",
            open: "11:30",
            close: "21:00"
        }
    },
    {
        shopName:"Bubble Tea Station",
        lat: 38.7719290295107,
        lng: -77.5056905455913,
        city: "Manassas",
        zip: "20109",
        food: 'n',
        dessert: 'n',
        games: 'n',
        Sunday: {
            hours: "12PM - 6PM",
            open: "12:00",
            close: "18:00"
        },
        Monday: {
            hours: "10AM - 8PM",
            open: "10:00",
            close: "20:00"
        },
        Tuesday: {
            hours: "10AM - 8PM",
            open: "10:00",
            close: "20:00"
        },
        Wednesday: {
            hours: "10AM - 8PM",
            open: "10:00",
            close: "20:00"
        },
        Thursday: {
            hours: "10AM - 8PM",
            open: "10:00",
            close: "20:00"
        },
        Friday: {
            hours: "10AM - 8PM",
            open: "10:00",
            close: "20:00"
        },
        Saturday: {
            hours: "10AM - 8PM",
            open: "10:00",
            close: "20:00"
        }
    },
    {
        shopName:"Bubbleology",
        lat: 39.0900283572368,
        lng: -77.5248278132953,
        city: "Leesburg",
        zip: "20175",
        food: 'n',
        dessert: 'y',
        games: 'n',
        Sunday: {
            hours: "12PM - 8PM",
            open: "12:00",
            close: "20:00"
        },
        Monday: {
            hours: "12PM - 8PM",
            open: "12:00",
            close: "20:00"
        },
        Tuesday: {
            hours: "12PM - 8PM",
            open: "12:00",
            close: "20:00"
        },
        Wednesday: {
            hours: "12PM - 8PM",
            open: "12:00",
            close: "20:00"
        },
        Thursday: {
            hours: "12PM - 8PM",
            open: "12:00",
            close: "20:00"
        },
        Friday: {
            hours: "12PM - 9PM",
            open: "12:00",
            close: "21:00"
        },
        Saturday: {
            hours: "12PM - 9PM",
            open: "12:00",
            close: "21:00"
        }
    },
    {
        shopName:"Cafe Miki",
        lat: 38.6352009970873,
        lng: -77.2967834635795,
        city: "Woodbridge",
        zip: "22192",
        food: 'n',
        dessert: 'y',
        games: 'n',
        Sunday: {
            hours: "12PM - 9PM",
            open: "12:00",
            close: "21:00"
        },
        Monday: {
            hours: "12PM - 9PM",
            open: "12:00",
            close: "21:00"
        },
        Tuesday: {
            hours: "12PM - 9PM",
            open: "12:00",
            close: "21:00"
        },
        Wednesday: {
            hours: "12PM - 9PM",
            open: "12:00",
            close: "21:00"
        },
        Thursday: {
            hours: "12PM - 9PM",
            open: "12:00",
            close: "21:00"
        },
        Friday: {
            hours: "12PM - 9:30PM",
            open: "12:00",
            close: "21:30"
        },
        Saturday: {
            hours: "12PM - 9:30PM",
            open: "12:00",
            close: "21:30"
        }
    },
    // { temporarily closed
    //     shopName: "Cafe O'Clock",
    //     lat: 38.84401596226555, 
    //     lng: -77.28757644911781,
    //     city: "Fairfax",
    //     zip: "22031",
    //     food: 'y',
    //     dessert: 'y',
    //     games: 'n',
    //     Sunday: {
    //         hours: "Closed for today",
    //         open: "Closed for today",
    //         close: "Closed for today"
    //     },
    //     Monday: {
    //         hours: "10AM - 3PM",
    //         open: "10:00",
    //         close: "15:00"
    //     },
    //     Tuesday: {
    //         hours: "10AM - 3PM",
    //         open: "10:00",
    //         close: "15:00"
    //     },
    //     Wednesday: {
    //         hours: "10AM - 3PM",
    //         open: "10:00",
    //         close: "15:00"
    //     },
    //     Thursday: {
    //         hours: "10AM - 3PM",
    //         open: "10:00",
    //         close: "15:00"
    //     },
    //     Friday: {
    //         hours: "10AM - 3PM",
    //         open: "10:00",
    //         close: "15:00"
    //     },
    //     Saturday: {
    //         hours: "Closed for today",
    //         open: "Closed for today",
    //         close: "Closed for today"
    //     }
    // },
    {
        shopName:"Chill Zone Cafe",
        lat: 38.896696879583,
        lng: -77.1387386071683,
        city: "Arlington",
        zip: "22207",
        food: 'y',
        dessert: 'y',
        games: 'y',
        Sunday: {
            hours: "10AM - 9PM",
            open: "10:00",
            close: "21:00"
        },
        Monday: {
            hours: "10AM - 9PM",
            open: "10:00",
            close: "21:00"
        },
        Tuesday: {
            hours: "10AM - 9PM",
            open: "10:00",
            close: "21:00"
        },
        Wednesday: {
            hours: "10AM - 9PM",
            open: "10:00",
            close: "21:00"
        },
        Thursday: {
            hours: "10AM - 9PM",
            open: "10:00",
            close: "21:00"
        },
        Friday: {
            hours: "10AM - 9PM",
            open: "10:00",
            close: "21:00"
        },
        Saturday: {
            hours: "10AM - 9PM",
            open: "10:00",
            close: "21:00"
        }
    },
    {
        shopName:"Chunky Cup Bubble Tea",
        lat: 38.640135975465626, 
        lng: -77.26851628386576,
        city: "Woodbridge",
        zip: "22191",
        food: 'n',
        dessert: 'n',
        games: 'n',
        Sunday: {
            hours: "10AM - 9PM",
            open: "10:00",
            close: "21:00"
        },
        Monday: {
            hours: "10AM - 9PM",
            open: "10:00",
            close: "21:00"
        },
        Tuesday: {
            hours: "10AM - 9PM",
            open: "10:00",
            close: "21:00"
        },
        Wednesday: {
            hours: "10AM - 9PM",
            open: "10:00",
            close: "21:00"
        },
        Thursday: {
            hours: "10AM - 9PM",
            open: "10:00",
            close: "21:00"
        },
        Friday: {
            hours: "10AM - 9PM",
            open: "10:00",
            close: "21:00"
        },
        Saturday: {
            hours: "10AM - 9PM",
            open: "10:00",
            close: "21:00"
        }
    },
    {
        shopName:"Chunky Cup Bubble Tea and Fries",
        lat: 38.6786430423673,
        lng: -77.359470511346,
        city: "Woodbridge",
        zip: "22192",
        food: 'y',
        dessert: 'n',
        games: 'n',
        Sunday: {
            hours: "10AM - 9PM",
            open: "10:00",
            close: "21:00"
        },
        Monday: {
            hours: "10AM - 9PM",
            open: "10:00",
            close: "21:00"
        },
        Tuesday: {
            hours: "10AM - 9PM",
            open: "10:00",
            close: "21:00"
        },
        Wednesday: {
            hours: "10AM - 9PM",
            open: "10:00",
            close: "21:00"
        },
        Thursday: {
            hours: "10AM - 9PM",
            open: "10:00",
            close: "21:00"
        },
        Friday: {
            hours: "10AM - 9PM",
            open: "10:00",
            close: "21:00"
        },
        Saturday: {
            hours: "10AM - 9PM",
            open: "10:00",
            close: "21:00"
        }
    },
    {
        shopName: "Donutchew",
        lat: 38.862855582422505, 
        lng: -77.35885417759194,
        city: "Fairfax",
        zip: "22033",
        food: 'n',
        dessert: 'y',
        games: 'n',
        Sunday: {
            hours: "10AM - 7PM",
            open: "10:00",
            close: "19:00"
        },
        Monday: {
            hours: "10AM - 8PM",
            open: "11:00",
            close: "20:00"
        },
        Tuesday: {
            hours: "10AM - 8PM",
            open: "11:00",
            close: "20:00"
        },
        Wednesday: {
            hours: "10AM - 8PM",
            open: "11:00",
            close: "20:00"
        },
        Thursday: {
            hours: "10AM - 8PM",
            open: "11:00",
            close: "20:00"
        },
        Friday: {
            hours: "10AM - 8PM",
            open: "11:00",
            close: "20:00"
        },
        Saturday: {
            hours: "10AM - 8PM",
            open: "11:00",
            close: "20:00"
        }
    },
    {
        shopName:"Goldmiss",
        lat: 38.85753279853386,
        lng: -77.33205028099414,
        city: "Fairfax",
        zip: "22030",
        food: 'y',
        dessert: 'y',
        games: 'n',
        Sunday: {
            hours: "11AM - 8PM",
            open: "11:00",
            close: "20:00"
        },
        Monday: {
            hours: "11AM - 8PM",
            open: "11:00",
            close: "20:00"
        },
        Tuesday: {
            hours: "11AM - 8PM",
            open: "11:00",
            close: "20:00"
        },
        Wednesday: {
            hours: "11AM - 8PM",
            open: "11:00",
            close: "20:00"
        },
        Thursday: {
            hours: "11AM - 8PM",
            open: "11:00",
            close: "20:00"
        },
        Friday: {
            hours: "11AM - 8PM",
            open: "11:00",
            close: "20:00"
        },
        Saturday: {
            hours: "11AM - 8PM",
            open: "11:00",
            close: "20:00"
        }
    },
    {
        shopName:"Gong Cha",
        lat: 38.83601090473298, 
        lng: -77.42538161466828,
        city: "Centreville",
        zip: "20121",
        food: 'n',
        dessert: 'y',
        games: 'n',
        Sunday: {
            hours: "11AM - 10PM",
            open: "11:00",
            close: "22:00"
        },
        Monday: {
            hours: "12PM - 10PM",
            open: "12:00",
            close: "20:00"
        },
        Tuesday: {
            hours: "12PM - 10PM",
            open: "12:00",
            close: "20:00"
        },
        Wednesday: {
            hours: "12PM - 10PM",
            open: "12:00",
            close: "20:00"
        },
        Thursday: {
            hours: "12PM - 10PM",
            open: "12:00",
            close: "20:00"
        },
        Friday: {
            hours: "11AM - 11PM",
            open: "11:00",
            close: "23:00"
        },
        Saturday: {
            hours: "11AM - 11PM",
            open: "11:00",
            close: "23:00"
        }
    },
    {
        shopName:"Gong Cha",
        lat: 38.8940336069994,
        lng: -77.0777842511886,
        city: "Arlington",
        zip: "22209",
        food: 'n',
        dessert: 'y',
        games: 'y',
        Sunday: {
            hours: "12:15PM - 9:45PM",
            open: "12:15",
            close: "21:45"
        },
        Monday: {
            hours: "11:15AM - 9:45PM",
            open: "11:15",
            close: "21:45"
        },
        Tuesday: {
            hours: "11:15AM - 9:45PM",
            open: "11:15",
            close: "21:45"
        },
        Wednesday: {
            hours: "11:15AM - 9:45PM",
            open: "11:15",
            close: "21:45"
        },
        Thursday: {
            hours: "11:15AM - 9:45PM",
            open: "11:15",
            close: "21:45"
        },
        Friday: {
            hours: "11:15AM - 10:45PM",
            open: "11:15",
            close: "22:45"
        },
        Saturday: {
            hours: "12:15PM - 10:45PM",
            open: "12:15",
            close: "22:45"
        }
    },
    {
        shopName:"Gong Cha",
        lat: 38.8947072279681,
        lng: -77.4266560875818,
        city: "Chantilly",
        zip: "20151",
        food: 'n',
        dessert: 'y',
        games: 'n',
        Sunday: {
            hours: "12PM - 9PM",
            open: "12:00",
            close: "21:00"
        },
        Monday: {
            hours: "12PM - 9PM",
            open: "12:00",
            close: "21:00"
        },
        Tuesday: {
            hours: "12PM - 9PM",
            open: "12:00",
            close: "21:00"
        },
        Wednesday: {
            hours: "12PM - 9PM",
            open: "12:00",
            close: "21:00"
        },
        Thursday: {
            hours: "12PM - 9PM",
            open: "12:00",
            close: "21:00"
        },
        Friday: {
            hours: "12PM - 10PM",
            open: "12:00",
            close: "22:00"
        },
        Saturday: {
            hours: "12PM - 10PM",
            open: "12:00",
            close: "22:00"
        }
    },    
    {
        shopName:"Gong Cha",
        lat: 38.8735944428943,
        lng: -77.1549384654874,
        city: "Falls Church",
        zip: "22044",
        food: 'n',
        dessert: 'n',
        games: 'n',
        Sunday: {
            hours: "10AM - 9PM",
            open: "10:00",
            close: "21:00"
        },
        Monday: {
            hours: "11AM - 9PM",
            open: "11:00",
            close: "21:00"
        },
        Tuesday: {
            hours: "11AM - 9PM",
            open: "11:00",
            close: "21:00"
        },
        Wednesday: {
            hours: "11AM - 9PM",
            open: "11:00",
            close: "21:00"
        },
        Thursday: {
            hours: "11AM - 9PM",
            open: "11:00",
            close: "21:00"
        },
        Friday: {
            hours: "11AM - 9PM",
            open: "11:00",
            close: "21:00"
        },
        Saturday: {
            hours: "10AM - 9PM",
            open: "10:00",
            close: "21:00"
        }
    },
    {
        shopName:"Gong Cha",
        lat: 38.7814936827259,
        lng: -77.1871016928668,
        city: "Springfield",
        zip: "22150",
        food: 'n',
        dessert: 'y',
        games: 'y',
        Sunday: {
            hours: "11:30AM - 9PM",
            open: "11:30",
            close: "21:00"
        },
        Monday: {
            hours: "11:30AM - 9PM",
            open: "11:30",
            close: "21:00"
        },
        Tuesday: {
            hours: "11:30AM - 9PM",
            open: "11:30",
            close: "21:00"
        },
        Wednesday: {
            hours: "11:30AM - 9PM",
            open: "11:30",
            close: "21:00"
        },
        Thursday: {
            hours: "11:30AM - 9PM",
            open: "11:30",
            close: "21:00"
        },
        Friday: {
            hours: "11:30AM - 10PM",
            open: "11:30",
            close: "22:00"
        },
        Saturday: {
            hours: "11:30AM - 10PM",
            open: "11:30",
            close: "22:00"
        }
    },
    {
        shopName:"Gong Cha",
        lat: 38.9245599334436,
        lng: -77.2338069102715,
        city: "McLean",
        zip: "22102",
        food: 'y',
        dessert: 'y',
        games: 'n',
        Sunday: {
            hours: "11AM - 9PM",
            open: "11:00",
            close: "21:00"
        },
        Monday: {
            hours: "11AM - 9PM",
            open: "11:00",
            close: "21:00"
        },
        Tuesday: {
            hours: "11AM - 9PM",
            open: "11:00",
            close: "21:00"
        },
        Wednesday: {
            hours: "11AM - 9PM",
            open: "11:00",
            close: "21:00"
        },
        Thursday: {
            hours: "11AM - 9PM",
            open: "11:00",
            close: "21:00"
        },
        Friday: {
            hours: "11AM - 9PM",
            open: "11:00",
            close: "21:00"
        },
        Saturday: {
            hours: "11AM - 9PM",
            open: "11:00",
            close: "21:00"
        }
    },
    {
        shopName:"Heuk Hwa Dang (HHD)",
        lat: 38.91744454261148, 
        lng: -77.2188284686463,
        city: "McLean",
        zip: "22102",
        food: 'n',
        dessert: 'y',
        games: 'n',
        Sunday: {
            hours: "11AM - 7PM",
            open: "11:00",
            close: "19:00"
        },
        Monday: {
            hours: "11AM - 9PM",
            open: "11:00",
            close: "21:00"
        },
        Tuesday: {
            hours: "11AM - 9PM",
            open: "11:00",
            close: "21:00"
        },
        Wednesday: {
            hours: "11AM - 9PM",
            open: "11:00",
            close: "21:00"
        },
        Thursday: {
            hours: "11AM - 9PM",
            open: "11:00",
            close: "21:00"
        },
        Friday: {
            hours: "11AM - 9PM",
            open: "11:00",
            close: "21:00"
        },
        Saturday: {
            hours: "11AM - 9PM",
            open: "11:00",
            close: "21:00"
        }
    },
    {
        shopName:"HEYTEA",
        lat: 38.91770338688931, 
        lng: -77.22103519999402,
        city: "Tysons",
        zip: "22102",
        food: 'n',
        dessert: 'n',
        games: 'n',
        Sunday: {
            hours: "11AM - 7PM",
            open: "11:00",
            close: "19:00"
        },
        Monday: {
            hours: "11AM - 9PM",
            open: "11:00",
            close: "21:00"
        },
        Tuesday: {
            hours: "11AM - 9PM",
            open: "11:00",
            close: "21:00"
        },
        Wednesday: {
            hours: "11AM - 9PM",
            open: "11:00",
            close: "21:00"
        },
        Thursday: {
            hours: "11AM - 9PM",
            open: "11:00",
            close: "21:00"
        },
        Friday: {
            hours: "11AM - 9PM",
            open: "11:00",
            close: "21:00"
        },
        Saturday: {
            hours: "11AM - 9PM",
            open: "11:00",
            close: "21:00"
        }
    },
    {
        shopName:"Hong Kong Tea House",
        lat: 38.83740335747695,
        lng: -77.43385281321446,
        city: "Centreville",
        zip: "20121",
        food: 'y',
        dessert: 'y',
        games: 'n',
        Sunday: {
            hours: "10AM - 9PM",
            open: "10:00",
            close: "21:00"
        },
        Monday: {
            hours: "10AM - 9PM",
            open: "10:00",
            close: "21:00"
        },
        Tuesday: {
            hours: "12PM - 9PM",
            open: "12:00",
            close: "21:00"
        },
        Wednesday: {
            hours: "10AM - 9PM",
            open: "10:00",
            close: "21:00"
        },
        Thursday: {
            hours: "12PM - 9PM",
            open: "12:00",
            close: "21:00"
        },
        Friday: {
            hours: "10AM - 9PM",
            open: "10:00",
            close: "21:00"
        },
        Saturday: {
            hours: "10AM - 9PM",
            open: "10:00",
            close: "21:00"
        }
    },
    {
        shopName:"Infini-Tea",
        lat: 38.8690391094471,
        lng: -77.1733203427517,
        city: "Falls Church",
        zip: "22042",
        food: 'y',
        dessert: 'y',
        games: 'n',
        Sunday: {
            hours: "10:30AM - 8:30PM",
            open: "10:30",
            close: "20:30"
        },
        Monday: {
            hours: "10:30AM - 8:30PM",
            open: "10:30",
            close: "20:30"
        },
        Tuesday: {
            hours: "10:30AM - 8:30PM",
            open: "10:30",
            close: "20:30"
        },
        Wednesday: {
            hours: "10:30AM - 8:30PM",
            open: "10:30",
            close: "20:30"
        },
        Thursday: {
            hours: "10:30AM - 8:30PM",
            open: "10:30",
            close: "20:30"
        },
        Friday: {
            hours: "10:30AM - 8:30PM",
            open: "10:30",
            close: "20:30"
        },
        Saturday: {
            hours: "10:30AM - 8:30PM",
            open: "10:30",
            close: "20:30"
        }
    },
    {
        shopName: "Java Loco Coffee & Bubble Tea",
        lat: 38.7499947751215,
        lng: -77.0847515842222,
        city: "Alexandria",
        zip: "22306",
        food: 'y',
        dessert: 'y',
        games: 'n',
        Sunday: {
            hours: "8AM - 8:30PM",
            open: "08:00",
            close: "20:30"
        },
        Monday: {
            hours: "7:30AM - 8:30PM",
            open: "07:30",
            close: "20:30"
        },
        Tuesday: {
            hours: "7:30AM - 8:30PM",
            open: "07:30",
            close: "20:30"
        },
        Wednesday: {
            hours: "7:30AM - 8:30PM",
            open: "07:30",
            close: "20:30"
        },
        Thursday: {
            hours: "7:30AM - 8:30PM",
            open: "07:30",
            close: "20:30"
        },
        Friday: {
            hours: "7:30AM - 8:30PM",
            open: "07:30",
            close: "20:30"
        },
        Saturday: {
            hours: "8AM - 8:30PM",
            open: "08:00",
            close: "20:30"
        }
    },
    {
        shopName: "Java Loco Coffee & Bubble Tea",
        lat: 38.8105290326835,
        lng: -77.1337174242868,
        city: "Alexandria",
        zip: "22304",
        food: 'y',
        dessert: 'y',
        games: 'n',
        Sunday: {
            hours: "7:30AM - 8:30PM",
            open: "07:30",
            close: "20:30"
        },
        Monday: {
            hours: "7:30AM - 8:30PM",
            open: "07:30",
            close: "20:30"
        },
        Tuesday: {
            hours: "7:30AM - 8:30PM",
            open: "07:30",
            close: "20:30"
        },
        Wednesday: {
            hours: "7:30AM - 8:30PM",
            open: "07:30",
            close: "20:30"
        },
        Thursday: {
            hours: "7:30AM - 8:30PM",
            open: "07:30",
            close: "20:30"
        },
        Friday: {
            hours: "7:30AM - 8:30PM",
            open: "07:30",
            close: "20:30"
        },
        Saturday: {
            hours: "7:30AM - 8:30PM",
            open: "07:30",
            close: "20:30"
        }
    },
    {
        shopName: "Java Loco Coffee & Bubble Tea",
        lat: 38.848585648778915, 
        lng: -77.05076614826471,
        city: "Arlington",
        zip: "22202",
        food: 'y',
        dessert: 'y',
        games: 'n',
        Sunday: {
            hours: "Closed for Today",
            open: "Closed for Today",
            close: "Closed for Today"
        },
        Monday: {
            hours: "6:30AM - 4PM",
            open: "06:30",
            close: "16:00"
        },
        Tuesday: {
            hours: "6:30AM - 4PM",
            open: "06:30",
            close: "16:00"
        },
        Wednesday: {
            hours: "6:30AM - 4PM",
            open: "06:30",
            close: "16:00"
        },
        Thursday: {
            hours: "6:30AM - 4PM",
            open: "06:30",
            close: "16:00"
        },
        Friday: {
            hours: "6:30AM - 4PM",
            open: "06:30",
            close: "16:00"
        },
        Saturday: {
            hours: "Closed for Today",
            open: "Closed for Today",
            close: "Closed for Today"
        }
    },
    {
        shopName: "Java Loco Coffee & Bubble Tea",
        lat: 38.904580645757065,
        lng: -77.20402457892193,
        city: "Falls Church",
        zip: "22043",
        food: 'y',
        dessert: 'y',
        games: 'n',
        Sunday: {
            hours: "8AM - 8:30PM",
            open: "08:00",
            close: "20:30"
        },
        Monday: {
            hours: "7:30AM - 8:30PM",
            open: "07:30",
            close: "20:30"
        },
        Tuesday: {
            hours: "7:30AM - 8:30PM",
            open: "07:30",
            close: "20:30"
        },
        Wednesday: {
            hours: "7:30AM - 8:30PM",
            open: "07:30",
            close: "20:30"
        },
        Thursday: {
            hours: "7:30AM - 8:30PM",
            open: "07:30",
            close: "20:30"
        },
        Friday: {
            hours: "7:30AM - 8:30PM",
            open: "07:30",
            close: "20:30"
        },
        Saturday: {
            hours: "8AM - 8:30PM",
            open: "08:00",
            close: "20:30"
        }
    },
    {
        shopName: "Java Loco Coffee & Bubble Tea",
        lat: 38.86532097048427, 
        lng: -77.19707885452392,
        city: "Falls Church",
        zip: "22042",
        food: 'y',
        dessert: 'y',
        games: 'n',
        Sunday: {
            hours: "8AM - 8:30PM",
            open: "08:00",
            close: "20:30"
        },
        Monday: {
            hours: "7:30AM - 8:30PM",
            open: "07:30",
            close: "20:30"
        },
        Tuesday: {
            hours: "7:30AM - 8:30PM",
            open: "07:30",
            close: "20:30"
        },
        Wednesday: {
            hours: "7:30AM - 8:30PM",
            open: "07:30",
            close: "20:30"
        },
        Thursday: {
            hours: "7:30AM - 8:30PM",
            open: "07:30",
            close: "20:30"
        },
        Friday: {
            hours: "7:30AM - 8:30PM",
            open: "07:30",
            close: "20:30"
        },
        Saturday: {
            hours: "8AM - 8:30PM",
            open: "08:00",
            close: "20:30"
        }
    },
    {
        shopName:"Koi Tea",
        lat: 38.4756220734579,
        lng: -77.4275221590502,
        city: "Stafford",
        zip: "22554",
        food: 'y',
        dessert: 'y',
        games: 'n',
        Sunday: {
            hours: "12PM - 9PM",
            open: "12:00",
            close: "21:00"
        },
        Monday: {
            hours: "12PM - 9PM",
            open: "12:00",
            close: "21:00"
        },
        Tuesday: {
            hours: "12PM - 9PM",
            open: "12:00",
            close: "21:00"
        },
        Wednesday: {
            hours: "12PM - 9PM",
            open: "12:00",
            close: "21:00"
        },
        Thursday: {
            hours: "12PM - 9PM",
            open: "12:00",
            close: "21:00"
        },
        Friday: {
            hours: "12PM - 9PM",
            open: "12:00",
            close: "21:00"
        },
        Saturday: {
            hours: "12PM - 9PM",
            open: "12:00",
            close: "21:00"
        }
    },
    {
        shopName:"Kokee Tea Cafe",
        lat: 39.04117804340621, 
        lng: -77.52200557988887,
        city: "Ashburn",
        zip: "20147",
        food: 'n',
        dessert: 'y',
        games: 'n',
        Sunday: {
            hours: "12PM - 7PM",
            open: "12:00",
            close: "19:00"
        },
        Monday: {
            hours: "7:30AM - 8PM",
            open: "07:30",
            close: "20:00"
        },
        Tuesday: {
            hours: "7:30AM - 8PM",
            open: "07:30",
            close: "20:00"
        },
        Wednesday: {
            hours: "7:30AM - 8PM",
            open: "07:30",
            close: "20:00"
        },
        Thursday: {
            hours: "7:30AM - 8PM",
            open: "07:30",
            close: "20:00"
        },
        Friday: {
            hours: "7:30AM - 9PM",
            open: "07:30",
            close: "21:00"
        },
        Saturday: {
            hours: "10AM - 9PM",
            open: "10:00",
            close: "21:00"
        }
    },
    {
        shopName:"Kokee Tea",
        lat: 38.8623953872683,
        lng: -77.3592240968629,
        city: "Fairfax",
        zip: "22033",
        food: 'n',
        dessert: 'y',
        games: 'n',
        Sunday: {
            hours: "11AM - 8PM",
            open: "11:00",
            close: "20:00"
        },
        Monday: {
            hours: "11AM - 9PM",
            open: "10:00",
            close: "21:00"
        },
        Tuesday: {
            hours: "11AM - 9PM",
            open: "10:00",
            close: "21:00"
        },
        Wednesday: {
            hours: "11AM - 9PM",
            open: "10:00",
            close: "21:00"
        },
        Thursday: {
            hours: "11AM - 9PM",
            open: "10:00",
            close: "21:00"
        },
        Friday: {
            hours: "11AM - 9PM",
            open: "10:00",
            close: "21:00"
        },
        Saturday: {
            hours: "11AM - 9PM",
            open: "10:00",
            close: "21:00"
        }
    },
    {
        shopName:"Kokee Tea",
        lat: 38.81710887977289, 
        lng: -77.27636270996418,
        city: "Burke",
        zip: "22032",
        food: 'n',
        dessert: 'y',
        games: 'n',
        Sunday: {
            hours: "11AM - 8:30PM",
            open: "11:00",
            close: "20:30"
        },
        Monday: {
            hours: "11AM - 9PM",
            open: "10:00",
            close: "21:00"
        },
        Tuesday: {
            hours: "11AM - 9PM",
            open: "10:00",
            close: "21:00"
        },
        Wednesday: {
            hours: "11AM - 9PM",
            open: "10:00",
            close: "21:00"
        },
        Thursday: {
            hours: "11AM - 9PM",
            open: "10:00",
            close: "21:00"
        },
        Friday: {
            hours: "11AM - 9PM",
            open: "10:00",
            close: "21:00"
        },
        Saturday: {
            hours: "11AM - 9PM",
            open: "10:00",
            close: "21:00"
        }
    },
    {
        shopName:"Kokee Tea",
        lat: 38.867961820698476, 
        lng: -77.44684733937515,
        city: "Centreville",
        zip: "20120",
        food: 'n',
        dessert: 'y',
        games: 'y',
        Sunday: {
            hours: "11AM - 8PM",
            open: "11:00",
            close: "20:00"
        },
        Monday: {
            hours: "11AM - 9PM",
            open: "11:00",
            close: "21:00"
        },
        Tuesday: {
            hours: "11AM - 9PM",
            open: "11:00",
            close: "21:00"
        },
        Wednesday: {
            hours: "11AM - 9PM",
            open: "11:00",
            close: "21:00"
        },
        Thursday: {
            hours: "11AM - 9PM",
            open: "11:00",
            close: "21:00"
        },
        Friday: {
            hours: "11AM - 9PM",
            open: "11:00",
            close: "21:00"
        },
        Saturday: {
            hours: "11AM - 9PM",
            open: "11:00",
            close: "21:00"
        }
    },
    {
        shopName:"Kokee Tea",
        lat: 38.8423360237354,
        lng: -77.2759605506546,
        city: "Fairfax",
        zip: "22031",
        food: 'y',
        dessert: 'y',
        games: 'y',
        Sunday: {
            hours: "11AM - 8PM",
            open: "11:00",
            close: "20:00"
        },
        Monday: {
            hours: "11:30AM - 9PM",
            open: "11:30",
            close: "21:00"
        },
        Tuesday: {
            hours: "11AM - 9PM",
            open: "11:00",
            close: "21:00"
        },
        Wednesday: {
            hours: "11AM - 9PM",
            open: "11:00",
            close: "21:00"
        },
        Thursday: {
            hours: "11AM - 9PM",
            open: "11:00",
            close: "21:00"
        },
        Friday: {
            hours: "11AM - 9PM",
            open: "11:00",
            close: "21:00"
        },
        Saturday: {
            hours: "11AM - 9PM",
            open: "11:00",
            close: "21:00"
        }
    },
    {
        shopName:"Kokee Tea",
        lat: 38.71378941477011, 
        lng: -77.23392859358259,
        city: "Lorton",
        zip: "22079",
        food: 'n',
        dessert: 'y',
        games: 'y',
        Sunday: {
            hours: "11AM - 8PM",
            open: "11:00",
            close: "20:00"
        },
        Monday: {
            hours: "11AM - 9PM",
            open: "11:00",
            close: "21:00"
        },
        Tuesday: {
            hours: "11AM - 9PM",
            open: "11:00",
            close: "21:00"
        },
        Wednesday: {
            hours: "11AM - 9PM",
            open: "11:00",
            close: "21:00"
        },
        Thursday: {
            hours: "11AM - 9PM",
            open: "11:00",
            close: "21:00"
        },
        Friday: {
            hours: "11AM - 9PM",
            open: "11:00",
            close: "21:00"
        },
        Saturday: {
            hours: "11AM - 9PM",
            open: "11:00",
            close: "21:00"
        }
    },
    {
        shopName:"Kokee Tea",
        lat: 38.7745055152852,
        lng: -77.1738556333021,
        city: "Springfield",
        zip: "22150",
        food: 'n',
        dessert: 'y',
        games: 'n',
        Sunday: {
            hours: "10AM - 7PM",
            open: "10:00",
            close: "19:00"
        },
        Monday: {
            hours: "10AM - 9PM",
            open: "10:00",
            close: "21:00"
        },
        Tuesday: {
            hours: "10AM - 9PM",
            open: "10:00",
            close: "21:00"
        },
        Wednesday: {
            hours: "10AM - 9PM",
            open: "10:00",
            close: "21:00"
        },
        Thursday: {
            hours: "10AM - 9PM",
            open: "10:00",
            close: "21:00"
        },
        Friday: {
            hours: "10AM - 9PM",
            open: "10:00",
            close: "21:00"
        },
        Saturday: {
            hours: "10AM - 9PM",
            open: "10:00",
            close: "21:00"
        }
    },
    {
        shopName:"Kokee Tea",
        lat: 38.90566535869604,
        lng: -77.54350690846232,
        city: "South Riding",
        zip: "20152",
        food: 'y',
        dessert: 'y',
        games: 'n',
        Sunday: {
            hours: "Closed for Today",
            open: "Closed for Today",
            close: "Closed for Today"
        },
        Monday: {
            hours: "10AM - 9PM",
            open: "10:00",
            close: "21:00"
        },
        Tuesday: {
            hours: "10AM - 9PM",
            open: "10:00",
            close: "21:00"
        },
        Wednesday: {
            hours: "10AM - 9PM",
            open: "10:00",
            close: "21:00"
        },
        Thursday: {
            hours: "10AM - 9PM",
            open: "10:00",
            close: "21:00"
        },
        Friday: {
            hours: "10AM - 10PM",
            open: "10:00",
            close: "22:00"
        },
        Saturday: {
            hours: "10AM - 10PM",
            open: "10:00",
            close: "22:00"
        }
    },
    {
        shopName:"Komma Tea",
        lat: 38.6437379644188,
        lng: -77.2987698294084,
        city: "Woodbridge",
        zip: "22192",
        food: 'n',
        dessert: 'y',
        games: 'n',
        Sunday: {
            hours: "10AM - 6PM",
            open: "10:00",
            close: "18:00"
        },
        Monday: {
            hours: "10AM - 8PM",
            open: "10:00",
            close: "20:00"
        },
        Tuesday: {
            hours: "10AM - 8PM",
            open: "10:00",
            close: "20:00"
        },
        Wednesday: {
            hours: "10AM - 8PM",
            open: "10:00",
            close: "20:00"
        },
        Thursday: {
            hours: "10AM - 8PM",
            open: "10:00",
            close: "20:00"
        },
        Friday: {
            hours: "10AM - 9PM",
            open: "10:00",
            close: "21:00"
        },
        Saturday: {
            hours: "10AM - 9PM",
            open: "10:00",
            close: "21:00"
        }
    },
    {
        shopName:"Komma Tea 2",
        lat: 38.64363087178393, 
        lng: -77.29276823157812,
        city: "Woodbridge",
        zip: "22192",
        food: 'n',
        dessert: 'y',
        games: 'n',
        Sunday: {
            hours: "11AM - 6PM",
            open: "11:00",
            close: "18:00"
        },
        Monday: {
            hours: "10AM - 8PM",
            open: "10:00",
            close: "20:00"
        },
        Tuesday: {
            hours: "10AM - 8PM",
            open: "10:00",
            close: "20:00"
        },
        Wednesday: {
            hours: "10AM - 8PM",
            open: "10:00",
            close: "20:00"
        },
        Thursday: {
            hours: "10AM - 8PM",
            open: "10:00",
            close: "20:00"
        },
        Friday: {
            hours: "10AM - 9PM",
            open: "10:00",
            close: "21:00"
        },
        Saturday: {
            hours: "10AM - 9PM",
            open: "10:00",
            close: "21:00"
        }
    },
    {
        shopName:"Ku Tea Coffee & Tea Town",
        lat: 38.6364693872566, 
        lng: -77.29736776883607,
        city: "Woodbridge",
        zip: "22192",
        food: 'n',
        dessert: 'y',
        games: 'y',
        Sunday: {
            hours: "11AM - 9PM",
            open: "11:00",
            close: "21:00"
        },
        Monday: {
            hours: "11AM - 9PM",
            open: "11:00",
            close: "21:00"
        },
        Tuesday: {
            hours: "11AM - 9PM",
            open: "11:00",
            close: "21:00"
        },
        Wednesday: {
            hours: "11AM - 9PM",
            open: "11:00",
            close: "21:00"
        },
        Thursday: {
            hours: "11AM - 9PM",
            open: "11:00",
            close: "21:00"
        },
        Friday: {
            hours: "11AM - 9:30PM",
            open: "11:00",
            close: "21:30"
        },
        Saturday: {
            hours: "11AM - 9:30PM",
            open: "11:00",
            close: "21:30"
        }
    },
    {
        shopName:"Kung Fu Tea",
        lat: 38.8261385135315,
        lng: -77.2136698256676,
        city: "Annandale",
        zip: "22003",
        food: 'n',
        dessert: 'n',
        games: 'n',
        Sunday: {
            hours: "12PM - 10PM",
            open: "12:00",
            close: "22:00"
        },
        Monday: {
            hours: "12PM - 10PM",
            open: "12:00",
            close: "22:00"
        },
        Tuesday: {
            hours: "12PM - 10PM",
            open: "12:00",
            close: "22:00"
        },
        Wednesday: {
            hours: "12PM - 10PM",
            open: "12:00",
            close: "22:00"
        },
        Thursday: {
            hours: "12PM - 10PM",
            open: "12:00",
            close: "22:00"
        },
        Friday: {
            hours: "12PM - 10PM",
            open: "12:00",
            close: "22:00"
        },
        Saturday: {
            hours: "12PM - 10PM",
            open: "12:00",
            close: "22:00"
        }
    },
    {
        shopName: "Kung Fu Tea",
        lat: 39.04427638072339, 
        lng: -77.4725046994074,
        city: "Ashburn",
        zip: "20147",
        food: 'n',
        dessert: 'n',
        games: 'n',
        Sunday: {
            hours: "11AM - 9PM",
            open: "11:00",
            close: "21:00"
        },
        Monday: {
            hours: "11AM - 9PM",
            open: "11:00",
            close: "21:00"
        },
        Tuesday: {
            hours: "11AM - 9PM",
            open: "11:00",
            close: "21:00"
        },
        Wednesday: {
            hours: "12PM - 9PM",
            open: "12:00",
            close: "21:00"
        },
        Thursday: {
            hours: "11AM - 9PM",
            open: "11:00",
            close: "21:00"
        },
        Friday: {
            hours: "11AM - 9PM",
            open: "11:00",
            close: "21:00"
        },
        Saturday: {
            hours: "11AM - 9PM",
            open: "11:00",
            close: "21:00"
        }
    },
    {
        shopName:"Kung Fu Tea",
        lat: 38.7853614256071,
        lng: -77.5166666659609,
        city: "Manassas",
        zip: "20109",
        food: 'n',
        dessert: 'n',
        games: 'n',
        Sunday: {
            hours: "12PM - 9PM",
            open: "12:00",
            close: "21:00"
        },
        Monday: {
            hours: "12PM - 9PM",
            open: "12:00",
            close: "21:00"
        },
        Tuesday: {
            hours: "12PM - 9PM",
            open: "12:00",
            close: "21:00"
        },
        Wednesday: {
            hours: "12PM - 9PM",
            open: "12:00",
            close: "21:00"
        },
        Thursday: {
            hours: "12PM - 9PM",
            open: "12:00",
            close: "21:00"
        },
        Friday: {
            hours: "12PM - 9PM",
            open: "12:00",
            close: "21:00"
        },
        Saturday: {
            hours: "12PM - 9PM",
            open: "12:00",
            close: "21:00"
        }
    },
    {
        shopName:"Kung Fu Tea",
        lat: 38.7783133721759,
        lng: -77.27335341219,
        city: "Burke",
        zip: "22015",
        food: 'n',
        dessert: 'n',
        games: 'y',
        Sunday: {
            hours: "11:30AM - 9PM",
            open: "11:00",
            close: "21:00"
        },
        Monday: {
            hours: "11:30AM - 9PM",
            open: "11:30",
            close: "21:00"
        },
        Tuesday: {
            hours: "11:30AM - 9PM",
            open: "11:30",
            close: "21:00"
        },
        Wednesday: {
            hours: "11:30AM - 9PM",
            open: "11:30",
            close: "21:00"
        },
        Thursday: {
            hours: "11:30AM - 9PM",
            open: "11:30",
            close: "21:00"
        },
        Friday: {
            hours: "11:30AM - 10PM",
            open: "11:30",
            close: "22:00"
        },
        Saturday: {
            hours: "11AM - 10PM",
            open: "11:00",
            close: "22:00"
        }
    },
    {
        shopName:"Kung Fu Tea",
        lat: 38.839549700136,
        lng: -77.4262855261479,
        city: "Centreville",
        zip: "20120",
        food: 'n',
        dessert: 'n',
        games: 'n',
        Sunday: {
            hours: "12PM - 10PM",
            open: "12:00",
            close: "22:00"
        },
        Monday: {
            hours: "12PM - 10PM",
            open: "12:00",
            close: "22:00"
        },
        Tuesday: {
            hours: "12PM - 10PM",
            open: "12:00",
            close: "22:00"
        },
        Wednesday: {
            hours: "12PM - 10PM",
            open: "12:00",
            close: "22:00"
        },
        Thursday: {
            hours: "12PM - 10PM",
            open: "12:00",
            close: "22:00"
        },
        Friday: {
            hours: "12PM - 10PM",
            open: "12:00",
            close: "22:00"
        },
        Saturday: {
            hours: "12PM - 10PM",
            open: "12:00",
            close: "22:00"
        }
    },
    {
        shopName:"Kung Fu Tea",
        lat: 38.8875666949935,
        lng: -77.0946597662965,
        city: "Arlington",
        zip: "22201",
        food: 'y',
        dessert: 'n',
        games: 'y',
        Sunday: {
            hours: "11AM - 10PM",
            open: "11:00",
            close: "22:00"
        },
        Monday: {
            hours: "11AM - 9PM",
            open: "11:00",
            close: "21:00"
        },
        Tuesday: {
            hours: "11AM - 9PM",
            open: "11:00",
            close: "21:00"
        },
        Wednesday: {
            hours: "11AM - 10PM",
            open: "11:00",
            close: "22:00"
        },
        Thursday: {
            hours: "11AM - 10PM",
            open: "11:00",
            close: "22:00"
        },
        Friday: {
            hours: "11AM - 10PM",
            open: "11:00",
            close: "22:00"
        },
        Saturday: {
            hours: "11AM - 10PM",
            open: "11:00",
            close: "22:00"
        }
    },
    {
        shopName:"Kung Fu Tea",
        lat: 38.86332414503404, 
        lng: -77.06038823951833,
        city: "Arlington",
        zip: "22202",
        food: 'n',
        dessert: 'n',
        games: 'n',
        Sunday: {
            hours: "10AM - 9PM",
            open: "10:00",
            close: "21:00"
        },
        Monday: {
            hours: "10AM - 9PM",
            open: "10:00",
            close: "21:00"
        },
        Tuesday: {
            hours: "10AM - 9PM",
            open: "10:00",
            close: "21:00"
        },
        Wednesday: {
            hours: "10AM - 9PM",
            open: "10:00",
            close: "21:00"
        },
        Thursday: {
            hours: "10AM - 9PM",
            open: "10:00",
            close: "21:00"
        },
        Friday: {
            hours: "10AM - 9PM",
            open: "10:00",
            close: "21:00"
        },
        Saturday: {
            hours: "10AM - 9PM",
            open: "10:00",
            close: "21:00"
        }
    },
    {
        shopName:"Kung Fu Tea",
        lat: 39.0324299702912,
        lng: -77.4239606539062,
        city: "Sterling",
        zip: "20166",
        food: 'n',
        dessert: 'n',
        games: 'n',
        Sunday: {
            hours: "11AM - 9PM",
            open: "11:00",
            close: "21:00"
        },
        Monday: {
            hours: "11AM - 8PM",
            open: "11:00",
            close: "20:00"
        },
        Tuesday: {
            hours: "11AM - 9PM",
            open: "11:00",
            close: "21:00"
        },
        Wednesday: {
            hours: "11AM - 9PM",
            open: "11:00",
            close: "21:00"
        },
        Thursday: {
            hours: "11AM - 9PM",
            open: "11:00",
            close: "21:00"
        },
        Friday: {
            hours: "11AM - 10PM",
            open: "11:00",
            close: "22:00"
        },
        Saturday: {
            hours: "11AM - 10PM",
            open: "11:00",
            close: "22:00"
        }
    },
    {
        shopName:"Kung Fu Tea",
        lat: 38.7024194203804,
        lng: -77.2200804890341,
        city: "Lorton",
        zip: "22079",
        food: 'n',
        dessert: 'n',
        games: 'n',
        Sunday: {
            hours: "11AM - 9PM",
            open: "11:00",
            close: "21:00"
        },
        Monday: {
            hours: "11AM - 9PM",
            open: "11:00",
            close: "21:00"
        },
        Tuesday: {
            hours: "11AM - 9PM",
            open: "11:00",
            close: "21:00"
        },
        Wednesday: {
            hours: "11AM - 9PM",
            open: "11:00",
            close: "21:00"
        },
        Thursday: {
            hours: "11AM - 9PM",
            open: "11:00",
            close: "21:00"
        },
        Friday: {
            hours: "11AM - 9PM",
            open: "11:00",
            close: "21:00"
        },
        Saturday: {
            hours: "11AM - 9PM",
            open: "11:00",
            close: "21:00"
        }
    },
    {
        shopName:"Kung Fu Tea",
        lat: 38.9367537313026,
        lng: -77.3633107190579,
        city: "Reston",
        zip: "20191",
        food: 'n',
        dessert: 'n',
        games: 'y',
        Sunday: {
            hours: "11AM - 9PM",
            open: "11:00",
            close: "21:00"
        },
        Monday: {
            hours: "11AM - 9PM",
            open: "11:00",
            close: "21:00"
        },
        Tuesday: {
            hours: "11AM - 9PM",
            open: "11:00",
            close: "21:00"
        },
        Wednesday: {
            hours: "11AM - 9PM",
            open: "11:00",
            close: "21:00"
        },
        Thursday: {
            hours: "11AM - 9PM",
            open: "11:00",
            close: "21:00"
        },
        Friday: {
            hours: "11AM - 10PM",
            open: "11:00",
            close: "22:00"
        },
        Saturday: {
            hours: "11AM - 10PM",
            open: "11:00",
            close: "22:00"
        }
    },
    {
        shopName:"Kung Fu Tea",
        lat: 38.7731544250924,
        lng: -77.1846254846006,
        city: "Springfield",
        zip: "22150",
        food: 'n',
        dessert: 'n',
        games: 'y',
        Sunday: {
            hours: "11AM - 10PM",
            open: "11:00",
            close: "22:00"
        },
        Monday: {
            hours: "11AM - 10PM",
            open: "11:00",
            close: "22:00"
        },
        Tuesday: {
            hours: "11AM - 10PM",
            open: "11:00",
            close: "22:00"
        },
        Wednesday: {
            hours: "11AM - 10PM",
            open: "11:00",
            close: "22:00"
        },
        Thursday: {
            hours: "11AM - 10PM",
            open: "11:00",
            close: "22:00"
        },
        Friday: {
            hours: "11AM - 10PM",
            open: "11:00",
            close: "22:00"
        },
        Saturday: {
            hours: "11AM - 10PM",
            open: "11:00",
            close: "22:00"
        }
    },
    {
        shopName:"Kung Fu Tea",
        lat: 39.0163012761229,
        lng: -77.3769213303948,
        city: "Sterling",
        zip: "20164",
        food: 'y',
        dessert: 'n',
        games: 'n',
        Sunday: {
            hours: "11AM - 9PM",
            open: "11:00",
            close: "21:00"
        },
        Monday: {
            hours: "11AM - 9PM",
            open: "11:00",
            close: "21:00"
        },
        Tuesday: {
            hours: "11AM - 9PM",
            open: "11:00",
            close: "21:00"
        },
        Wednesday: {
            hours: "11AM - 9PM",
            open: "11:00",
            close: "21:00"
        },
        Thursday: {
            hours: "11AM - 9PM",
            open: "11:00",
            close: "21:00"
        },
        Friday: {
            hours: "11AM - 9PM",
            open: "11:00",
            close: "21:00"
        },
        Saturday: {
            hours: "11AM - 9PM",
            open: "11:00",
            close: "21:00"
        }
    },
    {
        shopName:"Kung Fu Tea",
        lat: 38.9180185896004,
        lng: -77.2229472504969,
        city: "McLean",
        zip: "22102",
        food: 'n',
        dessert: 'n',
        games: 'n',
        Sunday: {
            hours: "12PM - 7PM",
            open: "12:00",
            close: "19:00"
        },
        Monday: {
            hours: "12PM - 9PM",
            open: "12:00",
            close: "21:00"
        },
        Tuesday: {
            hours: "12PM - 9PM",
            open: "12:00",
            close: "21:00"
        },
        Wednesday: {
            hours: "12PM - 9PM",
            open: "12:00",
            close: "21:00"
        },
        Thursday: {
            hours: "12PM - 9PM",
            open: "12:00",
            close: "21:00"
        },
        Friday: {
            hours: "12PM - 9PM",
            open: "12:00",
            close: "21:00"
        },
        Saturday: {
            hours: "12PM - 9PM",
            open: "12:00",
            close: "21:00"
        }
    },
    {
        shopName:"Kung Fu Tea",
        lat: 38.6746178077865,
        lng: -77.3335860367377,
        city: "Woodbridge",
        zip: "22192",
        food: 'n',
        dessert: 'n',
        games: 'n',
        Sunday: {
            hours: "11AM - 9PM",
            open: "11:00",
            close: "21:00"
        },
        Monday: {
            hours: "11AM - 9PM",
            open: "11:00",
            close: "21:00"
        },
        Tuesday: {
            hours: "11AM - 9PM",
            open: "11:00",
            close: "21:00"
        },
        Wednesday: {
            hours: "11AM - 9PM",
            open: "11:00",
            close: "21:00"
        },
        Thursday: {
            hours: "11AM - 9PM",
            open: "11:00",
            close: "21:00"
        },
        Friday: {
            hours: "11AM - 10PM",
            open: "11:00",
            close: "22:00"
        },
        Saturday: {
            hours: "11AM - 10PM",
            open: "11:00",
            close: "22:00"
        }
    },
    {
        shopName:"Kung Fu Tea",
        lat: 38.77936325789266, 
        lng: -77.08001734868736,
        city: "Alexandria",
        zip: "22306",
        food: 'n',
        dessert: 'n',
        games: 'y',
        Sunday: {
            hours: "11AM - 10PM",
            open: "11:00",
            close: "22:00"
        },
        Monday: {
            hours: "11AM - 10PM",
            open: "11:00",
            close: "22:00"
        },
        Tuesday: {
            hours: "11AM - 10PM",
            open: "11:00",
            close: "22:00"
        },
        Wednesday: {
            hours: "11AM - 10PM",
            open: "11:00",
            close: "22:00"
        },
        Thursday: {
            hours: "11AM - 10PM",
            open: "11:00",
            close: "22:00"
        },
        Friday: {
            hours: "11AM - 10PM",
            open: "11:00",
            close: "22:00"
        },
        Saturday: {
            hours: "11AM - 10PM",
            open: "11:00",
            close: "22:00"
        }
    },
    {
        shopName:"Kung Fu Tea",
        lat: 38.878924305910424, 
        lng: -77.11079868470577,
        city: "Arlington",
        zip: "22203",
        food: 'n',
        dessert: 'n',
        games: 'n',
        Sunday: {
            hours: "11AM - 10PM",
            open: "11:00",
            close: "22:00"
        },
        Monday: {
            hours: "11AM - 10PM",
            open: "11:00",
            close: "22:00"
        },
        Tuesday: {
            hours: "11AM - 10PM",
            open: "11:00",
            close: "22:00"
        },
        Wednesday: {
            hours: "11AM - 10PM",
            open: "11:00",
            close: "22:00"
        },
        Thursday: {
            hours: "11AM - 10PM",
            open: "11:00",
            close: "22:00"
        },
        Friday: {
            hours: "11AM - 10PM",
            open: "11:00",
            close: "22:00"
        },
        Saturday: {
            hours: "11AM - 10PM",
            open: "11:00",
            close: "22:00"
        }
    },
    {
        shopName:"Kung Fu Tea",
        lat: 38.47113993634563, 
        lng: -77.41238397615173 ,
        city: "Stafford",
        zip: "22556",
        food: 'n',
        dessert: 'n',
        games: 'n',
        Sunday: {
            hours: "11AM - 9PM",
            open: "11:00",
            close: "21:00"
        },
        Monday: {
            hours: "11AM - 9PM",
            open: "11:00",
            close: "21:00"
        },
        Tuesday: {
            hours: "11AM - 9PM",
            open: "11:00",
            close: "21:00"
        },
        Wednesday: {
            hours: "11AM - 9PM",
            open: "11:00",
            close: "21:00"
        },
        Thursday: {
            hours: "11AM - 9PM",
            open: "11:00",
            close: "21:00"
        },
        Friday: {
            hours: "11AM - 9PM",
            open: "11:00",
            close: "21:00"
        },
        Saturday: {
            hours: "11AM - 9PM",
            open: "11:00",
            close: "21:00"
        }
    },
    {
        shopName:"Kyo Matcha",
        lat: 38.82333104130392, 
        lng: -77.16110480400079, 
        city: "Alexandria",
        zip: "22312",
        food: 'n',
        dessert: 'y',
        games: 'n',
        Sunday: {
            hours: "11:30AM - 10PM",
            open: "11:30",
            close: "22:00"
        },
        Monday: {
            hours: "11:30AM - 10PM",
            open: "11:30",
            close: "22:00"
        },
        Tuesday: {
            hours: "11:30AM - 10PM",
            open: "11:30",
            close: "22:00"
        },
        Wednesday: {
            hours: "11:30AM - 10PM",
            open: "11:30",
            close: "22:00"
        },
        Thursday: {
            hours: "11:30AM - 10PM",
            open: "11:30",
            close: "22:00"
        },
        Friday: {
            hours: "11:30AM - 10PM",
            open: "11:30",
            close: "22:00"
        },
        Saturday: {
            hours: "11:30AM - 10PM",
            open: "11:30",
            close: "22:00"
        }
    },
    {
        shopName:"Kyo Matcha",
        lat: 38.89024881265632, 
        lng: -77.18309151258428, 
        city: "Falls Church",
        zip: "22046",
        food: 'n',
        dessert: 'y',
        games: 'n',
        Sunday: {
            hours: "12PM - 10:30PM",
            open: "11:30",
            close: "22:30"
        },
        Monday: {
            hours: "12PM - 10:30PM",
            open: "11:30",
            close: "22:30"
        },
        Tuesday: {
            hours: "12PM - 10:30PM",
            open: "11:30",
            close: "22:30"
        },
        Wednesday: {
            hours: "12PM - 10:30PM",
            open: "11:30",
            close: "22:30"
        },
        Thursday: {
            hours: "12PM - 10:30PM",
            open: "11:30",
            close: "22:30"
        },
        Friday: {
            hours: "12PM - 11PM",
            open: "12:00",
            close: "23:00"
        },
        Saturday: {
            hours: "12PM - 11PM",
            open: "12:00",
            close: "23:00"
        }
    },
    { 
        shopName:"Mochinut",
        lat: 39.09006776588878, 
        lng: -77.52487524111483,
        city: "Leesburg",
        zip: "20175",
        food: 'y',
        dessert: 'y',
        games: 'n',
        Sunday: {
            hours: "10AM - 8PM",
            open: "10:00",
            close: "20:00"
        },
        Monday: {
            hours: "12PM - 8PM",
            open: "12:00",
            close: "20:00"
        },
        Tuesday: {
            hours: "12PM - 8PM",
            open: "12:00",
            close: "20:00"
        },
        Wednesday: {
            hours: "12PM - 8PM",
            open: "12:00",
            close: "20:00"
        },
        Thursday: {
            hours: "12PM - 8PM",
            open: "12:00",
            close: "20:00"
        },
        Friday: {
            hours: "12PM - 9PM",
            open: "12:00",
            close: "21:00"
        },
        Saturday: {
            hours: "10AM - 9PM",
            open: "10:00",
            close: "21:00"
        }
    },
    { 
        shopName:"Mochinut",
        lat: 38.97840747861583, 
        lng: -77.35031054590284,
        city: "Leesburg",
        zip: "20194",
        food: 'y',
        dessert: 'y',
        games: 'n',
        Sunday: {
            hours: "11AM - 8PM",
            open: "11:00",
            close: "20:00"
        },
        Monday: {
            hours: "11AM - 8PM",
            open: "11:00",
            close: "20:00"
        },
        Tuesday: {
            hours: "11AM - 8PM",
            open: "11:00",
            close: "20:00"
        },
        Wednesday: {
            hours: "11AM - 8PM",
            open: "11:00",
            close: "20:00"
        },
        Thursday: {
            hours: "11AM - 8PM",
            open: "11:00",
            close: "20:00"
        },
        Friday: {
            hours: "11AM - 8PM",
            open: "11:00",
            close: "20:00"
        },
        Saturday: {
            hours: "11AM - 8PM",
            open: "11:00",
            close: "20:00"
        }
    },
    {
        shopName:"Moge Tee",
        lat: 38.9171475665691,
        lng: -77.2229865838858,
        city: "McLean",
        zip: "22102",
        food: 'n',
        dessert: 'n',
        games: 'n',
        Sunday: {
            hours: "10AM - 7PM",
            open: "10:00",
            close: "19:00"
        },
        Monday: {
            hours: "10AM - 9PM",
            open: "10:00",
            close: "21:00"
        },
        Tuesday: {
            hours: "10AM - 9PM",
            open: "10:00",
            close: "21:00"
        },
        Wednesday: {
            hours: "10AM - 9PM",
            open: "10:00",
            close: "21:00"
        },
        Thursday: {
            hours: "10AM - 9PM",
            open: "10:00",
            close: "21:00"
        },
        Friday: {
            hours: "10AM - 9PM",
            open: "10:00",
            close: "21:00"
        },
        Saturday: {
            hours: "10AM - 9PM",
            open: "10:00",
            close: "21:00"
        }
    },
    {
        shopName:"Mr. Wish",
        lat: 38.9618777909721,
        lng: -77.4008801129001,
        city: "Herndon",
        zip: "20170",
        food: 'n',
        dessert: 'y',
        games: 'n',
        Sunday: {
            hours: "11AM - 9PM",
            open: "11:00",
            close: "21:00"
        },
        Monday: {
            hours: "11AM - 9PM",
            open: "11:00",
            close: "21:00"
        },
        Tuesday: {
            hours: "11AM - 9PM",
            open: "11:00",
            close: "21:00"
        },
        Wednesday: {
            hours: "11AM - 9PM",
            open: "11:00",
            close: "21:00"
        },
        Thursday: {
            hours: "11AM - 9PM",
            open: "11:00",
            close: "21:00"
        },
        Friday: {
            hours: "11AM - 9PM",
            open: "11:00",
            close: "21:00"
        },
        Saturday: {
            hours: "11AM - 9PM",
            open: "11:00",
            close: "21:00"
        }
    },
    {
        shopName:"Mr. Wish",
        lat: 38.9703118459762, 
        lng: -77.37553001743105,
        city: "Herndon",
        zip: "20170",
        food: 'n',
        dessert: 'y',
        games: 'n',
        Sunday: {
            hours: "11AM - 9PM",
            open: "11:00",
            close: "21:00"
        },
        Monday: {
            hours: "11AM - 9PM",
            open: "11:00",
            close: "21:00"
        },
        Tuesday: {
            hours: "11AM - 9PM",
            open: "11:00",
            close: "21:00"
        },
        Wednesday: {
            hours: "11AM - 9PM",
            open: "11:00",
            close: "21:00"
        },
        Thursday: {
            hours: "11AM - 9PM",
            open: "11:00",
            close: "21:00"
        },
        Friday: {
            hours: "11AM - 10PM",
            open: "11:00",
            close: "22:00"
        },
        Saturday: {
            hours: "11AM - 10PM",
            open: "11:00",
            close: "22:00"
        }
    },
    {
        shopName:"One Tea House",
        lat: 38.874268313865,
        lng: -77.1540431666506,
        city: "Falls Church",
        zip: "22044",
        food: 'y',
        dessert: 'n',
        games: 'n',
        Sunday: {
            hours: "11AM - 10PM",
            open: "11:00",
            close: "22:00"
        },
        Monday: {
            hours: "11AM - 10PM",
            open: "11:00",
            close: "22:00"
        },
        Tuesday: {
            hours: "11AM - 10PM",
            open: "11:00",
            close: "22:00"
        },
        Wednesday: {
            hours: "11AM - 10PM",
            open: "11:00",
            close: "22:00"
        },
        Thursday: {
            hours: "11AM - 10PM",
            open: "11:00",
            close: "22:00"
        },
        Friday: {
            hours: "11AM - 10PM",
            open: "11:00",
            close: "22:00"
        },
        Saturday: {
            hours: "11AM - 10PM",
            open: "11:00",
            close: "22:00"
        }
    },
    {
        shopName:"Panda Tea House",
        lat: 39.0316635140024,
        lng: -77.4229714725042,
        city: "Sterling",
        zip: "20166",
        food: 'n',
        dessert: 'y',
        games: 'n',
        Sunday: {
            hours: "11AM - 7PM",
            open: "11:00",
            close: "19:00"
        },
        Monday: {
            hours: "11AM - 7PM",
            open: "11:00",
            close: "19:00"
        },
        Tuesday: {
            hours: "11AM - 7PM",
            open: "11:00",
            close: "19:00"
        },
        Wednesday: {
            hours: "11AM - 7PM",
            open: "11:00",
            close: "19:00"
        },
        Thursday: {
            hours: "11AM - 8PM",
            open: "11:00",
            close: "20:00"
        },
        Friday: {
            hours: "11AM - 8PM",
            open: "11:00",
            close: "20:00"
        },
        Saturday: {
            hours: "11AM - 8PM",
            open: "11:00",
            close: "20:00"
        }
    },
    {
        shopName:"Pekoe Tea Bar",
        lat: 38.86378938225895,
        lng: -77.2797608216317,
        city: "Fairfax",
        zip: "22031",
        food: 'n',
        dessert: 'n',
        games: 'n',
        Sunday: {
            hours: "10AM - 12AM",
            open: "10:00",
            close: "00:00"
        },
        Monday: {
            hours: "10AM - 12AM",
            open: "10:00",
            close: "00:00"
        },
        Tuesday: {
            hours: "10AM - 12AM",
            open: "10:00",
            close: "00:00"
        },
        Wednesday: {
            hours: "10AM - 12AM",
            open: "10:00",
            close: "00:00"
        },
        Thursday: {
            hours: "10AM - 12AM",
            open: "10:00",
            close: "00:00"
        },
        Friday: {
            hours: "10AM - 12AM",
            open: "10:00",
            close: "00:00"
        },
        Saturday: {
            hours: "10AM - 12AM",
            open: "10:00",
            close: "00:00"
        }
    },
    {
        shopName:"RareTea",
        lat: 38.788007081397886,
        lng: -77.60639989997517,
        city: "Gainesville",
        zip: "20155",
        food: 'n',
        dessert: 'n',
        games: 'n',
        Sunday: {
            hours: "11AM - 9PM",
            open: "11:00",
            close: "21:00"
        },
        Monday: {
            hours: "11:30AM - 9PM",
            open: "11:30",
            close: "21:00"
        },
        Tuesday: {
            hours: "11:30AM - 9PM",
            open: "11:30",
            close: "21:00"
        },
        Wednesday: {
            hours: "11:30AM - 9PM",
            open: "11:30",
            close: "21:00"
        },
        Thursday: {
            hours: "11:30AM - 9PM",
            open: "11:30",
            close: "21:00"
        },
        Friday: {
            hours: "11AM - 10PM",
            open: "11:00",
            close: "22:00"
        },
        Saturday: {
            hours: "11AM - 10PM",
            open: "11:00",
            close: "22:00"
        }
    },
    {
        shopName:"Sharetea",
        lat: 38.8507421094172,
        lng: -77.3335014473066,
        city: "Fairfax",
        zip: "22030",
        food: 'n',
        dessert: 'n',
        games: 'n',
        Sunday: {
            hours: "12PM - 10PM",
            open: "12:00",
            close: "22:00"
        },
        Monday: {
            hours: "1PM - 9PM",
            open: "13:00",
            close: "21:00"
        },
        Tuesday: {
            hours: "1PM - 9PM",
            open: "13:00",
            close: "21:00"
        },
        Wednesday: {
            hours: "1PM - 9PM",
            open: "13:00",
            close: "21:00"
        },
        Thursday: {
            hours: "1PM - 9PM",
            open: "13:00",
            close: "21:00"
        },
        Friday: {
            hours: "12PM - 10PM",
            open: "12:00",
            close: "22:00"
        },
        Saturday: {
            hours: "12PM - 10PM",
            open: "12:00",
            close: "22:00"
        }
    },
    {
        shopName:"Sharetea",
        lat: 38.95749789615471, 
        lng: -77.40122830071803,
        city: "Herndon",
        zip: "22030",
        food: 'n',
        dessert: 'n',
        games: 'y',
        Sunday: {
            hours: "11AM - 9PM",
            open: "11:00",
            close: "21:00"
        },
        Monday: {
            hours: "11AM - 9PM",
            open: "11:00",
            close: "21:00"
        },
        Tuesday: {
            hours: "11AM - 9PM",
            open: "11:00",
            close: "21:00"
        },
        Wednesday: {
            hours: "11AM - 9PM",
            open: "11:00",
            close: "21:00"
        },
        Thursday: {
            hours: "11AM - 9PM",
            open: "11:00",
            close: "21:00"
        },
        Friday: {
            hours: "11AM - 10PM",
            open: "11:00",
            close: "22:00"
        },
        Saturday: {
            hours: "11AM - 10PM",
            open: "11:00",
            close: "22:00"
        }
    },
    {
        shopName:"Shuyi Grass Jelly & Tea",
        lat: 38.87007348625392, 
        lng: -77.14536577646119,
        city: "Falls Church",
        zip: "22044",
        food: 'n',
        dessert: 'n',
        games: 'n',
        Sunday: {
            hours: "12PM - 9:30PM",
            open: "12:00",
            close: "21:30"
        },
        Monday: {
            hours: "12PM - 9:30PM",
            open: "12:00",
            close: "21:30"
        },
        Tuesday: {
            hours: "12PM - 9:30PM",
            open: "12:00",
            close: "21:30"
        },
        Wednesday: {
            hours: "12PM - 9:30PM",
            open: "12:00",
            close: "21:30"
        },
        Thursday: {
            hours: "12PM - 9:30PM",
            open: "12:00",
            close: "21:30"
        },
        Friday: {
            hours: "12PM - 10PM",
            open: "12:00",
            close: "22:00"
        },
        Saturday: {
            hours: "12PM - 10PM",
            open: "12:00",
            close: "22:00"
        }
    },
    {
        shopName:"Snocream Company",
        lat: 38.8313693814743,
        lng: -77.1882649765752,
        city: "Annandale",
        zip: "22003",
        food: 'y',
        dessert: 'y',
        games: 'n',
        Sunday: {
            hours: "11:30AM - 10PM",
            open: "11:30",
            close: "22:00"
        },
        Monday: {
            hours: "11:30AM - 10PM",
            open: "11:30",
            close: "22:00"
        },
        Tuesday: {
            hours: "12PM - 10PM",
            open: "12:00",
            close: "22:00"
        },
        Wednesday: {
            hours: "12PM - 10PM",
            open: "12:00",
            close: "22:00"
        },
        Thursday: {
            hours: "11:30AM - 10PM",
            open: "11:30",
            close: "22:00"
        },
        Friday: {
            hours: "11:30AM - 10PM",
            open: "11:30",
            close: "22:00"
        },
        Saturday: {
            hours: "11:30AM - 10PM",
            open: "11:30",
            close: "22:00"
        }
    },
    {
        shopName:"Sol Tea M",
        lat: 38.637981985322604, 
        lng: -77.29974897681942,
        city: "Woodbridge",
        zip: "22192",
        food: 'n',
        dessert: 'y',
        games: 'y',
        Sunday: {
            hours: "12PM - 9:30PM",
            open: "12:00",
            close: "21:30"
        },
        Monday: {
            hours: "10AM - 9:30PM",
            open: "10:00",
            close: "21:30"
        },
        Tuesday: {
            hours: "10AM - 9:30PM",
            open: "10:00",
            close: "21:30"
        },
        Wednesday: {
            hours: "10AM - 9:30PM",
            open: "10:00",
            close: "21:30"
        },
        Thursday: {
            hours: "10AM - 9:30PM",
            open: "10:00",
            close: "21:30"
        },
        Friday: {
            hours: "10AM - 10PM",
            open: "10:00",
            close: "22:00"
        },
        Saturday: {
            hours: "10AM - 10PM",
            open: "10:00",
            close: "22:00"
        }
    },
    {
        shopName:"Spill the Tea",
        lat: 38.8125784050187,
        lng: -77.053902386271,
        city: "Alexandria",
        zip: "22314",
        food: 'y',
        dessert: 'n',
        games: 'n',
        Sunday: {
            hours: "11AM - 6PM",
            open: "11:00",
            close: "18:00"
        },
        Monday: {
            hours: "11AM - 8PM",
            open: "11:00",
            close: "20:00"
        },
        Tuesday: {
            hours: "11AM - 8PM",
            open: "11:00",
            close: "20:00"
        },
        Wednesday: {
            hours: "11AM - 8PM",
            open: "11:00",
            close: "20:00"
        },
        Thursday: {
            hours: "11AM - 8PM",
            open: "11:00",
            close: "20:00"
        },
        Friday: {
            hours: "11AM - 8PM",
            open: "11:00",
            close: "20:00"
        },
        Saturday: {
            hours: "11AM - 8PM",
            open: "11:00",
            close: "20:00"
        }
    },
    {
        shopName:"T.Zone Dessert Bar",
        lat: 39.0365073524574,
        lng: -77.4081886603772,
        city: "Sterling",
        zip: "20165",
        food: 'y',
        dessert: 'y',
        games: 'y',
        Sunday: {
            hours: "10AM - 9PM",
            open: "10:00",
            close: "21:00"
        },
        Monday: {
            hours: "10AM - 9PM",
            open: "10:00",
            close: "21:00"
        },
        Tuesday: {
            hours: "10AM - 9PM",
            open: "10:00",
            close: "21:00"
        },
        Wednesday: {
            hours: "10AM - 9PM",
            open: "10:00",
            close: "21:00"
        },
        Thursday: {
            hours: "10AM - 9PM",
            open: "10:00",
            close: "21:00"
        },
        Friday: {
            hours: "10AM - 10PM",
            open: "10:00",
            close: "22:00"
        },
        Saturday: {
            hours: "10AM - 10PM",
            open: "10:00",
            close: "22:00"
        }
    },
    {
        shopName:"TE'AMO Boba Bar",
        lat: 38.872823118085535, 
        lng: -77.22830078538483,
        city: "Falls Church",
        zip: "22042",
        food: 'n',
        dessert: 'y',
        games: 'n',
        Sunday: {
            hours: "11AM - 10PM",
            open: "11:00",
            close: "22:00"
        },
        Monday: {
            hours: "11AM - 10PM",
            open: "11:00",
            close: "22:00"
        },
        Tuesday: {
            hours: "11AM - 10PM",
            open: "11:00",
            close: "22:00"
        },
        Wednesday: {
            hours: "11AM - 10PM",
            open: "11:00",
            close: "22:00"
        },
        Thursday: {
            hours: "11AM - 10PM",
            open: "11:00",
            close: "22:00"
        },
        Friday: {
            hours: "11AM - 10PM",
            open: "11:00",
            close: "22:00"
        },
        Saturday: {
            hours: "11AM - 10PM",
            open: "11:00",
            close: "22:00"
        }
    },
    {
        shopName:"Tea Do",
        lat: 38.8281778995173,
        lng: -77.1891586699401,
        city: "Annandale",
        zip: "22003",
        food: 'y',
        dessert: 'n',
        games: 'y',
        Sunday: {
            hours: "12PM - 12AM",
            open: "12:00",
            close: "00:00"
        },
        Monday: {
            hours: "12PM - 12AM",
            open: "12:00",
            close: "00:00"
        },
        Tuesday: {
            hours: "12PM - 12AM",
            open: "12:00",
            close: "00:00"
        },
        Wednesday: {
            hours: "12PM - 12AM",
            open: "12:00",
            close: "00:00"
        },
        Thursday: {
            hours: "12PM - 12AM",
            open: "12:00",
            close: "00:00"
        },
        Friday: {
            hours: "12PM - 1AM",
            open: "12:00",
            close: "01:00"
        },
        Saturday: {
            hours: "12PM - 1AM",
            open: "12:00",
            close: "01:00"
        }
    },
    {
        shopName:"Tea Do",
        lat: 38.853727795638534, 
        lng: -77.32754221634724,
        city: "Fairfax",
        zip: "22030",
        food: 'y',
        dessert: 'n',
        games: 'y',
        Sunday: {
            hours: "11AM - 12AM",
            open: "11:00",
            close: "00:00"
        },
        Monday: {
            hours: "11AM - 12AM",
            open: "11:00",
            close: "00:00"
        },
        Tuesday: {
            hours: "11AM - 12AM",
            open: "11:00",
            close: "00:00"
        },
        Wednesday: {
            hours: "11AM - 12AM",
            open: "11:00",
            close: "00:00"
        },
        Thursday: {
            hours: "11AM - 12AM",
            open: "11:00",
            close: "00:00"
        },
        Friday: {
            hours: "11AM - 1AM",
            open: "11:00",
            close: "01:00"
        },
        Saturday: {
            hours: "11AM - 1AM",
            open: "11:00",
            close: "01:00"
        }
    },
    {
        shopName:"Tea Do",
        lat: 38.8722273653508, 
        lng: -77.15260387922679,
        city: "Falls Church",
        zip: "22044",
        food: 'y',
        dessert: 'n',
        games: 'y',
        Sunday: {
            hours: "11AM - 11PM",
            open: "11:00",
            close: "23:00"
        },
        Monday: {
            hours: "11AM - 11PM",
            open: "11:00",
            close: "23:00"
        },
        Tuesday: {
            hours: "11AM - 11PM",
            open: "11:00",
            close: "23:00"
        },
        Wednesday: {
            hours: "11AM - 11PM",
            open: "11:00",
            close: "23:00"
        },
        Thursday: {
            hours: "11AM - 11PM",
            open: "11:00",
            close: "23:00"
        },
        Friday: {
            hours: "11AM - 12AM",
            open: "11:00",
            close: "00:00"
        },
        Saturday: {
            hours: "11AM - 12AM",
            open: "11:00",
            close: "00:00"
        }
    },
    {
        shopName:"Teabreak Pho & Boba",
        lat: 38.9670382678471,
        lng: -77.3678483963258,
        city: "Herndon",
        zip: "20170",
        food: 'y',
        dessert: 'y',
        games: 'n',
        Sunday: {
            hours: "Closed for today",
            open: "Closed for today",
            close: "Closed for today"
        },
        Monday: {
            hours: "11AM - 8PM",
            open: "11:00",
            close: "20:00"
        },
        Tuesday: {
            hours: "11AM - 8PM",
            open: "11:00",
            close: "20:00"
        },
        Wednesday: {
            hours: "11AM - 8PM",
            open: "11:00",
            close: "20:00"
        },
        Thursday: {
            hours: "11AM - 8PM",
            open: "11:00",
            close: "20:00"
        },
        Friday: {
            hours: "11AM - 8PM",
            open: "11:00",
            close: "20:00"
        },
        Saturday: {
            hours: "11AM - 7PM",
            open: "11:00",
            close: "19:00"
        }
    },
    {
        shopName:"Teabreak Pho & Boba",
        lat: 39.029078941636,
        lng: -77.3890046530384,
        city: "Sterling",
        zip: "20164",
        food: 'y',
        dessert: 'y',
        games: 'n',
        Sunday: {
            hours: "10:30AM - 8:30PM",
            open: "10:30",
            close: "20:30"
        },
        Monday: {
            hours: "10:30AM - 9PM",
            open: "10:30",
            close: "21:00"
        },
        Tuesday: {
            hours: "10:30AM - 9PM",
            open: "10:30",
            close: "21:00"
        },
        Wednesday: {
            hours: "10:30AM - 9PM",
            open: "10:30",
            close: "21:00"
        },
        Thursday: {
            hours: "10:30AM - 9PM",
            open: "10:30",
            close: "21:00"
        },
        Friday: {
            hours: "10:30AM - 9:30PM",
            open: "10:30",
            close: "21:30"
        },
        Saturday: {
            hours: "10:30AM - 9:30PM",
            open: "10:30",
            close: "21:30"
        }
    },
    {
        shopName:"TeaDM",
        lat: 38.8652842168384,
        lng: -77.2716417585991,
        city: "Fairfax",
        zip: "22031",
        food: 'n',
        dessert: 'n',
        games: 'n',
        Sunday: {
            hours: "9AM - 9PM",
            open: "09:00",
            close: "21:00"
        },
        Monday: {
            hours: "9AM - 12AM",
            open: "09:00",
            close: "00:00"
        },
        Tuesday: {
            hours: "9AM - 12AM",
            open: "09:00",
            close: "00:00"
        },
        Wednesday: {
            hours: "9AM - 12AM",
            open: "09:00",
            close: "00:00"
        },
        Thursday: {
            hours: "9AM - 12AM",
            open: "09:00",
            close: "00:00"
        },
        Friday: {
            hours: "9AM - 12AM",
            open: "09:00",
            close: "00:00"
        },
        Saturday: {
            hours: "9AM - 12AM",
            open: "09:00",
            close: "00:00"
        }
    },
    {
        shopName:"TeaDM Mini",
        lat: 38.8999867326494,
        lng: -77.2661303803434,
        city: "Vienna",
        zip: "22180",
        food: 'n',
        dessert: 'n',
        games: 'n',
        Sunday: {
            hours: "9AM - 9PM",
            open: "09:00",
            close: "21:00"
        },
        Monday: {
            hours: "9AM - 9PM",
            open: "09:00",
            close: "21:00"
        },
        Tuesday: {
            hours: "9AM - 9PM",
            open: "09:00",
            close: "21:00"
        },
        Wednesday: {
            hours: "9AM - 9PM",
            open: "09:00",
            close: "21:00"
        },
        Thursday: {
            hours: "9AM - 8PM",
            open: "09:00",
            close: "20:00"
        },
        Friday: {
            hours: "9AM - 10PM",
            open: "09:00",
            close: "22:00"
        },
        Saturday: {
            hours: "9AM - 10PM",
            open: "09:00",
            close: "22:00"
        }
    },
    {
        shopName:"TeaDM Plus",
        lat: 38.8738192346034,
        lng: -77.155036213056,
        city: "Falls Church",
        zip: "22044",
        food: 'y',
        dessert: 'n',
        games: 'n',
        Sunday: {
            hours: "7AM - 9PM",
            open: "07:00",
            close: "21:00"
        },
        Monday: {
            hours: "7AM - 12AM",
            open: "07:00",
            close: "00:00"
        },
        Tuesday: {
            hours: "7AM - 12AM",
            open: "07:00",
            close: "00:00"
        },
        Wednesday: {
            hours: "7AM - 12AM",
            open: "07:00",
            close: "00:00"
        },
        Thursday: {
            hours: "7AM - 12AM",
            open: "07:00",
            close: "00:00"
        },
        Friday: {
            hours: "7AM - 12AM",
            open: "07:00",
            close: "00:00"
        },
        Saturday: {
            hours: "7AM - 12AM",
            open: "07:00",
            close: "00:00"
        }
    },
    {
        shopName:"TeaDM Street Food Corner",
        lat: 39.0312327,
        lng: -77.4050388, 
        city: "Sterling",
        zip: "20164",
        food: 'y',
        dessert: 'n',
        games: 'n',
        Sunday: {
            hours: "9AM - 9PM",
            open: "09:00",
            close: "21:00"
        },
        Monday: {
            hours: "9AM - 12AM",
            open: "09:00",
            close: "00:00"
        },
        Tuesday: {
            hours: "9AM - 12AM",
            open: "09:00",
            close: "00:00"
        },
        Wednesday: {
            hours: "9AM - 12AM",
            open: "09:00",
            close: "00:00"
        },
        Thursday: {
            hours: "9AM - 12AM",
            open: "09:00",
            close: "00:00"
        },
        Friday: {
            hours: "9AM - 12AM",
            open: "09:00",
            close: "00:00"
        },
        Saturday: {
            hours: "9AM - 12AM",
            open: "09:00",
            close: "00:00"
        }
    },
    {
        shopName:"Teahouse",
        lat: 38.9361962807613,
        lng: -77.5402914974309,
        city: "Chantilly",
        zip: "20152",
        food: 'n',
        dessert: 'y',
        games: 'n',
        Sunday: {
            hours: "12:30PM - 8PM",
            open: "12:30",
            close: "20:00"
        },
        Monday: {
            hours: "11AM - 9PM",
            open: "11:00",
            close: "21:00"
        },
        Tuesday: {
            hours: "11AM - 9PM",
            open: "11:00",
            close: "21:00"
        },
        Wednesday: {
            hours: "11AM - 9PM",
            open: "11:00",
            close: "21:00"
        },
        Thursday: {
            hours: "11AM - 9PM",
            open: "11:00",
            close: "21:00"
        },
        Friday: {
            hours: "11AM - 9PM",
            open: "11:00",
            close: "21:00"
        },
        Saturday: {
            hours: "11AM - 9PM",
            open: "11:00",
            close: "21:00"
        }
    },
    {
        shopName:"Teas\'n You",
        lat: 38.914049442404,
        lng: -77.2227302222651,
        city: "Vienna",
        zip: "22182",
        food: 'y',
        dessert: 'y',
        games: 'y',
        Sunday: {
            hours: "7:30AM - 1AM",
            open: "07:30",
            close: "01:00"
        },
        Monday: {
            hours: "7:30AM - 1AM",
            open: "07:30",
            close: "01:00"
        },
        Tuesday: {
            hours: "7:30AM - 1AM",
            open: "07:30",
            close: "01:00"
        },
        Wednesday: {
            hours: "7:30AM - 1AM",
            open: "07:30",
            close: "01:00"
        },
        Thursday: {
            hours: "7:30AM - 1AM",
            open: "07:30",
            close: "01:00"
        },
        Friday: {
            hours: "7:30AM - 1AM",
            open: "07:30",
            close: "01:00"
        },
        Saturday: {
            hours: "7:30AM - 1AM",
            open: "07:30",
            close: "01:00"
        }
    },
    {
        shopName:"The Alley",
        lat: 38.852126991358375, 
        lng: -77.32563999033104,
        city: "Fairfax",
        zip: "22030",
        food: 'n',
        dessert: 'n',
        games: 'n',
        Sunday: {
            hours: "12PM - 11:30PM",
            open: "12:00",
            close: "23:30"
        },
        Monday: {
            hours: "12PM - 11:30PM",
            open: "12:00",
            close: "23:30"
        },
        Tuesday: {
            hours: "12PM - 11:30PM",
            open: "12:00",
            close: "23:30"
        },
        Wednesday: {
            hours: "12PM - 11:30PM",
            open: "12:00",
            close: "23:30"
        },
        Thursday: {
            hours: "12PM - 11:30PM",
            open: "12:00",
            close: "23:30"
        },
        Friday: {
            hours: "12PM - 1AM",
            open: "12:00",
            close: "01:00"
        },
        Saturday: {
            hours: "12PM - 1AM",
            open: "12:00",
            close: "01:00"
        }
    },
    {
        shopName:"the TEA",
        lat: 38.874170443744,
        lng: -77.1551068734337,
        city: "Falls Church",
        zip: "22044",
        food: 'y',
        dessert: 'n',
        games: 'n',
        Sunday: {
            hours: "11AM - 10PM",
            open: "11:00",
            close: "22:00"
        },
        Monday: {
            hours: "11AM - 10PM",
            open: "11:00",
            close: "22:00"
        },
        Tuesday: {
            hours: "11AM - 10PM",
            open: "11:00",
            close: "22:00"
        },
        Wednesday: {
            hours: "11AM - 10PM",
            open: "11:00",
            close: "22:00"
        },
        Thursday: {
            hours: "11AM - 10PM",
            open: "11:00",
            close: "22:00"
        },
        Friday: {
            hours: "11AM - 10PM",
            open: "11:00",
            close: "22:00"
        },
        Saturday: {
            hours: "11AM - 10PM",
            open: "11:00",
            close: "22:00"
        }
    },
    {
        shopName:"Tian Cha",
        lat: 38.8131803645639,
        lng: -77.1839657744155,
        city: "Annandale",
        zip: "22003",
        food: 'n',
        dessert: 'n',
        games: 'n',
        Sunday: {
            hours: "12PM - 10PM",
            open: "12:00",
            close: "22:00"
        },
        Monday: {
            hours: "12PM - 10PM",
            open: "12:00",
            close: "22:00"
        },
        Tuesday: {
            hours: "12PM - 10PM",
            open: "12:00",
            close: "22:00"
        },
        Wednesday: {
            hours: "12PM - 10PM",
            open: "12:00",
            close: "22:00"
        },
        Thursday: {
            hours: "12PM - 10PM",
            open: "12:00",
            close: "22:00"
        },
        Friday: {
            hours: "12PM - 11PM",
            open: "12:00",
            close: "23:00"
        },
        Saturday: {
            hours: "12PM - 11PM",
            open: "12:00",
            close: "23:00"
        }
    },
    {
        shopName:"Tiger Sugar",
        lat: 38.838237630983556,  
        lng: -77.424449161095,
        city: "Centreville",
        zip: "20121",
        food: 'n',
        dessert: 'n',
        games: 'n',
        Sunday: {
            hours: "12PM - 9:30PM",
            open: "11:00",
            close: "21:30"
        },
        Monday: {
            hours: "12PM - 9:30PM",
            open: "11:00",
            close: "21:30"
        },
        Tuesday: {
            hours: "12PM - 9:30PM",
            open: "11:00",
            close: "21:30"
        },
        Wednesday: {
            hours: "12PM - 9:30PM",
            open: "11:00",
            close: "21:30"
        },
        Thursday: {
            hours: "12PM - 9:30PM",
            open: "11:00",
            close: "21:30"
        },
        Friday: {
            hours: "12PM - 11PM",
            open: "11:00",
            close: "23:00"
        },
        Saturday: {
            hours: "12PM - 11PM",
            open: "11:00",
            close: "23:00"
        }
    },
    {
        shopName:"Tiger Sugar",
        lat: 38.83016746812058, 
        lng: -77.18811741684245,
        city: "Annandale",
        zip: "22003",
        food: 'y',
        dessert: 'y',
        games: 'n',
        Sunday: {
            hours: "11AM - 9PM",
            open: "11:00",
            close: "21:00"
        },
        Monday: {
            hours: "3PM - 9PM",
            open: "15:00",
            close: "21:00"
        },
        Tuesday: {
            hours: "3PM - 9PM",
            open: "15:00",
            close: "21:00"
        },
        Wednesday: {
            hours: "3PM - 9PM",
            open: "15:00",
            close: "21:00"
        },
        Thursday: {
            hours: "3PM - 9PM",
            open: "15:00",
            close: "21:00"
        },
        Friday: {
            hours: "12PM - 11PM",
            open: "11:00",
            close: "23:00"
        },
        Saturday: {
            hours: "11AM - 11PM",
            open: "11:00",
            close: "23:00"
        }
    },
    {
        shopName:"U Tea",
        lat: 38.87289613375637, 
        lng: -77.15433863057936,
        city: "Falls Church",
        zip: "22044",
        food: 'n',
        dessert: 'n',
        games: 'n',
        Sunday: {
            hours: "9AM - 9PM",
            open: "09:00",
            close: "21:00"
        },
        Monday: {
            hours: "9AM - 8PM",
            open: "09:00",
            close: "20:00"
        },
        Tuesday: {
            hours: "9AM - 8PM",
            open: "09:00",
            close: "20:00"
        },
        Wednesday: {
            hours: "9AM - 8PM",
            open: "09:00",
            close: "20:00"
        },
        Thursday: {
            hours: "9AM - 8PM",
            open: "09:00",
            close: "20:00"
        },
        Friday: {
            hours: "9AM - 8PM",
            open: "09:00",
            close: "20:00"
        },
        Saturday: {
            hours: "9AM - 9PM",
            open: "09:00",
            close: "21:00"
        }
    },
    {
        shopName:"Vessel Tea",
        lat: 38.82433804684889, 
        lng: -77.17218246522901,
        city: "Annandale",
        zip: "22003",
        food: 'n',
        dessert: 'y',
        games: 'y',
        Sunday: {
            hours: "11AM - 9PM",
            open: "11:00",
            close: "21:00"
        },
        Monday: {
            hours: "11AM - 9PM",
            open: "11:00",
            close: "21:00"
        },
        Tuesday: {
            hours: "11AM - 9PM",
            open: "11:00",
            close: "21:00"
        },
        Wednesday: {
            hours: "11AM - 9PM",
            open: "11:00",
            close: "21:00"
        },
        Thursday: {
            hours: "11AM - 9PM",
            open: "11:00",
            close: "21:00"
        },
        Friday: {
            hours: "11AM - 10PM",
            open: "11:00",
            close: "22:00"
        },
        Saturday: {
            hours: "11AM - 10PM",
            open: "11:00",
            close: "22:00"
        }
    },
    {
        shopName:"Vivi Bubble Tea",
        lat: 38.8442480596345,
        lng: -77.2907886325075,
        city: "Fairfax",
        zip: "22031",
        food: 'y',
        dessert: 'n',
        games: 'y',
        Sunday: {
            hours: "11AM - 10PM",
            open: "11:00",
            close: "22:00"
        },
        Monday: {
            hours: "11AM - 10PM",
            open: "11:00",
            close: "22:00"
        },
        Tuesday: {
            hours: "11AM - 10PM",
            open: "11:00",
            close: "22:00"
        },
        Wednesday: {
            hours: "11AM - 10PM",
            open: "11:00",
            close: "22:00"
        },
        Thursday: {
            hours: "11AM - 10PM",
            open: "11:00",
            close: "22:00"
        },
        Friday: {
            hours: "11AM - 10PM",
            open: "11:00",
            close: "22:00"
        },
        Saturday: {
            hours: "11AM - 10PM",
            open: "11:00",
            close: "22:00"
        }
    },
    {
        shopName:"Vivi Bubble Tea",
        lat: 38.90426132182087, 
        lng: -77.26084581166585,
        city: "Vienna",
        zip: "22180",
        food: 'y',
        dessert: 'n',
        games: 'y',
        Sunday: {
            hours: "11AM - 10PM",
            open: "11:00",
            close: "22:00"
        },
        Monday: {
            hours: "11AM - 10PM",
            open: "11:00",
            close: "22:00"
        },
        Tuesday: {
            hours: "11AM - 10PM",
            open: "11:00",
            close: "22:00"
        },
        Wednesday: {
            hours: "11AM - 10PM",
            open: "11:00",
            close: "22:00"
        },
        Thursday: {
            hours: "11AM - 10PM",
            open: "11:00",
            close: "22:00"
        },
        Friday: {
            hours: "11AM - 10PM",
            open: "11:00",
            close: "22:00"
        },
        Saturday: {
            hours: "11AM - 10PM",
            open: "11:00",
            close: "22:00"
        }
    },
    {
        shopName:"Y-Tea",
        lat: 38.991152152718065, 
        lng: -77.5047614576715,
        city: "Ashburn",
        zip: "20148",
        food: 'n',
        dessert: 'n',
        games: 'n',
        Sunday: {
            hours: "11AM - 9PM",
            open: "11:00",
            close: "21:00"
        },
        Monday: {
            hours: "11AM - 9PM",
            open: "11:00",
            close: "21:00"
        },
        Tuesday: {
            hours: "11AM - 9PM",
            open: "11:00",
            close: "21:00"
        },
        Wednesday: {
            hours: "11AM - 9PM",
            open: "11:00",
            close: "21:00"
        },
        Thursday: {
            hours: "11AM - 9PM",
            open: "11:00",
            close: "21:00"
        },
        Friday: {
            hours: "11AM - 9PM",
            open: "11:00",
            close: "21:00"
        },
        Saturday: {
            hours: "11AM - 9PM",
            open: "11:00",
            close: "21:00"
        }
    },
    {
        shopName:"Y-Tea",
        lat: 38.65908049983596, 
        lng: -77.44003239018463,
        city: "Manassas",
        zip: "20112",
        food: 'n',
        dessert: 'n',
        games: 'n',
        Sunday: {
            hours: "11AM - 9PM",
            open: "11:00",
            close: "21:00"
        },
        Monday: {
            hours: "11AM - 9PM",
            open: "11:00",
            close: "21:00"
        },
        Tuesday: {
            hours: "11AM - 9PM",
            open: "11:00",
            close: "21:00"
        },
        Wednesday: {
            hours: "11AM - 9PM",
            open: "11:00",
            close: "21:00"
        },
        Thursday: {
            hours: "11AM - 9PM",
            open: "11:00",
            close: "21:00"
        },
        Friday: {
            hours: "11AM - 9PM",
            open: "11:00",
            close: "21:00"
        },
        Saturday: {
            hours: "11AM - 9PM",
            open: "11:00",
            close: "21:00"
        }
    },
    {
        shopName:"YiFang Taiwan Fruit Tea",
        lat: 38.85489968642783, 
        lng: -77.3353488652324,
        city: "Fairfax",
        zip: "22030",
        food: 'y',
        dessert: 'n',
        games: 'n',
        Sunday: {
            hours: "11AM - 9:30PM",
            open: "11:00",
            close: "21:30"
        },
        Monday: {
            hours: "11AM - 9:30PM",
            open: "11:00",
            close: "21:30"
        },
        Tuesday: {
            hours: "11AM - 9:30PM",
            open: "11:00",
            close: "21:30"
        },
        Wednesday: {
            hours: "11AM - 9:30PM",
            open: "11:00",
            close: "21:30"
        },
        Thursday: {
            hours: "11AM - 9:30PM",
            open: "11:00",
            close: "21:30"
        },
        Friday: {
            hours: "11AM - 10:30PM",
            open: "11:00",
            close: "22:30"
        },
        Saturday: {
            hours: "11AM - 10:30PM",
            open: "11:00",
            close: "22:30"
        }
    },
];
let userSearch = document.getElementById("searchQuery");
let shopInfo;
let infoObj = [];
let filters = document.getElementsByTagName("input");
let filterUsed = false;
let filterMatch = false;
let duplicateFound = false;

userSearch.addEventListener("keypress", function (e){ //check if user used enter key instead of clicking the button
    if(e.key === 'Enter'){
        searchResults();
        closeInfoWindow();
    }
});

function initMap() { 
    let directionsURL = "https://www.google.com/maps/search/?api=1&query=";
    let splitShopName = [];
    let shopOpenInfo;
    let shopClosedInfo;
    map = new google.maps.Map(document.getElementById("map"), mapDetails);

    for(let i = 0; i < shops.length; i++){ //add markers for all 
        let shopOpeningDate = new Date(today.getFullYear(), today.getMonth(), today.getDate(), shops[i][weekdays[currentWeekday]].open.substring(0, 2), shops[i][weekdays[currentWeekday]].open.substring(3));
        let shopClosingDate = new Date(today.getFullYear(), today.getMonth(), today.getDate(), shops[i][weekdays[currentWeekday]].close.substring(0, 2), shops[i][weekdays[currentWeekday]].close.substring(3));
        let openDayOfMonth = today.getDate();
        let closeDayOfMonth = today.getDate();
        openDayOfMonth -= today < shopClosingDate && shops[i][weekdays[currentWeekday]].close.startsWith("0") ? 1 : 0;
        closeDayOfMonth += today >= shopClosingDate && shops[i][weekdays[currentWeekday]].close.startsWith("0") ? 1 : 0; //for shops that close after midnight. move to the next day
        shopOpeningDate.setDate(openDayOfMonth);
        shopClosingDate.setDate(closeDayOfMonth);
        splitShopName = shops[i].shopName.split(" ");
        shopOpenInfo = "<b style='font-size: 1.25em; color: black'>" + shops[i].shopName + "<br>" + shops[i].city + "</b><br><span style='color: green'><i>Open</i></span><span style='color: black'><br>" + shops[i][weekdays[currentWeekday]].hours + "</span><br>";
        shopClosedInfo = "<b style='font-size: 1.25em; color: black'>" + shops[i].shopName + "<br>" + shops[i].city + "</b><br><span style='color: red'><i>Closed</i></span><span style='color: black'><br>" + shops[i][weekdays[currentWeekday]].hours + "</span><br>"; 
        shopInfo = ((shopOpeningDate < today) && (today < shopClosingDate)) ? shopOpenInfo:shopClosedInfo;

        if(shops[i].food == 'y'){
            shopInfo += "&#127860;";
        }
        if(shops[i].games == 'y'){
            shopInfo += "&#127922;";
        }
        if(shops[i].dessert == 'y'){
            shopInfo += "&#127856;";
        }

        shopInfo += "<br><a href='" + directionsURL; 

        for(let x = 0; x < splitShopName.length; x++){
            shopInfo += splitShopName[x];
            shopInfo += '+';
        }

        shopInfo += shops[i].city + "+VA'><i>get directions</i></a>";

        const marker = new google.maps.marker.AdvancedMarkerElement({
            position: {lat: shops[i].lat, lng: shops[i].lng},
            map
        });
        markerArray.push(marker); //add marker to array of markers

        const infoWindow = new google.maps.InfoWindow({
            content: shopInfo
        });
    
        marker.addListener("click", () => {
            closeInfoWindow();
            infoWindow.open({
                anchor: marker,
                map
            });
            infoObj[0] = infoWindow;

            map.setZoom(14);
            map.setCenter(marker.position);
        });
    } //end for
  
}//end init map

function closeInfoWindow(){
    if(infoObj.length > 0){
        infoObj[0].set("marker", null);
        infoObj[0].close();
        infoObj[0].length = 0;
    }
}

function searchResults(){
    closeInfoWindow();

    let query = document.getElementById("searchQuery").value;
    query = query.trim().toUpperCase(); 
    let filterChecked = false;
    let tempShopsArr = []; //used for filtered results
    let tempMarkerArr = []; //used for filtered results
    let resultCount = 0;

    map.setZoom(10);

    for(let i = 0; i < shops.length; i++){ //reset markers for new search so they appear
        markerArray[i].map = map;
    }

    //check to see if any filter has been used
    for(let i = 1; i < filters.length; i++){
        if(filters[i].checked == true){
            filterUsed = true;
            break;
        }
    }
    
    if(filterUsed == true){ //check for filter matches with shops
        
        for(let i = 0; i < shops.length; i++){ //check each shop 
            let shopOpeningDate = new Date(today.getFullYear(), today.getMonth(), today.getDate(), shops[i][weekdays[currentWeekday]].open.substring(0, 2), shops[i][weekdays[currentWeekday]].open.substring(3));
            let shopClosingDate = new Date(today.getFullYear(), today.getMonth(), today.getDate(), shops[i][weekdays[currentWeekday]].close.substring(0, 2), shops[i][weekdays[currentWeekday]].close.substring(3));
            let openDayOfMonth = today.getDate();
            let closeDayOfMonth = today.getDate();
            openDayOfMonth -= today < shopClosingDate && shops[i][weekdays[currentWeekday]].close.startsWith("0") ? 1 : 0;
            closeDayOfMonth += today >= shopClosingDate && shops[i][weekdays[currentWeekday]].close.startsWith("0")  ? 1 : 0; //for shops that close after midnight. move to the next day
            shopOpeningDate.setDate(openDayOfMonth);
            shopClosingDate.setDate(closeDayOfMonth);

            for(let j = 1; j < filters.length; j++){
                if(filters[j].checked == true){ 
                    if(j == 1){ //because 1 = currently open filter
                        if(today >= shopOpeningDate && today <= shopClosingDate){ //if the shop is open
                            filterMatch = true;
                        }
                        else {
                            filterMatch = false;
                            break; //shop doesn't meet filter requirements so it isn't needed
                        }
                    }
                    if(j != 1 && shops[i][filters[j].value] == 'y'){ //shop match found
                        filterMatch = true; 
                    }
                    else if(j != 1 && shops[i][filters[j].value] == 'n') {
                        filterMatch = false;
                        break;
                    }
                }
            } //end inner for

            if(filterMatch == true){
                tempShopsArr.push(shops[i]); //add filtered shops to temporary array so that original array isn't altered
                tempMarkerArr.push(markerArray[i]); //add filtered markers to temporary array so that original array isn't altered
            }
            else {
                markerArray[i].map = null;
            }

            filterMatch = false; //reset for next iteration
        } //end outer for

        filterChecked = true;

    } //end filter match check

    if(filterChecked == true) { //only execute if a filter was used
        
        for(let i = 0; i < tempShopsArr.length; i++){ //check for matches
          if(!(tempShopsArr[i].shopName.toUpperCase().includes(query)|| tempShopsArr[i].city.toUpperCase().includes(query) || query == tempShopsArr[i].zip)){ //if they don't match, hide the pin
                tempMarkerArr[i].map = null;
            }
            else { //if there is a match
                map.panTo(tempMarkerArr[i].position); //pan to area where results are
                resultCount++; 
            }
        } //end for    
        filterUsed = false;
    }
    
    else { //no filters used
        
        for(let i = 0; i < shops.length; i++){ //check for matches
            if(!query.trim() && query != null){ //if there is an empty or null search, show all pins
                markerArray[i].map = map;
                resultCount = shops.length;
                break;
            }
            else if(!(shops[i].shopName.toUpperCase().includes(query) || shops[i].city.toUpperCase().includes(query) || query == shops[i].zip)){ //if they don't match, hide the pin
                markerArray[i].map = null
            }
            else { //if there is a match
                map.panTo(markerArray[i].position); //pan to area where results are
                resultCount++;
            }
        } //end for    
        
    }
    
    document.getElementById("results").innerHTML = "Your search returned " + resultCount + " shop(s).";
} //end search results

function surpriseShop(){                
    closeInfoWindow();
    document.getElementById("results").innerHTML = "";

    for(let i = 0; i < shops.length; i++){ //reset markers and hide them
        markerArray[i].map = null;
    }
    
    let query = document.getElementById("searchQuery").value;
    query = query.trim().toUpperCase();
    let randomShop;
    let tempSurpriseShops = []; //hold list of shops to choose from if there is a zip code/city/filter specified 
    let tempSurpriseMarkerArr = [];
    let mismatchShops = []; //shops that don't meet reqs
    
    //check to see if any filter has been used
    for(let i = 1; i < filters.length; i++){ 
        if(filters[i].checked == true){ 
            filterUsed = true;
            break;
        }
    }

    if(filterUsed == false){ //double checking to see if there is a search query
        if(query.trim() && query != null){ 
            filterUsed = true;
        }
    }

    if(filterUsed == true){ 
        for(let i = 0; i < shops.length; i++){ //check each shop
            let shopOpeningDate = new Date(today.getFullYear(), today.getMonth(), today.getDate(), shops[i][weekdays[currentWeekday]].open.substring(0, 2), shops[i][weekdays[currentWeekday]].open.substring(3));
            let closeDayOfMonth = today.getDate();
            closeDayOfMonth += shops[i][weekdays[currentWeekday]].close.startsWith("0") ? 1 : 0; //if it closes between 12AM and 9AM
            let shopClosingDate = new Date(today.getFullYear(), today.getMonth(), closeDayOfMonth, shops[i][weekdays[currentWeekday]].close.substring(0, 2), shops[i][weekdays[currentWeekday]].close.substring(3));
            
            for(let j = 0; j < filters.length; j++){ 

                if(j == 0){ //input box 
                    if(shops[i].city.toUpperCase().includes(query) || query == shops[i].zip){ 
                        filterMatch = true;
                    }
                    else {
                        mismatchShops.push(shops[i]); 
                        filterMatch = false;
                        break;
                    }
                }
                else if(j != 0 && filters[j].checked == true){ 

                    if(j == 1){ //because 1 = currently open filter
                        if(today >= shopOpeningDate && today <= shopClosingDate){ //if the shop is open
                            filterMatch = true;
                        }
                        else {
                            mismatchShops.push(shops[i]);
                            filterMatch = false;
                            break; //shop doesn't meet filter requirements so it isn't needed
                        }
                    }
                    if(j > 1 && shops[i][filters[j].value] == 'y'){ //shop match found
                        filterMatch = true; 
                    }
                    else if(j > 1 && shops[i][filters[j].value] == 'n') {
                        mismatchShops.push(shops[i]);
                        filterMatch = false;
                        break;
                    }
                }
            } //end inner for
           
            if(filterMatch == true){ 
                
                if(tempSurpriseShops.length == 0){
                    tempSurpriseShops.push(shops[i]); 
                    tempSurpriseMarkerArr.push(markerArray[i]);
                }
                else { 
                    for(let k = 0; k < tempSurpriseShops.length; k++){ //check for duplicates
                        if(shops[i].shopName != tempSurpriseShops[k].shopName){ //not a duplicate
                            for(let m = 0; m < mismatchShops.length; m++){ //check if on list of shops that don't meet reqs
                                if(shops[i].shopName == mismatchShops[m].shopName && shops[i].city == mismatchShops[m].city){ //is on list
                                    duplicateFound = true;
                                    break;
                                }
                            } //end for
                        }
                        else { //duplicate found
                            break; 
                        }

                       
                    } //end for
                    if(duplicateFound == false){
                        tempSurpriseShops.push(shops[i]);
                        tempSurpriseMarkerArr.push(markerArray[i]);
                    }
                }
            }
            duplicateFound = false;
            filterMatch = false; //reset for next iteration
        } //end outer for    
        
        if(tempSurpriseShops.length > 0){ //if a keyword or filter was used
            randomShop = Math.ceil(Math.random() * tempSurpriseShops.length - 1); //get a random number to choose random shop 
            
            for(let i = 0; i < tempSurpriseShops.length; i++){ 
                if(tempSurpriseShops[i] != tempSurpriseShops[randomShop]){ //look for the shop that does match the shop with the random index
                    tempSurpriseMarkerArr[i].map = null;
                }
                else {
                    tempSurpriseMarkerArr[i].map = map;
                    map.panTo(tempSurpriseMarkerArr[i].position);
                    map.setZoom(14);
                    break;
                }
            }
        }
        else { 
            document.getElementById("results").innerHTML = "Your search returned 0 shop(s).";
        }

        filterUsed = false;
    } 
    else { //no filters used
        randomShop = Math.ceil(Math.random() * shops.length); 
        
        for(let i = 0; i < shops.length; i++){
            if(!(shops[i] == shops[randomShop])){ 
                markerArray[i].map = null;
            }
            else {
                markerArray[i].map = map;
                map.panTo(markerArray[i].position);
                map.setZoom(10);
                break;
            }
        }

        document.getElementById("results").innerHTML = ""; //it will always be one shop, so it can stay blank
    } 
} //end surprise Shop