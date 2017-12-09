// LinkedList.js

class Node {
    constructor(data) {
        this._data = data;
        this._next = null;
    }
    get data() {
        return this._data;
    }
    get next() {
        return this._next;
    }
    set next(newNode) {
        this._next = newNode;
    }
}

class LinkedList {
    constructor() {
        this._head = null;
        this._length = 0;
    }
    get head() {
        return this._head;
    }
    get length() {
        return this._length;
    }
    set head(data) {
        this._head = data;
    }
    _get(index) {
        let currentNode = this.head;
        let count = 0;

        if (index > this.length) {
            return `Nothing exists at index ${index}.`
        }
        while (count < index) {
            currentNode = currentNode.next;
            count++;
        }
        return currentNode;
    }
    insert(index, data) {
        const previousNode = this._get(index - 1);
        const currentNode = this._get(index);
        const newNode = new Node(data);

        previousNode.next = newNode;
        newNode.next = currentNode;
    }
    append(data) {
        const currentNode = this.length
    }
    shift(data) {
        this.insert(0, data);
    }
    pop(index) {
        this.remove(index);

        const currentNode = this._get(index);
        return currentNode.data;
    }
    remove(index) {

        const previousNode = this._get(index - 1);
        previousNode.next = this._get(index + 1);
    }
    printList() {
        let printList = '[';
        let currentNode = this.head;
        if (!currentNode) {
            return('There\'s nothing in your list!');
        } else {
            while (currentNode.next) {
                printList += `${currentNode.data}, `;
                currentNode = currentNode.next;
            }
            printList += `${currentNode.data}]`;
            return printList;
        }
    }
    reverse() {

    }
}

let myList = new LinkedList();
myList.append('foo');
myList.append('bar');
myList.append('baz');
myList.insert(1, 'bums');
console.log(myList.printList());
console.log(myList.pop(2));
console.log(myList.printList());