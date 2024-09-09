let batteryCharge = 0;

do {
  console.log("Battery charge: " + batteryCharge + "%");
  batteryCharge += 10; // Increment charge by 10%

  if (batteryCharge === 100) {
    console.log("Battery fully charged!");
  }
} while (batteryCharge < 100);

