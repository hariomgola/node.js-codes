// test with the following input in the form of string
let input = "786678"; //786678

// Anagram Code working test by changing the output - backend node.js developer questiuon
const anangram = (str) => {
  // preparing data
  let data = str.split("");
  let half = Math.ceil(data.length / 2);
  let firsthalf = data.splice(0, half);
  let secondhalf = data.splice(-half);

  let sameDataCounter = 0;
  // working with logic
  // Instead of using firsthalf and secondhalf length you can use half since both are same length
  for (let i = 0; i < firsthalf.length; i++) {
    for (let j = 0; j < secondhalf.length; j++) {
      if (
        firsthalf[i] == secondhalf[j] &&
        firsthalf[i] != null &&
        secondhalf[j] != null
      ) {
        firsthalf = firsthalf.removeArrayIndexElement(firsthalf, i);
        secondhalf = secondhalf.removeArrayIndexElement(secondhalf, j);
        sameDataCounter += 1;
      }
    }
  }

  // subtracting the loop from full half units length
  sameDataCounter = half - sameDataCounter;
  return sameDataCounter;
};

// Used this method as array prototyping to remove the element of particular index
Array.prototype.removeArrayIndexElement = function (_Array, _index) {
  let returnArray = [];
  let counter = 0;
  _Array.forEach((element) => {
    if (counter == _index) {
      returnArray.push(null);
      counter += 1;
    } else {
      returnArray.push(element);
      counter += 1;
    }
  });
  //   console.log(returnArray);
  return returnArray;
};

// Invoke the function over here
console.log(anangram(input));
