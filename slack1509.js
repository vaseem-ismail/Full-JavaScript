//1
let laps=10;
let i=0;
  while(i<=laps){
    console.log(i,"Lap");
    i++;
  }


//2
let maxCharge=100;
let minCharge=20;
  while(maxCharge>minCharge){
    console.log("Remaining Battery level:",maxCharge);
    maxCharge=maxCharge-5;
  }
  console.log("Battery is low");


//3
function randomDirection(direction){
    switch(direction){
        case "North":
            console.log("North Direction");
            break;
        case "South":
            console.log("South Direction");
            break;
        case "West":
            console.log("West Direction");
            break;
        case "East":
            console.log("East Direction");
            break;
        default:
            console.log("Enter a valid Direction");
            break;
    }
}
randomDirection("East");


//4
let currentHeight=1000;
let landingHeight=0;
     while(currentHeight>landingHeight){
        console.log("The current height",currentHeight);
        currentHeight=currentHeight-10;
     }
     console.log("Flight Arrived");


//5
function userDestination(place){
        switch(place){
            case "Dubai":
                console.log("1st Runway");
                break;
            case "London":
                console.log("2nd Runway");
                break;
            case "Russia":
                console.log("3rd Runway");
                break;
            case "USA":
                console.log("4th Runway");
                break;
            default:
                console.log("Please choose correct Destination")
                break;
        }
}
userDestination("Russia");


//6
let targetAltitude = 1000;
let intervals = 10;
let altitudeIncrement = targetAltitude / intervals;//100 constant for every loop
let currentAltitude = 0;
console.log("Starting the climb...");
for (let i = 1; i <= intervals; i++) {
  currentAltitude = currentAltitude + altitudeIncrement;
  console.log(`Interval ${i}: Current altitude is ${currentAltitude} feet`);
}
console.log("Target altitude of 1000 feet reached!");