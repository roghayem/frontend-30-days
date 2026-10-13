const btn = document.querySelector(".btn");
const allNumber = [1,2,3,4,5,6,7,8,9,10];
const result = document.querySelector(".even-num")

btn.addEventListener("click",()=>{
     const evenNym =allNumber.filter(function(number){
        return number %2 === 0;
    })
    result.textContent = evenNym;
})