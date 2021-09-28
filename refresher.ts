//old way
function ShoppingList() {
  this.groceries = [];
}

ShoppingList.prototype.addItem = function (item) {
  this.groceries = this.groceries.concat([item]);
};

ShoppingList.prototype.removeItem = function (item) {
  this.groceries = this.groceries.filter(function (grocery) {
    return item !== grocery;
  });
};

var myList = new ShoppingList();

myList.addItem("Banana");
myList.addItem("Apple");
console.log(myList.groceries);
myList.removeItem("Banana");
console.log(myList.groceries);

//typescript classes

class ShoppingListNew {
  groceries: string[];
  constructor() {
    this.groceries = [];
  }

  additem(item) {
    this.groceries = [...this.groceries, item];
  }

  removeItem(item) {
    this.groceries = this.groceries.filter((grocery) => item !== grocery);
  }
}

const myNewList = new ShoppingListNew();

myNewList.additem("Pizza");
myNewList.additem("Croissant");
console.log(myNewList);
myNewList.removeItem("Croissant");
console.log(myNewList);
