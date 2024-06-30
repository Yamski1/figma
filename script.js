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


document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(link => {
        link.addEventListener("click", function() {
            // Remove active class from all links
            navLinks.forEach(link => link.classList.remove("active"));
            // Add active class to the clicked link
            this.classList.add("active");
        });
    });
});



// modal



// popup

document.getElementById("button").addEventListener("click", function(){
    document.querySelector(".modal").style.display = "flex";
})

document.querySelector(".close").addEventListener("click", function(){
    document.querySelector(".modal").style.display = "none";
})

document.querySelector(".submit-button").addEventListener("click", function(){
    document.querySelector(".modal").style.display = "none";
})

// secon modal

document.getElementById("button1").addEventListener("click", function(){
    document.querySelector(".modal1").style.display = "flex";
})

document.querySelector(".close1").addEventListener("click", function(){
    document.querySelector(".modal1").style.display = "none";
})






// asdasdasd

