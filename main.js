let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly = true;
let runnersAge = 19;

if ((runnersAge > 18) && (registeredEarly)){
  raceNumber += 1000;
}

if ((runnersAge > 18) && (registeredEarly)){
  console.log(`You will race at 9:30, and your race number is: ${raceNumber}.`);
} else if ((runnersAge >= 18) && (!registeredEarly)) {
	console.log(`You will race at 11:00 am, and your race number is: ${raceNumber}.`);
} else if((runnersAge < 18) && (!registeredEarly)){
  console.log(`You will race at 12:30pm and your race number is: ${raceNumber}`);
} else {
  console.log('please see the registration desk');
}
