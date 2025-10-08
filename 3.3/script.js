console.log("funcionando...")

function cambioVideo(element){
    let videoMain = document.getElementById("video_Main");
    let sourceMain = videoMain.src;
    videoMain.src = element.src;
    element.src = sourceMain;

}
function turnOff(element){
    if (element.innerText == "Login"){
        element.innerText = "Logout";
    } else{
        element.innerText = "Login";
    }
}