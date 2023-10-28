//Convert Celsius to Fahrenheit
function convertCtoF(celsius) {
  let fahrenheit = (celsius * 9) / 5 + 32;
  console.log(fahrenheit);
  return fahrenheit;
}

convertCtoF(30);

//Reverse a String
function reverseString(str) {
  let reverseWord = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverseWord += str[i];
  }
  return reverseWord;
}

console.log(reverseString("hello"));

// Factorialize a Number
function factorialize(num) {
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
}

console.log(factorialize(5));

// Find the Longest Word in a String
function findLongestWordLength(str) {
  return str.split(" ").sort((a, b) => (a.length > b.length ? -1 : 1))[0]
    .length;
}

console.log(
  findLongestWordLength("The quick brown fox jumped over the lazy dog")
);

// Return Largest Numbers in Arrays
function largestOfFour(arr) {
  let largestArr = [];
  for (let i = 0; i < arr.length; i++) {
    let result = arr[i].sort((a, b) => (a > b ? -1 : 1))[0];
    largestArr.push(result);
  }
  return largestArr;
}

console.log(
  largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1],
  ])
);

//Confirm the Ending
function confirmEnding(str, target) {
  let updateStr = str.toLowerCase();
  let updateTarget = target.toLowerCase();

  let getLength = str.slice(str.length - target.length);
  console.log(getLength);

  if (getLength == updateTarget) {
    return true;
  } else {
    return false;
  }
}

console.log(confirmEnding("Bastian", "n"));

// Repeat a String Repeat a String
function repeatStringNumTimes(str, num) {
  let result = "";
  for (let i = 0; i < num; i++) {
    result += str;
  }
  return result;
}

console.log(repeatStringNumTimes("*", 3));

// Truncate a String
function truncateString(str, num) {
  if (num >= str.length) {
    return str;
  }

  let truncateText = str.slice(0, num);
  return `${truncateText}...`;
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));

//Finder Keepers
function findElement(arr, func) {
  return arr.find((p) => func(p) == true);
}

console.log(findElement([1, 2, 3, 4], (num) => num % 2 === 0));

//Boo who
function booWho(bool) {
  if (bool === true || bool === false) {
    return true;
  } else {
    return false;
  }
}

console.log(booWho(1));

//Title Case a Sentence
function titleCase(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map((w) => w.replace(w[0], w[0].toUpperCase()))
    .join(" ");
}

console.log(titleCase("I'm a little tea pot"));

//Slice and Splice
function frankenSplice(arr1, arr2, n) {
  let temp = arr2.slice();
  let first = temp.slice(0, n);
  let second = temp.splice(n);
  return first.concat(arr1, second);
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));

//Falsy Bouncer
function bouncer(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      result.push(arr[i]);
    }
  }
  return result;
}

console.log(bouncer([7, "ate", "", false, 9]));

//Where do I Belong
function getIndexToIns(arr, num) {
  return arr
    .concat(num)
    .sort((a, b) => (a > b ? 1 : -1))
    .findIndex((e) => e == num);
}

console.log(getIndexToIns([40, 60], 50));

//Mutations
function mutation(arr) {
  let result = [];
  let position1 = arr[0].toLowerCase().split("");
  let position2 = arr[1].toLowerCase().split("");

  for (let i = 0; i < position2.length; i++) {
    let temp = position1.indexOf(position2[i]);
    result.push(temp);
  }
  if (result.includes(-1)) {
    return false;
  } else {
    return true;
  }
}

console.log(mutation(["hello", "hey"]));

//Chunky Monkey
function chunkArrayInGroups(arr = [], size) {
  const newArr = [];
  for (let i = 0; i < arr.length; i += size) {
    console.log(arr[i]);
    let temp = arr.slice(i, i + size);
    console.log(temp);
    newArr.push(temp);
  }
  return newArr;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
