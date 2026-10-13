const btn = document.querySelector(".btn");
const revers = document.querySelector(".revers");
const allList = ["apple","cucmuber","toamto", "pen"];

btn.addEventListener("click",()=>{

    //این براکته یه کپی درست میکنه و کارو روی کپی انجام میده
    const reversList = [...allList].reverse();
    revers.textContent = reversList
})