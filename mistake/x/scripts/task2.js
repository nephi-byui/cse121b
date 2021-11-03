/* Lesson 2 */

/* VARIABLES */
function variablesFunction() {
// Step 1: declare and instantiate a variable to hold your name
    let authorName = "Nephi Edwin Leveriza Malit"

// Step 2: place the value of the name variable into the HTML file (hint: document.querySelector())
    const nameElement = document.querySelector('#name')
    nameElement.innerHTML = authorName

// Step 3: declare and instantiate a variable to hold the current year
    const date_options = { year: 'numeric' }
    const yearElement = document.querySelector('#year');
    let today = new Date();
    year_string = today.toLocaleDateString(undefined, date_options);

// Step 4: place the value of the current year variable into the HTML file
    yearElement.innerHTML = year_string

// Step 5: declare and instantiate a variable to hold the name of your picture
    let imagePath = "images/photo.jpg"

// Step 6: copy your image into the "images" folder

// Step 7: place the value of the picture variable into the HTML file (hint: document.querySelector().setAttribute())
    const imageElement = document.querySelector(".photo")
    imageElement.setAttribute("src", imagePath)

}

variablesFunction()

/* ARRAYS */

// Step 1: declare and instantiate an array variable to hold your favorite foods


// Step 2: place the values of the favorite foods variable into the HTML file


// Step 3: declare and instantiate a variable to hold another favorite food


// Step 4: add the variable holding another favorite food to the favorite food array


// Step 5: repeat Step 2


// Step 6: remove the first element in the favorite foods array


// Step 7: repeat Step 2


// Step 8: remove the last element in the favorite foods array


// Step 7: repeat Step 2



