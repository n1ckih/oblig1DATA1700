function searchFail() {
    var nrOfTickets = document.getElementById("nrOfTickets").value;
    var name = document.getElementById("name").value;
    var surname = document.getElementById("surname").value;
    var phonenr = document.getElementById("phonenr").value;
    var email = document.getElementById("email").value;

    // If the input text is fuilled up cofferctly, this message will appear


    document.getElementById("errorNumbers").textContent = "";
    document.getElementById("needToWriteSomething").textContent = "";
    document.getElementById("needToWriteSomething2").textContent = "";
    document.getElementById("needNumber").textContent = "";
    document.getElementById("validEmail").textContent = "";

    if (isNaN(nrOfTickets) || nrOfTickets === "") {
        document.getElementById("errorNumbers").textContent = "Du må skrive inn tall.";
    }
    if (name === "") {
        document.getElementById("needToWriteSomething").textContent = "Navnet må fylles ut.";
    }
    if (surname === "") {
        document.getElementById("needToWriteSomething2").textContent = "Etternavnet må fylles ut.";
    }
    if (!/^\d{8}$/.test(phonenr)) {
        document.getElementById("needNumber").textContent = "Skriv inn riktig mobilnummer.";
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        document.getElementById("validEmail").textContent = "Skriv inn riktig e-post.";
    }
}
// } catch (error) {
    //switch (error.message) {
        //case "Du må skrive inn tall.":
           // document.getElementById("errorNumbers").textContent = error.message;
           // break;
        //case "Navnet må fylles ut.":
           // document.getElementById("needToWriteSomething").textContent = error.message;
           // break;
        //case "Etternavnet må fylles ut.":
          //  document.getElementById("needToWriteSomething2").textContent = error.message;
           // break;
        //case "Skriv inn riktig mobilnummer.":
           // document.getElementById("needNumber").textContent = error.message;
            //break;
       // case "Skriv inn riktig e-post.":
          //  document.getElementById("validEmail").textContent = error.message;
          //  break;
    //}
//}
