const app = {
    defaultRanges: {
        min: 0,
        max: 100
    },
    currentRanges:{},
    searchNumber: null,
    currentProposition: null,

    //Target min and max
    refreshRanges: () => {
        const minRangeElement = document.querySelector('.minRange');
        const maxRangeElement = document.querySelector('.maxRange');

        //Place the base value in these 2 elements
        minRangeElement.textContent = app.currentRanges.min;
        maxRangeElement.textContent = app.currentRanges.max; 
    },
    //function to generate a random number
    getRandomNumber: (min, max) => (Math.round(Math.random() * (max - min) + min)), //no return because ()
    //manage the submission form
    handleFormSubmit: (event) => {
        //To not reload the page
        event.preventDefault();
        //target of the "submit" event = form - I get the form
        const form = event.target;

        //I target the text field of the form to retrieve its value
        const inputRangeElement = form.querySelector('.inputProposition');
        // I place this value in the currentProposition input
        app.currentProposition = parseInt(inputRangeElement.value, 10);

        //I update the lastProposition div to display the last proposition - I target the div
        const lastPropsElement = document.querySelector('.lastProposition');
        lastPropsElement.textContent = `Last Proposition : ${app.currentProposition}`;
    },

    //Function to initialize the app object
    init: () => {
        console.log("Init loaded");
        app.currentRanges = {
            min: app.defaultRanges.min,
            max: app.defaultRanges.max,
        }
        app.searchNumber = app.getRandomNumber( app.defaultRanges.min, app.defaultRanges.max)
        
        // I target the form
        const form = document.querySelector('.rangeGame form');
        form.addEventListener('submit', app.handleFormSubmit);

        app.refreshRanges();
    }

}

document.addEventListener('DOMContentLoaded', app.init);
