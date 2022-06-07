const list = document.getElementById('list');
list.addEventListener("mouseover", function(event){
    if(event.target.tagName === 'LI'){
       event.target.style.visibility = "hidden";
    }
 });