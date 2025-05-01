// Login Function
function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === "admin" && password === "1234") {
        window.location.href = "admin.html"; // Redirect to admin page
    } else {
        alert("Invalid username or password");
    }
}

// Calculator Function
function calculateShare() {
    let amount = parseFloat(document.getElementById("amount").value);
    if (isNaN(amount) || amount <= 0) {
        document.getElementById("result").innerHTML = "Please enter a valid amount.";
        return;
    }

    let shares = {
        "Hendri": 0.2,
        "Sepp": 0.266,
        "Jaakob": 0.266,
        "Birk": 0.266
    };

    let output = "<h3>Shares:</h3><ul>";
    for (let person in shares) {
        output += `<li>${person}: <span class="amount">${(amount * shares[person]).toFixed(2)} €</span></li>`;
    }
    output += "</ul>";
    document.getElementById("result").innerHTML = output;
}
