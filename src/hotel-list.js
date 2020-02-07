

const deletehotel = (hotelId) => {
    // We will implement this later
}

const setEditModal = (hotelId) => {
    // Get information about the hotel using hotelId
    const xhttp = new XMLHttpRequest();

    xhttp.open("GET", `http://localhost:5000/hotel/${hotelId}`, false);
    xhttp.send();

    const hotel = JSON.parse(xhttp.responseText);

    const {
        title,
        author,
        publisher,
        publish_date,
        numOfPages
    } = hotel;

    // Filling information about the hotel in the form inside the modal
    document.getElementById('hotelId').value = hotelId;
    document.getElementById('title').value = title;
    //document.getElementById('author').value = author;
   // document.getElementById('publisher').value = publisher;
   // document.getElementById('publish_date').value = publish_date;
  //  document.getElementById('numOfPages').value = numOfPages;

    // Setting up the action url for the hotel
    document.getElementById('editForm').action = `http://localhost:5000/hotel/${hotelId}`;
}

const loadhotels = () => {
    const xhttp = new XMLHttpRequest();

    xhttp.open("GET", "http://localhost:5000/hotels", false);
    xhttp.send();

    const hotels = JSON.parse(xhttp.responseText);

	var  myhotels = JSON.parse(xhttp.responseText);
/*
    for (let hotel of hotels) {
        const x = `
            <div class="col-4">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${hotel.title}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${hotel.hotelId}</h6>

                        <div>Author: ${hotel.author}</div>
                        <div>Publisher: ${hotel.publisher}</div>
                        <div>Number Of Pages: ${hotel.numOfPages}</div>

                        <hr>

                        <button type="button" class="btn btn-danger">Delete</button>
                        <button types="button" class="btn btn-primary" data-toggle="modal"
                            data-target="#edithotelModal" >
                            Edit
                        </button>
                    </div>
                </div>
            </div>
        `

        document.getElementById('hotels').innerHTML = document.getElementById('hotels').innerHTML + x;
    }
*/	
	
}

loadhotels();