let btn=document.querySelector("button");
let ul=document.querySelector("ul");
let inp=document.querySelector("input");
function addTask(){
    let taskText=inp.value.trim();
    if(taskText==="") return;

    let item=document.createElement("li");
    item.innerText=inp.value;
    let deleteBtn=document.createElement("button");
    deleteBtn.innerText="❌";
    deleteBtn.style.marginLeft="10px";
    deleteBtn.addEventListener("click",function(){
        ul.removeChild(item);
    });
    item.appendChild(deleteBtn);
    ul.appendChild(item);
    inp.value="";

    
}

    inp.addEventListener("keypress",function(event){
        if(event.key=="Enter"){
            addTask();
        }
});