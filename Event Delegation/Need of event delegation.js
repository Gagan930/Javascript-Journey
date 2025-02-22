// Need of event delegation
document.querySelectorAll("#item").forEach(item=>{
    item.addEventListener("click",function(){
        alert("item clicked");
    });
})


// this is the conventitional way 
// ⚠ Issue: If new items are added dynamically, they won’t have the event listener attached.

// If new .item elements are added after the page loads, querySelectorAll won't detect them.
