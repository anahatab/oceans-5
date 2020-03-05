// Define toggleContent function.
//   If "See more" is displayed, show the details paragraph, and change text to "See less"
//   If "See less" is displayed, hide the details paragraph, and change text to "See more"
function toggleContent()  {
	// Call the element with the class "more"
    var details = document.querySelector('.more');

    // Toggle the details display and "See more/less" text
    if (moreLess.textContent == "Show more.") {   // If the text of the clicked element is "See more"
        details.style.display = 'flex';        // then display the details paragraph element
        moreLess.textContent = "Show less.";      // and change the text of the clicked element to "See less"
    }
    else {                                  // Since the text of the clicked element is NOT "See more" (so it must be "See less")
       details.style.display = 'none';      // then hide the details paragraph element
       moreLess.textContent = "Show more.";   // and change the text of the clicked element to "See more"
    }
}
