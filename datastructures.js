// Activity 1 Linked list
// implement a node class to represet an eleme2bnt in linked list with properties value and next
class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}


function printNode(head){
let currentNode=head;
while(currentNode!==null){
    process.stdout.write(currentNode.value + '->' );
    currentNode=currentNode.next;
}
console.log('null')
}

let node1=new Node(1);
let node2=new Node(2);
let node3=new Node(3);

node1.next=node2;
node2.next=node3;

printNode(node1)

// implent a linkedlist class with methods to add /node to the encodeURI,remove node from the end
class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}
class Linkedlist{
    constructor(){
        this.head=null;
    }
}

// ADD
addnode(value){
    let newnode=new Node(value);
    if(this.head==null){
        this.head=newnode;
    }
    else
}