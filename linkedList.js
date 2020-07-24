// 1. Create a linked list class
// Walk through the linked list code in the curriculum and understand it well. Then write a linked list class and its core functions (insertFirst, insertLast, remove, find) from scratch.

const _Node = require('./node');

class LinkedList {
    constructor() {
        this.head = null;
    }

    // Insertion

    insertFirst(item) {
        this.head = new _Node(item, this.head);
    }

    insertLast(item) {
        if (this.head === null) {
            this.insertFirst(item);
        } else {
            let tempNode = this.head;
            while (tempNode.next !== null) {
                tempNode = tempNode.next;
            }
            tempNode.next = new _Node(item, null);
        }
    }

    find(item) {
        //Start at the head
        let currNode = this.head;
        //If the list is empty
        if (!this.head) {
            return null;
        }
        //Check for the item
        while (currNode.value !== item) {
            /* Return null if it's the end of the list
                     and the item is not on the list */
            if (currNode.next === null) {
                return null;
            } else {
                currNode = currNode.next;
            }
        }

        //Found it
        return currNode;
    }

    remove(item) {
        if (!this.head) {
            return null;
        }
        if (this.head.value === item) {
            this.head = this.head.next;
            return;
        }

        let currNode = this.head;
        let previousNode = this.head;

        while (currNode !== null && currNode.value !== item) {
            previousNode = currNode;
            currNode = currNode.next;
        }
        if (currNode === null) {
            console.log('Item not found');
            return;
        }
        previousNode.next = currNode.next;
    }

    //Inserts a new node before a given node key
    insertBefore(key, item) {
        //Check if head exists
        // if (!this.head) {
        //   return null;
        // }
        //Find the node with given key
        const beforeNode = this.find(key);

        //Create a new node before the node that was found
        this.head = new _Node(item, beforeNode);
    }
    insertAfter(key, item) {
        // if (!this.head) {
        //   return null;
        // }
        const afterNode = this.find(key);
        const afterThatNode = afterNode.next;
        afterNode.next = new _Node(item, afterThatNode);
    }
    //Inserts specified node at certain position in linked list
    insertAt(position, value) {
        let temp = this.head;
        let count = 0;
        while (temp.value !== null && count < position - 1) {
            temp = temp.next;
            count++;
        }
        temp.next = new _Node(value, temp.next);
    }

    size(ll) {
        let temp = ll.head;
        let count = 0;
        while (temp.next !== null) {
            temp = temp.next;
            count++;
        }
        return count;
    }

    display(ll) {
        let temp = ll.head;
        while (temp.next !== null) {
            temp = temp.next;
            // console.log(temp);
        }
    }


    findPrevious(ll, item) {
        let temp = ll.head;
        while (temp.next.value !== item) {
            temp = temp.next;
        }
        return temp;
    }

    findLast(ll) {
        let temp = ll.head;
        while (temp.next !== null) {
          temp = temp.next;
        }
        return temp;
    }
    
    

}

module.exports = LinkedList;
