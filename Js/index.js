const popBtn = document.querySelector(".Add-to-sidebar")
const popup = document.querySelector(".popup") 
let isOpen = false  
popBtn.addEventListener("click" , function(){ 
    const closeBtn = document.querySelector(".pop-up-close-button")
    closeBtn.addEventListener("click" , function(){
        popup.style.display = "none"
        isOpen = false
    })

    if(!isOpen){
        popup.style.display = "block"
        isOpen = true
    }
    else{
        popup.style.display = "none"
        isOpen = false
    }
})