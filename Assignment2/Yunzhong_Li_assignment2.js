/*
Question 1
Given the array, implement a function for generating a new array which doubles the quantity and price in each object.
Given the array, implement a function for generating a new array which contains item quantity > 2 and price > 300 only.
Given the array, implement a function to calculate the total value of the items.
*/

const itemsObject = [
  { quantity: 1, price: 200 },
  { quantity: 3, price: 350 },
  { quantity: 5, price: 400 },
];
// forEach, alter the original array
// const items_1 = itemsObject.forEach((ele) => {
//   ele.price = 2 * ele.price;
//   ele.quantity = 2 * ele.quantity;
// });
// console.log(items_1);

// map, generate new array based on the original array
const items_1 = itemsObject.map((ele) => {
  let new_ele = new Object(ele);
  for (const prop in new_ele) {
    new_ele[prop] = ele[prop] * 2;
  }
  return new_ele;
});
console.log(items_1);

const items_2 = itemsObject.filter((ele) => {
  return ele.quantity > 2 && ele.price > 300;
});
console.log(items_2);

const items_3 = itemsObject.reduce((acc, ele) => {
  return acc + ele.quantity * ele.price;
}, 0);
console.log(items_3);

/*
Question 2
Given the string, implement a function to remove all the non-alphabet characters and extra space in the string and convert the string to all lowercase.
*/

const string =
  " Perhaps The Easiest-to-understand   Case   For Reduce Is   To Return The Sum Of  All The Elements In  An Array  ";

const expectedReturnString =
  "perhaps the easiest to understand case for reduce is to return the sum of all the elements in an array";

const convert_str = string
  .toLowerCase()
  .trim()
  .split(/\s+/)
  .join(" ")
  .replace(/[^a-zA-Z]/g, " "); // g, A global match finds all matches (compared to only the first).
console.log(convert_str);
console.log(convert_str == expectedReturnString);
/*
Question 3
Implement a function to merge two arrays of objects on uuid, but first has uuid and name, second has uuid and role. With the not existing property, fill with null. Sort according to uuid after merge.
*/

const first = [
  { uuid: 2, name: "test" },
  { uuid: 5, name: "test5" },
  { uuid: 3, name: "test3" },
];

const second = [
  { uuid: 6, role: "pm" },
  { uuid: 4, role: "engineer" },
  { uuid: 1, role: "manager" },
  { uuid: 2, role: "associate" },
];

const expectedReturnArray = [
  { uuid: 1, role: "manager", name: null },
  { uuid: 2, role: "associate", name: "test" },
  { uuid: 3, role: null, name: "test3" },
  { uuid: 4, role: "engineer", name: null },
  { uuid: 5, role: null, name: "test5" },
  { uuid: 6, role: "pm", name: null },
];

const tempArray = first.concat(second).sort((a, b) => {
  return a.uuid - b.uuid;
});
console.log(tempArray);

let mergeArray = [];
for (let i = 0; i < tempArray.length; i++) {
  const obj = { uuid: null, role: null, name: null };
  obj["uuid"] = tempArray[i]["uuid"];
  if (
    i < tempArray.length - 1 &&
    tempArray[i]["uuid"] == tempArray[i + 1]["uuid"]
  ) {
    obj["name"] = tempArray[i]["name"];
    obj["role"] = tempArray[i + 1]["role"];
    i++;
  } else {
    obj["role"] =
      tempArray[i]["role"] != undefined ? tempArray[i]["role"] : null;
    obj["name"] =
      tempArray[i]["name"] != undefined ? tempArray[i]["name"] : null;
  }
  mergeArray.push(obj);
}
console.log(mergeArray);
