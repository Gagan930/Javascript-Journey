document.addEventListener("DOMContentLoaded",function(){
    document.getElementById("list").addEventListener("click",function(event){
        if(event.target.classList.contains("item")){
            alert(`${event.target.textContent} is Clicked`);
        }
    });
    
    document.getElementById("list").addEventListener("mouseover",function(event){
             event.target.style.backgroundColor = "lightgray";  
    });
    document.getElementById("list").addEventListener("mouseout",function(event){
        event.target.style.backgroundColor = "lightgray";  
});



    document.getElementById("add-item").addEventListener("click",function(){
        let newItem = document.createElement("li");
        newItem.classList.add("item");
        newItem.textContent = `Item ${document.querySelectorAll(".item").length + 1}`;

        document.getElementById("list").appendChild(newItem);
    });

    document.getElementById("list").addEventListener("click",function(event){
        if(event.target.classList.contains("item")){
            event.target.remove();
        }
    });

});
