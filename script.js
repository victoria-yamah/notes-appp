const textspace= document.querySelector(".textspace");
let notes=document.querySelectorAll(".inputbox");
const createBtn=document.querySelector(".btn");
const random=document.getElementById("xxy");


createBtn.addEventListener("click", ()=>{
     let inputBox= document.createElement("p");
     let img= document.createElement("img");
     inputBox.className="inputbox";
     img.classList="delete"
     inputBox.setAttribute("contenteditable", "true");
     img.src="images/delete.png";
     textspace.appendChild(inputBox).appendChild(img);
     
})

textspace.addEventListener("click", function(e){
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updateStorage();
    }
    else if(e.target.tagName === "P"){
        // notes=document.querySelectorAll(".inputbox");
        e.target.onkeyup= function(){
            updateStorage();
           }
}})

    

function showNotes(){
    textspace.innerHTML= localStorage.getItem("notes");
}

function updateStorage(){
    localStorage.setItem("notes", textspace.innerHTML)
    // localStorage.setItem("notes", 'Vic1')
}

document.addEventListener("keydown", event=>{
    if(event.key === "Enter"){
        document.execCommand("insertLine");
        
    }
})
showNotes();   