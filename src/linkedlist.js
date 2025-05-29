import { Node } from "./node.js";

// LinkedList class managing the entire list
export class LinkedList {
    constructor() {
        this.headNode = null; // Head node of the list
    }

    // Adds a new node with the given value at the end of the list
    append(value) {
        const newNode = new Node(value);
        if (!this.headNode) {
            this.headNode = newNode;
            return;
        }

        let current = this.headNode;
        while (current.nextNode !== null) {
            current = current.nextNode;
        }
        current.nextNode = newNode;
    }

    // Adds a new node with the given value at the beginning of the list
    prepend(value) {
        const newNode = new Node(value);
        newNode.nextNode = this.headNode;
        this.headNode = newNode;
    }

    // Returns the number of nodes in the list
    size() {
        let count = 0;
        let current = this.headNode;
        while (current !== null) {
            count++;
            current = current.nextNode;
        }
        return count;
    }

    // Returns the first node (head) of the list
    head() {
        return this.headNode;
    }

    // Returns the last node (tail) of the list
    tail() {
        if (!this.headNode) return null;

        let current = this.headNode;
        while (current.nextNode !== null) {
            current = current.nextNode;
        }
        return current;
    }

    // Returns the node at a specific index
    at(index) {
        let current = this.headNode;
        let count = 0;
        while (current !== null) {
            if (count === index) return current;
            current = current.nextNode;
            count++;
        }
        return null; // Index out of bounds
    }

    // Removes the last node from the list
    pop() {
        if (!this.headNode) return null;

        // Only one node in the list
        if (!this.headNode.nextNode) {
            const popped = this.headNode;
            this.headNode = null;
            return popped;
        }

        let current = this.headNode;
        // Stop at second-to-last node
        while (current.nextNode.nextNode !== null) {
            current = current.nextNode;
        }

        const popped = current.nextNode;
        current.nextNode = null;
        return popped;
    }

    // Returns true if the value is in the list, false otherwise
    contains(value) {
        let current = this.headNode;
        while (current !== null) {
            if (current.value === value) return true;
            current = current.nextNode;
        }
        return false;
    }

    // Returns the index of the node containing the value, or null if not found
    find(value) {
        let current = this.headNode;
        let index = 0;
        while (current !== null) {
            if (current.value === value) return index;
            current = current.nextNode;
            index++;
        }
        return null;
    }

    // Returns a string representation of the list
    toString() {
        let str = '';
        let current = this.headNode;
        while (current !== null) {
            str += `( ${current.value} ) -> `;
            current = current.nextNode;
        }
        return str + 'null';
    }

    // Inserts a new node with value at a specific index
    insertAt(value, index) {
        if (index === 0) {
            this.prepend(value);
            return;
        }

        const newNode = new Node(value);
        const prevNode = this.at(index - 1);
        if (!prevNode) return; // Invalid index

        newNode.nextNode = prevNode.nextNode;
        prevNode.nextNode = newNode;
    }

    // Removes the node at a specific index
    removeAt(index) {
        if (index === 0) {
            this.headNode = this.headNode?.nextNode || null;
            return;
        }

        const prevNode = this.at(index - 1);
        if (!prevNode || !prevNode.nextNode) return; // Invalid index

        prevNode.nextNode = prevNode.nextNode.nextNode;
    }
}