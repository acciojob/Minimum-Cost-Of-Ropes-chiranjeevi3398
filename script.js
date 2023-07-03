function calculateMinCost(ropes){
  //your code here
 
  // Convert the input string to an array of numbers
  const lengths = ropes.split(",").map(Number);

  // Create a min heap to store the rope lengths
  const heap = new MinHeap();
  
  // Insert the rope lengths into the min heap
  for (let i = 0; i < lengths.length; i++) {
    heap.insert(lengths[i]);
  }

  let totalCost = 0;

  // Combine the ropes until only one rope remains in the heap
  while (heap.size() > 1) {
    // Remove the two smallest ropes from the heap
    const rope1 = heap.removeMin();
    const rope2 = heap.removeMin();

    // Calculate the cost of connecting the ropes
    const cost = rope1 + rope2;

    // Add the cost to the total cost
    totalCost += cost;

    // Insert the combined rope length back into the heap
    heap.insert(cost);
  }

  return totalCost;
}


