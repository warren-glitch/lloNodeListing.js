// Node class to represent each element in the linked list
class Node {
    constructor(value) {
        this.value = value;  // The data the node holds
        this.next = null;    // The next node in the list, initialized to null
    }
}

// LinkedList class to manage the list operations
class LinkedList {
    constructor() {
        this.head = null;    // The first node in the list
        this.size = 0;       // Tracks the number of nodes in the list
    }

    // Append a new node to the linked list
    append(value) {
        let newNode = new Node(value);  // Create a new node with the given value
        
        // If the list is empty, the new node becomes the head
        if (this.head === null) {
            this.head = newNode;
        } else {
            // Traverse the list to find the last node
            let current = this.head;
            while (current.next !== null) {
                current = current.next;  // Move to the next node
            }
            current.next = newNode;  // Set the last node's next pointer to the new node
        }

        this.size++;  // Increase the size of the list
        this.print(); // Print the list after appending the new node
    }

    // Print the current linked list
    print() {
        let current = this.head;
        let listValues = [];

        // Traverse the list and collect the node values
        while (current !== null) {
            listValues.push(current.value);
            current = current.next;  // Move to the next node
        }

        console.log(listValues.join(" -> "));  // Display the values in a readable format
    }
}

// Create a new linked list
let myList = new LinkedList();

// Append items to the list
myList.append("Data Structures - Array");
myList.append("Variable Type - Integer");
myList.append("Sorting Algorithm - Bubble Sort");
