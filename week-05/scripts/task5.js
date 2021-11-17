/* NEPHI MALIT, BYUi*/

/* Lesson 5 */

/* IF/ELSE IF */

// Step 1: Declare and initialize a new variable to hold the current date

const today = new Date

// Step 2: Declare another variable to hold the day of the week

// Step 3: Using the variable declared in Step 1, assign the value of the variable declared in Step 2 to the day of the week ( hint: getDay() )

const day = today.getDay()

// Step 4: Declare a variable to hold a message that will be displayed

var message1 = ''


// Step 5: Using an if statement, if the day of the week is a weekday (i.e. Monday - Friday), set the message variable to the string 'Hang in there!'

const weekdays = [ 1,2,3,4,5 ]
const weekends = [ 0,6 ]

if (weekdays.includes(day)) {
    message1 = 'Hang in there!'
}

// Step 6: Using an else statement, set the message variable to 'Woohoo!  It is the weekend!'

else if (weekends.includes(day)) {
    message1 = 'Woohoo!  It is the weekend!'
}

/* SWITCH, CASE, BREAK */

// Step 1: Declare a new variable to hold another message

var message2 = ''

// Step 2: Use switch, case and break to set the message variable to the day of the week as a string (e.g. Sunday, Monday, etc.) using the day of week variable declared in Step 2 above

switch (day) {
    case 0:
        message2 = "Sunday";
        break;
    case 1:
        message2 = "Monday";
        break;
    case 2:
        message2 = "Tuesday";
        break;
    case 3:
        message2 = "Wednesday";
        break;
    case 4:
        message2 = "Thursday";
        break;
    case 5:
        message2 = "Friday";
        break;
    case  6:
        message2 = "Saturday";
  }

/* OUTPUT */

// Step 1: Assign the value of the first message variable to the HTML element with an ID of message1

document.getElementById("message1").innerHTML = message1

// Step 2: Assign the value of the second message variable to the HTML element with an ID of message2

document.getElementById("message2").innerHTML = message2

/* FETCH */

// Step 1: Declare a global empty array variable to store a list of temples

var TEMPLE_LIST = [ ]
var filtered_by_year = [ ]

// Step 2: Declare a function named output that accepts a list of temples as an array argument and does the following for each temple:

const output = (temples) => {
    temples.forEach(
        temple => {

            // - Creates an HTML <article> element
            let article = document.createElement('article')

            // - Creates an HTML <h3> element and add the temple's templeName property to it
            let h3 = document.createElement('h3')
            h3.textContent = temple.templeName

            // - Creates an HTML <h4> element and add the temple's location property to it
            let location = document.createElement('h4')
            location.textContent = temple.location

            // - Creates an HTML <h4> element and add the temple's dedicated property to it
            let dedicated = document.createElement('h4')
            dedicated.textContent = temple.dedicated

            // - Creates an HTML <img> element and add the temple's imageUrl property to the src attribute and the temple's templeName property to the alt attribute
            let img = document.createElement('img')
            img.src = temple.imageUrl
            img.alt = temple.templeName

            // - Appends the <h3> element, the two <h4> elements, and the <img> element to the <article> element as children

            article.appendChild(h3);
            article.appendChild(location);
            article.appendChild(dedicated);
            article.appendChild(img);

            // - Appends the <article> element to the HTML element with an ID of temples
            document.getElementById('temples').appendChild(article);






        }
    )
}









// Step 3: Using the built-in fetch method, call this absolute URL: 'https://byui-cse.github.io/cse121b-course/week05/temples.json'

requestURL = 'https://byui-cse.github.io/cse121b-course/week05/temples.json'
fetch(requestURL)

// Step 4: Add a .then() method to turn the returned string into a JavaScript object ( hint: .json() )

    .then(function (response) {
        return response.json();
    })

// Step 5: Add another .then() method with a variable name to hold the temples and an empty arrow function

    .then( temples => {

        // Step 6: Inside of second .then() method, assign the list of temples (as a JSON object) to the temples variable
        TEMPLE_LIST = temples

        console.table(TEMPLE_LIST)

        // Step 7: Finally, call the output function and pass it the list of temples
        output(TEMPLE_LIST)
    }
)


// Step 8: Declare a function named reset that clears all of the <article> elements from the HTML element with an ID of temples

const reset = () => {
    document.getElementById('temples').innerHTML = "";
}

// Step 9: Declare a function named sortBy that does the following:
const sortBy = () => {
    // - Calls the reset function
    reset()

    // - Sorts the global temple list by the currently selected value of the HTML element with an ID of sortBy
    // - Calls the output function passing in the sorted list of temples

    let filter = document.getElementById('sortBy').value;
    let filter_renovation = document.getElementById('renovation-filter').value;

    /* filter open status */
    switch (filter_renovation) {
        case 'all':
            filtered_by_year = TEMPLE_LIST
            break
        case 'renovation':
            filtered_by_year = TEMPLE_LIST.filter(temple => 
                temple.dedicated === 'Renovation');
            break
        case 'open':
            filtered_by_year = TEMPLE_LIST.filter(temple => 
                temple.dedicated !== 'Renovation');
            break;
    }

    /* sort */
    switch (filter) {
        // sort in alphabetical order
        case "templeNameAscending":
            output(filtered_by_year.sort(
                (temple1, temple2) => {
                    let temple_name_1 = temple1.templeName.toLowerCase();
                    let temple_name_2 = temple2.templeName.toLowerCase();
                    if (temple_name_1 < temple_name_2) return -1;
                    else if (temple_name_1 > temple_name_2) return 1;
                    else return 0;
            }));
            break;
        // sort in reverse alphabetical order
        case 'templeNameDescending':
            output(filtered_by_year.sort(
                (temple1, temple2) => {
                    let temple_name_1 = temple1.templeName.toLowerCase();
                    let temple_name_2 = temple2.templeName.toLowerCase();
                    if (temple_name_1 > temple_name_2) return -1;
                    else if (temple_name_1 < temple_name_2) return 1;
                    else return 0;
                }));
            break;
        //
        default:
            // using ternary operators
            output(filtered_by_year.sort(
                (temple1, temple2) => 
                temple1.templeName.toLowerCase() > temple2.templeName.toLowerCase() ? 1 : 
                    temple2.templeName.toLowerCase() > temple1.templeName.toLowerCase() ? -1 : 0));
            break;
        }
}

// Step 10: Add a change event listener to the HTML element with an ID of sortBy that calls the sortBy function
document.querySelector('#sortBy').addEventListener('change', sortBy);

/* STRETCH */

// Consider adding a "Filter by" feature that allows users to filter the list of temples
// This will require changes to both the HTML and the JavaScript files

document.querySelector('#renovation-filter').addEventListener('change', sortBy);



/* set links without changing HTML */
const HomeLinkElement = document.getElementById('menu')

links = document.getElementsByTagName('a')

//
links[1].href = "../"
links[2].href = "../week-02/task2.html"
links[3].href = "../week-03/task3.html"
links[4].href = "../week-04/task4.html"
links[5].href = "../week-05/task5.html"