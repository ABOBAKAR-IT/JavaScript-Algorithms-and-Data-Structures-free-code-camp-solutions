// Only change code below this line
class Thermostat{
    constructor(temp){
      this.temperature=5/9 *(temp-32)
      
    }
     // getter
    get Celsius() {
      return this.temperature;
    }
    // setter
    set Celsius(temp) {
       this.temperature=temp*9.0/5+32
    }
  }
  // Only change code above this line
  
  const thermos = new Thermostat(76); // Setting in Fahrenheit scale
  let temp = thermos.temperature; // 24.44 in Celsius
  thermos.temperature = 26;
  temp = thermos.temperature; // 26 in Celsius