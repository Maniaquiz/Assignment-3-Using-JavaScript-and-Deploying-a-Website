/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?
let cost_per_day = 0;
const rate_per_day = 35;

//let WeeklyCostSpanElement = document.getElementById("calculated-cost")
const WeeklyCostSpanElement = document.getElementById("calculated-cost");

function UpdateWeeklyCost() {
    const weekly_amount = cost_per_day * rate_per_day;
    WeeklyCostSpanElement.textContent = `${weekly_amount}`;
}

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

function toggleDay(dayElement) {
    const halfButton = document.getElementById("half");
    const fullButton = document.getElementById("full");
    
    if (dayElement.classList.contains("active")) {
      dayElement.classList.remove("active");
      cost_per_day--;
    } else {
      dayElement.classList.add("active");
      cost_per_day++;
    }
    if (cost_per_day === 0) {
      halfButton.classList.remove("active");
      fullButton.classList.remove("active");
    }
    halfButton.disabled = cost_per_day === 0;
    fullButton.disabled = cost_per_day === 0;
    UpdateWeeklyCost();
  }




/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

const ClearButton = document.getElementById("clear-button");

ClearButton.addEventListener("click", function() {
    WeeklyCostSpanElement.innerText = 0;

    
    
});






/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

const halfButton = document.getElementById("half");

halfButton.addEventListener("click", function() {
    let rate_per_day = 20
    let weekly_amount = cost_per_day * rate_per_day;

    // Update the text content of the element
    WeeklyCostSpanElement.textContent = `${weekly_amount}`;
});



// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

const fullButton = document.getElementById("full");

fullButton.addEventListener("click", function() {
    let rate_per_day = 35;
    let weekly_amount = cost_per_day * rate_per_day;

    // Update the text content of the element
    WeeklyCostSpanElement.textContent = `${weekly_amount}`;
});



/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value


