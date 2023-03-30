
/*  function */
const calculateBMI = (height, weight) => {
  return (weight / height ** 2)
}

const marksMass = 78; 
const marksHeight = 1.69; 
const jonhMass = 92;
const jonhHeight= 1.95

const marksBMI =  calculateBMI(marksHeight, marksMass);
const jonhBMI = calculateBMI(jonhHeight, jonhMass);
 
if(marksBMI > jonhBMI){
  console.log(`Mark's (${marksBMI}) BMI is higher than John's (${jonhBMI})!`)
}
else {
  console.log(`John's (${jonhBMI}) BMI is higher than Mark's (${marksBMI})`)
}
