const filterButtons = document.querySelectorAll(".filter-buttons button");
const filterableCards = document.querySelectorAll(".filterable-cards .card");

// Identify filterCard functn

const filterCards = e => {
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");

    // Iterate over each filterable card
    filterableCards.forEach(card =>{

        // Add hide class to hide the card initially
        card.classList.add("hide");

        // check if the card matches the selected filter or "all" is selected

    if(card.dataset.name === e.target.dataset.name || e.target.dataset.name === "all"){
        card.classList.remove("hide");
    }

   
    })
    
};


// Add click event listener to each filter btn

filterButtons.forEach(Button => Button.addEventListener("click", filterCards));