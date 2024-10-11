function speedDetector(speed) {
    const speedLimit = 70;
    const dimcalc = 5;

    if (speed <= speedLimit) {
        console.log("Ok"); //returns ok if below speedlimit
        alert("Ok");
    }
    else {
        const dimeritPoints = Math.floor((speed - speedLimit) / dimcalc);
        if (dimeritPoints > 12) {
        console.log("License suspended"); //above 12 dimerit points suspends license
        alert("License suspended");
        }
        else {
            console.log (`Points: ${dimeritPoints}`);
            alert(`Points: ${dimeritPoints}`);
        }
    }
}
    let speed = prompt("Input speed in km/h:");
    speed = Number(speed); // speed should be a number
    if (speed < 0 || isNaN(speed)) {
        console.log ("Invalid input. Please enter a valid speed:");
        alert("Invalid input. Please enter a valid speed.")
    }
    else {
        speedDetector(speed);
    }
    checkspeed();
