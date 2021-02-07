//
let arr = [
  "item 1",
  "item 2",
  "item 3",
  "item 4",
];

let cnt = 0;

// Getting the button element
let button = document.getElementById("btn");
let listArray = document.querySelector("ul#first-ul");

// Adding an event listener for the button
button.addEventListener("click", function()
{
    if ( cnt >= arr.length )
    {
        cnt = 0;
        listArray.remove(createdList); 
    }
    // Execute this block of code if the button was clicked.
    // Creating a list item
    let createdList = document.createElement('li');
    createdList.innerText = arr[cnt];

    //
    listArray.append(createdList);
    cnt ++;

    console.log("Button Clicked!");

})
