
/*  function */
const calculateBMI = (height, weight) => {
  return (weight / height ** 2)
}

const marksMassData1 = 78; 
const marksHeightData1 = 1.69; 
const jonhMassData1 = 92;
const jonhHeightData1= 1.95

const marksBMIData1 =  calculateBMI(marksHeightData1, marksMassData1);
const jonhBMIData1 = calculateBMI(jonhHeightData1, jonhMassData1);
 
const marksMassData2 = 95; 
const marksHeightData2 = 1.88; 

const jonhMassData2 = 85;
const jonhHeightData2= 1.76;

const marksBMIData2 =  calculateBMI(marksHeightData2, marksMassData2);
const jonhBMIData2 = calculateBMI(jonhHeightData2, jonhMassData2);
 
const markHigherBMID1 = marksBMIData1 > jonhBMIData1;
const markHigherBMID2 = marksBMIData2 > jonhBMIData2;

console.log('Data 1 : markBMI = ', marksBMIData1, ' johnBMI = ',jonhBMIData1, ' is markBMI higher than John ', markHigherBMID1)
console.log('Data 2 : markBMI = ', marksBMIData2, ' johnBMI = ',jonhBMIData2, ' is markBMI higher than John ', markHigherBMID2)

// with  out function
//const marksBMI =  marksMassData1 / marksMassData1 ** 2; 
//const jonhBMI = jonhMassData1 / jonhMassData1 ** 2



