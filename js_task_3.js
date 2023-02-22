function gender() {
    let nom = prompt("What's your name?");
    let gen = prompt("What's your gender? Male[M/m] || Female[F/f]");

    if (gen == "M" || gen == "m") {
        alert(nom + "  Gender Male ");
    }
    else if (gen == "F" || gen == "f") {
        alert(nom + "  Gender Female ");
    }
    else {
        alert("Please enter a valid Data")
    }
}

