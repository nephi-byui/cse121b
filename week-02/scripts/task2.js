/* Lesson 2 */

/* VARIABLES */
function variablesFunction() {
    // Step 1: declare and instantiate a variable to hold your name
    let author_name = "Nephi Edwin Leveriza Malit"
    
    // Step 2: place the value of the name variable into the HTML file (hint: document.querySelector())
    const nameElement = document.querySelector('#name')
    nameElement.innerHTML = author_name
    
    // Step 3: declare and instantiate a variable to hold the current year
    const date_options = { year: 'numeric' }
    const yearElement = document.querySelector('#year');
    let today = new Date();
    year_string = today.toLocaleDateString(undefined, date_options);
    
    // Step 4: place the value of the current year variable into the HTML file
    yearElement.innerHTML = year_string
    
    // Step 5: declare and instantiate a variable to hold the name of your picture
    let image_path = "images/photo.jpg"
    
    // Step 6: copy your image into the "images" folder
    
    // Step 7: place the value of the picture variable into the HTML file (hint: document.querySelector().setAttribute())
    const imageElement = document.querySelector("img")
    imageElement.setAttribute("src", image_path)
}

variablesFunction();


    
    /* ARRAYS */
function arraysFunction() {
    
    // Step 1: declare and instantiate an array variable to hold your favorite foods
    let favorite_foods = [
        "grilled chicken",
        "green ice lettuce",
        "hot sauce",
        "coke zero"
    ]  
    
    // Step 2: place the values of the favorite foods variable into the HTML file
    const foodsElement = document.querySelector("#food")
    
    function updateFoods() {
        string = "<br>"
        for (let i = 0; i < favorite_foods.length; i++) {
        string += [i+1]+ ". " + favorite_foods[i] + "<br>"
        }
    foodsElement.innerHTML = string
    }
    
    updateFoods()

    // Step 3: declare and instantiate a variable to hold another favorite food
    let new_food = "refried beans"
    
    // Step 4: add the variable holding another favorite food to the favorite food array
    favorite_foods.push(new_food)
    
    // Step 5: repeat Step 2
    updateFoods()
    
    // Step 6: remove the first element in the favorite foods array
    favorite_foods.shift();
    
    // Step 7: repeat Step 2
    updateFoods()
    
    // Step 8: remove the last element in the favorite foods array
    favorite_foods.pop()
    
    // Step 7: repeat Step 2
    updateFoods()

    };
    
arraysFunction()

