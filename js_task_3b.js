function gender() {
    alert("Checking the person M/m or F/m using switch statement")
    let nom = prompt("What's your name?");
    let gen = prompt("What's your gender? Male[M/m] || Female[F/f]");

    switch (gen) {
        case "m":
        case "M":
            alert(nom + "  Gender is  Male ");
            break;
        case "f":
        case "F":
            alert(nom + "  Gender is Female ");
            break;
        default:
            alert("Please enter valid data");
    }
}

