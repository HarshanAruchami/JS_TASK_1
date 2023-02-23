function gender() {
    alert("Checking the person M/m or F/m using If else statement");
    let nom = prompt("What's your name?");
    let gen = prompt("What's your gender? Male[M/m] || Female[F/f]");

    if (gen == "M" || gen == "m") {
        alert(nom + "  Gender Is Male ");
    }
    else if (gen == "F" || gen == "f") {
        alert(nom + "  Gender  is Female ");
    }
    else {
        alert("Please enter a valid Data")
    }
}

