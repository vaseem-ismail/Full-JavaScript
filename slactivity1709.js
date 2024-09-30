// //Given the array train_departures = [10, 15, 7, 20, 5], where each element represents the departure time of a train in 24-hour format, find the earliest train to depart.
// let depature=[10, 15, 7, 20, 5];
// let early = Math.min(...depature);
// console.log("The Earliest train dapature is",early);


// //Given the array seats = [1, 0, 1, 1, 0, 0, 1, 0], where 1 means a seat is booked and 0 means a seat is available, count the total number of available seats.
// let seats = [1, 0, 1, 1, 0, 0, 1, 0];
// let store = 0;
//     for(i=0;i<=seats.length-1;i++){
//       if(i%2==0){
//           store += 1;
//       }
//     }
//     console.log(store);


// //Given the array soldiers = [120, 300, 250, 180, 150], where each element represents the number of soldiers assigned to different regions, find the region with the highest number of soldiers.
// let soldiers = [120, 300, 250, 180, 150];
// let maxSoldier = Math.max(...soldiers);
// console.log("The maximum number of soldier is",maxSoldier);


// //Given the array populations = [50, 60, 70, 80, 90], where each element represents the population of an Indian state over the last 5 years, calculate the average population.
// let populations = [50, 60, 70, 80, 90];
// let store = 0;
//      for(i = 0; i<=populations.length-1;i++){
//         store += populations[i];
//      }
//      let average = store/populations.length;
//      console.log(average);


// //Given the array water_levels = [30, 50, 20, 40, 60], where each element represents the current water level in a tank, find the tank with the lowest water level.
// let levels = [30, 50, 20, 40, 60];
// let lowerLevel = Math.min(...levels);
// console.log("The water level is",lowerLevel);


// //Given the array days_until_festival = [30, 15, 45, 10, 25], where each element represents the number of days left until an important festival, find the closest upcoming festival.
// let festival = [30, 15, 45, 10, 25];
// let closestFestival = Math.min(...festival);
// console.log("The closest festival in",closestFestival,"days");


//Given the array landing_times = [12, 15, 12, 18, 20], where each element represents the time a helicopter is scheduled to land, check if any two helicopters are scheduled to land at the same time.
let landing_times = [12, 15, 12, 18, 20];
let timing = 0;
    for(let i = 0;i<=landing_times.length-1;i++){
        
    }


// //Given the array temperatures = [75, 80, 72, 85, 90], where each element represents the temperature in a specific region of a forest, identify which regions have temperatures above 80 degrees.
// let temperatures = [75, 80, 72, 85, 90];
//      for(let i = 0;i<=temperatures.length-1;i++){
//         if(temperatures[i]>80){
//             console.log(temperatures[i]);
//         }
//      }


// //Given the array students_per_route = [45, 55, 30, 60, 40], where each element represents the number of students assigned to different bus routes, calculate the total number of buses required if each bus can hold a maximum of 50 students.
// let students_per_route = [45, 55, 30, 60, 40];
// let store = 0;
//   for(let i=0;i<students_per_route.length;i++){
//      store += students_per_route[i];
     
//   }
//   totalBus = store/50;
//      console.log("the total bus required:",Math.ceil(totalBus));