type ArrayOfNumberString = Array<[number, string]>
type ArrayOfStringNumber = Array<[string, number]>

interface Obj {
  [key: string]: number;
}

function compareNames(a: [number, string], b: [number, string]): number {
  if (a[1] > b[1]) return 1
  if (a[1] < b[1]) return -1
  return 0
}

function updateInventory(arr1: ArrayOfNumberString, arr2: ArrayOfNumberString): ArrayOfNumberString {

  const obj1: Obj = Object.fromEntries(arr1.map(([key,value]) => [value,key]))
  const obj2: Obj = Object.fromEntries(arr2.map(([key,value]) => [value,key]))

  for (let item in obj2) {
      if (Reflect.has(obj1, item)) {
          obj1[item] += obj2[item]
      } else {
          obj1[item] = obj2[item]
      }
  }

  return Object.entries(obj1)
    .map(([key, value]) => <[number, string]>[value, key])
    .sort(compareNames);
}

// Example inventory lists
var curInv: ArrayOfNumberString = [
  [21, "Bowling Ball"],
  [2, "Dirty Sock"],
  [1, "Hair Pin"],
  [5, "Microphone"]
];

var newInv: ArrayOfNumberString = [
  [2, "Hair Pin"],
  [3, "Half-Eaten Apple"],
  [67, "Bowling Ball"],
  [7, "Toothpaste"]
];

console.log(updateInventory(curInv, newInv))

