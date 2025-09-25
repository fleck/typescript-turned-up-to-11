import { document, HTMLButtonElement, HTMLInputElement } from "./dom-setup.ts";

const badButton = document.getElementById("myButton") as HTMLButtonElement;
badButton.click();

const goodButton = document.getElementById("myButton");
if (goodButton instanceof HTMLButtonElement) {
  goodButton.click();
}

const badUser = JSON.parse('{"name": "John"}') as {
  name: string;
  age: number;
};

console.log(badUser.age.toFixed(2));

const jsonData: unknown = JSON.parse('{"name": "John"}');
if (
  typeof jsonData === "object" &&
  jsonData !== null &&
  "age" in jsonData &&
  typeof jsonData.age === "number"
) {
  console.log(jsonData.age.toFixed(2));
}

function badHandler(event: Event) {
  const input = event.target as HTMLInputElement;
  console.log(input.value);
}

function goodHandler(event: Event) {
  if (event.target instanceof HTMLInputElement) {
    console.log(event.target.value);
  }
}
