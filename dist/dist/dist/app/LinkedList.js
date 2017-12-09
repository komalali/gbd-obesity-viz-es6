'use strict';

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

// LinkedList.js

var Node = function () {
    function Node(data) {
        _classCallCheck(this, Node);

        this._data = data;
        this._next = null;
    }

    _createClass(Node, [{
        key: 'data',
        get: function get() {
            return this._data;
        }
    }, {
        key: 'next',
        get: function get() {
            return this._next;
        },
        set: function set(newNode) {
            this._next = newNode;
        }
    }]);

    return Node;
}();

var LinkedList = function () {
    function LinkedList() {
        _classCallCheck(this, LinkedList);

        this._head = null;
        this._length = 0;
    }

    _createClass(LinkedList, [{
        key: '_get',
        value: function _get(index) {
            var currentNode = this.head;
            var count = 0;

            if (index > this.length) {
                return 'Nothing exists at index ' + index + '.';
            }
            while (count < index) {
                currentNode = currentNode.next;
                count++;
            }
            return currentNode;
        }
    }, {
        key: 'insert',
        value: function insert(index, data) {
            var previousNode = this._get(index - 1);
            var currentNode = this._get(index);
            var newNode = new Node(data);

            previousNode.next = newNode;
            newNode.next = currentNode;
        }
    }, {
        key: 'append',
        value: function append(data) {
            var newNode = new Node(data);
            var currentNode = this.head;
            // if there are no nodes
            if (!currentNode) {
                this.head = newNode;
                this._length++;

                return currentNode;
            }
            // if there are nodes loop until you find the end
            while (currentNode.next) {
                currentNode = currentNode.next;
            }
            // add the node once you get to the end of the list
            currentNode.next = newNode;
            this._length++;
            return newNode;
        }
    }, {
        key: 'shift',
        value: function shift(data) {}
    }, {
        key: 'pop',
        value: function pop(index) {
            var previousNode = this._get(index - 1);
            var currentNode = this._get(index);

            previousNode.next = this._get(index + 1);

            return currentNode.data;
        }
    }, {
        key: 'remove',
        value: function remove(index) {}
    }, {
        key: 'printList',
        value: function printList() {
            var printList = '[';
            var currentNode = this.head;
            if (!currentNode) {
                return 'There\'s nothing in your list!';
            } else {
                while (currentNode.next) {
                    printList += currentNode.data + ', ';
                    currentNode = currentNode.next;
                }
                printList += currentNode.data + ']';
                return printList;
            }
        }
    }, {
        key: 'reverse',
        value: function reverse() {}
    }, {
        key: 'head',
        get: function get() {
            return this._head;
        },
        set: function set(data) {
            this._head = data;
        }
    }, {
        key: 'length',
        get: function get() {
            return this._length;
        }
    }]);

    return LinkedList;
}();

var myList = new LinkedList();
myList.append('foo');
myList.append('bar');
myList.append('baz');
myList.insert(1, 'bums');
console.log(myList.printList());
console.log(myList.pop(2));
console.log(myList.printList());
//# sourceMappingURL=LinkedList.js.map
//# sourceMappingURL=LinkedList.js.map
//# sourceMappingURL=LinkedList.js.map