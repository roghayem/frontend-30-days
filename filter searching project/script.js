let searchInput = document.querySelector("#searchInput");
let cards= document.querySelectorAll(".card");

searchInput.addEventListener("input" ,()=>{
    let inputValue = searchInput.value.toLowerCase();

    cards.forEach(function(card){
        let cardName = card.textContent.toLowerCase();

        if(cardName.includes(inputValue)){
            card.style.display = "block";
        }else{
            card.style.display="none";
        }
    })

})