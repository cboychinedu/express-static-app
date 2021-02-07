// index.js
// Creating a script for multiplication
function multiply(x, y)
{
    // Code execution
    let result = x * y;
    document.getElementById('btn-result').innerHTML = result;
};

// Getting the first header element
let header = document.getElementById('homepage-section');
// header.style.backgroundColor = "green";

// Adding a listener to the header tag
// header.addEventListener('click', () =>
// {
//     // Execute this block of code if the header section was clicked on
//     console.log("The header was just clicked!");
//     header.style.backgroundColor = "green";
// })

// Getting the element for the button
let calculateButton = document.getElementById('submit-btn');

// Getting the users email
let userEmail = document.getElementById("email-value");
let submitEmailBtn = document.getElementById("email-submit-btn");

// Adding event listener to listen for event if the email was typed
userEmail.addEventListener("keyup", function()
{
    // Execute this code if the user typed a text into the email section
    // document.getElementById("typed-message").innerHTML = userEmail.value;
    header.innerHTML = userEmail.value;
    myFunction();
    myFunction();

})

// Using the query selector
let listItems = document.querySelectorAll('input')
// console.log(listItems)

let i = 0;

// Creating the sleep function
const sleep = (milliseconds) =>
{
    //
    return new Promise(resolve => setTimeout(resolve, milliseconds))
};

//
let colors = ["red", "black", "331015", "211113", "6b0918", "bc0d27", "black"];

//
// function sleep(milliseconds)
// {
//     //
//     const date = Date.now();
//     let currentDate = null;
//
//     //
//     do {
//       currentDate = Date.now();
//
//     }while ( currentDate - date < milliseconds );
// }

//
function myFunction()
{

    // setTimeout(() => {header.style.backgroundColor = value; console.log(i);}, 3000);
    sleep(900)
    .then(() => {
        console.log('Testing1');
        header.style.backgroundColor = colors[i];
        i++;

        sleep(900).
        then(() => {
            console.log('Testing2');
            header.style.backgroundColor = colors[i];
            i++;

            sleep(900)
            .then(() => {
                  console.log('Testing3');
                  header.style.backgroundColor = colors[i];
                  i++;

                  sleep(900)
                  .then(() => {
                        console.log('Testing4');
                        header.style.backgroundColor = colors[i];
                        header.style.paddingTop = "px";
                        i++;

                        sleep(900)
                        .then(() => {
                              console.log('Testing5');
                              header.style.backgroundColor = colors[i];
                              i++;

                              sleep(900)
                              .then(() => {
                                    console.log('Testing6');
                                    header.style.backgroundColor = colors[i];
                                    i = 0;

                //
                })
              })
            })
          })
        })

    })

};

// Adding new list items to the page
let listArray = document.querySelector("ul.first-ul");
let clickMebtn = document.querySelector(".ClickMebtn");

// Adding event listener
clickMebtn.addEventListener('click', function()
{
    // Creating a new list
    let li = document.createElement('li');
    li.innerHTML = "Item 5";
    li.className = "highlight"; 

    // Appending the values into the listArray
    listArray.append(li);
    console.log(li);
})


//
header.addEventListener("click", function()
{
    //
    myFunction();
    // setTimeout(myFunction(i), 3000);
})

/* Important section */
// document.addEventListener("keyup", function(e)
// {
//     // EE
//     console.log(userEmail.value);
//     console.log(e)
// })

// Getting the element for the list
let lists = document.getElementsByTagName('li');
// console.log(lists[0]);

// Changing the borderColor to red
header.style.border = "1px solid red";
header.style.paddingTop = "26px";
header.style.paddingBottom = "26px";
header.style.paddingLeft = "20px";
header.style.fontSize = "24px";
header.style.textAlign = "center";
header.style.borderRadius = "20px";

// Changing the borderColor of the button to blue
calculateButton.style.border = "1px solid blue";
calculateButton.style.padding = "10px 10px 10px 10px";
calculateButton.style.fontSize = "11px";

// Adding an event listener
calculateButton.addEventListener('click', function()
{
    // Execute this block of code if the calculate buttion was clicked
    console.log("The calculate button was clicked!");

    // Changing the background color of the header
    header.style.backgroundColor = "yellow";
    header.style.color = "black";

    // Working the list item
    // Changing the border color for the first list
    for (let i = 0; i < lists.length; i++ )
    {
        console.log(i);
        // first list
        if ( i === 0 )
        {
          lists[i].style.border = "1px solid red";
        }


        else if ( i === 1 )
        {
          lists[i].style.border = "1px solid yellow";
        }


        else if ( i === 2 )
        {
          lists[i].style.border =  "1px solid green";
        }


        else if ( i === 3 )
        {
          lists[i].style.border = "2px solid blueviolet";
        }

    };
});
