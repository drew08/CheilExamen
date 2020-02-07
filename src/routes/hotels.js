const router = require('express').Router();

var initHotelA = {
	_id :  Math.random().toString(36).substring(7),
	title: "dorado",
	isDone: false,
	precio: "500.000",
	descuento: "20%",
	description: "caribe",
	ciudad: "cartagena",
	tipo: "hotel",
	calificacion: "5"
}

var initHotelB = {
	_id :  Math.random().toString(36).substring(7),
	title: "Bogota",
	isDone: false,
	precio: "100.000.000",
	descuento: "20%",
	description: "caribe",
	ciudad: "Bogota",
	tipo: "hotel",
	calificacion: "5"
}



let hotels = [];

hotels.push(initHotelA);
hotels.push(initHotelB);

router.post('/hotels', (req, res) => {
    const hotel = req.body;
    console.log(hotel + 'test');
    hotels.push(hotel);

   // res.send('hotel is added to the database');     
});

router.get('/hotels', (req, res) => {
    res.json(hotels);
});

router.get('/hotel/:title', (req, res) => {
    // Reading hotelId from the URL
    const title = req.params.title;

    // Searching hotels for the hotelId
    for (let hotel of hotels) {
        if (hotel.title === title) {
            res.json(hotel);
            return;
        }
    }

    // Sending 404 when not found something is a good practice
    res.status(404).send('hotel not found');
});


// Delete hotel
router.delete('/hotels/:id', (req, res, next) => {
	hotels.splice(req.params.id, 1);    
})

// Update Hotel
router.put('/hotels/:id', (req, res, next) => {
    
});

module.exports = router;