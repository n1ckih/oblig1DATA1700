// Making array where we will store our orders
var ticketOrders = [];

// Function for the button to check if input text is right
function searchFail() {
    var nrOfTickets = document.getElementById("nrOfTickets").value;
    var name = document.getElementById("name").value;
    var surname = document.getElementById("surname").value;
    var phonenr = document.getElementById("phonenr").value;
    var email = document.getElementById("email").value;

    // Perform input validation
    document.getElementById("errorNumbers").textContent = "";
    document.getElementById("needToWriteSomething").textContent = "";
    document.getElementById("needToWriteSomething2").textContent = "";
    document.getElementById("needNumber").textContent = "";
    document.getElementById("validEmail").textContent = "";

    if (isNaN(nrOfTickets) || nrOfTickets === "") { // check if input is not a number, source: https://www.w3schools.com/jsref/jsref_isnan.asp#:~:text=Description,a%20number%20before%20testing%20it.
        document.getElementById("errorNumbers").textContent = "Du må velge antall biletter.";
    }
    if (name === "") {
        document.getElementById("needToWriteSomething").textContent = "Navnet må fylles ut.";
    }
    if (surname === "") {
        document.getElementById("needToWriteSomething2").textContent = "Etternavnet må fylles ut.";
    }
    if (!/^\d{8}$/.test(phonenr)) { // check if phone nr is correct (has 8 digits)
        document.getElementById("needNumber").textContent = "Skriv inn riktig mobilnummer.";
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { // check if email is correct
        document.getElementById("validEmail").textContent = "Skriv inn riktig e-post.";
    }

    // Clear input fields after successful input
    if (isNaN(nrOfTickets) || nrOfTickets === "" || name === "" || surname === "" || !/^\d{8}$/.test(phonenr) || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        // Do not clear if any validation fails
    } else {
        // Create a ticket order object
        var ticketOrder = {
            nrOfTickets: nrOfTickets,
            name: name,
            surname: surname,
            phonenr: phonenr,
            email: email
        };

        // Push filled form into the ticketOrders array
        ticketOrders.push(ticketOrder);

        // Clear input fields
        document.getElementById("nrOfTickets").value = "";
        document.getElementById("name").value = "";
        document.getElementById("surname").value = "";
        document.getElementById("phonenr").value = "";
        document.getElementById("email").value = "";

        // Update ticket list
        displayTicketOrders();
    }
}

// Function to show orders
function displayTicketOrders() {
    var output = "<table><tr><th>Navn</th><th>Etternavn</th><th>Antall billetter</th><th>Telefonnr</th><th>E-post</th></tr>";

    // Loop through each ticket order in the ticketOrders array
    for (var i = 0; i < ticketOrders.length; i++) {
        output += "<tr>";
        output += "<td>" + ticketOrders[i].name + "</td>";
        output += "<td>" + ticketOrders[i].surname + "</td>";
        output += "<td>" + ticketOrders[i].nrOfTickets + "</td>";
        output += "<td>" + ticketOrders[i].phonenr + "</td>";
        output += "<td>" + ticketOrders[i].email + "</td>";
        output += "</tr>";
    }

    output += "</table>";

    // Display the order table in the HTML
    document.getElementById("ticketOrderTable").innerHTML = output;
}

// Function to delete all ticket orders
function deleteAllOrders() {
    // Clear the ticketOrders array
    ticketOrders = [];

    // Update ticket list display
    displayTicketOrders();
}