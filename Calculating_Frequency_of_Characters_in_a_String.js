function calculateCharFrequency(str) {
  let frequency = {};

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (frequency[char]) {
      frequency[char]++;
    } else {
      frequency[char] = 1;
    }
  }

  return frequency;
}

console.log(calculateCharFrequency("susheel"));

// Output: { s: 2, u: 1, h: 1, e: 2, l: 1 }
