//Task 1
var string = {
  pluralize: function(singular) {
    var wordLength = singular.length;
    var plural = '';
    if (singular[wordLength - 1] === 'y') {
      var subSingular = singular.substring(0, wordLength - 1);
      plural = subSingular + 'ies';
    }
    else {
      plural = singular + 's';
    }
    return plural;
  }
}

var pluralize = string.pluralize;
console.log(pluralize('cat'));
console.log(pluralize('baby'));

//Task 2
function Book({title, quantity, price }) {
  this.title = title;
  this.quantity = quantity;
  this. price = price;
}

Book.prototype.getSubtotal = function() {
  return this.quantity * this.price;
};

var oojsBook = new Book({ title: 'Object Oriented JavaScript', quantity: 2, price: 10 });
console.log(oojsBook.title); // Object Oriented JavaScript
console.log(oojsBook.quantity); // 2
console.log(oojsBook.price); // 10
console.log(oojsBook.getSubtotal()); // 20

function ShoppingCart(books) {
  this.items = books;
}

ShoppingCart.prototype.add = function(book) {
  this.items.push(book);
};

ShoppingCart.prototype.getTotal = function() {
  var grandTotal = this.items.reduce(function(total, item) {
    total += item.getSubtotal();
    return total;
  }, 0);

  return grandTotal;
};

var book1 = new Book({ title: 'Object Oriented JavaScript', quantity: 1, price: 10 });
var book2 = new Book({ title: 'JavaScript Web Applications', quantity: 2, price: 15 });
var book3 = new Book({ title: 'PHP Object Oriented Solutions', quantity: 1, price: 20 });
var book4 = new Book({ title: 'Head First Java', quantity: 5, price: 20 });

var cart = new ShoppingCart([book1, book2]);
cart.add(book3);
cart.add(book4);
var subtotal = cart.getTotal();
console.log(subtotal); // 160

//Task 3
Array.prototype.map2 = function(callbackFunction) {
  var results = [];

  for (var i = 0; i < this.length; i++) {
    results.push(callbackFunction(this[i]));
  }

  return results;
};

var numbers = [1, 2, 3, 4, 5];
var numbersDoubled = numbers.map2(function(number) {
  return number * 2;
});
console.log(numbersDoubled);
