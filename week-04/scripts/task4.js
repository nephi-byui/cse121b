/* Lesson 4 */

/* DATA */

// Step 1: Declare a new variable to hold information about yourself

var bio = {}

// Step 2: Inside of the object, add a property named name with a value of your name as a string

bio.name = "Nephi Malit"

// Step 3: Add another property named photo with a value of the image path and name (used in Task 2) as a string

bio.photo = "images/photo.jpg"

// Step 4: Add another property named favoriteFoods with a value of an array of your favorite foods as strings ( hint: [] )

bio.favoriteFoods = [
    "grilled chicken",
    "green ice lettuce",
    "hot sauce",
    "coke zero"
]  

// Step 5: Add another property named hobbies with a value of an array of your hobbies as strings

bio.hobbies = [
    "playing the guitar",
    "tinkering with things",
    "weight training"
]

// Step 6: Add another property named placesLived with a value of an empty array

bio.placesLived = []

// Step 7: Inside of the empty array above, add a new object with two properties: place and length and values of an empty string

placeObject1 = {
    'place'     : "",
    'length'    : ""
}

bio.placesLived.push(placeObject1)

// Step 8: For each property, add appropriate values as strings

placeObject1.place = "Legazpi City"
placeObject1.length = "15 years"

// Step 9: Add additional objects with the same properties for each place you've lived

placeObject2 = {
    'place'     : "Quezon City",
    'length'    : "16 years"
}
bio.placesLived.push(placeObject2)


/* OUTPUT */

// Step 1: Assign the value of the name property (of the object declared above) to the HTML <span> element with an ID of name

const nameElement = document.getElementById("name")
nameElement.innerHTML = bio.name

// Step 2: Assign the value of the photo property as the src attribute of the HTML <img> element with an ID of photo

const photoElement = document.getElementById("photo")
photoElement.src = bio.photo

// Step 3: Assign the value of the name property as the alt attribute of the HTML <img> element with an ID of photo

photoElement.alt = bio.name

// Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element

// Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods
    
function populateFoods() {

    // clear list first
    const foodsListElement = document.getElementById("favorite-foods")
    foodsListElement.innerHTML = ""

    for (let i = 0; i < bio.favoriteFoods.length; i++) {        
        var listItem = document.createElement("li");
        food = bio.favoriteFoods[i]
        listItem.appendChild(document.createTextNode(food));
        foodsListElement.appendChild(listItem);
    }
}



// Step 6: Repeat Step 4 for each hobby in the hobbies property

// Step 7: Repeat Step 5 using the HTML <ul> element with an ID of hobbies

function populateHobbies() {

    // clear list first
    const hobbiesListElement = document.getElementById("hobbies")
    hobbiesListElement.innerHTML = ""

    for (let i = 0; i < bio.hobbies.length; i++) {        
        var listItem = document.createElement("li");
        hobby = bio.hobbies[i]
        listItem.appendChild(document.createTextNode(hobby));
        hobbiesListElement.appendChild(listItem);
    }
}

// Step 8: For each object in the <em>placesLived</em> property:

function populatePlaces() {

    // clear list first
    const placesDlElement = document.getElementById("places-lived")
    placesDlElement.innerHTML = ""

    // - Create an HTML <dt> element and put its place property in the <dt> element

    for (let i = 0; i < bio.placesLived.length; i++) {        
        var dt_element = document.createElement("dt");
        place = bio.placesLived[i]["place"]
        dt_element.appendChild(document.createTextNode(place));
        placesDlElement.appendChild(dt_element);

    // - Create an HTML <dd> element and put its length property in the <dd> element

        var dd_element = document.createElement("dd");
        length = bio.placesLived[i]["length"]
        dd_element.appendChild(document.createTextNode(length));
        placesDlElement.appendChild(dd_element);

    // Step 9: Append the HTML <dt> and <dd> elements created above to the HTML <dl> element with an ID of places-lived

    }
}

function styleImage() {
    photoElement.style.maxWidth = "256px";
    photoElement.style.borderRadius = "256px";
}

window.onLoad = (
    populateFoods(),
    populateHobbies(),
    populatePlaces(),    
    styleImage()
    )

