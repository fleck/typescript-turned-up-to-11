const data = JSON.parse('{ name: "John", age: 30 }');

console.log(data.name.first);

const firstName: any = data.name.first;

function exampleUnsafeReturn(userInput?: any) {
  return userInput.name.last;
}

console.log(exampleUnsafeReturn());

const notMeantForString = { name: "tim" };

console.log(`${notMeantForString} is a string`);
