function randomRange(myMin, myMax) {
    // Only change code below this line
    return Math.floor(Math.random()*(myMax-myMin+1))+myMin
    // Only change code above this line
  }
  let a=randomRange(3,8)
  console.log(a);