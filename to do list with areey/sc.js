const addInput = document.querySelector("#addInput");
const addBtn = document.querySelector(".add-btn");
const taskList = document.querySelector(".task-list");
const empyMsg = document.querySelector(".empty-msg");
let tasks = [];
let id = 1;
function addTask(){

    let task= addInput.value.trim();

    if(task===""){
        return;
    }
    const newTask = {
        id :id++,
        text :task,
        done : false
    }
    tasks.push(newTask)

    const li = document.createElement("li");
    const span = document.createElement("span");
    span.classList.add("span");
    span.textContent= newTask.text;

    span.addEventListener("click",()=>{
        span.classList.toggle("complated");
        newTask.done = !newTask.done;
    })

    const deletBtn = document.createElement("button");
    deletBtn.classList.add("delete");
    deletBtn.textContent = "Delete";

    deletBtn.addEventListener("click",()=>{
        li.remove();
        tasks= tasks.filter(function(item){
            return item.id !== newTask.id
        })

        showMesg();
    })
     li.append(span,deletBtn);
    taskList.append(li);
    showMesg()
}

addBtn.addEventListener("click",addTask);

function showMesg(){
    if(taskList.children.length === 0){
        empyMsg.style.display = "block";
    }else{
        empyMsg.style.display = "none";
    }
}
showMesg()