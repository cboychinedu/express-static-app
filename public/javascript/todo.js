// Getting the text element
let textArea = document.getElementById("text-section");

// Getting the submit button element
let submitbtn = document.getElementById("submit-button");

// Getting the element for the un-ordered list
let listArray = document.querySelector("ul#first-ul");

// Getting the element for  todo-paragraph by it's id
let todoPara = document.getElementById("todo-paragraph");

// Creating a function for removing a list
function removeList(innText)
{

    //
    listArray.querySelectorAll('li').forEach(function (value, index, arr)
    {
        // Getting the index value for the "innText" string.
        if ( value.innerText === innText )
        {

            // Removing the list element by using its respective index value
            listArray.querySelectorAll('li')[index].remove();

        }

    });

    /*
    * listArray.querySelectorAll('li').forEach((value, index, err) => {console.log(value.innerText)});
      listArray.querySelectorAll('li').forEach(function (value, index, err) {console.log(value.innerText); console.log(index);});
    */

};


// Adding the event listener
submitbtn.addEventListener("click", function()
{
    // Clearing the screen
    // todoPara.innerText = "";
    todoPara.remove();

    // Creating an element to hold the list values
    let elementsLists = [];

    // Creating a new list
    let listElement = document.createElement('li');

    // listElement.innerHTML = textArea.value;
    listElement.className = "highlight";

    // Checking for repetitions
    if ( listArray.querySelectorAll('li').length === 0 )
    {
      // Adding the buttons
      listElement.innerHTML = `${textArea.value}
          <input type='button' value='Remove' class='remove-btn' id='remove-btn' onclick="removeList('${textArea.value}');">
          <input type='button' value='Down' class='down-btn' id='down-btn'>
          <input type='button' value='Up' class='up-btn' id='up-btn'>
      `;

      // Appending the values into the list array
      listArray.append(listElement);

    }

    // Checking if the length of the list array is not equal to zero (0)
    else if ( listArray.querySelectorAll('li').length !== 0 )
    {
        // looping through the listArray items.
        listArray.querySelectorAll('li').forEach(function(value, index, err)
        {

          // Saving the items for the listArray into the "elementsLists" and convert
          // this values into a data type "string"
          elementsLists.push(String(value.innerText));

        });

        // Checking for repetitions
        if ( elementsLists.indexOf(String(textArea.value)) !== -1 )
        {
            // Telling the user that the element exists
            alert("Repetition of todos!");

        }

        // If the value is not present in the elementsLists array, then execute
        // the code statement below
        else if ( elementsLists.indexOf(String(textArea.value)) === -1 )
        {
          // Adding the buttons
          listElement.innerHTML = `${textArea.value}
              <input type='button' value='Remove' class='remove-btn' id='remove-btn' onclick="removeList('${textArea.value}');">
              <input type='button' value='Down' class='down-btn' id='down-btn'>
              <input type='button' value='Up' class='up-btn' id='up-btn'>
          `;

          // Appending the values into the list array
          listArray.append(listElement);

        }

    }

});




// Adding the event listener for the enter button
document.addEventListener("keypress", function(e)
{
    if ( e.key === 'Enter' )
    {
      // Clearing the screen
      // todoPara.innerText = "";
      todoPara.remove();

      // Creating an element to hold the list values
      let elementsLists = [];

      // Creating a new list
      let listElement = document.createElement('li');

      // listElement.innerHTML = textArea.value;
      listElement.className = "highlight";

      // Checking for repetitions
      if ( listArray.querySelectorAll('li').length === 0 )
      {
        // Adding the buttons
        listElement.innerHTML = `${textArea.value}
            <input type='button' value='Remove' class='remove-btn' id='remove-btn' onclick="removeList('${textArea.value}');">
            <input type='button' value='Down' class='down-btn' id='down-btn'>
            <input type='button' value='Up' class='up-btn' id='up-btn'>
        `;

        // Appending the values into the list array
        listArray.append(listElement);

      }

      // Checking if the length of the list array is not equal to zero (0)
      else if ( listArray.querySelectorAll('li').length !== 0 )
      {
          // looping through the listArray items.
          listArray.querySelectorAll('li').forEach(function(value, index, err)
          {

            // Saving the items for the listArray into the "elementsLists" and convert
            // this values into a data type "string"
            elementsLists.push(String(value.innerText));

          });

          // Checking for repetitions
          if ( elementsLists.indexOf(String(textArea.value)) !== -1 )
          {
              // Telling the user that the element exists
              alert("Repetition of todos!");

          }

          // If the value is not present in the elementsLists array, then execute
          // the code statement below
          else if ( elementsLists.indexOf(String(textArea.value)) === -1 )
          {
            // Adding the buttons
            listElement.innerHTML = `${textArea.value}
                <input type='button' value='Remove' class='remove-btn' id='remove-btn' onclick="removeList('${textArea.value}');">
                <input type='button' value='Down' class='down-btn' id='down-btn'>
                <input type='button' value='Up' class='up-btn' id='up-btn'>
            `;

            // Appending the values into the list array
            listArray.append(listElement);

          }

      }

    }
    // console.log(e.key);
    // Execute this block of code if the enter key was pressed

})
