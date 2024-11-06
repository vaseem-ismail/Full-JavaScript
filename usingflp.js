let section = [
    { mySelf:"Mohamed", sec : "A"},
    { mySelf:"Vaseem", sec : "A"},
    { mySelf:"Morin", sec : "C"},
    { mySelf:"Sr", sec : "C"}
];
   section.forEach(student => {

       if(student.sec === "C"){
         console.log(`Name: ${section.mySelf} is in section C`);
       }
   });

//    let section = [
//     { mySelf: "Mohamed", sec: "A" },
//     { mySelf: "Vaseem", sec: "A" },
//     { mySelf: "Morin", sec: "C" },
//     { mySelf: "Sr", sec: "C" }
// ];

// // Using forEach to print names of students in section C
// section.forEach(student => {
//     if (student.sec === "C") {
//         console.log(`Name: ${student.mySelf} is in section C`);
//     }
// });
