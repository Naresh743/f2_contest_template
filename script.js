/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log 
  arr.map((objects) => {
    if (objects.profession === "developer") {
      console.log(objects);
    }
  });
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach((objects) => {
    if (objects.profession === "developer") {
      console.log(objects);
    }
  });
}

function addData() {
  //Write your code here, just console.log
  arr.push({ id: 4, name: "tom", age: "21", profession: "developer" });
}

function removeAdmin() {
  //Write your code here, just console.log
  arr = arr.filter((objects) => objects.profession!== "admin");
}

function concatenateArray() {
  //Write your code here, just console.log
  
}
