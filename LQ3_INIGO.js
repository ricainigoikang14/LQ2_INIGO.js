// Price Inquiry

console.log("A. Pepsi Cola");
console.log("B. Coca Cola");
console.log("C. Apple (per kg)");
console.log("D.Orange (per kg)");
console.log("E. Hotdogs (per kg)");

let item_Choice = prompt ("Please enter item choice (A, B, C, D, E):");
let QTY = parseInt(prompt("Please enter the quantity to be ordered: "));
let Tot_Price;

switch(item_Choice.toUpperCase()) {
    case 'A':
        Tot_Price = QTY * 1.5;
        alert('The total price of the order Pepsi Cola x ${QTY}: $${Tot_Price}');
        break;
    case 'B':
        Tot_Price = QTY * 1.5; // Price for Coca Cola
        alert('The total Price of the order Coca Cola x ${QTY}: $${Tot_Price}');
        break;
    case 'C':
        Tot_Price = QTY * 3; // Price for Apple
        alert('The Total Price of the order Apple x ${QTY}: $${Tot_Price}');
        break;
    case 'D':
        Tot_Price = QTY * 2.5; // Price for Orange
        alert('The Total Price of the order Orange x ${QTY}: $${Tot_Price}');
        break;
    case 'E':
        Tot_Price = QTY * 5; // Price for Hotdogs
        alert('The Total Price of the order Hotdogs x ${QTY}: $${Tot_Price}');
        break;
    default:
        alert("No matching Item! Try to re-run the program");
          }
