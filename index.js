
let landing = document.querySelector(".landing");

let arrimage = ["2.jpg","02.jpg"]

let controlINterval;
controlRandom = true;

function randomBackground(){
    if(controlRandom===true)
  controlINterval =  setInterval(()=>{
        let random = Math.floor(Math.random()*arrimage.length)
    
        landing.style.backgroundImage = `url(/images/${arrimage[random]})`;
    
    },5000)
}



//control of background 

let yes = document.querySelector(".yes")
let no = document.querySelector(".no")

let backgroundOption = localStorage.getItem("backgroundOption")


if(backgroundOption === 'true'){
 
    controlRandom = true
    yes.style.backgroundColor = "var(--hover-color)"


}else{
    controlRandom = false
    no.style.backgroundColor = "var(--hover-color)"
   

}

yes.addEventListener("click",()=>{
    controlRandom = true
    randomBackground()
    localStorage.setItem("backgroundOption",true)
    yes.style.backgroundColor = "var(--hover-color)"
    no.style.backgroundColor = "white"

    
})



no.addEventListener("click",()=>{
    controlRandom =false 
   clearInterval(controlINterval)
   localStorage.setItem("backgroundOption",false)
   
   no.style.backgroundColor = "var(--hover-color)"
   yes.style.backgroundColor = "white"
  

})

randomBackground()











let icon =document.querySelector(".fa-gear");
icon.addEventListener("click",()=>{
    document.querySelector(".fa-gear").classList.toggle("fa-spin")
    document.querySelector(".box-settings").classList.toggle("open")
})

//Control of colors 

let find = localStorage.getItem("color-option")
if(find!=null){
    document.documentElement.style.setProperty("--hover-color", find)
}

let colors = document.querySelectorAll(".color-list li")

colors.forEach(li => {
    li.addEventListener("click",(e)=>{

            document.documentElement.style.setProperty("--hover-color", e.target.dataset.color)
            localStorage.setItem("color-option",e.target.dataset.color)

    })
});


//control of background 





// skills

let skills = document.querySelector(".skills");

window.onscroll = function() {
    // offsetTop
    let skillsOffsetTop = skills.offsetTop;

    // offsetHeight
    let skillsOffsetHeight = skills.offsetHeight;

    // windowHeight
    let windowHeight = this.innerHeight;

    let windowScrollTop = window.scrollY;
    
    if (windowScrollTop > (skillsOffsetTop + skillsOffsetHeight - windowHeight)) {
        let allskills = document.querySelectorAll(".skills-box .skills-progress span")

        allskills.forEach(span =>{
            span.style.width =  span.dataset.progress;
        })
    }
}



// popup 

let imagePopup = document.querySelectorAll(".gallary .images img") ;
console.log(imagePopup)

imagePopup.forEach(img =>{
    img.addEventListener("click",()=>{
        let overlay = document.createElement("div")
        overlay.className = "popup-overlay"
        document.body.appendChild(overlay)

        let popupBox = document.createElement("div")
        popupBox.className = "popup-box"
        
        let imgInPopup = document.createElement("img")

        imgInPopup.src = img.src

        popupBox.appendChild(imgInPopup)

        document.body.appendChild(popupBox)


        // remove btn 

        let btn = document.createElement("span")
        let texts = document.createTextNode("X")
        btn.appendChild(texts)
        btn.className = "btn-remove"
        popupBox.appendChild(btn)        

        
    })
})

//close btn 
document.addEventListener("click",(e)=>{

  if(e.target.className == "btn-remove"){
    e.target.parentNode.remove()
    document.querySelector(".popup-overlay").remove()
  }

})