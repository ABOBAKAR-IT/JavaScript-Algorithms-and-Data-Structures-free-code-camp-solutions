let unRegex = /un./;

// Test cases
console.log(unRegex.test("Let us go on a run.")); // Should match run
console.log(unRegex.test("The sun is out today.")); // Should match sun
console.log(unRegex.test("Coding is a lot of fun.")); // Should match fun
console.log(unRegex.test("Seven days without a pun makes one weak.")); // Should match pun
console.log(unRegex.test("One takes a vow to be a nun.")); // Should match nun
console.log(unRegex.test("She got fired from the hot dog stand for putting her hair in a bun.")); // Should match bun
console.log(unRegex.test("There is a bug in my code.")); // Should not match
console.log(unRegex.test("Catch me if you can.")); // Should not match
