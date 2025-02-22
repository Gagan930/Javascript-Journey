// ✅ Solution: Attach event listener to the parent

document.addEventListener("DOMContentLoaded",function(){

    document.getElementById("list").addEventListener("click",function(event){
        console.log("click detected");
        if(event.target.id==="item"){
            alert("Item clicked");
        }
    });
});
