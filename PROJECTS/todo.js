// 🛠️ Small Project: Interactive To-Do List ✅
// 💡 Task:
// 1️⃣ Add tasks to a list when clicking a button.
// 2️⃣ Remove a task when clicking on it.



document.addEventListener("DOMContentLoaded",function(){
    
    document.getElementById("add-btn").addEventListener("click",function(){
        let taskinput = document.getElementById("task-input").value;
        
        if(taskinput==="") return;
        
        let li = document.createElement("li");
        li.textContent = taskinput;

        //local storage stores in the form of string, thats why we wrote li.textContent
        localStorage.setItem("Task : ",li.textContent);
       
        document.getElementById("task-list").append(li);

        document.getElementById("clear-btn").addEventListener("click",function(){
            li.remove(); // removes the task on click
        });

        
        // we are clearing the input field so that when we click on add tasks button.The input field gets empty itself

        document.getElementById("task-input").value="";
        
    });
});