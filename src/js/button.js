var currentState = false

function toggleFunc(){
    var imagetoggle = document.getElementsByClassName("image-toggle")[0]
    var menudiv = document.getElementsByClassName("div-menu")[0]
    if (currentState == false){
        imagetoggle.src = "./src/res/images/SideBar-Closed.svg";
        menudiv.style.display = "none"
        currentState = true
    }else{
        imagetoggle.src = "./src/res/images/SideBar-Open.svg";
        menudiv.style.display = null
        currentState = false
    };
}