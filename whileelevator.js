let currentFloor = 0;
let goingUp = true;

while (true) {
  console.log("Elevator is on floor: " + currentFloor);

  if (goingUp) {
    currentFloor++; // Move up
    if (currentFloor === 9) {
      goingUp = false; // Switch direction when reaching the top
    }
  } else {
    currentFloor--; // Move down
    if (currentFloor === 0) {
      console.log("Elevator reached the ground floor.");
      break; // End the loop when reaching the ground floor after round trip
    }
  }
}