const searchInput = document.querySelector("#searchInput");
const cards= document.querySelectorAll(".card");

searchInput.addEventListener("input" ,()=>{
    const inputValue = searchInput.value.toLowerCase();

    cards.forEach(function(card){
        const cardName = card.textContent.toLowerCase();

        if(cardName.includes(inputValue)){
            card.style.display = "flex";
        }else{
            card.style.display="none";
        }
    })

})