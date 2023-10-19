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

const ProfilePopUp = document.querySelector(".Profile-Pop-Up") 
const ProfileBtn = document.querySelector(".avatar-btn") 
let ProfileisOpen = false
ProfileBtn.addEventListener("click" , function(){
    if(!ProfileisOpen){
        ProfilePopUp.style.display = "block"
        ProfileisOpen = true
    }
    else{
        ProfilePopUp.style.display = "none"
        ProfileisOpen = false
    }
}) 
const AvatarFile =document.getElementById("avatar-file") 
const AvatarImage =document.querySelector(".avatar-img")  
AvatarFile.addEventListener("change" , function(){
    const file = this.files[0] 
    if(file){
        const reader = new FileReader() 
        reader.addEventListener("load" , function(){
            AvatarImage.setAttribute("src" , this.result)
        })
        reader.readAsDataURL(file)
       
    }
})

