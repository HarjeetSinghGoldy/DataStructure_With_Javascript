// Creatring a List Constructor which can do all the List Datasctruture function

function List() {
    // variables
    this.listSize = 0; //size of the List
    this.pos = 0; //pointer position in List
    this.dataStrore = []; //store's elements in the List

    // functions()
    this.clear = clear; //clear the whole list
    this.find = find; // find the element is present or not in the list
    this.toString = toString; //print the List in console
    this.insert = insert; //insert an element in the poistion where is the pos defined
    this.append = append; //append the List size by adding an elemnt
    this.remove = remove; // Remove the specified element from the list
    this.first = first; // return the first element pos
    this.last = last; // return the last element pos in list
    this.prev = prev; // return the previous position to the current pointer position
    this.next = next; // renturn the next position to the curent pointer position
    this.length = length; // return the lenght of the list
    this.current = current; //rerurn the current position of pointer
    this.moveTo = moveTo // Move the poitner to the specififed position
    this.getElement = getElement; //retunr the element of specfic position
    this.contains = contains // return boolean weather the elemets is present or not

}

function append(element) {
    this.dataStrore[this.listSize++] = element
    console.log("Element Added", element);
}

function find(element) {
    for (var i = 0; i < this.dataStrore.length; ++i) {
        if (this.dataStrore[i] == element) {
            console.log(element, "is present at ", i, "position");
            return i;
        }
    }
    console.log("Element is not present");
    return -1;
}

function remove(element) {
    var foundAt = this.find(element);
    if (foundAt > -1) {
        this.dataStrore.splice(foundAt, 1)
        this.listSize--;
        return true;
    } else {
        console.log("Element is not present");
        return false;
    }
}

function length() {
    return this.listSize;
}

function toString() {
    return this.dataStrore;
}

function insert(where, element) {
    var insertInFront = this.find(where);
    if (insertInFront > -1) {
        this.dataStrore.splice(insertInFront + 1, 0, element);
        console.log(element, "is inseted in front of", where);
        ++this.listSize;
        return true;
    } else {
        return false;
    }
}

function clear() {
    delete this.dataStrore;
    this.dataStrore = [];
    this.listSize = this.pos = 0;
    console.log("List has been cleared");
}

function contains(element) {
    for (var i = 0; i < this.dataStrore.length; i++) {
        if (this.dataStrore[i] == element) {
            console.log(element,"Contains At", i);
            return true
        }
    }
    return false;
}

function first() {
    return this.pos;
}

function last() {
    return this.listSize - 1;
}

function prev() {
    if (this.pos > 0) {
        --this.pos;
        this.current()
        return true;
    } else {
        console.log("Your are on Fisrt Node");
        return false;
    }
}

function next() {
    if (this.pos < this.listSize - 1) {
        ++this.pos;
        this.current()
        return true
    } else {
        console.log("Your are on Last Node");
        return false;
    }
}

function moveTo(position) {
    this.pos = position;
    this.current();
}

function current() {
    console.log("Now position is", this.pos);
    return this.pos;
}

function getElement() {
    return this.dataStrore[this.pos];
}

var test = new List();
test.append(1);
test.append(2);
test.append(3);
test.append(4);
test.append(5);
