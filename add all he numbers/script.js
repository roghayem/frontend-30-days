const btn = document.querySelector(".btn");
const list = document.querySelector(".lists");
const addNum = document.querySelector(".add-num");
const allNUm = [1,5,8,2,19,20];

btn.addEventListener("click",()=>{
    // اولپارامتر اولیه اونیه که فعلا داربم
    // پارامتر دوم چیزی که میخوام باهاش حکع بشه است
     const total = allNUm.reduce((sum, number) => {
        return sum + number;
    }, 0);
    // صفرو میزاری تا مقدار سام رو بزاره 0
    addNum.textContent = total;
})