function checkSpeed(speed) {
    const speedLimit = 70;
    const kmPerPoint = 5;

    if (speed < speedLimit) {
        console.log("Ok");
    } else {
        let points = Math.floor((speed - speedLimit) / kmPerPoint);
        console.log(`Points: ${points}`);

        if (points > 12) {
            console.log("License suspended");
        }
    }
}

// Example Usage
let speed = prompt("Enter car speed:");
speed = parseInt(speed);

if (speed >= 0) {
    checkSpeed(speed);
} else {
    console.log("Invalid input! Speed should be a positive number.");
}
