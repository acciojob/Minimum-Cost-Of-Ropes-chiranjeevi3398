function calculateMinCost() {
  //your code here
  // Retrieve the input string from the input element
const input = document.getElementById('ropes-input').value;

// Parse the input string into an array of integers
const ropeLengths = input.split(',').map(Number);

// Sort the array in ascending order
ropeLengths.sort((a, b) => a - b);

// Initialize the total cost
let totalCost = 0;

// Iterate through the sorted array and calculate the total cost
while (ropeLengths.length > 1) {
  const sum = ropeLengths[0] + ropeLengths[1]; // Sum of two smallest rope lengths
  totalCost += sum; // Add the sum to the total cost
  ropeLengths.splice(0, 2, sum); // Replace the two ropes with their sum in the array
}

// Display the minimum cost inside the result div
document.getElementById('result').textContent = totalCost.toString();

  
  
}  
