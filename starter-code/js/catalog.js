/* global Product, Cart */

'use strict';

// Set up an empty cart for use on this page.
var cart = new Cart([]);

// for (let i = 0; i < Product.allProducts.length; i++) {
  // cart[i]=Product.allProducts[i];
  
// }
console.log(cart);

// On screen load, we call this method to put all of the busmall options
// (the things in the Product.allProducts array) into the drop down list.
//TODO: Add an <option> tag inside the form's select for each product
function populateForm() {
  var selectElement = document.getElementById('items');

  for (let i = 0; i < Product.allProducts.length; i++) {
    var opE1 = document.createElement('option');
    selectElement.appendChild(opE1);
    opE1.textContent = Product.allProducts[i].name;
    
  }
} 



// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
function handleSubmit(event) {
  
  // TODO: Prevent the page from reloading
  event.preventDefault();
  

  // Do all the things ...
  addSelectedItemToCart();
  // cart.saveToLocalStorage();
  // updateCounter();
  // updateCartPreview();

}

// TODO: Add the selected item and quantity to the cart
function addSelectedItemToCart() {
  var e = document.getElementById('items');
 var selectedElement = document.getElementById('addedItems');
 var w= e[e.selectedIndex].text;
  var amount =document.getElementById('quantity').value; 
console.log(amount);
console.log(w);

 var liE1= document.createElement('li');
 selectedElement.appendChild(liE1);

 liE1.textContent = `${amount} of ${w} `; 


}

// TODO: Update the cart count in the header nav with the number of items in the Cart
// function updateCounter() {}

// TODO: As you add items into the cart, show them (item & quantity) in the cart preview div
// function updateCartPreview() {
  // TODO: Get the item and quantity from the form
  // TODO: Add a new element to the cartContents div with that information
// }

// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
var catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();
