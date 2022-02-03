/* Getting certain elements from html via dom*/
const dateTitleCombinationCenter = document.getElementById("addEventsWithDate");
const addButton = document.getElementById("button");
const titleInput = document.getElementById("title");


/* adding events to add button*/
addButton.addEventListener("click" , event =>{

    /* getting day and month components from date input :D */
    let date = document.getElementById("eventtime").value;
    let day = date.substr(8,10);
    let monthString = date.slice(5,7);
    let month = parseInt(monthString);

    /* using text format of months with if , else if conditions*/
    if(month === 1){
        month = "Yanvar";
    } else if(month === 2){
        month = "Fevral";
    } else if(month === 3){
        month = "Mart";
    } else if(month === 4){
        month = "Aprel";
    } else if(month === 5){
        month = "May";
    } else if(month === 6){
        month = "Iyun";
    } else if(month === 7){
        month = "Iyul";
    } else if(month === 8){
        month = "Avqust";
    } else if(month === 9){
        month = "Sentyabr";
    } else if(month === 10){
        month = "Oktyabr";
    } else if(month === 11){
        month = "Noyabr";
    } else if(month === 12){
        month = "Dekabr";
    } 


 /* 
 creating our div, which will contain of 2 separate divs to show our title date and title content
 After adding our css styles with classList.add property
 */
    let eventDiv = document.createElement("div");
    eventDiv.classList.add("eventDateContainer");
    let eventDate = document.createElement("div");
    eventDate.classList.add("leftSide");
    eventDate.textContent = day + " " + month;
  

    let eventTitle = document.createElement("div");
    eventTitle.classList.add("rightSide");
    eventTitle.textContent = titleInput.value;

/* appending our divs to a common div and at final stage we will append the common div to our left side*/
    eventDiv.appendChild( eventDate )
    eventDiv.appendChild( eventTitle );
    dateTitleCombinationCenter.appendChild(eventDiv);


    event.preventDefault();
})