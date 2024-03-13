var map;
let mapDetails = {
    center:{lat: 38.84575643258774,lng: -77.30619430989303},
    zoom:10};
var markerArray = [];
var today = new Date();
var weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var currentWeekday = today.getDay();
let shops = [
    {
        shopName:"520 Ice Cream and Tea",  
        lat: 38.86998784,      
        lng: -77.23089728,
        city: "Fairfax",
        zip: "22031",
        food: 'n',
        dessert: 'y',
        games: 'n',
        Sunday: {
            hours: "12:30PM - 10PM",
            open: "12:30",
            close: "22:00"
        },
        Monday: {
            hours: "12:30PM - 10PM",
            open: "12:30",
            close: "22:00"
        },
        Tuesday: {
            hours: "12:30PM - 10PM",
            open: "12:30",
            close: "22:00"
        },
        Wednesday: {
            hours: "12:30PM - 10PM",
            open: "12:30",
            close: "22:00"
        },
        Thursday: {
            hours: "12:30PM - 10PM",
            open: "12:30",
            close: "22:00"
        },
        Friday: {
            hours: "12:30PM - 10PM",
            open: "12:30",
            close: "22:00"
        },
        Saturday: {
            hours: "12:30PM - 10PM",
            open: "12:30",
            close: "22:00"
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
            hours: "11AM - 10:30PM",
            open: "11:00",
            close: "22:30"
        },
        Saturday: {
            hours: "11:30PM - 10:30PM",
            open: "11:00",
            close: "22:30"
        }
    },
    {
        shopName:"Argo Tea",
        lat: 38.83198071392536, 
        lng: -77.30719461737431,
        city: "Fairfax",
        zip: "22030",
        food: 'y',
        dessert: 'y',
        games: 'n',
        Sunday: {
            hours: "Closed for Today",
            open: "Closed for Today",
            close: "Closed for Today"
        },
        Monday: {
            hours: "8AM - 2PM",
            open: "08:00",
            close: "14:00"
        },
        Tuesday: {
            hours: "8AM - 2PM",
            open: "08:00",
            close: "14:00"
        },
        Wednesday: {
            hours: "8AM - 2PM",
            open: "08:00",
            close: "14:00"
        },
        Thursday: {
            hours: "8AM - 2PM",
            open: "08:00",
            close: "14:00"
        },
        Friday: {
            hours: "8AM - 2PM",
            open: "08:00",
            close: "14:00"
        },
        Saturday: {
            hours: "Closed for Today",
            open: "Closed for Today",
            close: "Closed for Today"
        }
    },
    /*{
        shopName:"Argo Tea - Alexandria (temporarily closed)",
        lat: 38.80096618294373,
        lng: -77.06383878720916,
        city: "Alexandria",
        zip: "22314",
        food: 'y',
        dessert: 'y',
        games: 'n'
    },*/
    {
        shopName:"Bees and Tea by Asia Bistro",
        lat: 38.8631918707671,
        lng: -77.0629887873384,
        city: "Arlington",
        zip: "22202",
        food: 'y',
        dessert: 'y',
        games: 'n',
        Sunday: {
            hours: "12PM - 10PM",
            open: "12:00",
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
            hours: "11:30AM - 11PM",
            open: "11:30",
            close: "23:00"
        },
        Saturday: {
            hours: "11:30AM - 11PM",
            open: "11:30",
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
            hours: "12PM - 8:30PM",
            open: "12:00",
            close: "20:30"
        },
        Monday: {
            hours: "12PM - 8:30PM",
            open: "12:00",
            close: "20:30"
        },
        Tuesday: {
            hours: "12PM - 8:30PM",
            open: "12:00",
            close: "20:30"
        },
        Wednesday: {
            hours: "12PM - 8:30PM",
            open: "12:00",
            close: "20:30"
        },
        Thursday: {
            hours: "12PM - 8:30PM",
            open: "12:00",
            close: "20:30"
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
            hours: "12PM - 10:30PM",
            open: "12:00",
            close: "22:30"
        },
        Saturday: {
            hours: "12PM - 10:30PM",
            open: "12:00",
            close: "22:30"
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
    {
        shopName:"Boba Hero",
        lat: 39.10604719784259, 
        lng: -77.53856188389727,
        city: "Leesburg",
        zip: "20176",
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
        shopName:"Boba Knight",
        lat: 38.86221024012838, 
        lng: -77.2959162196095,
        city: "Fairfax",
        zip: "22030",
        food: 'n',
        dessert: 'n',
        games: 'n',
        Sunday: {
            hours: "12PM - 10:30PM",
            open: "12:00",
            close: "22:30"
        },
        Monday: {
            hours: "12PM - 10:30PM",
            open: "12:00",
            close: "22:30"
        },
        Tuesday: {
            hours: "12PM - 10:30PM",
            open: "12:00",
            close: "22:30"
        },
        Wednesday: {
            hours: "12PM - 10:30PM",
            open: "12:00",
            close: "22:30"
        },
        Thursday: {
            hours: "12PM - 10:30PM",
            open: "12:00",
            close: "22:30"
        },
        Friday: {
            hours: "12PM - 10:30PM",
            open: "12:00",
            close: "22:30"
        },
        Saturday: {
            hours: "12PM - 10:30PM",
            open: "12:00",
            close: "22:30"
        }
    },
    {
        shopName:"Boba TomTom",
        lat: 38.84843408498978,
        lng: -77.30087692899075,
        city: "Fairfax",
        zip: "22030",
        food: 'n',
        dessert: 'n',
        games: 'n',
        Sunday: {
            hours: "Closed for today",
            open: "Closed for today",
            close: "Closed for today"
        },
        Monday: {
            hours: "10AM - 10PM",
            open: "10:00",
            close: "22:00"
        },
        Tuesday: {
            hours: "10AM - 10PM",
            open: "10:00",
            close: "22:00"
        },
        Wednesday: {
            hours: "10AM - 10PM",
            open: "10:00",
            close: "22:00"
        },
        Thursday: {
            hours: "10AM - 10PM",
            open: "10:00",
            close: "22:00"
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
        shopName:"Bobapop Tea Bar",
        lat: 38.8737540086376,
        lng: -77.225153162887,
        city: "Falls Church",
        zip: "22042",
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
        shopName:"Bobapop Tea Bar",
        lat: 38.7651000792815,
        lng: -77.15265030403896,
        city: "Alexandria",
        zip: "22310",
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
        shopName:"Breeze Bakery Café",
        lat: 38.83358404,
        lng: -77.21002415,
        city: "Annandale",
        zip: "22003",
        food: 'y',
        dessert: 'y',
        games: 'n',
        Sunday: {
            hours: "7AM - 11PM",
            open: "07:00",
            close: "23:00"
        },
        Monday: {
            hours: "7AM - 11PM",
            open: "07:00",
            close: "23:00"
        },
        Tuesday: {
            hours: "7AM - 11PM",
            open: "07:00",
            close: "23:00"
        },
        Wednesday: {
            hours: "7AM - 11PM",
            open: "07:00",
            close: "23:00"
        },
        Thursday: {
            hours: "7AM - 11PM",
            open: "07:00",
            close: "23:00"
        },
        Friday: {
            hours: "7AM - 11PM",
            open: "07:00",
            close: "23:00"
        },
        Saturday: {
            hours: "7AM - 11PM",
            open: "07:00",
            close: "23:00"
        }
    },
    {
        shopName:"Bubble Mochi",
        lat: 38.90050645,
        lng: -77.2671341433792,
        city: "Vienna",
        zip: "22180",
        food: 'n',
        dessert: 'y',
        games: 'n',
        Sunday: {
            hours: "10AM - 8PM",
            open: "10:00",
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
            hours: "10AM - 8PM",
            open: "10:00",
            close: "20:00"
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
            hours: "12PM - 6:00PM",
            open: "12:00",
            close: "18:00"
        },
        Monday: {
            hours: "10AM - 8:00PM",
            open: "10:00",
            close: "20:00"
        },
        Tuesday: {
            hours: "10AM - 8:00PM",
            open: "10:00",
            close: "20:00"
        },
        Wednesday: {
            hours: "10AM - 8:00PM",
            open: "10:00",
            close: "20:00"
        },
        Thursday: {
            hours: "10AM - 8:00PM",
            open: "10:00",
            close: "20:00"
        },
        Friday: {
            hours: "10AM - 8:00PM",
            open: "10:00",
            close: "20:00"
        },
        Saturday: {
            hours: "10AM - 8:00PM",
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
    {
        shopName:"Cafe Moment",
        lat: 38.8937018628453,
        lng: -77.4272437131896,
        city: "Chantilly",
        zip: "20151",
        food: 'y',
        dessert: 'y',
        games: 'n',
        Sunday: {
            hours: "11AM - 8:30PM",
            open: "11:00",
            close: "20:30"
        },
        Monday: {
            hours: "11AM - 8:30PM",
            open: "11:00",
            close: "20:30"
        },
        Tuesday: {
            hours: "11AM - 8:30PM",
            open: "11:00",
            close: "20:30"
        },
        Wednesday: {
            hours: "11AM - 8:30PM",
            open: "11:00",
            close: "20:30"
        },
        Thursday: {
            hours: "11AM - 8:30PM",
            open: "11:00",
            close: "20:30"
        },
        Friday: {
            hours: "11AM - 8:30PM",
            open: "11:00",
            close: "20:30"
        },
        Saturday: {
            hours: "11AM - 8:30PM",
            open: "11:00",
            close: "20:30"
        }
    },
    {
        shopName: "Cafe O'Clock",
        lat: 38.84401596226555, 
        lng: -77.28757644911781,
        city: "Fairfax",
        zip: "22031",
        food: 'y',
        dessert: 'y',
        games: 'n',
        Sunday: {
            hours: "Closed for today",
            open: "Closed for today",
            close: "Closed for today"
        },
        Monday: {
            hours: "10AM - 3PM",
            open: "10:00",
            close: "15:00"
        },
        Tuesday: {
            hours: "10AM - 3PM",
            open: "10:00",
            close: "15:00"
        },
        Wednesday: {
            hours: "10AM - 3PM",
            open: "10:00",
            close: "15:00"
        },
        Thursday: {
            hours: "10AM - 3PM",
            open: "10:00",
            close: "15:00"
        },
        Friday: {
            hours: "10AM - 3PM",
            open: "10:00",
            close: "15:00"
        },
        Saturday: {
            hours: "Closed for today",
            open: "Closed for today",
            close: "Closed for today"
        }
    },
    {
        shopName:"Cents Taro Family",
        lat: 38.8663117666677,
        lng: -77.2748653711073,
        city: "Fairfax",
        zip: "22031",
        food: 'n',
        dessert: 'y',
        games: 'n',
        Sunday: {
            hours: "2PM - 8PM",
            open: "14:00",
            close: "20:00"
        },
        Monday: {
            hours: "2PM - 7:30PM",
            open: "14:00",
            close: "19:30"
        },
        Tuesday: {
            hours: "Closed for today",
            open: "Closed for today",
            close: "Closed for today"
        },
        Wednesday: {
            hours: "Closed for today",
            open: "Closed for today",
            close: "Closed for today"
        },
        Thursday: {
            hours: "2PM - 7:30PM",
            open: "14:00",
            close: "19:30"
        },
        Friday: {
            hours: "3PM - 8:30PM",
            open: "15:00",
            close: "20:30"
        },
        Saturday: {
            hours: "2PM - 9PM",
            open: "14:00",
            close: "21:00"
        }
    },
    {
        shopName:"Chill Zone Café",
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
            hours: "10AM - 8:30PM",
            open: "10:00",
            close: "20:30"
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
        lat: 38.830841791098976, 
        lng: -77.18833646423234,
        city: "Annandale",
        zip: "22003",
        food: 'n',
        dessert: 'y',
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
            hours: "11AM - 9PM",
            open: "11:00",
            close: "21:00"
        }
    },
    {
        shopName: "Donutchew",
        lat: 38.827483260668714, 
        lng: -77.4394327713058,
        city: "Centreville",
        zip: "20121",
        food: 'y',
        dessert: 'y',
        games: 'n',
        Sunday: {
            hours: "11:30AM - 11PM",
            open: "11:30",
            close: "23:00"
        },
        Monday: {
            hours: "11:30AM - 11PM",
            open: "11:30",
            close: "23:00"
        },
        Tuesday: {
            hours: "11:30AM - 11PM",
            open: "11:30",
            close: "23:00"
        },
        Wednesday: {
            hours: "11:30AM - 11PM",
            open: "11:30",
            close: "23:00"
        },
        Thursday: {
            hours: "11:30AM - 11PM",
            open: "11:30",
            close: "23:00"
        },
        Friday: {
            hours: "11:30AM - 11PM",
            open: "11:30",
            close: "23:00"
        },
        Saturday: {
            hours: "11:30AM - 11PM",
            open: "11:30",
            close: "23:00"
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
            hours: "11AM - 7PM",
            open: "11:00",
            close: "19:00"
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
        lat: 38.74227844863788, 
        lng: -77.16311751901736,
        city: "Alexandria",
        zip: "22315",
        food: 'y',
        dessert: 'y',
        games: 'n',
        Sunday: {
            hours: "9AM - 7PM",
            open: "09:00",
            close: "19:00"
        },
        Monday: {
            hours: "8AM - 8PM",
            open: "08:00",
            close: "20:00"
        },
        Tuesday: {
            hours: "8AM - 8PM",
            open: "08:00",
            close: "20:00"
        },
        Wednesday: {
            hours: "8AM - 8PM",
            open: "08:00",
            close: "20:00"
        },
        Thursday: {
            hours: "8AM - 8PM",
            open: "08:00",
            close: "20:00"
        },
        Friday: {
            hours: "8AM - 8PM",
            open: "08:00",
            close: "20:00"
        },
        Saturday: {
            hours: "8AM - 8PM",
            open: "08:00",
            close: "20:00"
        }
    },
    {
        shopName: "Donutchew",
        lat: 38.90146187509499, 
        lng: -77.2655899066544,
        city: "Vienna",
        zip: "22180",
        food: 'n',
        dessert: 'y',
        games: 'n',
        Sunday: {
            hours: "10AM - 7PM",
            open: "10:00",
            close: "19:00"
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
            hours: "9AM - 8PM",
            open: "09:00",
            close: "20:00"
        }
    },
    {
        shopName:"Empress Pearl Milk Tea",
        lat: 39.1377095843293,
        lng: -77.703679644457,
        city: "Purcellville",
        zip: "20132",
        food: 'n',
        dessert: 'n',
        games: 'n',
        Sunday: {
            hours: "12PM - 7PM",
            open: "12:00",
            close: "19:00"
        },
        Monday: {
            hours: "1PM - 7PM",
            open: "13:00",
            close: "19:00"
        },
        Tuesday: {
            hours: "1PM - 7PM",
            open: "13:00",
            close: "19:00"
        },
        Wednesday: {
            hours: "1PM - 7PM",
            open: "13:00",
            close: "19:00"
        },
        Thursday: {
            hours: "1PM - 7PM",
            open: "13:00",
            close: "19:00"
        },
        Friday: {
            hours: "12PM - 7PM",
            open: "12:00",
            close: "19:00"
        },
        Saturday: {
            hours: "12PM - 7PM",
            open: "12:00",
            close: "19:00"
        }
    },
    {
        shopName:"Fortune Cha",
        lat: 38.8166869103071,
        lng: -77.1424575423828,
        city: "Alexandria",
        zip: "22312",
        food: 'y',
        dessert: 'y',
        games: 'n',
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
        shopName:"Gold Miss",
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
        "Monday": {
            hours: "11AM - 8PM",
            open: "11:00",
            close: "20:00"
        },
        "Tuesday": {
            hours: "11AM - 8PM",
            open: "11:00",
            close: "20:00"
        },
        "Wednesday": {
            hours: "11AM - 8PM",
            open: "11:00",
            close: "20:00"
        },
        "Thursday": {
            hours: "11AM - 8PM",
            open: "11:00",
            close: "20:00"
        },
        "Friday": {
            hours: "11AM - 8PM",
            open: "11:00",
            close: "20:00"
        },
        "Saturday": {
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
            hours: "11:00AM - 10PM",
            open: "11:00",
            close: "22:00"
        },
        Monday: {
            hours: "11:00AM - 11PM",
            open: "11:00",
            close: "23:00"
        },
        Tuesday: {
            hours: "11:00AM - 11PM",
            open: "11:00",
            close: "23:00"
        },
        Wednesday: {
            hours: "11:00AM - 11PM",
            open: "11:00",
            close: "23:00"
        },
        Thursday: {
            hours: "11:00AM - 11PM",
            open: "11:00",
            close: "23:00"
        },
        Friday: {
            hours: "11:00AM - 11PM",
            open: "11:00",
            close: "23:00"
        },
        Saturday: {
            hours: "11:00AM - 11PM",
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
            hours: "12PM - 9:30PM",
            open: "12:00",
            close: "21:30"
        },
        Monday: {
            hours: "11:00AM - 9:30PM",
            open: "11:00",
            close: "21:30"
        },
        Tuesday: {
            hours: "11:00AM - 9:30PM",
            open: "11:00",
            close: "21:30"
        },
        Wednesday: {
            hours: "11:00AM - 9:30PM",
            open: "11:00",
            close: "21:30"
        },
        Thursday: {
            hours: "11:00AM - 9:30PM",
            open: "11:00",
            close: "21:30"
        },
        Friday: {
            hours: "11:00AM - 10:30PM",
            open: "11:00",
            close: "22:30"
        },
        Saturday: {
            hours: "12PM - 10:30PM",
            open: "12:00",
            close: "22:30"
        }
    },
    {
        shopName:"Gong Cha",
        lat: 38.8315102389412,
        lng: -77.1970042806781,
        city: "Annandale",
        zip: "22003",
        food: 'n',
        dessert: 'y',
        games: 'y',
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
        lat: 38.8947072279681,
        lng: -77.4266560875818,
        city: "Chantilly",
        zip: "20151",
        food: 'n',
        dessert: 'y',
        games: 'n',
        Sunday: {
            hours: "12PM - 8:45PM",
            open: "12:00",
            close: "20:45"
        },
        Monday: {
            hours: "12PM - 8:45PM",
            open: "12:00",
            close: "20:45"
        },
        Tuesday: {
            hours: "12PM - 8:45PM",
            open: "12:00",
            close: "20:45"
        },
        Wednesday: {
            hours: "12PM - 8:45PM",
            open: "12:00",
            close: "20:45"
        },
        Thursday: {
            hours: "12PM - 8:45PM",
            open: "12:00",
            close: "20:45"
        },
        Friday: {
            hours: "12PM - 9:45PM",
            open: "12:00",
            close: "21:45"
        },
        Saturday: {
            hours: "12PM - 9:45PM",
            open: "12:00",
            close: "21:45"
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
            hours: "10:30AM - 8PM",
            open: "10:30",
            close: "20:00"
        },
        Tuesday: {
            hours: "10:30AM - 8PM",
            open: "10:30",
            close: "20:00"
        },
        Wednesday: {
            hours: "10:30AM - 8PM",
            open: "10:30",
            close: "20:00"
        },
        Thursday: {
            hours: "10:30AM - 8PM",
            open: "10:30",
            close: "20:00"
        },
        Friday: {
            hours: "10:30AM - 9PM",
            open: "10:30",
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
        shopName:"Heo Tea",
        lat: 38.83625812091951, 
        lng: -77.43458105888207,
        city: "Centreville",
        zip: "20121",
        food: 'y',
        dessert: 'n',
        games: 'n',
        Sunday: {
            hours: "12PM - 9PM",
            open: "12:00",
            close: "21:00"
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
            hours: "11AM - 10PM",
            open: "11:00",
            close: "22:00"
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
        shopName:"Hong Kong Tea House",
        lat: 38.83740335747695,
        lng: -77.43385281321446,
        city: "Centreville",
        zip: "20121",
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
        shopName:"Infini-Tea",
        lat: 38.8690391094471,
        lng: -77.1733203427517,
        city: "Falls Church",
        zip: "22042",
        food: 'y',
        dessert: 'y',
        games: 'n',
        Sunday: {
            hours: "11:30AM - 9:30PM",
            open: "11:30",
            close: "21:30"
        },
        Monday: {
            hours: "11:00AM - 9PM",
            open: "11:00",
            close: "21:00"
        },
        Tuesday: {
            hours: "11:00AM - 9PM",
            open: "11:00",
            close: "21:00"
        },
        Wednesday: {
            hours: "11:00AM - 9PM",
            open: "11:00",
            close: "21:00"
        },
        Thursday: {
            hours: "11:00AM - 9PM",
            open: "11:00",
            close: "21:00"
        },
        Friday: {
            hours: "11:00AM - 10PM",
            open: "11:00",
            close: "22:00"
        },
        Saturday: {
            hours: "11:00AM - 10PM",
            open: "11:00",
            close: "22:00"
        }
    },
    {
        shopName:"Java Loco Coffee & Bubble Tea",
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
        shopName:"Java Loco Coffee & Bubble Tea",
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
        lat: 38.904580645757065,
        lng: -77.20402457892193,
        city: "Falls Church",
        zip: "22043",
        food: 'y',
        dessert: 'y',
        games: 'n',
        Sunday: {
            hours: "8AM - 8PM",
            open: "08:00",
            close: "20:00"
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
            hhours: "7:30AM - 8:30PM",
            open: "07:30",
            close: "20:30"
        },
        Friday: {
            hours: "11:30AM - 10PM",
            open: "11:30",
            close: "22:00"
        },
        Saturday: {
            hours: "8AM - 8PM",
            open: "08:00",
            close: "20:00"
        }
    },
    {
        shopName:"Jireh Bakery Café",
        lat: 38.839142208767,
        lng: -77.4270263978817,
        city: "Centreville",
        zip: "20120",
        food: 'y',
        dessert: 'y',
        games: 'n',
        Sunday: {
            hours: "7AM - 9PM",
            open: "07:00",
            close: "21:00"
        },
        Monday: {
            hours: "7AM - 9PM",
            open: "07:00",
            close: "21:00"
        },
        Tuesday: {
            hours: "7AM - 9PM",
            open: "07:00",
            close: "21:00"
        },
        Wednesday: {
            hours: "7AM - 9PM",
            open: "07:00",
            close: "21:00"
        },
        Thursday: {
            hours: "7AM - 9PM",
            open: "07:00",
            close: "21:00"
        },
        Friday: {
            hours: "7AM - 9PM",
            open: "07:00",
            close: "21:00"
        },
        Saturday: {
            hours: "7AM - 9PM",
            open: "07:00",
            close: "21:00"
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
        shopName:"Kokee Tea",
        lat: 38.8623953872683,
        lng: -77.3592240968629,
        city: "Fairfax",
        zip: "22033",
        food: 'n',
        dessert: 'y',
        games: 'n',
        Sunday: {
            hours: "11:00AM - 7PM",
            open: "11:00",
            close: "19:00"
        },
        Monday: {
            hours: "10:00AM - 9:30PM",
            open: "10:00",
            close: "21:30"
        },
        Tuesday: {
            hours: "10:00AM - 9:30PM",
            open: "10:00",
            close: "21:30"
        },
        Wednesday: {
            hours: "10:00AM - 8:30PM",
            open: "10:00",
            close: "20:30"
        },
        Thursday: {
            hours: "10:00AM - 9:30PM",
            open: "10:00",
            close: "21:30"
        },
        Friday: {
            hours: "10:00AM - 9:30PM",
            open: "10:00",
            close: "21:30"
        },
        Saturday: {
            hours: "10:00AM - 9:30PM",
            open: "10:00",
            close: "21:30"
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
            hours: "11:00AM - 8PM",
            open: "11:00",
            close: "20:00"
        },
        Monday: {
            hours: "11:30AM - 9PM",
            open: "11:30",
            close: "21:00"
        },
        Tuesday: {
            hours: "11:00AM - 9PM",
            open: "11:00",
            close: "21:00"
        },
        Wednesday: {
            hours: "11:00AM - 9PM",
            open: "11:00",
            close: "21:00"
        },
        Thursday: {
            hours: "11:00AM - 9PM",
            open: "11:00",
            close: "21:00"
        },
        Friday: {
            hours: "11:00AM - 9PM",
            open: "11:00",
            close: "21:00"
        },
        Saturday: {
            hours: "11:00AM - 9PM",
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
        food: 'y',
        dessert: 'y',
        games: 'y',
        Sunday: {
            hours: "12:00AM - 8PM",
            open: "12:00",
            close: "20:00"
        },
        Monday: {
            hours: "11:00AM - 9PM",
            open: "11:00",
            close: "21:00"
        },
        Tuesday: {
            hours: "11:00AM - 9PM",
            open: "11:00",
            close: "21:00"
        },
        Wednesday: {
            hours: "11:00AM - 9PM",
            open: "11:00",
            close: "21:00"
        },
        Thursday: {
            hours: "11:00AM - 9PM",
            open: "11:00",
            close: "21:00"
        },
        Friday: {
            hours: "11:00AM - 9PM",
            open: "11:00",
            close: "21:00"
        },
        Saturday: {
            hours: "11:00AM - 9PM",
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
            hours: "11:00AM - 7PM",
            open: "11:00",
            close: "19:00"
        },
        Monday: {
            hours: "11:00AM - 8PM",
            open: "11:00",
            close: "20:00"
        },
        Tuesday: {
            hours: "11:00AM - 8PM",
            open: "11:00",
            close: "20:00"
        },
        Wednesday: {
            hours: "11:00AM - 8PM",
            open: "11:00",
            close: "20:00"
        },
        Thursday: {
            hours: "11:00AM - 8PM",
            open: "11:00",
            close: "20:00"
        },
        Friday: {
            hours: "11:00AM - 8PM",
            open: "11:00",
            close: "20:00"
        },
        Saturday: {
            hours: "11:00AM - 8PM",
            open: "11:00",
            close: "20:00"
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
            hours: "12:00PM - 7PM",
            open: "12:00",
            close: "19:00"
        },
        Monday: {
            hours: "8:00AM - 8PM",
            open: "08:00",
            close: "20:00"
        },
        Tuesday: {
            hours: "8:00AM - 8PM",
            open: "08:00",
            close: "20:00"
        },
        Wednesday: {
            hours: "8:00AM - 8PM",
            open: "08:00",
            close: "20:00"
        },
        Thursday: {
            hours: "8:00AM - 8PM",
            open: "08:00",
            close: "20:00"
        },
        Friday: {
            hours: "8:00AM - 9PM",
            open: "08:00",
            close: "21:00"
        },
        Saturday: {
            hours: "8:00AM - 9PM",
            open: "08:00",
            close: "21:00"
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
            hours: "11:00AM - 6PM",
            open: "11:00",
            close: "18:00"
        },
        Monday: {
            hours: "11:00AM - 8PM",
            open: "11:00",
            close: "20:00"
        },
        Tuesday: {
            hours: "11:00AM - 8PM",
            open: "11:00",
            close: "20:00"
        },
        Wednesday: {
            hours: "11:00AM - 8PM",
            open: "11:00",
            close: "20:00"
        },
        Thursday: {
            hours: "11:00AM - 8PM",
            open: "11:00",
            close: "20:00"
        },
        Friday: {
            hours: "10:00AM - 9PM",
            open: "10:00",
            close: "21:00"
        },
        Saturday: {
            hours: "10:00AM - 9PM",
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
        "lat": 39.04427638072339, 
        "lng": -77.4725046994074,
        city: "Ashburn",
        zip: "20147",
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
        "Wednesday": {
            hours: "11AM - 10PM",
            open: "11:00",
            close: "22:00"
        },
        "Thursday": {
            hours: "11AM - 10PM",
            open: "11:00",
            close: "22:00"
        },
        "Friday": {
            hours: "11AM - 10PM",
            open: "11:00",
            close: "22:00"
        },
        "Saturday": {
            hours: "11AM - 10PM",
            open: "11:00",
            close: "22:00"
        }
    },
    {
        shopName: "Kung Fu Tea",
        lat: 39.00732558877695, 
        lng: -77.48677804829565,
        city: "Ashburn",
        zip: "20147",
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
        "Wednesday": {
            hours: "11AM - 10PM",
            open: "11:00",
            close: "22:00"
        },
        "Thursday": {
            hours: "11AM - 10PM",
            open: "11:00",
            close: "22:00"
        },
        "Friday": {
            hours: "11AM - 10PM",
            open: "11:00",
            close: "22:00"
        },
        "Saturday": {
            hours: "11AM - 10PM",
            open: "11:00",
            close: "22:00"
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
            hours: "12PM - 10PM",
            open: "12:00",
            close: "22:00"
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
        shopName:"Kung Fu Tea",
        lat: 38.7783133721759,
        lng: -77.27335341219,
        city: "Burke",
        zip: "22015",
        food: 'n',
        dessert: 'n',
        games: 'y',
        Sunday: {
            hours: "11:00AM - 9PM",
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
            hours: "11:00AM - 10PM",
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
        lat: 38.9367537313026,
        lng: -77.3633107190579,
        city: "Reston",
        zip: "20191",
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
            hours: "12PM - 6PM",
            open: "12:00",
            close: "18:00"
        },
        Monday: {
            hours: "12PM - 7PM",
            open: "12:00",
            close: "19:00"
        },
        Tuesday: {
            hours: "12PM - 7PM",
            open: "12:00",
            close: "19:00"
        },
        Wednesday: {
            hours: "12PM - 7PM",
            open: "12:00",
            close: "19:00"
        },
        Thursday: {
            hours: "12PM - 7PM",
            open: "12:00",
            close: "19:00"
        },
        Friday: {
            hours: "12PM - 7PM",
            open: "12:00",
            close: "19:00"
        },
        Saturday: {
            hours: "12PM - 7PM",
            open: "12:00",
            close: "19:00"
        }
    },
    {
        shopName:"Kung Fu Tea",
        lat: 38.917769386070944,
        lng: -77.2212804801252,
        city: "McLean",
        zip: "22102",
        food: 'n',
        dessert: 'n',
        games: 'n',
        Sunday: {
            hours: "12PM - 6PM",
            open: "12:00",
            close: "18:00"
        },
        Monday: {
            hours: "12PM - 7PM",
            open: "12:00",
            close: "19:00"
        },
        Tuesday: {
            hours: "12PM - 7PM",
            open: "12:00",
            close: "19:00"
        },
        Wednesday: {
            hours: "12PM - 7PM",
            open: "12:00",
            close: "19:00"
        },
        Thursday: {
            hours: "12PM - 7PM",
            open: "12:00",
            close: "19:00"
        },
        Friday: {
            hours: "12PM - 7PM",
            open: "12:00",
            close: "19:00"
        },
        Saturday: {
            hours: "12PM - 7PM",
            open: "12:00",
            close: "19:00"
        }
    },
    {
        shopName:"Kung Fu Tea",
        lat: 39.16010333871058, 
        lng: -78.16392569220484,
        city: "Winchester",
        zip: "22601",
        food: 'n',
        dessert: 'n',
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
        shopName:"Lily Bubble Tea & Smoothie",
        lat: 38.8584303313441,
        lng: -77.0510584904051,
        city: "Arlington",
        zip: "22202",
        food: 'n',
        dessert: 'n',
        games: 'n',
        Sunday: {
            hours: "Closed for today",
            open: "Closed for today",
            close: "Closed for today"
        },
        Monday: {
            hours: "11:30AM - 6:30PM",
            open: "11:30",
            close: "18:30"
        },
        Tuesday: {
            hours: "11:30AM - 6:30PM",
            open: "11:30",
            close: "18:30"
        },
        Wednesday: {
            hours: "11:30AM - 6:30PM",
            open: "11:30",
            close: "18:30"
        },
        Thursday: {
            hours: "11:30AM - 6:30PM",
            open: "11:30",
            close: "18:30"
        },
        Friday: {
            hours: "11:30AM - 6:30PM",
            open: "11:30",
            close: "18:30"
        },
        Saturday: {
            hours: "Closed for today",
            open: "Closed for today",
            close: "Closed for today"
        }
    },
    { 
        shopName:"Mochi & Mochi",
        lat: 38.83790981562773, 
        lng: -77.43599873307684,
        city: "Falls Church",
        zip: "22044",
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
            hours: "Closed for today",
            open: "Closed for today",
            close: "Closed for today"
        },
        Wednesday: {
            hours: "11AM - 7PM",
            open: "11:00",
            close: "19:00"
        },
        Thursday: {
            hours: "11AM - 7PM",
            open: "11:00",
            close: "19:00"
        },
        Friday: {
            hours: "11AM - 7PM",
            open: "11:00",
            close: "19:00"
        },
        Saturday: {
            hours: "11AM - 7PM",
            open: "11:00",
            close: "19:00"
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
        shopName:"Moge Tee",
        lat: 38.9171475665691,
        lng: -77.2229865838858,
        city: "McLean",
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
        shopName:"Moge Tee",
        lat: 38.77421162038746, 
        lng: -77.17052442380313,
        city: "Springfield",
        zip: "22150",
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
    {
        shopName:"Mr. Wish",
        lat: 38.874082778522,
        lng: -77.1548394299928,
        city: "Falls Church",
        zip: "22044",
        food: 'n',
        dessert: 'y',
        games: 'n',
        Sunday: {
            hours: "10:30AM - 9PM",
            open: "10:30",
            close: "21:00"
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
            hours: "10:30AM - 9PM",
            open: "10:30",
            close: "21:00"
        },
        Saturday: {
            hours: "10:30AM - 9PM",
            open: "10:30",
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
            hours: "11AM - 10PM",
            open: "11:00",
            close: "22:00"
        }
    },
    {
        shopName:"Ocha Tea",
        lat: 38.8243371938895,
        lng: -77.1721303052321,
        city: "Annandale",
        zip: "22003",
        food: 'y',
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
        shopName:"Onezo",
        lat: 38.8563715487875,
        lng: -77.3158626180367,
        city: "Fairfax",
        zip: "22030",
        food: 'y',
        dessert: 'n',
        games: 'n',
        Sunday: {
            hours: "11AM - 8:30PM",
            open: "11:00",
            close: "20:30"
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
            hours: "11AM - 8:30PM",
            open: "11:00",
            close: "20:30"
        },
        Saturday: {
            hours: "11AM - 8:30PM",
            open: "11:00",
            close: "20:30"
        }
    },
    {
        shopName:"Panda Tea House",
        lat: 38.8629927097441,
        lng: -77.0609751055611,
        city: "Arlington",
        zip: "22202",
        food: 'n',
        dessert: 'y',
        games: 'n',
        Sunday: {
            hours: "11AM - 6PM",
            open: "11:00",
            close: "18:00"
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
            hours: "12PM - 7PM",
            open: "12:00",
            close: "19:00"
        },
        Monday: {
            hours: "12PM - 6PM",
            open: "12:00",
            close: "18:00"
        },
        Tuesday: {
            hours: "12PM - 6PM",
            open: "12:00",
            close: "18:00"
        },
        Wednesday: {
            hours: "12PM - 6PM",
            open: "12:00",
            close: "18:00"
        },
        Thursday: {
            hours: "12PM - 6PM",
            open: "12:00",
            close: "18:00"
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
            hours: "1PM - 8PM",
            open: "13:00",
            close: "20:00"
        },
        Tuesday: {
            hours: "1PM - 8PM",
            open: "13:00",
            close: "20:00"
        },
        Wednesday: {
            hours: "1PM - 8PM",
            open: "13:00",
            close: "20:00"
        },
        Thursday: {
            hours: "1PM - 8PM",
            open: "13:00",
            close: "20:00"
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
        lat: 38.8722653113124,
        lng: -77.1524007341553,
        city: "Falls Church",
        zip: "22044",
        food: 'y',
        dessert: 'n',
        games: 'n',
        Sunday: {
            hours: "11AM - 8PM",
            open: "11:00",
            close: "20:00"
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
            hours: "11PM - 9PM",
            open: "11:00",
            close: "21:00"
        }
    },
    {
        shopName:"Shilla Bakery & Café",
        lat: 38.8288698722424,
        lng: -77.189431244102,
        city: "Annandale",
        zip: "22003",
        food: 'y',
        dessert: 'y',
        games: 'n',
        Sunday: {
            hours: "7AM - 9PM",
            open: "07:00",
            close: "21:00"
        },
        Monday: {
            hours: "7AM - 9PM",
            open: "07:00",
            close: "21:00"
        },
        Tuesday: {
            hours: "7AM - 9PM",
            open: "07:00",
            close: "21:00"
        },
        Wednesday: {
            hours: "7AM - 9PM",
            open: "07:00",
            close: "21:00"
        },
        Thursday: {
            hours: "7AM - 9PM",
            open: "07:00",
            close: "21:00"
        },
        Friday: {
            hours: "7AM - 9PM",
            open: "07:00",
            close: "21:00"
        },
        Saturday: {
            hours: "7AM - 9PM",
            open: "07:00",
            close: "21:00"
        }
    },
    {
        shopName:"Shilla Patisserie Café",
        lat: 38.8367798932543,
        lng: -77.4339432752115,
        city: "Centreville",
        zip: "20121",
        food: 'y',
        dessert: 'y',
        games: 'n',
        Sunday: {
            hours: "8AM - 9PM",
            open: "08:00",
            close: "21:00"
        },
        Monday: {
            hours: "8AM - 9PM",
            open: "08:00",
            close: "21:00"
        },
        Tuesday: {
            hours: "8AM - 9PM",
            open: "08:00",
            close: "21:00"
        },
        Wednesday: {
            hours: "8AM - 9PM",
            open: "08:00",
            close: "21:00"
        },
        Thursday: {
            hours: "8AM - 9PM",
            open: "08:00",
            close: "21:00"
        },
        Friday: {
            hours: "8AM - 10PM",
            open: "08:00",
            close: "22:00"
        },
        Saturday: {
            hours: "8AM - 10PM",
            open: "08:00",
            close: "22:00"
        }
    },
    {
        shopName:"Shilla Bakery & Café",
        lat: 38.8960492938715,
        lng: -77.4264649877699,
        city: "Chantilly",
        zip: "20151",
        food: 'y',
        dessert: 'y',
        games: 'n',
        Sunday: {
            hours: "7AM - 10PM",
            open: "07:00",
            close: "22:00"
        },
        Monday: {
            hours: "7AM - 10PM",
            open: "07:00",
            close: "22:00"
        },
        Tuesday: {
            hours: "7AM - 10PM",
            open: "07:00",
            close: "22:00"
        },
        Wednesday: {
            hours: "7AM - 10PM",
            open: "07:00",
            close: "22:00"
        },
        Thursday: {
            hours: "7AM - 10PM",
            open: "07:00",
            close: "22:00"
        },
        Friday: {
            hours: "7AM - 10PM",
            open: "07:00",
            close: "22:00"
        },
        Saturday: {
            hours: "7AM - 10PM",
            open: "07:00",
            close: "22:00"
        }
    },
    {
        shopName:"Shilla Bakery & Café",
        lat: 38.9176717434455,
        lng: -77.2213634349418,
        city: "McLean",
        zip: "22102",
        food: 'y',
        dessert: 'y',
        games: 'n',
        Sunday: {
            hours: "11AM - 7PM",
            open: "11:00",
            close: "19:00"
        },
        Monday: {
            hours: "10:30AM - 8PM",
            open: "10:30",
            close: "20:00"
        },
        Tuesday: {
            hours: "10:30AM - 8PM",
            open: "10:30",
            close: "20:00"
        },
        Wednesday: {
            hours: "10:30AM - 8PM",
            open: "10:30",
            close: "20:00"
        },
        Thursday: {
            hours: "10:30AM - 8PM",
            open: "10:30",
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
        shopName: "Smash\'D Creamery",
        lat: 38.846817654847214,
        lng: -77.30557784296168, 
        city: "Fairfax",
        zip: "22030",
        food: 'n',
        dessert: 'y',
        games: 'y',
        Sunday: {
            hours: "3PM - 9PM",
            open: "15:00",
            close: "21:00"
        },
        Monday: {
            hours: "5:30PM - 9PM",
            open: "17:30",
            close: "21:00"
        },
        Tuesday: {
            hours: "Closed for today",
            open: "Closed for today",
            close: "Closed for today"
        },
        Wednesday: {
            hours: "5:30PM - 9PM",
            open: "17:30",
            close: "21:00"
        },
        Thursday: {
            hours: "5:30PM - 9PM",
            open: "17:30",
            close: "21:00"
        },
        Friday: {
            hours: "3PM - 10PM",
            open: "15:00",
            close: "22:00"
        },
        Saturday: {
            hours: "3PM - 10PM",
            open: "15:00",
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
        shopName:"Sol Tea M",
        lat: 38.637981985322604, 
        lng: -77.29974897681942,
        city: "Woodbridge",
        zip: "22192",
        food: 'n',
        dessert: 'y',
        games: 'y',
        Sunday: {
            hours: "12PM - 9PM",
            open: "12:00",
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
        shopName:"Spill the Tea",
        lat: 38.8125784050187,
        lng: -77.053902386271,
        city: "Alexandria",
        zip: "22314",
        food: 'y',
        dessert: 'n',
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
            hours: "11AM - 7PM",
            open: "11:00",
            close: "19:00"
        },
        Friday: {
            hours: "11AM - 7PM",
            open: "11:00",
            close: "19:00"
        },
        Saturday: {
            hours: "11AM - 7PM",
            open: "11:00",
            close: "19:00"
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
        shopName:"Tan Cha",
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
            hours: "Closed for today",
            open: "Closed for today",
            close: "Closed for today"
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
            hours: "9AM - 10PM",
            open: "09:00",
            close: "22:00"
        },
        Tuesday: {
            hours: "9AM - 10PM",
            open: "09:00",
            close: "22:00"
        },
        Wednesday: {
            hours: "9AM - 10PM",
            open: "09:00",
            close: "22:00"
        },
        Thursday: {
            hours: "9AM - 8PM",
            open: "09:00",
            close: "20:00"
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
            hours: "9AM - 8PM",
            open: "09:00",
            close: "20:00"
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
            hours: "9AM - 9PM",
            open: "09:00",
            close: "21:00"
        },
        Saturday: {
            hours: "9AM - 9PM",
            open: "09:00",
            close: "21:00"
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
            hours: "7AM - 8PM",
            open: "07:00",
            close: "20:00"
        },
        Monday: {
            hours: "7AM - 8PM",
            open: "07:00",
            close: "20:00"
        },
        Tuesday: {
            hours: "7AM - 8PM",
            open: "07:00",
            close: "20:00"
        },
        Wednesday: {
            hours: "7AM - 8PM",
            open: "07:00",
            close: "20:00"
        },
        Thursday: {
            hours: "7AM - 8PM",
            open: "07:00",
            close: "20:00"
        },
        Friday: {
            hours: "7AM - 9PM",
            open: "07:00",
            close: "21:00"
        },
        Saturday: {
            hours: "7AM - 9PM",
            open: "07:00",
            close: "21:00"
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
        shopName:"Teahouse",
        lat: 38.9361962807613,
        lng: -77.5402914974309,
        city: "Chantilly",
        zip: "20152",
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
        shopName:"Teas\'n You",
        lat: 38.914049442404,
        lng: -77.2227302222651,
        city: "Vienna",
        zip: "22182",
        food: 'y',
        dessert: 'y',
        games: 'y',
        Sunday: {
            hours: "12PM - 8PM",
            open: "12:00",
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
            hours: "12PM - 9PM",
            open: "12:00",
            close: "21:00"
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
        shopName:"Tsaocaa (Tsaocha)",
        lat: 39.03575436682891, 
        lng: -77.50054025889666,
        city: "Ashburn",
        zip: "20147",
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
            hours: "11AM - 10PM",
            open: "11:00",
            close: "22:00"
        }
    },
    {
        shopName:"Unitea Café",
        lat: 39.11557919955,
        lng: -77.5653093968494,
        city: "Leesburg",
        zip: "20176",
        food: 'y',
        dessert: 'y',
        games: 'n',
        Sunday: {
            hours: "11AM - 6PM",
            open: "11:00",
            close: "18:00"
        },
        Monday: {
            hours: "Closed for today",
            open: "Closed for today",
            close: "Closed for today"
        },
        Tuesday: {
            hours: "Closed for today",
            open: "Closed for today",
            close: "Closed for today"
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
            hours: "11PM - 9PM",
            open: "11:00",
            close: "21:00"
        }
    },
    {
        shopName:"Vessel Tea",
        lat: 38.65083797328173, 
        lng: -77.31420472264017,
        city: "Woodbridge",
        zip: "22193",
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
        lat: 38.874170443744,
        lng: -77.1551068734337,
        city: "Falls Church",
        zip: "22044",
        food: 'y',
        dessert: 'n',
        games: 'n',
        Sunday: {
            hours: "10:30AM - 10PM",
            open: "10:30",
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
            hours: "10:30AM - 10PM",
            open: "10:30",
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
        shopName:"Yagut St.",
        lat: 38.811343505323,
        lng: -77.0446230296442,
        city: "Alexandria",
        zip: "22314",
        food: 'y',
        dessert: 'y',
        games: 'n',
        Sunday: {
            hours: "11AM - 8PM",
            open: "11:00",
            close: "20:00"
        },
        Monday: {
            hours: "Closed for today",
            open: "Closed for today",
            close: "Closed for today"
        },
        Tuesday: {
            hours: "Closed for today",
            open: "Closed for today",
            close: "Closed for today"
        },
        Wednesday: {
            hours: "Closed for today",
            open: "Closed for today",
            close: "Closed for today"
        },
        Thursday: {
            hours: "11AM - 8PM",
            open: "11:00",
            close: "20:00"
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
        shopName:"Yi Fang Taiwan Fruit Tea",
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
var userSearch = document.getElementById("searchQuery");
var shopInfo;
var infoObj = [];
var filters = document.getElementsByTagName("input");
var filterUsed = false;
var filterMatch = false;
var duplicateFound = false;

userSearch.addEventListener("keypress", function (e){ //check if user used enter key instead of clicking the button
    if(e.key === 'Enter'){
        searchResults();
        closeInfoWindow();
    }
});

function initMap() { 
    var directionsURL = "https://www.google.com/maps/search/?api=1&query=";
    var splitShopName = [];
    var shopOpenInfo;
    var shopClosedInfo;
    map = new google.maps.Map(document.getElementById("map"), mapDetails);

    for(let i = 0; i < shops.length; i++){ //add markers for all 
        var shopOpeningDate = new Date(today.getFullYear(), today.getMonth(), today.getDate(), shops[i][weekdays[currentWeekday]].open.substring(0, 2), shops[i][weekdays[currentWeekday]].open.substring(3));
        var shopClosingDate = new Date(today.getFullYear(), today.getMonth(), today.getDate(), shops[i][weekdays[currentWeekday]].close.substring(0, 2), shops[i][weekdays[currentWeekday]].close.substring(3));
        var openDayOfMonth = today.getDate();
        var closeDayOfMonth = today.getDate();
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

        const marker = new google.maps.Marker({
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

            map.setZoom(15);
            map.setCenter(marker.getPosition());
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

    var query = document.getElementById("searchQuery").value;
    query = query.trim().toUpperCase(); 
    var filterChecked = false;
    var tempShopsArr = []; //used for filtered results
    var tempMarkerArr = []; //used for filtered results
    var resultCount = 0;

    map.setZoom(9);

    for(let i = 0; i < shops.length; i++){ //reset markers for new search so they appear
        markerArray[i].setVisible(true);
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
            var shopOpeningDate = new Date(today.getFullYear(), today.getMonth(), today.getDate(), shops[i][weekdays[currentWeekday]].open.substring(0, 2), shops[i][weekdays[currentWeekday]].open.substring(3));
            var shopClosingDate = new Date(today.getFullYear(), today.getMonth(), today.getDate(), shops[i][weekdays[currentWeekday]].close.substring(0, 2), shops[i][weekdays[currentWeekday]].close.substring(3));
            var openDayOfMonth = today.getDate();
            var closeDayOfMonth = today.getDate();
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
                markerArray[i].setVisible(false);
            }

            filterMatch = false; //reset for next iteration
        } //end outer for

        filterChecked = true;

    } //end filter match check

    if(filterChecked == true) { //only execute if a filter was used
        
        for(let i = 0; i < tempShopsArr.length; i++){ //check for matches
          if(!(tempShopsArr[i].shopName.toUpperCase().includes(query)|| tempShopsArr[i].city.toUpperCase().includes(query) || query == tempShopsArr[i].zip)){ //if they don't match, hide the pin
                tempMarkerArr[i].setVisible(false);
            }
            else { //if there is a match
                map.panTo(tempMarkerArr[i].getPosition()); //pan to area where results are
                resultCount++; 
            }
        } //end for    
        filterUsed = false;
    }
    
    else { //no filters used
        
        for(let i = 0; i < shops.length; i++){ //check for matches
            if(!query.trim() && query != null){ //if there is an empty or null search, show all pins
                markerArray[i].setVisible(true);
                resultCount = shops.length;
                break;
            }
            else if(!(shops[i].shopName.toUpperCase().includes(query) || shops[i].city.toUpperCase().includes(query) || query == shops[i].zip)){ //if they don't match, hide the pin
                markerArray[i].setVisible(false);
            }
            else { //if there is a match
                map.panTo(markerArray[i].getPosition()); //pan to area where results are
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
        markerArray[i].setVisible(false);
    }
    
    var query = document.getElementById("searchQuery").value;
    query = query.trim().toUpperCase();
    var randomShop;
    var tempSurpriseShops = []; //hold list of shops to choose from if there is a zip code/city/filter specified 
    var tempSurpriseMarkerArr = [];
    var mismatchShops = []; //shops that don't meet reqs
    
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
            var shopOpeningDate = new Date(today.getFullYear(), today.getMonth(), today.getDate(), shops[i][weekdays[currentWeekday]].open.substring(0, 2), shops[i][weekdays[currentWeekday]].open.substring(3));
            var closeDayOfMonth = today.getDate();
            closeDayOfMonth += shops[i][weekdays[currentWeekday]].close.startsWith("0") ? 1 : 0; //if it closes between 12AM and 9AM
            var shopClosingDate = new Date(today.getFullYear(), today.getMonth(), closeDayOfMonth, shops[i][weekdays[currentWeekday]].close.substring(0, 2), shops[i][weekdays[currentWeekday]].close.substring(3));
            
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
                    tempSurpriseMarkerArr[i].setVisible(false);
                }
                else {
                    tempSurpriseMarkerArr[i].setVisible(true);
                    map.panTo(tempSurpriseMarkerArr[i].getPosition());
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
                markerArray[i].setVisible(false);
            }
            else {
                markerArray[i].setVisible(true);
                map.panTo(markerArray[i].getPosition());
                map.setZoom(14);
                break;
            }
        }

        document.getElementById("results").innerHTML = ""; //it will always be one shop, so it can stay blank
    } 
} //end surprise Shop