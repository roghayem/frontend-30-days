const searchInput = document.querySelector("#searchInput");
const cards= document.querySelectorAll(".card");

searchInput.addEventListener("input" ,()=>{
    const inputValue = searchInput.value.toLowerCase();

    cards.forEach(function(card){
        //this part for that if you type soe,timh like buy it wont sgow everything
        const cardName = card.querySelector("h2").textContent.toLowerCase();

        if(cardName.includes(inputValue)){
            card.style.display = "flex";
        }else{
            card.style.display="none";
        }
    })

})