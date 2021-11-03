


function variables() {

    // 1.   Declare and instantiate a variable to hold your name
    let authorName = "Nephi Edwin Leveriza Malit"

    // 2.   Place the value of the name variable into the task2.html file
    //      inside of the element with an "id of "name" (hint: document.querySelector())
    const nameElement = document.querySelector('#name')
    nameElement.innerHTML = authorName

    // 3.   Declare and instantiate a variable to hold the current year
    const date_options = { year: 'numeric' }
    const yearElement = document.querySelector('#year');
    let today = new Date();
    year_string = today.toLocaleDateString(undefined, date_options);

    // 4.   Place the value of the current year variable into the task2.html file
    //      inside of the element with an id of "year"
    yearElement.innerHTML = year_string

    // 5.   Copy an image of yourself into the images folder
    // 6.   Declare and instantiate a variable to hold the name and location
    //      of your picture (hint: images/imagename.png)

    let imagePath = "images/photo.jpg"

    // 7.   Place the value of the picture variable into the task2.html file in
    //      the "src" attribute of the img element
    //      (hint: document.querySelector().setAttribute())
    const.


}

variables()

// #1


