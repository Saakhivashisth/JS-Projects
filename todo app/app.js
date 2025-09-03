let Todo=[];
let req=prompt("Please Enter your Request!");
while(true){
    if(req=="quit"){
        console.log("quitting app");
        break;
    }
    if(req=="list"){
       console.log(" ");
       for(let i=0;i<Todo.length;i++){
        console.log(i,Todo[i]);
       }
    }
    else if(req=="add"){
        let task=prompt("please enter what you want to add");
        Todo.push(task);
        console.log("task added");
    }else if(req=="delete"){
        let idx=promt("write the task you want to delete");
        Todo.splice(idx,1);
        console.log("task deleted");
    }else{
        console.log("write a correct task");
    }
    req=prompt("Please Enter Your request! ")
}