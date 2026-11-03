function scrollToServices() {

    document.getElementById("services").scrollIntoView({
        behavior: "smooth"
    });

}


function selectService(serviceName) {

    document.getElementById("service").value = serviceName;

    document.getElementById("booking").scrollIntoView({
        behavior: "smooth"
    });

}


function bookWorker(event) {

    event.preventDefault();


    let name = document.getElementById("name").value;

    let phone = document.getElementById("phone").value;

    let service = document.getElementById("service").value;

    let date = document.getElementById("date").value;

    let problem = document.getElementById("problem").value;


    document.getElementById("confirmation").innerHTML = `

        <div class="success">

            <h2>✅ Booking Confirmed!</h2>

            <br>

            <p>
                Thank you <strong>${name}</strong>.
            </p>

            <p>
                Service: <strong>${service}</strong>
            </p>

            <p>
                Date: <strong>${date}</strong>
            </p>

            <p>
                Problem: <strong>${problem}</strong>
            </p>

            <br>

            <p>
                A worker will contact you soon.
            </p>

        </div>

    `;

}