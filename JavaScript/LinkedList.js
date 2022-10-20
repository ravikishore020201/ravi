class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
    }
    Insert(element) {
        let node = new Node(element);
        if (this.head == null) {
            this.head = node;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
    }
    Print() {
        let current = this.head;
        let output = "head";
        while (current) {

            output += "=>"+current.element;
            current = current.next;
        }
        console.log(output);
    }
    GetMiddle() {
        //your code here
        let node = this.head;
        if (node== null) {
            return -1
        } else {
            let current = node.next;
            let count = 0;
            while (current.next) {
                count++;
                current = current.next;

            }
            current = node;
            count = Math.floor(count / 2);
            while (count + 1 > 0) {
                current = current.next;
                count--
            }
            console.log(current.element);

        }
    }
}
let L = new LinkedList()
console.log(Function.__proto__.__proto__.__proto__)