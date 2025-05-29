import { LinkedList } from "./linkedlist.js";

// Create a new LinkedList instance
const list = new LinkedList();

// Add several values to the list
list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

// Print out the entire list as a string
console.log(list.toString());