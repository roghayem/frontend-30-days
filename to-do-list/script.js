const addInput = document.querySelector("#addInput");
const addBtn = document.querySelector("#addBtn");
const message = document.querySelector(".message");
const lists = document.querySelector(".lists");

function addTAsk(){
    const task = addInput.value.trim();
    if(task === ""){
        return;
    }
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.classList.add("task");
    span.textContent = task;

    const deletbtn = document.createElement("button");
    deletbtn.classList.add("delet-btn");
    deletbtn.textContent = "delete";
    
    span.addEventListener("click",()=>{
        span.classList.toggle("complete")
    })

    deletbtn.addEventListener("click",()=>{
        li.remove();
        updateMesseg();
    })

    li.append(span , deletbtn);
    lists.append(li);

    updateMesseg();
    addInput.value="";
}


addBtn.addEventListener("click",addTAsk);

function updateMesseg(){

    if(lists.children.length === 0){
        message.style.display = "block";
    }else{
        message.style.display = "none";
    }
}
updateMesseg()