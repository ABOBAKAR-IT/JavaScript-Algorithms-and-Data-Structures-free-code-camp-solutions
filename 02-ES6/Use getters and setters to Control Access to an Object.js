// Only change code below this line
class Thermostat{
    constructor(temp){
      this.temperature2=5/9 *(temp-32)
      
    }
     // getter
    get temperature() {
      return this.temperature2;
    }
    // setter
    set temperature(temp) {
       this.temperature2=temp 
    }
  }
  // Only change code above this line
  
  const thermos = new Thermostat(76); // Setting in Fahrenheit scale
  let temp = thermos.temperature; // 24.44 in Celsius
  thermos.temperature = 26;
  temp = thermos.temperature; // 26 in Celsius