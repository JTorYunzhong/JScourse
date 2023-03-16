/*

Question 1

1. Given the following array and implement the table dynamically(you need to create the table via JavaScript)

2. And then you should implement a form(focus on the logic only, you DON'T need to create the form via JavaScript) for taking the some format input form users(Student Name，Age，Phone,Address). When the user clicks the Add button, the data will be added into the existing table(after the existing data), and the user input in the form should be cleared. 

*/

const tableInfo = {
  tableHeader: ["Student Name", "Age", "Phone", "Address"],
  tableContent: [
    {
      "Student Name": "John",
      Age: 19,
      Phone: "455 - 983 - 0903",
      Address: "123 Ave, San Francisco, CA, 94011",
    },
    {
      "Student Name": "Alex",
      Age: 21,
      Phone: "455 - 983 - 0912",
      Address: "456 Rd, San Francisco, CA, 94012",
    },
    {
      "Student Name": "Josh",
      Age: 22,
      Phone: "455 - 345 - 0912",
      Address: "789 Dr, Newark, CA, 94016",
    },
    {
      "Student Name": "Matt",
      Age: 23,
      Phone: "321 - 345 - 0912",
      Address: "223 Dr, Sunnyvale, CA, 94016",
    },
  ],
};
// prepartion
const table = document.createElement("table");
const thead = document.createElement("thead");
const tbody = document.createElement("tbody");
tbody.id = "tbody";
const thInfo = tableInfo["tableHeader"];
const tcInfo = tableInfo["tableContent"];
const q1 = document.getElementById("q1");

// initial thead
const hRow = document.createElement("tr");
const theadNodes = thInfo.map((ele) => {
  let node = document.createElement("th");
  node.textContent = ele;
  return node;
});
hRow.append(...theadNodes);
thead.appendChild(hRow);

// initial tbody
const createTableRow = (name, age, pho, addr) => {
  let bodyRow = document.createElement("tr");
  let rowName = document.createElement("td");
  rowName.textContent = name;
  let rowAge = document.createElement("td");
  rowAge.textContent = age;
  let rowPho = document.createElement("td");
  rowPho.textContent = pho;
  let rowAddr = document.createElement("td");
  rowAddr.textContent = addr;
  bodyRow.append(rowName, rowAge, rowPho, rowAddr);
  return bodyRow;
};
const tbodyNodes = tcInfo.map(
  ({ "Student Name": name, Age: age, Phone: pho, Address: addr }) => {
    return createTableRow(name, age, pho, addr);
  }
);
tbody.append(...tbodyNodes);
//append nodes
table.append(thead, tbody);
q1.insertBefore(table, q1.firstChild);

//part II
let btn = document.querySelector("#addNew");
// tbody = document.querySelector("#tbody");
btn.onclick = function () {
  let form = document.querySelector("#newSudent");
  let studentInfo = form.value;
  form.value = "";
  studentInfo = studentInfo.split("/");
  if (studentInfo.length == 4) {
    if (
      studentInfo[0].match(/[a-zA-z\s]+/) &&
      studentInfo[1].match(/[0-9]+/) &&
      studentInfo[2].match(/[0-9\s-]{10}/) &&
      studentInfo[3].match(/[0-9A-Za-z/s]+/)
    ) {
      tbody.appendChild(createTableRow(...studentInfo));
      return;
    }
  }
  alert("Invalid input! Please check your format and inut again.");
  return;
};
/*

Question 2
Given the array and generate order list and unordered list dynamically as following:

*/

const list = ["HTML", "JavaScript", "CSS", "React", "Redux", "Java"];
const q2 = document.getElementById("q2");
let ol = document.createElement("ol");
let ul = document.createElement("ul");

const olItems = list.map((ele) => {
  let oli = document.createElement("li");
  oli.textContent = ele;
  return oli;
});
const ulItems = list.map((ele) => {
  let uli = document.createElement("li");
  uli.textContent = ele;
  return uli;
});
ol.append(...olItems);
ul.append(...ulItems);
q2.append(ol, ul);
/*

Question 3
1. Given the array and implement a dropdown list with the following options dynamically 
2. Console the value, when the user select one option

*/

const dropDownList = [
  { value: "", content: "Please select" },
  { value: "newark", content: "Newark" },
  { value: "santaClara", content: "Santa Clara" },
  { value: "unionCity", content: "Union City" },
  { value: "albany", content: "Albany" },
  { value: "dalyCity", content: "Daly City" },
  { value: "sanJose", content: "San Jose" },
];
// part I
const q3 = document.querySelector("#q3");
let dropdown = document.createElement("select");
dropdown.id = "selectCity";
const options = dropDownList.map(({ value, content }) => {
  let option = document.createElement("option");
  option.value = value;
  option.textContent = content;
  return option;
});
dropdown.append(...options);

// part II
dropdown.onchange = () => {
  console.log(dropdown.value);
};
q3.appendChild(dropdown);
